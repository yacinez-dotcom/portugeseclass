# Calçada — Português europeu, pedra a pedra

Site d'apprentissage du portugais européen (PT-PT) pour francophones, niveaux A1 à B2.
HTML / CSS / JavaScript vanilla, sans framework ni serveur : ouvrir `index.html` suffit.

## Architecture en briques

```
calcada/
├── index.html              ← charge les briques dans l'ordre
├── css/style.css           ← design (azulejos, calçada, corde manuéline)
├── js/
│   ├── config.js           ← BRIQUE 1 : niveaux + programme de grammaire
│   ├── pron.js             ← BRIQUE PRONONCIATION : API → lecture guidée
│   ├── data/
│   │   ├── a1.js           ← 16 textes (fil rouge : Marta, Rui et la famille)
│   │   ├── a2.js, b1.js    ← vides (modèle commenté en tête de fichier)
│   │   └── b2.js           ← 1 texte : « Uma casa em Lisboa »
│   ├── vocab/
│   │   ├── a1_thematic.js  ← 10 thèmes, 113 mots
│   │   ├── a2_thematic.js, b1_thematic.js  ← vides
│   │   └── b2_thematic.js  ← 5 thèmes, 55 mots
│   ├── audio/
│   │   └── b2_audio.js     ← BRIQUE AUDIO (générée) : où trouver chaque phrase, bloc et mot
│   └── app.js              ← BRIQUE FINALE : interface (ne connaît aucun contenu)
├── audio/b2/*.mp3          ← une piste par texte + une pour le vocabulaire thématique
├── tools/
│   ├── make_audio.py       ← génère l'audio pt-PT (incrémental)
│   ├── export.js           ← lit les briques pour make_audio.py
│   └── check.js            ← contrôle des données (API, champs, doublons, programme)
├── build.py                ← assemble une page unique dans dist/ (aperçu en ligne)
└── dist/calcada.html
```

Chaque brique ne fait que déclarer une variable globale (`B2_TEXTS`, `B2_VOCAB_THEMATIC`…).
`app.js` les lit au démarrage : une brique absente ou vide ne casse rien.

## Règle absolue : strings en backticks

Toutes les valeurs des fichiers de données utilisent des backticks `` ` ``.
Les apostrophes françaises (`l'idée`) et les guillemets portugais (`«…»`) passent alors sans échappement.

## Ajouter un texte

Dans `js/data/b2.js` (ou le niveau voulu), copier le bloc `T1`, le renommer `T2`, l'ajouter à `return [T1, T2];`.

- `sentences` : une liste de phrases, chaque phrase une liste de blocs `{w, p, t}`.
  `x:1` marque une expression figée, `ff:1` un faux ami.
- `vocabulary` : tous les mots utiles du texte. **Le site masque automatiquement**
  ceux déjà listés dans un texte précédent du même niveau.
- `grammar.key` : identifiant du programme dans `config.js` ; le point passe en « traité » sur la page du niveau.

## Ajouter un niveau (C1, C2)

1. Ajouter l'entrée dans `LEVELS` (`config.js`).
2. Créer `js/data/c1.js` (`var C1_TEXTS`) et `js/vocab/c1_thematic.js` (`var C1_VOCAB_THEMATIC`).
3. Ajouter les deux `<script>` dans `index.html`, avant `app.js`.

## Vérifier avant de livrer

```bash
node tools/check.js A1 --guide   # contrôle des données + lecture guidée de chaque bloc
for f in js/config.js js/data/*.js js/vocab/*.js js/app.js; do node --check "$f"; done
python3 build.py
```

## Audio : voix native du Portugal

L'audio est **enregistré à l'avance** avec une voix neuronale portugaise (Piper « tugão », pt_PT),
et ne dépend donc plus des voix installées sur l'appareil.

Après avoir ajouté ou modifié un texte :

```bash
python3 tools/make_audio.py --model CHEMIN/vers/vits-piper-pt_PT-tugao-medium
```

Seules les pistes dont le contenu a changé sont régénérées. Prérequis une fois pour toutes :
`pip install sherpa-onnx soundfile`, ffmpeg, et le modèle
`vits-piper-pt_PT-tugao-medium.tar.bz2` (release « tts-models » du dépôt GitHub k2-fsa/sherpa-onnx).

Pour un sigle ou un nombre, ajouter un champ `say` au mot : `{w:`T2`, say:`tê dois`, …}`.

Sans piste pour un texte, le site utilise la voix portugaise du navigateur ;
s'il n'en trouve aucune, il **ne lit rien** plutôt que de lire avec une voix anglaise.

## Lecture guidée

`js/pron.js` convertit automatiquement l'API (champ `p`) en lecture « à la française » :
syllabe accentuée en gras, ṛ = r battu, r = r de gorge, ch / j pour le s chuintant,
ã õ ẽ ĩ ũ pour les nasales, ă = a sourd, ᵉ = e presque muet, ou = u portugais.
Pour corriger un cas particulier, ajouter un champ `g` (HTML) au bloc ou au mot.
Un bloc dont un mot composé porte deux accents (`pequeno-almoço`) prend `pw:1` pour le contrôle du nombre de mots.

## Vocabulaire nouveau

Le site masque un mot déjà listé dans un texte précédent du même niveau.
La comparaison respecte les accents : *pais* (parents) et *país* (pays) sont deux mots.
Le lecteur choisit l'affichage : masqué, lecture guidée ou API.
