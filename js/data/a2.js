/* ═══════════════════════════════════════════════
   BRIQUE DONNÉES — A2 · Elementar (Survie)
   Vide pour l'instant : les textes s'ajoutent un par un.
   RÈGLE : toutes les strings en backticks `...`

   Modèle d'un texte (voir b2.js pour un exemple complet) :

   var T1 = {
     id: `a2-1`, level: `A2`,
     title: `Título em português`, titleFr: `Titre en français`,
     theme: `Thème court`,
     sentences: [
       [ {w:`Quando`, p:`ˈkwɐ̃du`, t:`quand`},
         {w:`de repente`, p:`dɨ ʁɨˈpẽtɨ`, t:`tout à coup`, x:1},     // x:1 = expression figée
         {w:`esquisita,`, p:`ɨʃkiˈzitɐ`, t:`bizarre`, ff:1} ],        // ff:1 = faux ami
     ],
     vocabulary: [
       {w:`esquisito`, p:`ɨʃkiˈzitu`, fr:`bizarre`, b:`esquisito, esquisita`,
         gr:`adjectif`, ff:`≠ exquis (= requintado)`},
     ],
     grammar: {
       key: `id-du-programme`,  // relie la leçon au programme de config.js
       cat: `Conjugaison`, concept: `…`, excerpt: [`… <mark>…</mark> …`],
       exp: `HTML simple`, table: { head: [], rows: [] },
       compare: `Comparaison avec le français`, also: [`…`]
     }
   };
═══════════════════════════════════════════════ */
'use strict';

var A2_TEXTS = (function () {

  return [];

}());
