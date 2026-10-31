/* ═══════════════════════════════════════════════
   BRIQUE 1 — CONFIG
   Niveaux affichés et programme de grammaire de chaque niveau.
   Ajouter un niveau = ajouter une entrée ici + créer ses briques
   js/data/xx.js et js/vocab/xx_thematic.js, puis les <script> dans index.html.
   RÈGLE : toutes les strings en backticks `...`
═══════════════════════════════════════════════ */
'use strict';

var LEVELS = [
  {
    id: `A1`, pt: `Iniciação`, fr: `Découverte`, exam: `ACESSO`, tone: `verde`,
    desc: `Se présenter, commander un café, demander son chemin. Les sons de base du portugais européen : voyelles réduites, s chuintant, nasales.`,
    programme: [
      { id: `ser`,          label: `Le verbe ser au présent et les pronoms sujets` },
      { id: `artigos`,      label: `Articles définis et indéfinis ; politesse au café` },
      { id: `possessivos`,  label: `Possessifs (o meu, a minha) et dele / dela` },
      { id: `genero`,       label: `Genre et nombre, accords` },
      { id: `ser-estar`,    label: `Ser / estar` },
      { id: `contraccoes`,  label: `Contractions : do, na, ao, pelo, num` },
      { id: `presente-ar`,  label: `Présent des verbes en -ar` },
      { id: `presente-er-ir`, label: `Présent des verbes en -er et -ir` },
      { id: `irregulares1`, label: `Irréguliers fréquents : ter, ir, fazer` },
      { id: `querer-poder`, label: `Querer, poder, saber + infinitif` },
      { id: `tratamento`,   label: `Registres : tu / você / o senhor` },
      { id: `demonstr`,     label: `Démonstratifs : este, esse, aquele ; isto, isso, aquilo` },
      { id: `gostar`,       label: `Gostar de et ses contractions` },
      { id: `haver`,        label: `Há (il y a) et les nombres` },
      { id: `negacao`,      label: `Négation et questions (não, nunca, nada ; onde, quando…)` },
      { id: `expressoes`,   label: `Expressions du quotidien : pois, está bem, tudo bem, fixe` }
    ]
  },
  {
    id: `A2`, pt: `Elementar`, fr: `Survie`, exam: `CIPLE`, tone: `ocre`,
    desc: `Raconter sa journée et ses souvenirs, parler de ses projets. Premiers pronoms compléments placés après le verbe.`,
    programme: [
      { id: `perfeito`,     label: `Pretérito perfeito simples (réguliers et irréguliers)` },
      { id: `imperfeito`,   label: `Pretérito imperfeito` },
      { id: `estar-a`,      label: `Estar a + infinitif (action en cours)` },
      { id: `ir-inf`,       label: `Ir + infinitif (futur proche)` },
      { id: `ficar`,        label: `Ficar : rester, devenir, se trouver` },
      { id: `por-para`,     label: `Por / para` },
      { id: `enclise`,      label: `Pronoms compléments et ênclise (vi-o, dou-lhe)` },
      { id: `mente`,        label: `Adverbes en -mente` },
      { id: `inho`,         label: `Diminutifs en -inho et valeur affective` }
    ]
  },
  {
    id: `B1`, pt: `Intermédio`, fr: `Seuil`, exam: `DEPLE`, tone: `terra`,
    desc: `Exprimer un avis, un souhait, un doute. Le subjonctif présent et les nuances du passé composé portugais.`,
    programme: [
      { id: `perf-composto`, label: `Pretérito perfeito composto (répétition jusqu'à aujourd'hui)` },
      { id: `futuro-cond`,   label: `Futuro et condicional` },
      { id: `conj-presente`, label: `Presente do conjuntivo` },
      { id: `imperativo`,    label: `Impératif affirmatif et négatif` },
      { id: `proclise`,      label: `Próclise : não, já, que, também… attirent le pronom` },
      { id: `participios`,   label: `Participe et doubles participes (aceitado / aceite)` },
      { id: `gerundio`,      label: `Gérondif` },
      { id: `sufixos`,       label: `Suffixes nominaux : -ção, -dade, -mento, -eiro` },
      { id: `perifrases`,    label: `Périphrases : acabar de, voltar a, deixar de` }
    ]
  },
  {
    id: `B2`, pt: `Avançado`, fr: `Indépendant`, exam: `DIPLE`, tone: `cobalto`,
    desc: `Argumenter, rapporter des propos, jouer sur les registres. Les grandes spécificités portugaises : infinitif personnel et subjonctif futur.`,
    programme: [
      { id: `inf-pessoal`,   label: `Infinitivo pessoal` },
      { id: `conj-futuro`,   label: `Futuro do conjuntivo` },
      { id: `conj-imperf`,   label: `Imperfeito do conjuntivo` },
      { id: `mais-que-perf`, label: `Mais-que-perfeito simples et composé` },
      { id: `contraccoes`,   label: `Contractions de pronoms (mo, lho, no-lo)` },
      { id: `passiva`,       label: `Voix passive et se impersonnel` },
      { id: `indireto`,      label: `Discours indirect` },
      { id: `concordancia`,  label: `Concordance des temps` },
      { id: `familias`,      label: `Familles de mots` },
      { id: `idiomaticas`,   label: `Expressions idiomatiques (pois, estar com os azeites…)` }
    ]
  }
];

/* Catégories des leçons (filtre de la page Révision) */
var GRAMMAR_CATS = [
  `Grammaire fondamentale`,
  `Conjugaison`,
  `Pronoms clitiques`,
  `Morphologie et dérivation`,
  `Syntaxe avancée`,
  `Expressions idiomatiques`
];
