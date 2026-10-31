/* Exporte en JSON le contenu des briques de données, pour tools/make_audio.py.
   Usage : node tools/export.js  (depuis la racine du site) */
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
    '\ntry{window.LEVELS=LEVELS}catch(e){}' +
    ['A1','A2','B1','B2','C1','C2'].map(l => `\ntry{window.${l}_TEXTS=${l}_TEXTS}catch(e){}\ntry{window.${l}_VOCAB_THEMATIC=${l}_VOCAB_THEMATIC}catch(e){}`).join(''))(ctx);
};
load('js/config.js');
const out = [];
for (const L of ctx.LEVELS) {
  const lv = L.id.toLowerCase();
  load(`js/data/${lv}.js`);
  load(`js/vocab/${lv}_thematic.js`);
  out.push({ id: L.id, texts: ctx[`${L.id}_TEXTS`] || [], themes: ctx[`${L.id}_VOCAB_THEMATIC`] || [] });
}
process.stdout.write(JSON.stringify(out));
