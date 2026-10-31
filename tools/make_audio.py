"""Génère l'audio pt-PT du site avec une voix neuronale native (Piper « tugão », Portugal).

Une piste MP3 par texte (phrases + blocs cliquables + vocabulaire) et une piste par niveau
pour le vocabulaire thématique. Chaque niveau reçoit sa brique manifeste js/audio/<lv>_audio.js :

    var B2_AUDIO = { tracks: [ { id, src, hash, seg: { "texte": [début, fin], … } } ] };

Incrémental : une piste dont le contenu n'a pas changé n'est pas régénérée.

Prérequis (une fois) :
    pip install sherpa-onnx soundfile
    + le modèle vits-piper-pt_PT-tugao-medium (release « tts-models » de k2-fsa/sherpa-onnx)
Usage (depuis la racine du site) :
    python3 tools/make_audio.py [--model DOSSIER_DU_MODELE] [--force]
"""
import argparse, hashlib, json, os, re, subprocess, sys, tempfile
import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GAP = 0.35          # silence entre deux segments (s)
BITRATE = '48k'


def key(text):
    """Même normalisation que audioKey() dans app.js."""
    return re.sub(r'\s+', ' ', re.sub(r'[«»“”"]', '', text)).strip()


def speakable(entry_text, say=None):
    return key(say) if say else key(entry_text)


def load_data():
    out = subprocess.run(['node', os.path.join(ROOT, 'tools', 'export.js')], capture_output=True, text=True, check=True)
    return json.loads(out.stdout)


def make_tts(model_dir):
    import sherpa_onnx
    name = [f for f in os.listdir(model_dir) if f.endswith('.onnx')][0]
    cfg = sherpa_onnx.OfflineTtsConfig(model=sherpa_onnx.OfflineTtsModelConfig(
        vits=sherpa_onnx.OfflineTtsVitsModelConfig(
            model=os.path.join(model_dir, name),
            tokens=os.path.join(model_dir, 'tokens.txt'),
            data_dir=os.path.join(model_dir, 'espeak-ng-data')),
        num_threads=4))
    return sherpa_onnx.OfflineTts(cfg)


def build_track(tts, items, mp3_path):
    """items = [(clé, texte à dire)] → écrit le MP3, renvoie {clé: [début, fin]}."""
    import soundfile as sf
    sr, chunks, seg, t = None, [], {}, 0.0
    done = {}
    for k, say in items:
        if k in seg:
            continue
        if say in done:                       # même texte prononcé : on réutilise le segment
            seg[k] = done[say]; continue
        a = tts.generate(say, sid=0, speed=1.0)
        sr = sr or a.sample_rate
        s = np.asarray(a.samples, dtype=np.float32)
        lead = np.zeros(int(sr * 0.08), dtype=np.float32)
        gap = np.zeros(int(sr * GAP), dtype=np.float32)
        start = t + len(lead) / sr
        chunks += [lead, s, gap]
        end = start + len(s) / sr
        t += (len(lead) + len(s) + len(gap)) / sr
        seg[k] = done[say] = [round(start, 3), round(end, 3)]
    wav = np.concatenate(chunks) if chunks else np.zeros(1, dtype=np.float32)
    with tempfile.NamedTemporaryFile(suffix='.wav', delete=False) as tmp:
        sf.write(tmp.name, wav, sr or 22050)
    os.makedirs(os.path.dirname(mp3_path), exist_ok=True)
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', tmp.name, '-ac', '1',
                    '-codec:a', 'libmp3lame', '-b:a', BITRATE, mp3_path], check=True)
    os.unlink(tmp.name)
    return seg


def text_items(t):
    items = []
    for s in t.get('sentences', []):
        whole = ' '.join(c['w'] for c in s)
        items.append((key(whole), speakable(whole)))
    for s in t.get('sentences', []):
        for c in s:
            items.append((key(c['w']), speakable(c['w'], c.get('say'))))
    for v in t.get('vocabulary', []):
        items.append((key(v['w']), speakable(v['w'], v.get('say'))))
    return items


def theme_items(themes):
    items = []
    for th in themes:
        for v in th.get('words', []):
            items.append((key(v['w']), speakable(v['w'], v.get('say'))))   # la forme brésilienne (br) n'est pas lue
    return items


def read_manifest(path):
    if not os.path.exists(path):
        return {}
    m = re.search(r'=\s*(\{.*\});\s*$', open(path, encoding='utf-8').read(), re.S)
    if not m:
        return {}
    try:
        return {t['id']: t for t in json.loads(m.group(1)).get('tracks', [])}
    except Exception:
        return {}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--model', default=os.environ.get('PIPER_PT_MODEL', '/home/claude/tts/vits-piper-pt_PT-tugao-medium'))
    ap.add_argument('--force', action='store_true')
    args = ap.parse_args()

    data = load_data()
    tts = None
    for L in data:
        lv = L['id'].lower()
        manifest_path = os.path.join(ROOT, 'js', 'audio', f'{lv}_audio.js')
        old = read_manifest(manifest_path)
        tracks = []
        jobs = [(t['id'], text_items(t)) for t in L['texts']]
        if L['themes']:
            jobs.append((f'{lv}-themes', theme_items(L['themes'])))
        for tid, items in jobs:
            h = hashlib.sha1(json.dumps(items, ensure_ascii=False).encode()).hexdigest()[:12]
            src = f'audio/{lv}/{tid}.mp3'
            if not args.force and tid in old and old[tid].get('hash') == h and os.path.exists(os.path.join(ROOT, src)):
                tracks.append(old[tid]); print('  =', src, '(inchangé)'); continue
            tts = tts or make_tts(args.model)
            seg = build_track(tts, items, os.path.join(ROOT, src))
            tracks.append({'id': tid, 'src': src, 'hash': h, 'seg': seg})
            print('  +', src, len(seg), 'segments', os.path.getsize(os.path.join(ROOT, src)) // 1024, 'Ko')
        os.makedirs(os.path.dirname(manifest_path), exist_ok=True)
        body = json.dumps({'tracks': tracks}, ensure_ascii=False, separators=(',', ':'))
        with open(manifest_path, 'w', encoding='utf-8') as f:
            f.write('/* BRIQUE AUDIO — ' + L['id'] + ' · générée par tools/make_audio.py (voix Piper pt_PT « tugão »). Ne pas éditer. */\n'
                    "'use strict';\n" + f'var {L["id"]}_AUDIO = {body};\n')
        print(L['id'], '→', manifest_path, len(tracks), 'piste(s)')


if __name__ == '__main__':
    main()
