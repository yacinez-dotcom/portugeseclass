/* ═══════════════════════════════════════════════
   BRIQUE PRONONCIATION — lecture guidée
   Convertit la transcription API des données (champ p) en une
   « lecture guidée » lisible par un francophone :
     - lettres lues comme en français (ou, ch, j, gn, gu…)
     - quelques marques là où le français n'a pas de lettre :
         ṛ  r battu (une frappe de langue)        r  r de gorge, comme en français
         ã ẽ ĩ õ ũ  voyelles nasales                ãw (ão), ãy (em / ãe)
         ă  a sourd, entre « a » et « e »          ᵉ  e presque muet
         é è  e fermé / ouvert                      ô o  o fermé / ouvert
     - syllabes séparées par un tiret, syllabe accentuée en gras.
   Un champ g dans les données remplace la conversion automatique.
   Expose : PRON.guide(ipa) → HTML, PRON.plain(ipa) → texte, PRON.KEY
═══════════════════════════════════════════════ */
'use strict';

var PRON = (function () {

  var VOWELS = { 'a': 'a', 'ɐ': 'ă', 'e': 'é', 'ɛ': 'è', 'i': 'i', 'o': 'ô', 'ɔ': 'o', 'u': 'ou', 'ɨ': 'ᵉ' };
  var NASAL = { 'ɐ': 'ã', 'a': 'ã', 'e': 'ẽ', 'ɛ': 'ẽ', 'i': 'ĩ', 'o': 'õ', 'ɔ': 'õ', 'u': 'ũ' };
  var CONS = {
    'p': 'p', 'b': 'b', 't': 't', 'd': 'd', 'k': 'k', 'ɡ': 'g', 'g': 'g', 'f': 'f', 'v': 'v',
    'm': 'm', 'n': 'n', 'l': 'l', 'ɫ': 'l', 'ʎ': 'ly', 'ɲ': 'gn',
    's': 's', 'z': 'z', 'ʃ': 'ch', 'ʒ': 'j', 'ɾ': 'ṛ', 'ʁ': 'r'
  };
  var ONSET2 = /^(p|b|t|d|k|ɡ|g|f|v)(ɾ|l)$/;   /* groupes d'attaque : pr, bl, tr… */

  /* API d'un mot → segments {t:'V'|'G'|'C', s:symbole, n:nasal} + index de l'accent */
  function parse(word) {
    var w = word.normalize('NFD'), segs = [], stressAt = -1;
    for (var i = 0; i < w.length; i++) {
      var ch = w[i];
      if (ch === 'ˈ' || ch === 'ˌ') { if (ch === 'ˈ') stressAt = segs.length; continue; }
      if (ch === '̃') { if (segs.length) segs[segs.length - 1].n = true; continue; }
      if (ch === 'ː' || ch === '.' || ch === '‿') continue;
      if (VOWELS[ch]) segs.push({ t: 'V', s: ch, n: false });
      else if (ch === 'j' || ch === 'w') segs.push({ t: 'G', s: ch, n: false });
      else if (CONS[ch]) segs.push({ t: 'C', s: ch });
      /* tout autre signe est ignoré */
    }
    return { segs: segs, stressAt: stressAt };
  }

  /* Découpe en syllabes : renvoie les index de début de chaque syllabe */
  function syllables(segs, stressAt) {
    var nuclei = [];
    segs.forEach(function (s, i) { if (s.t === 'V') nuclei.push(i); });
    if (!nuclei.length) return [0];
    var starts = [0];
    for (var k = 0; k < nuclei.length - 1; k++) {
      var a = nuclei[k], b = nuclei[k + 1];
      var end = a + 1;
      while (end < b && segs[end].t === 'G') end++;      /* semi-voyelle après la voyelle = même syllabe (ideia → i-dei-a) */
      var cl = [];                                       /* consonnes (et semi-voyelle d'attaque) avant la voyelle suivante */
      for (var c = end; c < b; c++) cl.push(c);
      var start;
      if (stressAt > a && stressAt <= b) start = stressAt;          /* l'accent marque la frontière */
      else if (!cl.length) start = b;
      else if (cl.length === 1) start = cl[0];
      else {
        var last = cl[cl.length - 1];
        var prev = cl[cl.length - 2];
        if (segs[last].t === 'G' && segs[prev].t === 'C') {        /* kw, ɡw : attaque */
          start = (cl.length >= 3 && ONSET2.test(segs[cl[cl.length - 3]].s + segs[prev].s)) ? cl[cl.length - 3] : prev;
        } else if (ONSET2.test(segs[prev].s + segs[last].s)) start = prev;
        else start = last;
      }
      starts.push(start);
    }
    return starts;
  }

  function isFrontish(seg) { return seg && (seg.t === 'G' && seg.s === 'j' || seg.t === 'V' && /[eɛiɨ]/.test(seg.s)); }

  function spell(segs, i) {
    var s = segs[i], nx = segs[i + 1], pv = segs[i - 1];
    if (s.t === 'V') {
      if (s.n) {
        /* ɐ̃w → ãw, ɐ̃j / ẽj → ãy */
        return NASAL[s.s] || s.s;
      }
      if (s.s === 'u' && pv && pv.t === 'V') return 'ou';
      return VOWELS[s.s];
    }
    if (s.t === 'G') {
      if (s.s === 'j') return 'y';
      return 'w';
    }
    var out = CONS[s.s];
    if ((s.s === 'ɡ' || s.s === 'g') && isFrontish(nx)) out = 'gu';
    return out;
  }

  function word(ipa, html) {
    var P = parse(ipa), segs = P.segs;
    if (!segs.length) return '';
    var starts = syllables(segs, P.stressAt);
    var sylls = [];
    for (var k = 0; k < starts.length; k++) {
      var from = starts[k], to = k + 1 < starts.length ? starts[k + 1] : segs.length, txt = '';
      for (var i = from; i < to; i++) txt += spell(segs, i);
      var stressed = starts.length > 1 && P.stressAt >= from && P.stressAt < to;
      sylls.push(!stressed ? txt : (html ? '<b>' + txt + '</b>' : txt.toUpperCase()));
    }
    return sylls.join('-');
  }

  function guide(ipa) {
    return String(ipa || '').split(/\s+/).filter(Boolean).map(function (w) { return word(w, true); }).join(' ')
      .replace(/ṛ/g, '<span class="rb">ṛ</span>');
  }
  function plain(ipa) {
    return String(ipa || '').split(/\s+/).filter(Boolean).map(function (w) { return word(w, false); }).join(' ');
  }

  /* Légende : marque, explication, exemple portugais, lecture guidée de l'exemple (API) */
  var KEY = [
    { m: `<b>gras</b>`, fr: `syllabe accentuée : on appuie dessus`, ex: `Lisboa`, p: `liʒˈboɐ` },
    { m: `<span class="rb">ṛ</span>`, fr: `r battu : une seule frappe du bout de la langue, comme en espagnol`, ex: `para`, p: `ˈpɐɾɐ` },
    { m: `r`, fr: `r de gorge, comme le r français (r en début de mot, rr)`, ex: `renda`, p: `ˈʁẽdɐ` },
    { m: `ch · j`, fr: `le s ou le z en fin de syllabe chuinte : « ch » devant une consonne sourde ou en fin de mot, « j » devant une consonne sonore`, ex: `Inês · Lisboa`, p: `iˈneʃ liʒˈboɐ` },
    { m: `s · z`, fr: `dans la lecture guidée, s se lit toujours « s » et z toujours « z », même entre deux voyelles`, ex: `casa · caçar`, p: `ˈkazɐ kɐˈsaɾ` },
    { m: `ã õ ẽ ĩ ũ`, fr: `voyelles nasales : ã proche de « an », õ de « on », ẽ de « ain », ũ comme « ou » dit par le nez. Am, an, em, en, im, om, um s'y prononcent ainsi`, ex: `quando · um`, p: `ˈkwɐ̃du ũ` },
    { m: `ãw · ãy`, fr: `ão se dit ã + ou ; em en fin de mot et ãe se disent ã + y`, ex: `não · em`, p: `ˈnɐ̃w ɐ̃j` },
    { m: `ă`, fr: `a sourd et bref, entre « a » et « e » (souvent le a final)`, ex: `casa`, p: `ˈkazɐ` },
    { m: `ᵉ <small>(petit e)</small>`, fr: `e presque muet, souvent avalé`, ex: `de repente`, p: `dɨ ʁɨˈpẽtɨ` },
    { m: `é è · ô o`, fr: `e fermé / ouvert ; o fermé (comme « eau ») / ouvert (comme « porte »)`, ex: `avô · avó`, p: `ɐˈvo ɐˈvɔ` },
    { m: `ou · w`, fr: `le u portugais se dit « ou » ; le o sans accent aussi, la plupart du temps ; w = « ou » bref, comme dans « oui »`, ex: `obrigado`, p: `ɔbɾiˈɡadu` },
    { m: `ly · gn`, fr: `lh et nh : « ill » de « fille » et « gn » de « montagne »`, ex: `filho · vinho`, p: `ˈfiʎu ˈviɲu` }
  ];

  return { guide: guide, plain: plain, word: word, KEY: KEY };

}());
