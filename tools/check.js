/* Contrôle des briques de données avant livraison.
   Usage : node tools/check.js [A1] [--guide]
     - champs obligatoires des blocs, du vocabulaire et de la leçon
     - symboles API autorisés, même nombre de mots dans w et dans p
     - doublons de vocabulaire dans un niveau, clé de grammaire connue
     --guide : affiche la lecture guidée de chaque bloc pour relecture */
'use strict';
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const ctx = {};
const load = (f) => {
  const p = path.join(root, f);
  if (!fs.existsSync(p)) return;
  const code = fs.readFileSync(p, 'utf8').replace(/'use strict';/, '');
  new Function('window', code +
    '\ntry{window.LEVELS=LEVELS;window.GRAMMAR_CATS=GRAMMAR_CATS}catch(e){}\ntry{window.PRON=PRON}catch(e){}' +
    ['A1','A2','B1','B2','C1','C2'].map(l => `\ntry{window.${l}_TEXTS=${l}_TEXTS}catch(e){}\ntry{window.${l}_VOCAB_THEMATIC=${l}_VOCAB_THEMATIC}catch(e){}`).join(''))(ctx);
};
load('js/config.js'); load('js/pron.js');
const args = process.argv.slice(2);
const only = args.find(a => /^[ABC][12]$/i.test(a));
const showGuide = args.includes('--guide');

const IPA_OK = /^[aɐeɛiouɔɨjwpbtdkɡgfvszʃʒmnɲlɫʎɾʁˈ̃ ]+$/;
const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
const words = s => s.split(/\s+/).filter(t => /[\p{L}\p{N}]/u.test(t));
let errors = 0, warnings = 0;
const err = m => { errors++; console.log('  ✗ ' + m); };
const warn = m => { warnings++; console.log('  ! ' + m); };

for (const L of ctx.LEVELS) {
  if (only && L.id !== only.toUpperCase()) continue;
  const lv = L.id.toLowerCase();
  load(`js/data/${lv}.js`); load(`js/vocab/${lv}_thematic.js`);
  const texts = ctx[`${L.id}_TEXTS`] || [];
  const progIds = L.programme.map(p => p.id);
  const seenVocab = new Map(), usedKeys = new Map();
  console.log(`\n${L.id} — ${texts.length} texte(s)`);
  texts.forEach((t, ti) => {
    console.log(`${t.id} · ${t.title}`);
    if (t.id !== `${lv}-${ti + 1}`) err(`id attendu ${lv}-${ti + 1}, trouvé ${t.id}`);
    ['title', 'titleFr', 'theme'].forEach(k => { if (!t[k]) err(`champ ${k} manquant`); });
    let nChunks = 0;
    (t.sentences || []).forEach((s, si) => s.forEach(c => {
      nChunks++;
      const where = `phrase ${si + 1} « ${c.w} »`;
      if (!c.w || !c.p || !c.t) { err(`${where} : w, p ou t manquant`); return; }
      if (!IPA_OK.test(c.p.normalize('NFD'))) err(`${where} : symbole API inattendu dans [${c.p}] → ${[...c.p.normalize('NFD')].filter(ch => !IPA_OK.test(ch)).join(' ')}`);
      const nw = words(c.w).length, np = c.p.trim().split(/\s+/).length;
      if (nw !== np && !c.pw) err(`${where} : ${nw} mot(s) mais ${np} mot(s) en API [${c.p}]`);
      if (showGuide) console.log('    ' + c.w.padEnd(30) + ' ' + ctx.PRON.plain(c.p));
    }));
    (t.vocabulary || []).forEach(v => {
      ['w', 'p', 'fr', 'b', 'gr'].forEach(k => { if (!v[k]) err(`vocabulaire « ${v.w} » : champ ${k} manquant`); });
      if (v.p && !IPA_OK.test(v.p.normalize('NFD'))) err(`vocabulaire « ${v.w} » : symbole API inattendu [${v.p}]`);
      const k = v.w.toLowerCase().normalize('NFC').replace(/[?!.,;:«»]/g, '').trim();   // accents significatifs
      if (seenVocab.has(k)) warn(`« ${v.w} » déjà listé dans ${seenVocab.get(k)} (sera masqué)`);
      else seenVocab.set(k, t.id);
      if (showGuide) console.log('    [voc] ' + v.w.padEnd(24) + ' ' + ctx.PRON.plain(v.p));
    });
    const g = t.grammar;
    if (!g) err('leçon de grammaire manquante');
    else {
      if (!progIds.includes(g.key)) err(`clé de grammaire inconnue : ${g.key}`);
      if (usedKeys.has(g.key)) warn(`clé ${g.key} déjà traitée dans ${usedKeys.get(g.key)}`);
      usedKeys.set(g.key, t.id);
      if (!ctx.GRAMMAR_CATS.includes(g.cat)) err(`catégorie inconnue : ${g.cat}`);
      if (!(g.excerpt || []).some(e => e.includes('<mark>'))) err('extrait sans <mark>');
      ['concept', 'exp', 'compare'].forEach(k => { if (!g[k]) err(`leçon : champ ${k} manquant`); });
    }
    console.log(`  ${t.sentences.length} phrases · ${nChunks} blocs · ${(t.vocabulary || []).length} mots · ${(t.vocabulary || []).filter(v => v.ff).length} faux amis · ${t.sentences.flat().map(c => c.w).join(' ').split(/\s+/).length} mots de texte`);
  });
  const th = ctx[`${L.id}_VOCAB_THEMATIC`] || [];
  let nth = 0;
  th.forEach(T => (T.words || []).forEach(v => {
    nth++;
    ['w', 'p', 'fr', 'b', 'gr'].forEach(k => { if (!v[k]) err(`thème « ${T.theme} », « ${v.w} » : champ ${k} manquant`); });
    if (v.p && !IPA_OK.test(v.p.normalize('NFD'))) err(`thème « ${T.theme} », « ${v.w} » : symbole API inattendu [${v.p}]`);
    if (showGuide) console.log('    [thème] ' + v.w.padEnd(24) + ' ' + ctx.PRON.plain(v.p));
  }));
  const missing = progIds.filter(id => !usedKeys.has(id));
  console.log(`Programme : ${usedKeys.size}/${progIds.length} points traités` + (missing.length ? ` (reste : ${missing.join(', ')})` : ''));
  console.log(`Vocabulaire : ${seenVocab.size} mots de textes + ${nth} mots thématiques`);
}
console.log(`\n${errors} erreur(s), ${warnings} avertissement(s)`);
process.exitCode = errors ? 1 : 0;
