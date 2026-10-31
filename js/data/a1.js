/* ═══════════════════════════════════════════════
   BRIQUE DONNÉES — A1 · Iniciação (Découverte)
   Fil rouge : Marta, professeure à Lisbonne, sa famille et son ami Rui.
   RÈGLE : toutes les strings en backticks `...`
   Phonétique : API, prononciation standard de Lisbonne.
   Chunk : w = texte affiché, p = API, t = traduction
           x:1 = expression figée · ff:1 = faux ami · say = texte à lire si différent
═══════════════════════════════════════════════ */
'use strict';

var A1_TEXTS = (function () {

  /* ─── T1 — Olá! Eu sou a Marta ───────────────── */
  var T1 = {
    id: `a1-1`, level: `A1`,
    title: `Olá! Eu sou a Marta`,
    titleFr: `Bonjour ! Je suis Marta`,
    theme: `Se présenter`,
    sentences: [
      [
        {w:`Olá!`, p:`ɔˈla`, t:`bonjour ! salut !`},
        {w:`Eu`, p:`ˈew`, t:`je, moi`},
        {w:`sou`, p:`ˈso`, t:`suis (ser)`},
        {w:`a Marta.`, p:`ɐ ˈmaɾtɐ`, t:`Marta (article devant le prénom)`}
      ],
      [
        {w:`Sou portuguesa`, p:`ˈso puɾtuˈɡezɐ`, t:`je suis portugaise`},
        {w:`e`, p:`i`, t:`et`},
        {w:`sou de Lisboa.`, p:`ˈso dɨ liʒˈboɐ`, t:`je suis de Lisbonne`}
      ],
      [
        {w:`Sou professora`, p:`ˈso pɾufɨˈsoɾɐ`, t:`je suis professeure (sans article)`},
        {w:`de inglês.`, p:`dɨ ĩˈɡleʃ`, t:`d'anglais`}
      ],
      [
        {w:`O Rui`, p:`u ˈʁuj`, t:`Rui`},
        {w:`é`, p:`ˈɛ`, t:`est`},
        {w:`o meu namorado.`, p:`u ˈmew nɐmuˈɾadu`, t:`mon petit ami, mon copain`}
      ],
      [
        {w:`Ele`, p:`ˈelɨ`, t:`il, lui`},
        {w:`não é português:`, p:`ˈnɐ̃w ˈɛ puɾtuˈɡeʃ`, t:`n'est pas portugais`},
        {w:`é brasileiro,`, p:`ˈɛ bɾɐziˈlɐjɾu`, t:`il est brésilien`},
        {w:`de São Paulo.`, p:`dɨ ˈsɐ̃w ˈpawlu`, t:`de São Paulo`}
      ],
      [
        {w:`Os meus pais`, p:`uʒ ˈmewʃ ˈpajʃ`, t:`mes parents`, ff:1},
        {w:`são do Porto.`, p:`ˈsɐ̃w du ˈpoɾtu`, t:`sont de Porto (de + o)`}
      ],
      [
        {w:`Nós`, p:`ˈnɔʃ`, t:`nous`},
        {w:`somos`, p:`ˈsomuʒ`, t:`sommes`},
        {w:`muito diferentes,`, p:`ˈmũjtu difɨˈɾẽtɨʃ`, t:`très différents`},
        {w:`mas`, p:`mɐʃ`, t:`mais`},
        {w:`somos felizes.`, p:`ˈsomuʃ fɨˈlizɨʃ`, t:`nous sommes heureux`}
      ],
      [
        {w:`E tu?`, p:`i ˈtu`, t:`et toi ?`},
        {w:`Quem és?`, p:`ˈkɐ̃j ˈɛʃ`, t:`qui es-tu ?`},
        {w:`De onde és?`, p:`dɨ ˈõdɨ ˈɛʃ`, t:`d'où es-tu ?`}
      ]
    ],

    vocabulary: [
      {w:`olá`, p:`ɔˈla`, fr:`bonjour, salut (à toute heure)`, b:`olá`, gr:`salutation`},
      {w:`eu`, p:`ˈew`, fr:`je, moi`, b:`eu`, gr:`pronom sujet`},
      {w:`ser`, p:`ˈseɾ`, fr:`être (identité, origine, profession)`, b:`ser · verbe irrégulier (sou, és, é…)`, gr:`verbe`},
      {w:`português`, p:`puɾtuˈɡeʃ`, fr:`portugais`, b:`português, portuguesa [puɾtuˈɡezɐ]`, gr:`adjectif / nom`},
      {w:`de`, p:`dɨ`, fr:`de (origine, matière, appartenance)`, b:`de`, gr:`préposition`},
      {w:`professor`, p:`pɾufɨˈsoɾ`, fr:`professeur, enseignant`, b:`professor, professora`, gr:`nom masculin`},
      {w:`inglês`, p:`ĩˈɡleʃ`, fr:`anglais`, b:`inglês, inglesa`, gr:`adjectif / nom`},
      {w:`namorado`, p:`nɐmuˈɾadu`, fr:`petit ami, copain`, b:`namorado, namorada`, gr:`nom masculin`},
      {w:`ele`, p:`ˈelɨ`, fr:`il, lui (ela [ˈɛlɐ] = elle)`, b:`ele, ela`, gr:`pronom sujet`},
      {w:`não`, p:`ˈnɐ̃w`, fr:`non ; ne… pas (devant le verbe)`, b:`não`, gr:`adverbe`},
      {w:`brasileiro`, p:`bɾɐziˈlɐjɾu`, fr:`brésilien`, b:`brasileiro, brasileira`, gr:`adjectif / nom`},
      {w:`pais`, p:`ˈpajʃ`, fr:`parents (le père et la mère)`, b:`pai (pl. pais)`, gr:`nom masculin pluriel`, ff:`≠ « pays », qui se dit país [pɐˈiʃ], avec un accent. Pais = les parents.`},
      {w:`nós`, p:`ˈnɔʃ`, fr:`nous`, b:`nós`, gr:`pronom sujet`},
      {w:`muito`, p:`ˈmũjtu`, fr:`très ; beaucoup`, b:`muito, muita`, gr:`adverbe / adjectif`},
      {w:`diferente`, p:`difɨˈɾẽtɨ`, fr:`différent`, b:`diferente (pl. diferentes)`, gr:`adjectif invariable en genre`},
      {w:`mas`, p:`mɐʃ`, fr:`mais`, b:`mas`, gr:`conjonction`},
      {w:`feliz`, p:`fɨˈliʃ`, fr:`heureux`, b:`feliz (pl. felizes)`, gr:`adjectif invariable en genre`},
      {w:`tu`, p:`ˈtu`, fr:`tu, toi`, b:`tu`, gr:`pronom sujet`},
      {w:`quem`, p:`ˈkɐ̃j`, fr:`qui`, b:`quem`, gr:`pronom interrogatif`},
      {w:`onde`, p:`ˈõdɨ`, fr:`où ; de onde = d'où`, b:`onde`, gr:`adverbe interrogatif`}
    ],

    grammar: {
      key: `ser`,
      cat: `Conjugaison`,
      concept: `Le verbe <i lang="pt-PT">ser</i> au présent et les pronoms sujets`,
      excerpt: [
        `Eu <mark>sou</mark> a Marta. <mark>Sou</mark> portuguesa e <mark>sou</mark> de Lisboa.`,
        `Nós <mark>somos</mark> muito diferentes, mas <mark>somos</mark> felizes.`,
        `Quem <mark>és</mark>? De onde <mark>és</mark>?`
      ],
      exp: `<p><i lang="pt-PT">Ser</i> veut dire « être ». On l'emploie pour dire <b>qui l'on est</b> : son nom, sa nationalité, son origine, son métier, son caractère.</p>
<p>Le pronom sujet est souvent <b>omis</b>, car la terminaison du verbe suffit : <i lang="pt-PT">Sou portuguesa</i> = « (je) suis portugaise ». On le garde pour insister ou pour opposer : <i lang="pt-PT">Eu sou portuguesa, ele é brasileiro.</i></p>
<p>Le portugais a un deuxième verbe « être », <i lang="pt-PT">estar</i>, pour les états passagers et la localisation. Il viendra au texte 5.</p>`,
      table: {
        head: [`Personne`, `ser`, `Exemple`],
        rows: [
          [`eu`, `<b>sou</b>`, `Sou de Lisboa.`],
          [`tu`, `<b>és</b>`, `De onde és?`],
          [`ele / ela / você`, `<b>é</b>`, `O Rui é brasileiro.`],
          [`nós`, `<b>somos</b>`, `Somos felizes.`],
          [`vós`, `<b>sois</b>`, `(rare, régional ou solennel)`],
          [`eles / elas / vocês`, `<b>são</b>`, `Os meus pais são do Porto.`]
        ]
      },
      compare: `<p><b>Pas d'article devant le métier</b>, comme en français : <i lang="pt-PT">Sou professora</i> = « je suis professeure ».</p>
<p><b>Mais un article devant le prénom</b>, ce que le français ne fait pas : <i lang="pt-PT">a Marta</i>, <i lang="pt-PT">o Rui</i>. Au Portugal, c'est la règle quand on parle de quelqu'un.</p>
<p>Prononciation : <i lang="pt-PT">sou</i> se dit « sô », <i lang="pt-PT">é</i> se dit « è » (ouvert), <i lang="pt-PT">são</i> a la nasale <i lang="pt-PT">ão</i>.</p>`,
      also: [
        `<b>Négation</b> : <i lang="pt-PT">não</i> se place juste avant le verbe, sans deuxième mot : <i lang="pt-PT">Ele não é português</i> = « il n'est pas portugais ».`,
        `<b>Contraction</b> : <i lang="pt-PT">do Porto</i> = <i lang="pt-PT">de</i> + <i lang="pt-PT">o Porto</i>. Porto prend l'article, Lisboa non.`,
        `<b>Accord</b> : <i lang="pt-PT">português</i> → <i lang="pt-PT">portuguesa</i>, <i lang="pt-PT">brasileiro</i> → <i lang="pt-PT">brasileira</i>.`
      ]
    }
  };

  /* ─── T2 — Na pastelaria ─────────────────────── */
  var T2 = {
    id: `a1-2`, level: `A1`,
    title: `Na pastelaria`,
    titleFr: `À la pâtisserie-café`,
    theme: `Commander au café`,
    sentences: [
      [
        {w:`É sábado`, p:`ˈɛ ˈsabɐdu`, t:`c'est samedi`},
        {w:`de manhã.`, p:`dɨ mɐˈɲɐ̃`, t:`le matin`, x:1}
      ],
      [
        {w:`A Marta e o Rui`, p:`ɐ ˈmaɾtɐ i u ˈʁuj`, t:`Marta et Rui`},
        {w:`estão`, p:`ɨʃˈtɐ̃w`, t:`sont (estar : lieu)`},
        {w:`numa pastelaria.`, p:`ˈnumɐ pɐʃtɨlɐˈɾiɐ`, t:`dans une pâtisserie-café (em + uma)`}
      ],
      [
        {w:`— Bom dia!`, p:`ˈbõ ˈdiɐ`, t:`bonjour ! (le matin)`, x:1},
        {w:`O que desejam?`, p:`u kɨ dɨˈzɐʒɐ̃w`, t:`que désirez-vous ?`}
      ],
      [
        {w:`— Uma bica`, p:`ˈumɐ ˈbikɐ`, t:`un expresso (Lisbonne)`},
        {w:`e um galão,`, p:`i ũ ɡɐˈlɐ̃w`, t:`et un café au lait en verre`},
        {w:`se faz favor.`, p:`sɨ ˈfaʃ fɐˈvoɾ`, t:`s'il vous plaît`, x:1}
      ],
      [
        {w:`— E para comer?`, p:`i ˈpɐɾɐ kuˈmeɾ`, t:`et pour manger ?`}
      ],
      [
        {w:`— Dois pastéis de nata`, p:`ˈdojʃ pɐʃˈtɛjʒ dɨ ˈnatɐ`, t:`deux flans pâtissiers portugais`},
        {w:`e uma torrada.`, p:`i ˈumɐ tuˈʁadɐ`, t:`et une tartine grillée beurrée`}
      ],
      [
        {w:`— Mais alguma coisa?`, p:`ˈmajz aɫˈɡumɐ ˈkojzɐ`, t:`autre chose ?`, x:1}
      ],
      [
        {w:`— Não,`, p:`ˈnɐ̃w`, t:`non`},
        {w:`obrigado.`, p:`ɔbɾiˈɡadu`, t:`merci (dit par un homme)`},
        {w:`A conta,`, p:`ɐ ˈkõtɐ`, t:`l'addition`},
        {w:`se faz favor.`, p:`sɨ ˈfaʃ fɐˈvoɾ`, t:`s'il vous plaît`, x:1}
      ],
      [
        {w:`— São`, p:`ˈsɐ̃w`, t:`ça fait (litt. « ce sont »)`},
        {w:`quatro euros`, p:`ˈkwatɾu ˈewɾuʃ`, t:`quatre euros`},
        {w:`e vinte.`, p:`i ˈvĩtɨ`, t:`vingt (centimes)`}
      ],
      [
        {w:`— Obrigada!`, p:`ɔbɾiˈɡadɐ`, t:`merci ! (dit par une femme)`},
        {w:`Tenha um bom dia.`, p:`ˈtɐɲɐ ũ ˈbõ ˈdiɐ`, t:`bonne journée (forme polie)`, x:1}
      ]
    ],

    vocabulary: [
      {w:`sábado`, p:`ˈsabɐdu`, fr:`samedi`, b:`sábado`, gr:`nom masculin`},
      {w:`de manhã`, p:`dɨ mɐˈɲɐ̃`, fr:`le matin (à tarde = l'après-midi, à noite = le soir)`, b:`manhã`, gr:`locution adverbiale`},
      {w:`estar`, p:`ɨʃˈtaɾ`, fr:`être (lieu, état passager)`, b:`estar · verbe irrégulier (estou, está, estão)`, gr:`verbe`},
      {w:`pastelaria`, p:`pɐʃtɨlɐˈɾiɐ`, fr:`pâtisserie-café, où l'on prend café et viennoiseries`, b:`pastelaria`, gr:`nom féminin`},
      {w:`bom dia`, p:`ˈbõ ˈdiɐ`, fr:`bonjour (jusqu'à midi) ; boa tarde, boa noite ensuite`, b:`bom, boa + dia`, gr:`salutation`},
      {w:`desejar`, p:`dɨzɨˈʒaɾ`, fr:`désirer, souhaiter`, b:`desejar · verbe en -ar`, gr:`verbe`},
      {w:`bica`, p:`ˈbikɐ`, fr:`expresso (mot de Lisbonne ; ailleurs : um café)`, b:`bica`, gr:`nom féminin`},
      {w:`galão`, p:`ɡɐˈlɐ̃w`, fr:`café au lait servi dans un grand verre`, b:`galão (pl. galões)`, gr:`nom masculin`},
      {w:`se faz favor`, p:`sɨ ˈfaʃ fɐˈvoɾ`, fr:`s'il vous plaît ; aussi pour appeler le serveur`, b:`favor`, gr:`formule de politesse`},
      {w:`comer`, p:`kuˈmeɾ`, fr:`manger`, b:`comer · verbe en -er`, gr:`verbe`},
      {w:`pastel de nata`, p:`pɐʃˈtɛɫ dɨ ˈnatɐ`, fr:`flan à la crème en pâte feuilletée, spécialité de Lisbonne`, b:`pastel (pl. pastéis)`, gr:`nom masculin`},
      {w:`torrada`, p:`tuˈʁadɐ`, fr:`grosse tranche de pain grillé et beurré`, b:`torrada`, gr:`nom féminin`},
      {w:`mais alguma coisa?`, p:`ˈmajz aɫˈɡumɐ ˈkojzɐ`, fr:`autre chose ?, ce sera tout ?`, b:`coisa`, gr:`expression`},
      {w:`obrigado`, p:`ɔbɾiˈɡadu`, fr:`merci ; une femme dit obrigada`, b:`obrigado, obrigada`, gr:`formule de politesse`},
      {w:`conta`, p:`ˈkõtɐ`, fr:`addition ; compte`, b:`conta`, gr:`nom féminin`},
      {w:`dois`, p:`ˈdojʃ`, fr:`deux (au féminin : duas)`, b:`dois, duas`, gr:`nombre`},
      {w:`quatro`, p:`ˈkwatɾu`, fr:`quatre`, b:`quatro`, gr:`nombre`},
      {w:`euro`, p:`ˈewɾu`, fr:`euro`, b:`euro`, gr:`nom masculin`},
      {w:`vinte`, p:`ˈvĩtɨ`, fr:`vingt`, b:`vinte`, gr:`nombre`},
      {w:`tenha um bom dia`, p:`ˈtɐɲɐ ũ ˈbõ ˈdiɐ`, fr:`bonne journée (vouvoiement)`, b:`ter (subjonctif : tenha)`, gr:`formule de politesse`}
    ],

    grammar: {
      key: `artigos`,
      cat: `Grammaire fondamentale`,
      concept: `Les articles définis et indéfinis`,
      excerpt: [
        `— <mark>Uma</mark> bica e <mark>um</mark> galão, se faz favor.`,
        `<mark>A</mark> Marta e <mark>o</mark> Rui estão numa pastelaria.`,
        `<mark>A</mark> conta, se faz favor.`
      ],
      exp: `<p>Comme en français, l'article change selon le <b>genre</b> et le <b>nombre</b> du nom. L'article défini est une seule voyelle : <i lang="pt-PT">o</i>, <i lang="pt-PT">a</i>, <i lang="pt-PT">os</i>, <i lang="pt-PT">as</i>.</p>
<p>Attention à la prononciation : <i lang="pt-PT">o</i> se dit « ou », <i lang="pt-PT">os</i> se dit « ouch », <i lang="pt-PT">a</i> est un a sourd. Ces petits mots s'accrochent au nom qui suit : <i lang="pt-PT">a conta</i> se dit presque d'une traite.</p>
<p>L'indéfini <i lang="pt-PT">um</i> a une voyelle nasale (« oun » dit par le nez). <i lang="pt-PT">Uns</i> / <i lang="pt-PT">umas</i> correspondent à « des » mais s'emploient moins qu'en français : on dit souvent <i lang="pt-PT">Quero pastéis</i> sans article.</p>`,
      table: {
        head: [``, `Défini (le, la, les)`, `Indéfini (un, une, des)`],
        rows: [
          [`masculin singulier`, `<b>o</b> galão`, `<b>um</b> galão`],
          [`féminin singulier`, `<b>a</b> bica`, `<b>uma</b> bica`],
          [`masculin pluriel`, `<b>os</b> pastéis`, `<b>uns</b> pastéis`],
          [`féminin pluriel`, `<b>as</b> torradas`, `<b>umas</b> torradas`]
        ]
      },
      compare: `<p>Le français dit « Marta et Rui » ; le portugais du Portugal dit <i lang="pt-PT">a Marta e o Rui</i>, avec l'article.</p>
<p><b>Merci s'accorde</b> avec la personne qui parle : un homme dit <i lang="pt-PT">obrigado</i>, une femme <i lang="pt-PT">obrigada</i>. C'est littéralement « obligé, obligée ».</p>
<p><i lang="pt-PT">Se faz favor</i> est la formule typique du Portugal. On entend aussi <i lang="pt-PT">por favor</i>, plus neutre et plus courant au Brésil.</p>`,
      also: [
        `<b>Contraction</b> : <i lang="pt-PT">numa</i> = <i lang="pt-PT">em</i> + <i lang="pt-PT">uma</i> (« dans une »).`,
        `<b>Estar</b> pour dire où l'on se trouve : <i lang="pt-PT">estão numa pastelaria</i>.`,
        `<b>Pluriel en -éis</b> : <i lang="pt-PT">pastel</i> → <i lang="pt-PT">pastéis</i>. Les mots en -el font leur pluriel en -éis.`
      ]
    }
  };

  /* ─── T3 — A minha família ───────────────────── */
  var T3 = {
    id: `a1-3`, level: `A1`,
    title: `A minha família`,
    titleFr: `Ma famille`,
    theme: `Famille`,
    sentences: [
      [
        {w:`Esta é`, p:`ˈɛʃtɐ ˈɛ`, t:`voici, c'est (litt. « celle-ci est »)`},
        {w:`a minha família.`, p:`ɐ ˈmiɲɐ fɐˈmiljɐ`, t:`ma famille`}
      ],
      [
        {w:`O meu pai`, p:`u ˈmew ˈpaj`, t:`mon père`},
        {w:`chama-se José`, p:`ˈʃɐmɐsɨ ʒuˈzɛ`, t:`s'appelle José`},
        {w:`e é médico.`, p:`i ˈɛ ˈmɛdiku`, t:`et il est médecin`}
      ],
      [
        {w:`A minha mãe,`, p:`ɐ ˈmiɲɐ ˈmɐ̃j`, t:`ma mère`},
        {w:`a Fernanda,`, p:`ɐ fɨɾˈnɐ̃dɐ`, t:`Fernanda`},
        {w:`é enfermeira.`, p:`ˈɛ ẽfɨɾˈmɐjɾɐ`, t:`est infirmière`}
      ],
      [
        {w:`Tenho`, p:`ˈtɐɲu`, t:`j'ai (ter)`},
        {w:`dois irmãos:`, p:`ˈdojz iɾˈmɐ̃wʃ`, t:`un frère et une sœur (litt. « deux frères »)`},
        {w:`o Pedro e a Sofia.`, p:`u ˈpedɾu i ɐ suˈfiɐ`, t:`Pedro et Sofia`}
      ],
      [
        {w:`O Pedro é casado.`, p:`u ˈpedɾu ˈɛ kɐˈzadu`, t:`Pedro est marié`},
        {w:`A mulher dele`, p:`ɐ muˈʎɛɾ ˈdelɨ`, t:`sa femme (la femme de lui)`},
        {w:`é espanhola.`, p:`ˈɛ ɨʃpɐˈɲɔlɐ`, t:`est espagnole`}
      ],
      [
        {w:`Os filhos deles`, p:`uʃ ˈfiʎuʒ ˈdelɨʃ`, t:`leurs enfants (les enfants d'eux)`},
        {w:`são muito pequenos.`, p:`ˈsɐ̃w ˈmũjtu pɨˈkenuʃ`, t:`sont très petits`}
      ],
      [
        {w:`A Sofia é solteira`, p:`ɐ suˈfiɐ ˈɛ soɫˈtɐjɾɐ`, t:`Sofia est célibataire`},
        {w:`e vive connosco.`, p:`i ˈvivɨ kuˈnoʃku`, t:`et vit avec nous`}
      ],
      [
        {w:`Aos domingos,`, p:`awʒ duˈmĩɡuʃ`, t:`le dimanche, tous les dimanches (a + os)`},
        {w:`almoçamos todos`, p:`aɫmuˈsɐmuʃ ˈtoduz`, t:`nous déjeunons tous`},
        {w:`em casa`, p:`ɐ̃j ˈkazɐ`, t:`chez (litt. « à la maison »)`},
        {w:`dos meus avós.`, p:`duʒ ˈmewz ɐˈvɔʃ`, t:`de mes grands-parents (de + os)`}
      ],
      [
        {w:`E a tua família?`, p:`i ɐ ˈtuɐ fɐˈmiljɐ`, t:`et ta famille ?`},
        {w:`É grande?`, p:`ˈɛ ˈɡɾɐ̃dɨ`, t:`elle est grande ?`}
      ]
    ],

    vocabulary: [
      {w:`este`, p:`ˈeʃtɨ`, fr:`ce, celui-ci (esta = celle-ci)`, b:`este, esta [ˈɛʃtɐ]`, gr:`démonstratif`},
      {w:`família`, p:`fɐˈmiljɐ`, fr:`famille`, b:`família`, gr:`nom féminin`},
      {w:`meu`, p:`ˈmew`, fr:`mon (o meu) ; minha = ma`, b:`meu, minha [ˈmiɲɐ]`, gr:`possessif`},
      {w:`pai`, p:`ˈpaj`, fr:`père`, b:`pai`, gr:`nom masculin`},
      {w:`chamar-se`, p:`ʃɐˈmaɾsɨ`, fr:`s'appeler ; chamo-me = je m'appelle`, b:`chamar-se · verbe pronominal en -ar`, gr:`verbe`},
      {w:`médico`, p:`ˈmɛdiku`, fr:`médecin`, b:`médico, médica`, gr:`nom masculin`},
      {w:`mãe`, p:`ˈmɐ̃j`, fr:`mère`, b:`mãe`, gr:`nom féminin`},
      {w:`enfermeiro`, p:`ẽfɨɾˈmɐjɾu`, fr:`infirmier`, b:`enfermeiro, enfermeira`, gr:`nom masculin`},
      {w:`ter`, p:`ˈteɾ`, fr:`avoir`, b:`ter · verbe irrégulier (tenho, tens, tem)`, gr:`verbe`},
      {w:`irmão`, p:`iɾˈmɐ̃w`, fr:`frère ; os irmãos = les frères et sœurs`, b:`irmão, irmã (pl. irmãos)`, gr:`nom masculin`},
      {w:`casado`, p:`kɐˈzadu`, fr:`marié`, b:`casado, casada`, gr:`adjectif`},
      {w:`mulher`, p:`muˈʎɛɾ`, fr:`femme ; épouse`, b:`mulher (pl. mulheres)`, gr:`nom féminin`},
      {w:`dele`, p:`ˈdelɨ`, fr:`son, sa, ses (à lui) ; dela = à elle`, b:`de + ele`, gr:`possessif`},
      {w:`espanhol`, p:`ɨʃpɐˈɲɔɫ`, fr:`espagnol`, b:`espanhol, espanhola`, gr:`adjectif / nom`},
      {w:`filho`, p:`ˈfiʎu`, fr:`fils ; os filhos = les enfants (de quelqu'un)`, b:`filho, filha`, gr:`nom masculin`},
      {w:`pequeno`, p:`pɨˈkenu`, fr:`petit`, b:`pequeno, pequena`, gr:`adjectif`},
      {w:`solteiro`, p:`soɫˈtɐjɾu`, fr:`célibataire`, b:`solteiro, solteira`, gr:`adjectif`},
      {w:`viver`, p:`viˈveɾ`, fr:`vivre, habiter`, b:`viver · verbe en -er`, gr:`verbe`},
      {w:`connosco`, p:`kuˈnoʃku`, fr:`avec nous (au Brésil : conosco)`, b:`com + nós`, gr:`pronom`},
      {w:`domingo`, p:`duˈmĩɡu`, fr:`dimanche ; aos domingos = le dimanche`, b:`domingo`, gr:`nom masculin`},
      {w:`almoçar`, p:`aɫmuˈsaɾ`, fr:`déjeuner`, b:`almoçar · verbe en -ar`, gr:`verbe`, ff:`L'almoço est le repas de midi. Le petit-déjeuner se dit pequeno-almoço.`},
      {w:`todos`, p:`ˈtoduʃ`, fr:`tous`, b:`todo, toda`, gr:`adjectif / pronom`},
      {w:`avô`, p:`ɐˈvo`, fr:`grand-père ; avó [ɐˈvɔ] = grand-mère ; os avós = les grands-parents`, b:`avô, avó`, gr:`nom`},
      {w:`teu`, p:`ˈtew`, fr:`ton (o teu) ; tua = ta`, b:`teu, tua`, gr:`possessif`},
      {w:`grande`, p:`ˈɡɾɐ̃dɨ`, fr:`grand`, b:`grande (pl. grandes)`, gr:`adjectif invariable en genre`}
    ],

    grammar: {
      key: `possessivos`,
      cat: `Grammaire fondamentale`,
      concept: `Les possessifs et <i lang="pt-PT">dele</i> / <i lang="pt-PT">dela</i>`,
      excerpt: [
        `<mark>O meu</mark> pai chama-se José. <mark>A minha</mark> mãe, a Fernanda, é enfermeira.`,
        `A mulher <mark>dele</mark> é espanhola. Os filhos <mark>deles</mark> são muito pequenos.`,
        `E <mark>a tua</mark> família?`
      ],
      exp: `<p>Le possessif s'accorde avec <b>l'objet possédé</b>, comme en français, et il est en général <b>précédé de l'article</b> : <i lang="pt-PT">o meu pai</i>, <i lang="pt-PT">a minha mãe</i>, <i lang="pt-PT">os meus avós</i>.</p>
<p>Pour la 3<sup>e</sup> personne, le portugais du Portugal préfère <i lang="pt-PT">dele</i> (à lui), <i lang="pt-PT">dela</i> (à elle), <i lang="pt-PT">deles</i>, <i lang="pt-PT">delas</i>, placés <b>après</b> le nom : <i lang="pt-PT">a mulher dele</i> = « sa femme (à lui) ». La raison : <i lang="pt-PT">o seu</i> sert surtout de « votre » quand on vouvoie avec <i lang="pt-PT">você</i>.</p>`,
      table: {
        head: [`Possesseur`, `masc. sing.`, `fém. sing.`, `masc. pl.`, `fém. pl.`],
        rows: [
          [`eu`, `o <b>meu</b>`, `a <b>minha</b>`, `os <b>meus</b>`, `as <b>minhas</b>`],
          [`tu`, `o <b>teu</b>`, `a <b>tua</b>`, `os <b>teus</b>`, `as <b>tuas</b>`],
          [`você (votre)`, `o <b>seu</b>`, `a <b>sua</b>`, `os <b>seus</b>`, `as <b>suas</b>`],
          [`nós`, `o <b>nosso</b>`, `a <b>nossa</b>`, `os <b>nossos</b>`, `as <b>nossas</b>`],
          [`ele / ela`, `o pai <b>dele</b> / <b>dela</b>`, `a mãe <b>dele</b> / <b>dela</b>`, `…`, `…`],
          [`eles / elas`, `o pai <b>deles</b> / <b>delas</b>`, `…`, `…`, `…`]
        ]
      },
      compare: `<p>En français, « sa femme » ne dit pas si le mari est Pedro ou Sofia. En portugais, <i lang="pt-PT">dele</i> / <i lang="pt-PT">dela</i> dépend du <b>possesseur</b> : <i lang="pt-PT">a mulher dele</i> (de Pedro), <i lang="pt-PT">o marido dela</i> (le mari de Sofia).</p>
<p>« Ma mère » se dit <i lang="pt-PT">a minha mãe</i>, avec l'article, ce qui n'a pas d'équivalent en français.</p>`,
      also: [
        `<b>Os irmãos</b> désigne les frères et sœurs ensemble : le masculin pluriel englobe les deux genres. De même <i lang="pt-PT">os pais</i> (les parents), <i lang="pt-PT">os avós</i> (les grands-parents), <i lang="pt-PT">os filhos</i> (les enfants).`,
        `<b>Ter</b>, avoir : <i lang="pt-PT">tenho</i> se dit « tagnou », avec un a sourd.`,
        `<b>Aos domingos</b> (a + os) : avec un jour au pluriel, l'action est habituelle, « le dimanche ».`
      ]
    }
  };

  /* ─── T4 — A casa da avó ─────────────────────── */
  var T4 = {
    id: `a1-4`, level: `A1`,
    title: `A casa da avó`,
    titleFr: `La maison de grand-mère`,
    theme: `Maison · Alentejo`,
    sentences: [
      [
        {w:`A avó Rosa`, p:`ɐ ɐˈvɔ ˈʁɔzɐ`, t:`grand-mère Rosa`},
        {w:`vive numa aldeia`, p:`ˈvivɨ ˈnumɐ aɫˈdɐjɐ`, t:`vit dans un village`},
        {w:`do Alentejo.`, p:`du ɐlẽˈtɐʒu`, t:`de l'Alentejo (région du sud)`}
      ],
      [
        {w:`A casa dela`, p:`ɐ ˈkazɐ ˈdɛlɐ`, t:`sa maison (à elle)`},
        {w:`é pequena e branca,`, p:`ˈɛ pɨˈkenɐ i ˈbɾɐ̃kɐ`, t:`est petite et blanche`},
        {w:`com janelas azuis.`, p:`kõ ʒɐˈnɛlɐz ɐˈzujʃ`, t:`avec des fenêtres bleues`}
      ],
      [
        {w:`Tem uma cozinha grande,`, p:`ˈtɐ̃j ˈumɐ kuˈziɲɐ ˈɡɾɐ̃dɨ`, t:`elle a une grande cuisine`},
        {w:`dois quartos`, p:`ˈdojʃ ˈkwaɾtuʃ`, t:`deux chambres`},
        {w:`e uma sala antiga.`, p:`i ˈumɐ ˈsalɐ ɐ̃ˈtiɡɐ`, t:`et un salon ancien`}
      ],
      [
        {w:`O quintal`, p:`u kĩˈtaɫ`, t:`le jardin, la cour`, ff:1},
        {w:`é bonito:`, p:`ˈɛ buˈnitu`, t:`est joli`},
        {w:`tem laranjeiras`, p:`ˈtɐ̃j lɐɾɐ̃ˈʒɐjɾɐʃ`, t:`il a des orangers`},
        {w:`e flores amarelas.`, p:`i ˈfloɾɨz ɐmɐˈɾɛlɐʃ`, t:`et des fleurs jaunes`}
      ],
      [
        {w:`Os vizinhos`, p:`uʒ viˈziɲuʃ`, t:`les voisins`},
        {w:`são simpáticos`, p:`ˈsɐ̃w sĩˈpatikuʃ`, t:`sont sympathiques`},
        {w:`e as vizinhas também.`, p:`i ɐʒ viˈziɲɐʃ tɐ̃ˈbɐ̃j`, t:`et les voisines aussi`}
      ],
      [
        {w:`No verão,`, p:`nu vɨˈɾɐ̃w`, t:`en été (em + o)`},
        {w:`as tardes são quentes`, p:`ɐʃ ˈtaɾdɨʃ ˈsɐ̃w ˈkẽtɨʃ`, t:`les après-midi sont chauds`},
        {w:`e as noites`, p:`i ɐʒ ˈnojtɨʃ`, t:`et les nuits`},
        {w:`são calmas.`, p:`ˈsɐ̃w ˈkaɫmɐʃ`, t:`sont calmes`}
      ],
      [
        {w:`A avó diz sempre:`, p:`ɐ ɐˈvɔ ˈdiʃ ˈsẽpɾɨ`, t:`grand-mère dit toujours`},
        {w:`«A minha casa`, p:`ɐ ˈmiɲɐ ˈkazɐ`, t:`ma maison`},
        {w:`é a vossa casa.»`, p:`ˈɛ ɐ ˈvɔsɐ ˈkazɐ`, t:`est votre maison (vosso = votre, à vous plusieurs)`}
      ]
    ],

    vocabulary: [
      {w:`aldeia`, p:`aɫˈdɐjɐ`, fr:`village`, b:`aldeia`, gr:`nom féminin`},
      {w:`casa`, p:`ˈkazɐ`, fr:`maison ; em casa = à la maison`, b:`casa`, gr:`nom féminin`},
      {w:`dela`, p:`ˈdɛlɐ`, fr:`son, sa, ses (à elle)`, b:`de + ela`, gr:`possessif`},
      {w:`branco`, p:`ˈbɾɐ̃ku`, fr:`blanc`, b:`branco, branca`, gr:`adjectif`},
      {w:`com`, p:`kõ`, fr:`avec`, b:`com`, gr:`préposition`},
      {w:`janela`, p:`ʒɐˈnɛlɐ`, fr:`fenêtre`, b:`janela`, gr:`nom féminin`},
      {w:`azul`, p:`ɐˈzuɫ`, fr:`bleu`, b:`azul (pl. azuis)`, gr:`adjectif invariable en genre`},
      {w:`cozinha`, p:`kuˈziɲɐ`, fr:`cuisine`, b:`cozinha`, gr:`nom féminin`},
      {w:`quarto`, p:`ˈkwaɾtu`, fr:`chambre ; aussi : quart`, b:`quarto`, gr:`nom masculin`},
      {w:`sala`, p:`ˈsalɐ`, fr:`salon, salle de séjour`, b:`sala`, gr:`nom féminin`},
      {w:`antigo`, p:`ɐ̃ˈtiɡu`, fr:`ancien, vieux`, b:`antigo, antiga`, gr:`adjectif`},
      {w:`quintal`, p:`kĩˈtaɫ`, fr:`jardin ou cour derrière la maison`, b:`quintal (pl. quintais)`, gr:`nom masculin`, ff:`≠ « quintal » (100 kg). C'est le petit terrain attenant à la maison.`},
      {w:`bonito`, p:`buˈnitu`, fr:`joli, beau`, b:`bonito, bonita`, gr:`adjectif`},
      {w:`laranjeira`, p:`lɐɾɐ̃ˈʒɐjɾɐ`, fr:`oranger (laranja = orange)`, b:`laranjeira`, gr:`nom féminin`},
      {w:`flor`, p:`ˈfloɾ`, fr:`fleur`, b:`flor (pl. flores)`, gr:`nom féminin`},
      {w:`amarelo`, p:`ɐmɐˈɾɛlu`, fr:`jaune`, b:`amarelo, amarela`, gr:`adjectif`},
      {w:`vizinho`, p:`viˈziɲu`, fr:`voisin`, b:`vizinho, vizinha`, gr:`nom masculin`},
      {w:`simpático`, p:`sĩˈpatiku`, fr:`sympathique, gentil`, b:`simpático, simpática`, gr:`adjectif`},
      {w:`também`, p:`tɐ̃ˈbɐ̃j`, fr:`aussi`, b:`também`, gr:`adverbe`},
      {w:`verão`, p:`vɨˈɾɐ̃w`, fr:`été ; no verão = en été`, b:`verão (pl. verões)`, gr:`nom masculin`},
      {w:`tarde`, p:`ˈtaɾdɨ`, fr:`après-midi ; aussi : tard`, b:`tarde`, gr:`nom féminin / adverbe`},
      {w:`quente`, p:`ˈkẽtɨ`, fr:`chaud`, b:`quente (pl. quentes)`, gr:`adjectif invariable en genre`},
      {w:`noite`, p:`ˈnojtɨ`, fr:`nuit, soir ; boa noite = bonsoir`, b:`noite`, gr:`nom féminin`},
      {w:`calmo`, p:`ˈkaɫmu`, fr:`calme`, b:`calmo, calma`, gr:`adjectif`},
      {w:`dizer`, p:`diˈzeɾ`, fr:`dire`, b:`dizer · verbe irrégulier (digo, diz)`, gr:`verbe`},
      {w:`sempre`, p:`ˈsẽpɾɨ`, fr:`toujours`, b:`sempre`, gr:`adverbe`},
      {w:`vosso`, p:`ˈvɔsu`, fr:`votre (à vous plusieurs)`, b:`vosso, vossa`, gr:`possessif`}
    ],

    grammar: {
      key: `genero`,
      cat: `Grammaire fondamentale`,
      concept: `Genre et nombre : accorder noms et adjectifs`,
      excerpt: [
        `A casa dela é <mark>pequena</mark> e <mark>branca</mark>, com <mark>janelas azuis</mark>.`,
        `Os <mark>vizinhos</mark> são <mark>simpáticos</mark> e as <mark>vizinhas</mark> também.`,
        `As tardes são <mark>quentes</mark> e as noites são <mark>calmas</mark>.`
      ],
      exp: `<p>L'adjectif s'accorde en genre et en nombre avec le nom, et il se place en général <b>après</b> lui : <i lang="pt-PT">uma sala antiga</i>, <i lang="pt-PT">flores amarelas</i>.</p>
<p><b>Genre</b> : la plupart des mots en <i lang="pt-PT">-o</i> sont masculins, ceux en <i lang="pt-PT">-a</i> féminins. Les adjectifs en <i lang="pt-PT">-e</i> ou en consonne ne changent pas au féminin : <i lang="pt-PT">grande</i>, <i lang="pt-PT">quente</i>, <i lang="pt-PT">azul</i>, <i lang="pt-PT">feliz</i>.</p>
<p><b>Nombre</b> : on ajoute <i lang="pt-PT">-s</i> après une voyelle. Après une consonne, la terminaison change, comme le montre le tableau.</p>`,
      table: {
        head: [`Fin du mot`, `Pluriel`, `Exemple`],
        rows: [
          [`voyelle`, `+ s`, `casa → casa<b>s</b>, quente → quente<b>s</b>`],
          [`-r, -z, -s (accentué)`, `+ es`, `flor → flor<b>es</b>, feliz → feliz<b>es</b>, inglês → ingles<b>es</b>`],
          [`-l`, `-is`, `azul → azu<b>is</b>, quintal → quinta<b>is</b>, pastel → paste<b>is</b> (pastéis)`],
          [`-m`, `-ns`, `jovem → jove<b>ns</b>, um → u<b>ns</b>`],
          [`-ão`, `-ões (le plus souvent)`, `verão → ver<b>ões</b> ; mais irmão → irm<b>ãos</b>, mãe → mã<b>es</b>`]
        ]
      },
      compare: `<p>Certains noms <b>changent de genre</b> entre le français et le portugais : <i lang="pt-PT">a árvore</i> (l'arbre), <i lang="pt-PT">a ponte</i> (le pont), <i lang="pt-PT">a viagem</i> (le voyage), <i lang="pt-PT">o mar</i> (la mer), <i lang="pt-PT">o leite</i> (le lait, même genre), <i lang="pt-PT">o sangue</i> (le sang). Mieux vaut apprendre chaque nom avec son article.</p>
<p>À l'oral, le <i lang="pt-PT">-s</i> du pluriel se prononce toujours, en « ch » ou en « j » : <i lang="pt-PT">azuis</i> se dit « azouïch ».</p>`,
      also: [
        `<b>Liaison</b> : devant une voyelle, le s final se dit « z » : <i lang="pt-PT">janelas azuis</i>, <i lang="pt-PT">flores amarelas</i>.`,
        `<b>Ter</b> pour décrire : <i lang="pt-PT">tem uma cozinha grande</i> = « elle a une grande cuisine ».`,
        `<b>Vosso</b> : « votre » quand on s'adresse à plusieurs personnes qu'on tutoie.`
      ]
    }
  };

  /* ─── T5 — Onde é o castelo? ─────────────────── */
  var T5 = {
    id: `a1-5`, level: `A1`,
    title: `Onde é o castelo?`,
    titleFr: `Où est le château ?`,
    theme: `Demander son chemin · Lisbonne`,
    sentences: [
      [
        {w:`Hoje`, p:`ˈoʒɨ`, t:`aujourd'hui`},
        {w:`está sol`, p:`ɨʃˈta ˈsɔɫ`, t:`il fait soleil (estar : la météo)`},
        {w:`em Lisboa.`, p:`ɐ̃j liʒˈboɐ`, t:`à Lisbonne`}
      ],
      [
        {w:`Uma turista`, p:`ˈumɐ tuˈɾiʃtɐ`, t:`une touriste`},
        {w:`está perdida`, p:`ɨʃˈta pɨɾˈdidɐ`, t:`est perdue (état passager)`},
        {w:`na Baixa.`, p:`nɐ ˈbajʃɐ`, t:`dans la Baixa (em + a)`}
      ],
      [
        {w:`— Desculpe,`, p:`dɨʃˈkuɫpɨ`, t:`excusez-moi`},
        {w:`onde é`, p:`ˈõdɨ ˈɛ`, t:`où est (lieu fixe : ser)`},
        {w:`o Castelo de São Jorge?`, p:`u kɐʃˈtɛlu dɨ ˈsɐ̃w ˈʒɔɾʒɨ`, t:`le château Saint-Georges`}
      ],
      [
        {w:`— É ali em cima,`, p:`ˈɛ ɐˈli ɐ̃j ˈsimɐ`, t:`c'est là-haut`},
        {w:`na Alfama.`, p:`nɐ aɫˈfɐmɐ`, t:`dans l'Alfama (vieux quartier)`}
      ],
      [
        {w:`É sempre em frente`, p:`ˈɛ ˈsẽpɾɨ ɐ̃j ˈfɾẽtɨ`, t:`c'est tout droit`, x:1},
        {w:`e depois`, p:`i dɨˈpojʃ`, t:`et ensuite`},
        {w:`à esquerda.`, p:`a ɨʃˈkeɾdɐ`, t:`à gauche`, x:1}
      ],
      [
        {w:`— Muito obrigada!`, p:`ˈmũjtu ɔbɾiˈɡadɐ`, t:`merci beaucoup !`},
        {w:`É longe?`, p:`ˈɛ ˈlõʒɨ`, t:`c'est loin ?`}
      ],
      [
        {w:`— Não,`, p:`ˈnɐ̃w`, t:`non`},
        {w:`são dez minutos`, p:`ˈsɐ̃w ˈdɛʒ miˈnutuʃ`, t:`c'est à dix minutes (litt. « ce sont »)`},
        {w:`a pé.`, p:`ɐ ˈpɛ`, t:`à pied`, x:1}
      ],
      [
        {w:`A turista é simpática,`, p:`ɐ tuˈɾiʃtɐ ˈɛ sĩˈpatikɐ`, t:`la touriste est sympathique (caractère : ser)`},
        {w:`mas está cansada.`, p:`mɐz ɨʃˈta kɐ̃ˈsadɐ`, t:`mais elle est fatiguée (état : estar)`}
      ],
      [
        {w:`O castelo`, p:`u kɐʃˈtɛlu`, t:`le château`},
        {w:`está aberto`, p:`ɨʃˈta ɐˈbɛɾtu`, t:`est ouvert`},
        {w:`até às seis.`, p:`ɐˈtɛ aʃ ˈsɐjʃ`, t:`jusqu'à six heures`}
      ],
      [
        {w:`— Nós somos de cá:`, p:`ˈnɔʃ ˈsomuʒ dɨ ˈka`, t:`nous sommes d'ici`},
        {w:`conhecemos bem a cidade!`, p:`kuɲɨˈsemuʒ ˈbɐ̃j ɐ siˈdadɨ`, t:`nous connaissons bien la ville !`}
      ]
    ],

    vocabulary: [
      {w:`hoje`, p:`ˈoʒɨ`, fr:`aujourd'hui`, b:`hoje`, gr:`adverbe`},
      {w:`está sol`, p:`ɨʃˈta ˈsɔɫ`, fr:`il fait soleil ; está frio = il fait froid`, b:`estar + sol`, gr:`expression`},
      {w:`turista`, p:`tuˈɾiʃtɐ`, fr:`touriste`, b:`turista (o / a)`, gr:`nom masculin et féminin`},
      {w:`perdido`, p:`pɨɾˈdidu`, fr:`perdu`, b:`perdido, perdida`, gr:`adjectif`},
      {w:`desculpe`, p:`dɨʃˈkuɫpɨ`, fr:`excusez-moi, pardon (vouvoiement) ; desculpa = excuse-moi`, b:`desculpar · verbe en -ar`, gr:`formule de politesse`},
      {w:`castelo`, p:`kɐʃˈtɛlu`, fr:`château fort`, b:`castelo`, gr:`nom masculin`, ff:`Un castelo est un château fort. Un château de plaisance se dit palácio.`},
      {w:`ali`, p:`ɐˈli`, fr:`là, là-bas (aqui = ici)`, b:`ali`, gr:`adverbe`},
      {w:`em cima`, p:`ɐ̃j ˈsimɐ`, fr:`en haut, au-dessus ; em baixo = en bas`, b:`cima`, gr:`locution adverbiale`},
      {w:`sempre em frente`, p:`ˈsẽpɾɨ ɐ̃j ˈfɾẽtɨ`, fr:`tout droit`, b:`frente`, gr:`locution adverbiale`},
      {w:`depois`, p:`dɨˈpojʃ`, fr:`après, ensuite`, b:`depois`, gr:`adverbe`},
      {w:`à esquerda`, p:`a ɨʃˈkeɾdɐ`, fr:`à gauche ; à direita = à droite`, b:`esquerdo, esquerda`, gr:`locution adverbiale`},
      {w:`longe`, p:`ˈlõʒɨ`, fr:`loin ; perto = près`, b:`longe`, gr:`adverbe`},
      {w:`dez`, p:`ˈdɛʃ`, fr:`dix`, b:`dez`, gr:`nombre`},
      {w:`minuto`, p:`miˈnutu`, fr:`minute (masculin !)`, b:`minuto`, gr:`nom masculin`},
      {w:`a pé`, p:`ɐ ˈpɛ`, fr:`à pied`, b:`pé`, gr:`locution adverbiale`},
      {w:`cansado`, p:`kɐ̃ˈsadu`, fr:`fatigué`, b:`cansado, cansada`, gr:`adjectif`},
      {w:`aberto`, p:`ɐˈbɛɾtu`, fr:`ouvert ; fechado = fermé`, b:`aberto, aberta`, gr:`adjectif`},
      {w:`até`, p:`ɐˈtɛ`, fr:`jusqu'à ; até logo = à tout à l'heure`, b:`até`, gr:`préposition`},
      {w:`seis`, p:`ˈsɐjʃ`, fr:`six`, b:`seis`, gr:`nombre`},
      {w:`cá`, p:`ˈka`, fr:`ici (où se trouve celui qui parle) ; de cá = d'ici`, b:`cá`, gr:`adverbe`},
      {w:`conhecer`, p:`kuɲɨˈseɾ`, fr:`connaître`, b:`conhecer · verbe en -er (conheço)`, gr:`verbe`},
      {w:`bem`, p:`ˈbɐ̃j`, fr:`bien`, b:`bem`, gr:`adverbe`},
      {w:`cidade`, p:`siˈdadɨ`, fr:`ville`, b:`cidade`, gr:`nom féminin`}
    ],

    grammar: {
      key: `ser-estar`,
      cat: `Grammaire fondamentale`,
      concept: `<i lang="pt-PT">Ser</i> ou <i lang="pt-PT">estar</i> ?`,
      excerpt: [
        `A turista <mark>é</mark> simpática, mas <mark>está</mark> cansada.`,
        `Uma turista <mark>está</mark> perdida na Baixa. — Onde <mark>é</mark> o Castelo de São Jorge?`,
        `Hoje <mark>está</mark> sol em Lisboa. O castelo <mark>está</mark> aberto até às seis.`
      ],
      exp: `<p>Le portugais a deux verbes « être ». <b>Ser</b> dit ce qu'une chose <b>est</b> : son identité, son caractère, son origine. <b>Estar</b> dit <b>comment elle se trouve</b> en ce moment : un état passager, un lieu, la météo.</p>
<p>La touriste <i lang="pt-PT">é simpática</i> : c'est sa personnalité. Elle <i lang="pt-PT">está cansada</i> : elle ne le sera plus demain.</p>
<p><b>Pour un lieu</b>, on emploie <i lang="pt-PT">estar</i> pour une personne ou un objet qui peut bouger (<i lang="pt-PT">a turista está na Baixa</i>). Pour un bâtiment ou un lieu fixe, on dit plutôt <i lang="pt-PT">onde é…?</i> ou <i lang="pt-PT">onde fica…?</i></p>`,
      table: {
        head: [``, `ser`, `estar`],
        rows: [
          [`eu`, `sou`, `<b>estou</b>`],
          [`tu`, `és`, `<b>estás</b>`],
          [`ele / ela / você`, `é`, `<b>está</b>`],
          [`nós`, `somos`, `<b>estamos</b>`],
          [`eles / elas / vocês`, `são`, `<b>estão</b>`],
          [`emplois`, `identité, origine, métier, caractère, heure, lieu fixe`, `état passager, lieu d'une personne ou d'un objet, météo`]
        ]
      },
      compare: `<p>Le français dit « elle est sympathique mais elle est fatiguée » avec un seul verbe. Pour choisir en portugais, demandez-vous : <b>est-ce que ça peut changer d'ici demain ?</b> Si oui, <i lang="pt-PT">estar</i>.</p>
<p>Le même adjectif peut changer de sens : <i lang="pt-PT">ele é aborrecido</i> (il est ennuyeux) / <i lang="pt-PT">ele está aborrecido</i> (il est contrarié).</p>`,
      also: [
        `<b>Heure</b> : <i lang="pt-PT">até às seis</i>. On compte les heures au féminin pluriel (<i lang="pt-PT">as horas</i>), d'où <i lang="pt-PT">às</i> = a + as.`,
        `<b>Distance</b> : <i lang="pt-PT">são dez minutos a pé</i>. Le portugais dit « ce sont dix minutes ».`,
        `<b>Politesse</b> : <i lang="pt-PT">desculpe</i> pour vouvoyer un inconnu, <i lang="pt-PT">desculpa</i> pour tutoyer.`
      ]
    }
  };

  /* ─── T6 — No mercado ────────────────────────── */
  var T6 = {
    id: `a1-6`, level: `A1`,
    title: `No mercado`,
    titleFr: `Au marché`,
    theme: `Courses · alimentation`,
    sentences: [
      [
        {w:`Ao sábado,`, p:`aw ˈsabɐdu`, t:`le samedi (a + o)`},
        {w:`a Marta vai ao mercado`, p:`ɐ ˈmaɾtɐ ˈvaj aw mɨɾˈkadu`, t:`Marta va au marché`},
        {w:`do bairro.`, p:`du ˈbajʁu`, t:`du quartier (de + o)`}
      ],
      [
        {w:`Compra fruta`, p:`ˈkõpɾɐ ˈfɾutɐ`, t:`elle achète des fruits`},
        {w:`na banca`, p:`nɐ ˈbɐ̃kɐ`, t:`à l'étal (em + a)`},
        {w:`da Dona Lurdes.`, p:`dɐ ˈdonɐ ˈluɾdɨʃ`, t:`de Dona Lurdes (de + a)`}
      ],
      [
        {w:`— Bom dia, Dona Lurdes!`, p:`ˈbõ ˈdiɐ ˈdonɐ ˈluɾdɨʃ`, t:`bonjour, Dona Lurdes !`},
        {w:`Quanto custam`, p:`ˈkwɐ̃tu ˈkuʃtɐ̃w`, t:`combien coûtent`},
        {w:`as laranjas?`, p:`ɐʒ lɐˈɾɐ̃ʒɐʃ`, t:`les oranges ?`}
      ],
      [
        {w:`— Um euro e meio o quilo.`, p:`ũ ˈewɾu i ˈmɐju u ˈkilu`, t:`un euro cinquante le kilo`},
        {w:`São do Algarve,`, p:`ˈsɐ̃w du aɫˈɡaɾvɨ`, t:`elles viennent de l'Algarve`},
        {w:`muito doces!`, p:`ˈmũjtu ˈdosɨʃ`, t:`très sucrées !`, ff:1}
      ],
      [
        {w:`— Então quero dois quilos,`, p:`ẽˈtɐ̃w ˈkɛɾu ˈdojʃ ˈkiluʃ`, t:`alors j'en veux deux kilos`},
        {w:`e também`, p:`i tɐ̃ˈbɐ̃j`, t:`et aussi`},
        {w:`um pouco de salsa.`, p:`ũ ˈpoku dɨ ˈsaɫsɐ`, t:`un peu de persil`, ff:1}
      ],
      [
        {w:`Depois,`, p:`dɨˈpojʃ`, t:`ensuite`},
        {w:`passa pela peixaria.`, p:`ˈpasɐ pɨlɐ pɐjʃɐˈɾiɐ`, t:`elle passe par la poissonnerie (por + a)`}
      ],
      [
        {w:`Na peixaria,`, p:`nɐ pɐjʃɐˈɾiɐ`, t:`à la poissonnerie`},
        {w:`o peixe é fresco:`, p:`u ˈpɐjʃɨ ˈɛ ˈfɾeʃku`, t:`le poisson est frais`},
        {w:`sardinhas, polvo e carapaus.`, p:`sɐɾˈdiɲɐʃ ˈpoɫvu i kɐɾɐˈpawʃ`, t:`des sardines, du poulpe et des chinchards`}
      ],
      [
        {w:`A Marta leva`, p:`ɐ ˈmaɾtɐ ˈlɛvɐ`, t:`Marta prend, emporte`},
        {w:`um quilo de carapaus`, p:`ũ ˈkilu dɨ kɐɾɐˈpawʃ`, t:`un kilo de chinchards`},
        {w:`para o jantar.`, p:`ˈpɐɾɐ u ʒɐ̃ˈtaɾ`, t:`pour le dîner`}
      ],
      [
        {w:`No fim,`, p:`nu ˈfĩ`, t:`à la fin (em + o)`},
        {w:`bebe um café`, p:`ˈbɛbɨ ũ kɐˈfɛ`, t:`elle boit un café`},
        {w:`ao balcão`, p:`aw baɫˈkɐ̃w`, t:`au comptoir (a + o)`, ff:1},
        {w:`do mercado.`, p:`du mɨɾˈkadu`, t:`du marché`}
      ]
    ],

    vocabulary: [
      {w:`ir`, p:`ˈiɾ`, fr:`aller`, b:`ir · verbe irrégulier (vou, vais, vai)`, gr:`verbe`},
      {w:`mercado`, p:`mɨɾˈkadu`, fr:`marché`, b:`mercado`, gr:`nom masculin`},
      {w:`bairro`, p:`ˈbajʁu`, fr:`quartier`, b:`bairro`, gr:`nom masculin`},
      {w:`comprar`, p:`kõˈpɾaɾ`, fr:`acheter`, b:`comprar · verbe en -ar`, gr:`verbe`},
      {w:`fruta`, p:`ˈfɾutɐ`, fr:`fruits (souvent au singulier collectif)`, b:`fruta`, gr:`nom féminin`},
      {w:`banca`, p:`ˈbɐ̃kɐ`, fr:`étal, stand de marché`, b:`banca`, gr:`nom féminin`, ff:`≠ « banque », qui se dit banco. Uma banca = un étal.`},
      {w:`Dona`, p:`ˈdonɐ`, fr:`titre de respect devant le prénom d'une femme`, b:`dona`, gr:`nom féminin`},
      {w:`quanto`, p:`ˈkwɐ̃tu`, fr:`combien ; quanto custa? = combien ça coûte ?`, b:`quanto, quanta`, gr:`interrogatif`},
      {w:`custar`, p:`kuʃˈtaɾ`, fr:`coûter`, b:`custar · verbe en -ar`, gr:`verbe`},
      {w:`laranja`, p:`lɐˈɾɐ̃ʒɐ`, fr:`orange`, b:`laranja`, gr:`nom féminin`},
      {w:`meio`, p:`ˈmɐju`, fr:`demi ; e meio = et demi`, b:`meio, meia`, gr:`adjectif`},
      {w:`quilo`, p:`ˈkilu`, fr:`kilo`, b:`quilo`, gr:`nom masculin`},
      {w:`doce`, p:`ˈdosɨ`, fr:`sucré ; aussi : confiture, dessert`, b:`doce (pl. doces)`, gr:`adjectif / nom masculin`, ff:`≠ « doux » au sens de « mou » ou « tiède ». Doce = sucré. Un caractère doux se dit meigo.`},
      {w:`então`, p:`ẽˈtɐ̃w`, fr:`alors, donc`, b:`então`, gr:`adverbe`},
      {w:`querer`, p:`kɨˈɾeɾ`, fr:`vouloir`, b:`querer · verbe irrégulier (quero, queres, quer)`, gr:`verbe`},
      {w:`um pouco de`, p:`ũ ˈpoku dɨ`, fr:`un peu de`, b:`pouco, pouca`, gr:`locution`},
      {w:`salsa`, p:`ˈsaɫsɐ`, fr:`persil`, b:`salsa`, gr:`nom féminin`, ff:`≠ « sauce », qui se dit molho [ˈmoʎu]. Salsa = persil.`},
      {w:`passar`, p:`pɐˈsaɾ`, fr:`passer`, b:`passar · verbe en -ar`, gr:`verbe`},
      {w:`peixaria`, p:`pɐjʃɐˈɾiɐ`, fr:`poissonnerie`, b:`peixaria`, gr:`nom féminin`},
      {w:`peixe`, p:`ˈpɐjʃɨ`, fr:`poisson`, b:`peixe`, gr:`nom masculin`},
      {w:`fresco`, p:`ˈfɾeʃku`, fr:`frais`, b:`fresco, fresca`, gr:`adjectif`},
      {w:`sardinha`, p:`sɐɾˈdiɲɐ`, fr:`sardine`, b:`sardinha`, gr:`nom féminin`},
      {w:`polvo`, p:`ˈpoɫvu`, fr:`poulpe, pieuvre`, b:`polvo`, gr:`nom masculin`},
      {w:`carapau`, p:`kɐɾɐˈpaw`, fr:`chinchard (petit poisson très consommé)`, b:`carapau`, gr:`nom masculin`},
      {w:`levar`, p:`lɨˈvaɾ`, fr:`emporter, prendre ; porter`, b:`levar · verbe en -ar`, gr:`verbe`},
      {w:`jantar`, p:`ʒɐ̃ˈtaɾ`, fr:`dîner (nom et verbe)`, b:`jantar · verbe en -ar / nom masculin`, gr:`verbe / nom`},
      {w:`fim`, p:`ˈfĩ`, fr:`fin ; no fim = à la fin`, b:`fim`, gr:`nom masculin`},
      {w:`beber`, p:`bɨˈbeɾ`, fr:`boire`, b:`beber · verbe en -er`, gr:`verbe`},
      {w:`café`, p:`kɐˈfɛ`, fr:`café (la boisson et le lieu)`, b:`café`, gr:`nom masculin`},
      {w:`balcão`, p:`baɫˈkɐ̃w`, fr:`comptoir ; guichet`, b:`balcão (pl. balcões)`, gr:`nom masculin`, ff:`≠ « balcon », qui se dit varanda. Ao balcão = au comptoir.`}
    ],

    grammar: {
      key: `contraccoes`,
      cat: `Grammaire fondamentale`,
      concept: `Les contractions : préposition + article`,
      excerpt: [
        `A Marta vai <mark>ao</mark> mercado <mark>do</mark> bairro.`,
        `Compra fruta <mark>na</mark> banca <mark>da</mark> Dona Lurdes.`,
        `Depois, passa <mark>pela</mark> peixaria. <mark>No</mark> fim, bebe um café <mark>ao</mark> balcão.`
      ],
      exp: `<p>Le français contracte « de + le » en « du » et « à + le » en « au ». Le portugais va plus loin : les quatre prépositions <b>a, de, em, por</b> se soudent à l'article qui suit, au masculin comme au féminin.</p>
<p>Ces contractions sont <b>obligatoires</b> : on n'écrit jamais <i lang="pt-PT">de o</i> ou <i lang="pt-PT">em a</i>. Elles se font aussi avec l'indéfini après <i lang="pt-PT">em</i> : <i lang="pt-PT">num café</i>, <i lang="pt-PT">numa pastelaria</i>.</p>`,
      table: {
        head: [``, `o`, `a`, `os`, `as`, `um / uma`],
        rows: [
          [`<b>a</b> (à)`, `<b>ao</b>`, `<b>à</b>`, `<b>aos</b>`, `<b>às</b>`, `a um, a uma`],
          [`<b>de</b> (de)`, `<b>do</b>`, `<b>da</b>`, `<b>dos</b>`, `<b>das</b>`, `de um (dum, à l'oral)`],
          [`<b>em</b> (dans, à, en)`, `<b>no</b>`, `<b>na</b>`, `<b>nos</b>`, `<b>nas</b>`, `<b>num</b>, <b>numa</b>`],
          [`<b>por</b> (par)`, `<b>pelo</b>`, `<b>pela</b>`, `<b>pelos</b>`, `<b>pelas</b>`, `por um, por uma`]
        ]
      },
      compare: `<p><b>Em</b> fait le travail de « à », « dans » et « en » pour dire où l'on est : <i lang="pt-PT">na peixaria</i> (à la poissonnerie), <i lang="pt-PT">no verão</i> (en été), <i lang="pt-PT">em Lisboa</i> (à Lisbonne, sans article).</p>
<p><b>A</b> exprime plutôt la direction : <i lang="pt-PT">vai ao mercado</i> (elle va au marché). L'accent grave n'existe en portugais que pour cette contraction : <i lang="pt-PT">à</i>, <i lang="pt-PT">às</i>.</p>`,
      also: [
        `<b>Prix</b> : <i lang="pt-PT">um euro e meio o quilo</i>. On dit « le kilo », avec l'article, comme en français.`,
        `<b>Dona</b> + prénom : formule respectueuse et chaleureuse pour une femme plus âgée, comme la marchande du quartier.`,
        `<b>Ir</b> : <i lang="pt-PT">vai ao mercado</i>. Toute la conjugaison viendra au texte 9.`
      ]
    }
  };

  /* ─── T7 — Um dia normal ─────────────────────── */
  var T7 = {
    id: `a1-7`, level: `A1`,
    title: `Um dia normal`,
    titleFr: `Une journée ordinaire`,
    theme: `Journée · travail`,
    sentences: [
      [
        {w:`A Marta acorda`, p:`ɐ ˈmaɾtɐ ɐˈkɔɾdɐ`, t:`Marta se réveille`, ff:1},
        {w:`às sete.`, p:`aʃ ˈsɛtɨ`, t:`à sept heures`}
      ],
      [
        {w:`Toma o pequeno-almoço`, p:`ˈtɔmɐ u pɨˈkenu aɫˈmosu`, t:`elle prend le petit-déjeuner`, pw:1},
        {w:`em casa:`, p:`ɐ̃j ˈkazɐ`, t:`à la maison`},
        {w:`um café e pão com manteiga.`, p:`ũ kɐˈfɛ i ˈpɐ̃w kõ mɐ̃ˈtɐjɡɐ`, t:`un café et du pain beurré`}
      ],
      [
        {w:`Às oito,`, p:`az ˈojtu`, t:`à huit heures`},
        {w:`apanha o metro`, p:`ɐˈpɐɲɐ u ˈmɛtɾu`, t:`elle prend le métro`},
        {w:`para a escola.`, p:`ˈpɐɾɐ ɐ ɨʃˈkɔlɐ`, t:`pour aller à l'école`}
      ],
      [
        {w:`Na escola,`, p:`nɐ ɨʃˈkɔlɐ`, t:`à l'école`},
        {w:`ensina inglês`, p:`ẽˈsinɐ ĩˈɡleʃ`, t:`elle enseigne l'anglais`},
        {w:`a adolescentes.`, p:`ɐ ɐdulɨʃˈsẽtɨʃ`, t:`à des adolescents`}
      ],
      [
        {w:`Os alunos`, p:`uz ɐˈlunuʃ`, t:`les élèves`},
        {w:`falam muito`, p:`ˈfalɐ̃w ˈmũjtu`, t:`parlent beaucoup`},
        {w:`e às vezes`, p:`i aʒ ˈvezɨʃ`, t:`et parfois`, x:1},
        {w:`não estudam!`, p:`ˈnɐ̃w ɨʃˈtudɐ̃w`, t:`ils n'étudient pas !`}
      ],
      [
        {w:`À tarde,`, p:`a ˈtaɾdɨ`, t:`l'après-midi`, x:1},
        {w:`trabalha em casa:`, p:`tɾɐˈbaʎɐ ɐ̃j ˈkazɐ`, t:`elle travaille à la maison`},
        {w:`prepara as aulas.`, p:`pɾɨˈpaɾɐ ɐz ˈawlɐʃ`, t:`elle prépare les cours`}
      ],
      [
        {w:`Às sete e meia,`, p:`aʃ ˈsɛtɨ i ˈmɐjɐ`, t:`à sept heures et demie`},
        {w:`liga ao Rui.`, p:`ˈliɡɐ aw ˈʁuj`, t:`elle appelle Rui (au téléphone)`, ff:1}
      ],
      [
        {w:`— Jantamos juntos?`, p:`ʒɐ̃ˈtɐmuʒ ˈʒũtuʃ`, t:`on dîne ensemble ?`},
        {w:`— pergunta ele.`, p:`pɨɾˈɡũtɐ ˈelɨ`, t:`demande-t-il`}
      ],
      [
        {w:`Jantam`, p:`ˈʒɐ̃tɐ̃w`, t:`ils dînent`},
        {w:`num restaurante pequeno`, p:`nũ ʁɨʃtawˈɾɐ̃tɨ pɨˈkenu`, t:`dans un petit restaurant`},
        {w:`e depois descansam.`, p:`i dɨˈpojʒ dɨʃˈkɐ̃sɐ̃w`, t:`et ensuite ils se reposent`}
      ],
      [
        {w:`A Marta deita-se`, p:`ɐ ˈmaɾtɐ ˈdɐjtɐsɨ`, t:`Marta se couche`},
        {w:`às onze.`, p:`az ˈõzɨ`, t:`à onze heures`}
      ]
    ],

    vocabulary: [
      {w:`acordar`, p:`ɐkuɾˈdaɾ`, fr:`se réveiller ; réveiller quelqu'un`, b:`acordar · verbe en -ar`, gr:`verbe`, ff:`≠ « accorder ». Acordar = se réveiller (sans pronom). Accorder se dit conceder.`},
      {w:`sete`, p:`ˈsɛtɨ`, fr:`sept`, b:`sete`, gr:`nombre`},
      {w:`tomar`, p:`tuˈmaɾ`, fr:`prendre (un repas, une boisson, un bain)`, b:`tomar · verbe en -ar`, gr:`verbe`},
      {w:`pequeno-almoço`, p:`pɨˈkenu aɫˈmosu`, fr:`petit-déjeuner (au Brésil : café da manhã)`, b:`pequeno-almoço`, gr:`nom masculin`},
      {w:`pão`, p:`ˈpɐ̃w`, fr:`pain`, b:`pão (pl. pães)`, gr:`nom masculin`},
      {w:`manteiga`, p:`mɐ̃ˈtɐjɡɐ`, fr:`beurre`, b:`manteiga`, gr:`nom féminin`},
      {w:`oito`, p:`ˈojtu`, fr:`huit`, b:`oito`, gr:`nombre`},
      {w:`apanhar`, p:`ɐpɐˈɲaɾ`, fr:`prendre (un transport) ; attraper`, b:`apanhar · verbe en -ar`, gr:`verbe`},
      {w:`metro`, p:`ˈmɛtɾu`, fr:`métro`, b:`metro`, gr:`nom masculin`},
      {w:`escola`, p:`ɨʃˈkɔlɐ`, fr:`école`, b:`escola`, gr:`nom féminin`},
      {w:`ensinar`, p:`ẽsiˈnaɾ`, fr:`enseigner, apprendre à quelqu'un`, b:`ensinar · verbe en -ar`, gr:`verbe`},
      {w:`adolescente`, p:`ɐdulɨʃˈsẽtɨ`, fr:`adolescent`, b:`adolescente (o / a)`, gr:`nom masculin et féminin`},
      {w:`aluno`, p:`ɐˈlunu`, fr:`élève`, b:`aluno, aluna`, gr:`nom masculin`},
      {w:`falar`, p:`fɐˈlaɾ`, fr:`parler`, b:`falar · verbe en -ar`, gr:`verbe`},
      {w:`às vezes`, p:`aʒ ˈvezɨʃ`, fr:`parfois`, b:`vez (pl. vezes)`, gr:`locution adverbiale`},
      {w:`estudar`, p:`ɨʃtuˈdaɾ`, fr:`étudier`, b:`estudar · verbe en -ar`, gr:`verbe`},
      {w:`à tarde`, p:`a ˈtaɾdɨ`, fr:`l'après-midi`, b:`tarde`, gr:`locution adverbiale`},
      {w:`trabalhar`, p:`tɾɐbɐˈʎaɾ`, fr:`travailler`, b:`trabalhar · verbe en -ar`, gr:`verbe`},
      {w:`preparar`, p:`pɾɨpɐˈɾaɾ`, fr:`préparer`, b:`preparar · verbe en -ar`, gr:`verbe`},
      {w:`aula`, p:`ˈawlɐ`, fr:`cours, leçon`, b:`aula`, gr:`nom féminin`},
      {w:`ligar`, p:`liˈɡaɾ`, fr:`appeler (au téléphone) ; allumer`, b:`ligar · verbe en -ar`, gr:`verbe`, ff:`Au sens courant, ligar a alguém = téléphoner à quelqu'un, pas « lier ». Ligar a luz = allumer la lumière.`},
      {w:`perguntar`, p:`pɨɾɡũˈtaɾ`, fr:`demander (poser une question)`, b:`perguntar · verbe en -ar`, gr:`verbe`},
      {w:`junto`, p:`ˈʒũtu`, fr:`ensemble (s'accorde : juntos, juntas)`, b:`junto, junta`, gr:`adjectif`},
      {w:`restaurante`, p:`ʁɨʃtawˈɾɐ̃tɨ`, fr:`restaurant`, b:`restaurante`, gr:`nom masculin`},
      {w:`descansar`, p:`dɨʃkɐ̃ˈsaɾ`, fr:`se reposer`, b:`descansar · verbe en -ar`, gr:`verbe`},
      {w:`deitar-se`, p:`dɐjˈtaɾsɨ`, fr:`se coucher`, b:`deitar-se · verbe pronominal en -ar`, gr:`verbe`},
      {w:`onze`, p:`ˈõzɨ`, fr:`onze`, b:`onze`, gr:`nombre`}
    ],

    grammar: {
      key: `presente-ar`,
      cat: `Conjugaison`,
      concept: `Le présent des verbes en <i lang="pt-PT">-ar</i>`,
      excerpt: [
        `A Marta <mark>acorda</mark> às sete. <mark>Toma</mark> o pequeno-almoço em casa.`,
        `Os alunos <mark>falam</mark> muito e às vezes não <mark>estudam</mark>!`,
        `— <mark>Jantamos</mark> juntos? — <mark>pergunta</mark> ele.`
      ],
      exp: `<p>Les verbes en <i lang="pt-PT">-ar</i> forment le plus grand groupe, comme les verbes en « -er » en français. On enlève <i lang="pt-PT">-ar</i> et on ajoute les terminaisons : <b>-o, -as, -a, -amos, -ais, -am</b>.</p>
<p>Chaque personne a sa terminaison, et elles s'entendent toutes. C'est pour cela qu'on peut omettre le pronom : <i lang="pt-PT">trabalha em casa</i> ne peut être que « il / elle travaille ».</p>
<p>À l'oral, la voyelle accentuée change parfois de timbre : <i lang="pt-PT">acordar</i> [ɐkuɾˈdaɾ] mais <i lang="pt-PT">acorda</i> [ɐˈkɔɾdɐ], avec un o ouvert.</p>`,
      table: {
        head: [`Personne`, `falar`, `trabalhar`, `jantar`],
        rows: [
          [`eu`, `fal<b>o</b>`, `trabalh<b>o</b>`, `jant<b>o</b>`],
          [`tu`, `fal<b>as</b>`, `trabalh<b>as</b>`, `jant<b>as</b>`],
          [`ele / ela / você`, `fal<b>a</b>`, `trabalh<b>a</b>`, `jant<b>a</b>`],
          [`nós`, `fal<b>amos</b>`, `trabalh<b>amos</b>`, `jant<b>amos</b>`],
          [`vós`, `fal<b>ais</b>`, `trabalh<b>ais</b>`, `jant<b>ais</b>`],
          [`eles / elas / vocês`, `fal<b>am</b>`, `trabalh<b>am</b>`, `jant<b>am</b>`]
        ]
      },
      compare: `<p>En français, « parle », « parles » et « parlent » se prononcent pareil. En portugais, <b>chaque terminaison s'entend</b> : <i lang="pt-PT">fala</i>, <i lang="pt-PT">falas</i>, <i lang="pt-PT">falam</i> (finale nasale « ãw »).</p>
<p><i lang="pt-PT">Ligar a alguém</i> veut dire « téléphoner à quelqu'un », et <i lang="pt-PT">acordar</i> veut dire « se réveiller », sans pronom. Les verbes réfléchis prennent leur pronom après le verbe, avec un trait d'union : <i lang="pt-PT">deita-se</i> (elle se couche).</p>`,
      also: [
        `<b>Heures</b> : <i lang="pt-PT">às sete</i>, <i lang="pt-PT">às oito</i>, <i lang="pt-PT">às sete e meia</i>. Pour « à une heure » : <i lang="pt-PT">à uma</i>.`,
        `<b>Moments de la journée</b> : <i lang="pt-PT">de manhã</i>, <i lang="pt-PT">à tarde</i>, <i lang="pt-PT">à noite</i>.`,
        `<b>Apanhar</b> le métro, le bus, le train : c'est le verbe du Portugal. Au Brésil on dit <i lang="pt-BR">pegar</i>.`
      ]
    }
  };

  /* ─── T8 — Na cantina ────────────────────────── */
  var T8 = {
    id: `a1-8`, level: `A1`,
    title: `Na cantina`,
    titleFr: `À la cantine`,
    theme: `Repas · transports`,
    sentences: [
      [
        {w:`A cantina da escola`, p:`ɐ kɐ̃ˈtinɐ dɐ ɨʃˈkɔlɐ`, t:`la cantine de l'école`},
        {w:`abre ao meio-dia.`, p:`ˈabɾɨ aw mɐjuˈdiɐ`, t:`ouvre à midi`}
      ],
      [
        {w:`A Marta e o colega Tiago`, p:`ɐ ˈmaɾtɐ i u kuˈlɛɡɐ tiˈaɡu`, t:`Marta et son collègue Tiago`},
        {w:`comem juntos.`, p:`ˈkɔmɐ̃j ˈʒũtuʃ`, t:`mangent ensemble`}
      ],
      [
        {w:`— O que comes hoje?`, p:`u kɨ ˈkɔmɨʒ ˈoʒɨ`, t:`qu'est-ce que tu manges aujourd'hui ?`},
        {w:`— pergunta a Marta.`, p:`pɨɾˈɡũtɐ ɐ ˈmaɾtɐ`, t:`demande Marta`}
      ],
      [
        {w:`— Como sopa`, p:`ˈkomu ˈsopɐ`, t:`je mange de la soupe`},
        {w:`e peixe grelhado.`, p:`i ˈpɐjʃɨ ɡɾɨˈʎadu`, t:`et du poisson grillé`},
        {w:`E tu?`, p:`i ˈtu`, t:`et toi ?`}
      ],
      [
        {w:`— Eu prefiro carne.`, p:`ˈew pɾɨˈfiɾu ˈkaɾnɨ`, t:`moi, je préfère la viande`},
        {w:`Bebes água ou sumo?`, p:`ˈbɛbɨz ˈaɡwɐ o ˈsumu`, t:`tu bois de l'eau ou du jus ?`}
      ],
      [
        {w:`— Água, sempre.`, p:`ˈaɡwɐ ˈsẽpɾɨ`, t:`de l'eau, toujours`}
      ],
      [
        {w:`O Tiago vive em Almada,`, p:`u tiˈaɡu ˈvivɨ ɐ̃j aɫˈmadɐ`, t:`Tiago habite à Almada`},
        {w:`do outro lado do rio.`, p:`du ˈotɾu ˈladu du ˈʁiu`, t:`de l'autre côté du fleuve`}
      ],
      [
        {w:`Todos os dias,`, p:`ˈtoduz uʒ ˈdiɐʃ`, t:`tous les jours`, x:1},
        {w:`parte de casa às sete`, p:`ˈpaɾtɨ dɨ ˈkazɐ aʃ ˈsɛtɨ`, t:`il part de chez lui à sept heures`},
        {w:`e apanha o barco.`, p:`i ɐˈpɐɲɐ u ˈbaɾku`, t:`et prend le bateau`}
      ],
      [
        {w:`— Não é cansativo?`, p:`ˈnɐ̃w ˈɛ kɐ̃sɐˈtivu`, t:`ce n'est pas fatigant ?`}
      ],
      [
        {w:`— Não!`, p:`ˈnɐ̃w`, t:`non !`},
        {w:`No barco,`, p:`nu ˈbaɾku`, t:`sur le bateau`},
        {w:`leio,`, p:`ˈlɐju`, t:`je lis (ler)`},
        {w:`escrevo mensagens`, p:`ɨʃˈkɾevu mẽˈsaʒɐ̃jz`, t:`j'écris des messages`},
        {w:`e vejo o Tejo.`, p:`i ˈvɐʒu u ˈtɐʒu`, t:`et je vois le Tage (ver)`}
      ],
      [
        {w:`— Que sorte!`, p:`kɨ ˈsɔɾtɨ`, t:`quelle chance !`, x:1, ff:1},
        {w:`No metro,`, p:`nu ˈmɛtɾu`, t:`dans le métro`},
        {w:`só vejo túneis.`, p:`ˈsɔ ˈvɐʒu ˈtunɐjʃ`, t:`je ne vois que des tunnels`}
      ]
    ],

    vocabulary: [
      {w:`cantina`, p:`kɐ̃ˈtinɐ`, fr:`cantine`, b:`cantina`, gr:`nom féminin`},
      {w:`abrir`, p:`ɐˈbɾiɾ`, fr:`ouvrir`, b:`abrir · verbe en -ir`, gr:`verbe`},
      {w:`meio-dia`, p:`mɐjuˈdiɐ`, fr:`midi ; meia-noite = minuit`, b:`meio-dia`, gr:`nom masculin`},
      {w:`colega`, p:`kuˈlɛɡɐ`, fr:`collègue ; camarade de classe`, b:`colega (o / a)`, gr:`nom masculin et féminin`},
      {w:`o que`, p:`u kɨ`, fr:`que, qu'est-ce que`, b:`o que`, gr:`interrogatif`},
      {w:`sopa`, p:`ˈsopɐ`, fr:`soupe (servie à presque tous les repas)`, b:`sopa`, gr:`nom féminin`},
      {w:`grelhado`, p:`ɡɾɨˈʎadu`, fr:`grillé`, b:`grelhado, grelhada`, gr:`adjectif`},
      {w:`preferir`, p:`pɾɨfɨˈɾiɾ`, fr:`préférer`, b:`preferir · verbe en -ir (prefiro, preferes)`, gr:`verbe`},
      {w:`carne`, p:`ˈkaɾnɨ`, fr:`viande`, b:`carne`, gr:`nom féminin`},
      {w:`água`, p:`ˈaɡwɐ`, fr:`eau`, b:`água`, gr:`nom féminin`},
      {w:`ou`, p:`ˈo`, fr:`ou`, b:`ou`, gr:`conjonction`},
      {w:`sumo`, p:`ˈsumu`, fr:`jus de fruits (au Brésil : suco)`, b:`sumo`, gr:`nom masculin`},
      {w:`outro`, p:`ˈotɾu`, fr:`autre ; do outro lado = de l'autre côté`, b:`outro, outra`, gr:`adjectif`},
      {w:`lado`, p:`ˈladu`, fr:`côté`, b:`lado`, gr:`nom masculin`},
      {w:`rio`, p:`ˈʁiu`, fr:`fleuve, rivière`, b:`rio`, gr:`nom masculin`},
      {w:`todos os dias`, p:`ˈtoduz uʒ ˈdiɐʃ`, fr:`tous les jours`, b:`dia`, gr:`locution adverbiale`},
      {w:`partir`, p:`pɐɾˈtiɾ`, fr:`partir ; aussi : casser`, b:`partir · verbe en -ir`, gr:`verbe`},
      {w:`barco`, p:`ˈbaɾku`, fr:`bateau`, b:`barco`, gr:`nom masculin`},
      {w:`cansativo`, p:`kɐ̃sɐˈtivu`, fr:`fatigant`, b:`cansativo, cansativa`, gr:`adjectif`},
      {w:`ler`, p:`ˈleɾ`, fr:`lire`, b:`ler · verbe irrégulier (leio, lês, lê)`, gr:`verbe`},
      {w:`escrever`, p:`ɨʃkɾɨˈveɾ`, fr:`écrire`, b:`escrever · verbe en -er`, gr:`verbe`},
      {w:`mensagem`, p:`mẽˈsaʒɐ̃j`, fr:`message (féminin !)`, b:`mensagem (pl. mensagens)`, gr:`nom féminin`},
      {w:`ver`, p:`ˈveɾ`, fr:`voir`, b:`ver · verbe irrégulier (vejo, vês, vê)`, gr:`verbe`},
      {w:`o Tejo`, p:`u ˈtɐʒu`, fr:`le Tage, fleuve de Lisbonne`, b:`Tejo`, gr:`nom propre`},
      {w:`que sorte!`, p:`kɨ ˈsɔɾtɨ`, fr:`quelle chance !`, b:`sorte`, gr:`exclamation`, ff:`Sorte = chance. « Une sorte de » se dit uma espécie de.`},
      {w:`só`, p:`ˈsɔ`, fr:`seulement, ne… que ; aussi : seul`, b:`só`, gr:`adverbe`},
      {w:`túnel`, p:`ˈtunɛɫ`, fr:`tunnel`, b:`túnel (pl. túneis)`, gr:`nom masculin`}
    ],

    grammar: {
      key: `presente-er-ir`,
      cat: `Conjugaison`,
      concept: `Le présent des verbes en <i lang="pt-PT">-er</i> et en <i lang="pt-PT">-ir</i>`,
      excerpt: [
        `A Marta e o colega Tiago <mark>comem</mark> juntos. — O que <mark>comes</mark> hoje?`,
        `<mark>Bebes</mark> água ou sumo? — O Tiago <mark>vive</mark> em Almada.`,
        `Todos os dias, <mark>parte</mark> de casa às sete. A cantina <mark>abre</mark> ao meio-dia.`
      ],
      exp: `<p>Les verbes en <i lang="pt-PT">-er</i> et en <i lang="pt-PT">-ir</i> se conjuguent presque de la même façon : <b>-o, -es, -e, …, -em</b>. Seules les formes <i lang="pt-PT">nós</i> et <i lang="pt-PT">vós</i> gardent la voyelle de l'infinitif : <i lang="pt-PT">comemos</i> mais <i lang="pt-PT">partimos</i>.</p>
<p>À l'oral, la voyelle du radical s'<b>ouvre</b> souvent quand elle est accentuée : <i lang="pt-PT">como</i> [ˈkomu] (o fermé) mais <i lang="pt-PT">comes</i> [ˈkɔmɨʃ] (o ouvert), <i lang="pt-PT">bebo</i> [ˈbebu] mais <i lang="pt-PT">bebes</i> [ˈbɛbɨʃ]. La voix enregistrée permet de l'entendre.</p>
<p>Quelques verbes très fréquents sont irréguliers à la 1<sup>re</sup> personne : <i lang="pt-PT">ler</i> → <i lang="pt-PT">leio</i>, <i lang="pt-PT">ver</i> → <i lang="pt-PT">vejo</i>, <i lang="pt-PT">preferir</i> → <i lang="pt-PT">prefiro</i>.</p>`,
      table: {
        head: [`Personne`, `comer`, `beber`, `partir`, `abrir`],
        rows: [
          [`eu`, `com<b>o</b>`, `beb<b>o</b>`, `part<b>o</b>`, `abr<b>o</b>`],
          [`tu`, `com<b>es</b>`, `beb<b>es</b>`, `part<b>es</b>`, `abr<b>es</b>`],
          [`ele / ela / você`, `com<b>e</b>`, `beb<b>e</b>`, `part<b>e</b>`, `abr<b>e</b>`],
          [`nós`, `com<b>emos</b>`, `beb<b>emos</b>`, `part<b>imos</b>`, `abr<b>imos</b>`],
          [`vós`, `com<b>eis</b>`, `beb<b>eis</b>`, `part<b>is</b>`, `abr<b>is</b>`],
          [`eles / elas / vocês`, `com<b>em</b>`, `beb<b>em</b>`, `part<b>em</b>`, `abr<b>em</b>`]
        ]
      },
      compare: `<p>Le portugais n'emploie pas de partitif : « de la soupe » se dit simplement <i lang="pt-PT">sopa</i>, « de l'eau » <i lang="pt-PT">água</i>. <i lang="pt-PT">Como sopa</i> = « je mange de la soupe ».</p>
<p>La terminaison <i lang="pt-PT">-em</i> de <i lang="pt-PT">comem</i> se prononce comme une nasale suivie d'un petit « y » : « kò-mãy ».</p>`,
      also: [
        `<b>O que…?</b> = « qu'est-ce que… ? » : <i lang="pt-PT">O que comes hoje?</i>`,
        `<b>Que sorte!</b> : exclamation avec <i lang="pt-PT">que</i> + nom, « quelle chance ! ».`,
        `<b>Só</b> = « ne… que » : <i lang="pt-PT">só vejo túneis</i>, « je ne vois que des tunnels ».`
      ]
    }
  };

  /* ─── T9 — Vamos a Sintra ────────────────────── */
  var T9 = {
    id: `a1-9`, level: `A1`,
    title: `Vamos a Sintra`,
    titleFr: `On va à Sintra`,
    theme: `Week-end · excursion`,
    sentences: [
      [
        {w:`Sexta-feira à noite,`, p:`ˈsɐjʃtɐ ˈfɐjɾɐ a ˈnojtɨ`, t:`vendredi soir`, pw:1},
        {w:`o Rui faz uma pergunta`, p:`u ˈʁuj ˈfaz ˈumɐ pɨɾˈɡũtɐ`, t:`Rui pose une question (fazer)`},
        {w:`à Marta:`, p:`a ˈmaɾtɐ`, t:`à Marta`}
      ],
      [
        {w:`— O que fazes amanhã?`, p:`u kɨ ˈfazɨz amɐˈɲɐ̃`, t:`qu'est-ce que tu fais demain ?`}
      ],
      [
        {w:`— Não tenho planos.`, p:`ˈnɐ̃w ˈtɐɲu ˈplɐnuʃ`, t:`je n'ai pas de projets`},
        {w:`E tu?`, p:`i ˈtu`, t:`et toi ?`}
      ],
      [
        {w:`— Vou a Sintra`, p:`ˈvo ɐ ˈsĩtɾɐ`, t:`je vais à Sintra`},
        {w:`com uns amigos.`, p:`kõ ũz ɐˈmiɡuʃ`, t:`avec des amis`},
        {w:`Vens connosco?`, p:`ˈvɐ̃jʃ kuˈnoʃku`, t:`tu viens avec nous ?`}
      ],
      [
        {w:`— Vou!`, p:`ˈvo`, t:`oui, je viens ! (litt. « je vais »)`},
        {w:`Como vamos?`, p:`ˈkomu ˈvɐmuʃ`, t:`comment on y va ?`}
      ],
      [
        {w:`— Vamos de comboio.`, p:`ˈvɐmuʒ dɨ kõˈbɔju`, t:`on y va en train`, ff:1},
        {w:`O comboio parte do Rossio`, p:`u kõˈbɔju ˈpaɾtɨ du ʁuˈsiu`, t:`le train part de la gare du Rossio`},
        {w:`às nove.`, p:`aʒ ˈnɔvɨ`, t:`à neuf heures`}
      ],
      [
        {w:`— Temos de levar casacos?`, p:`ˈtemuʒ dɨ lɨˈvaɾ kɐˈzakuʃ`, t:`on doit prendre des vestes ?`},
        {w:`Em Sintra`, p:`ɐ̃j ˈsĩtɾɐ`, t:`à Sintra`},
        {w:`faz sempre mais frio.`, p:`ˈfaʃ ˈsẽpɾɨ ˈmajʃ ˈfɾiu`, t:`il fait toujours plus froid (fazer : la météo)`}
      ],
      [
        {w:`— Sim,`, p:`ˈsĩ`, t:`oui`},
        {w:`e eu faço sanduíches`, p:`i ˈew ˈfasu sɐ̃duˈiʃɨʃ`, t:`et moi, je fais des sandwichs`},
        {w:`para o almoço.`, p:`ˈpɐɾɐ u aɫˈmosu`, t:`pour le déjeuner`}
      ],
      [
        {w:`— Ótimo!`, p:`ˈɔtimu`, t:`super !`},
        {w:`Então, até amanhã!`, p:`ẽˈtɐ̃w ɐˈtɛ amɐˈɲɐ̃`, t:`alors, à demain !`}
      ],
      [
        {w:`No sábado,`, p:`nu ˈsabɐdu`, t:`samedi`},
        {w:`vão todos`, p:`ˈvɐ̃w ˈtoduz`, t:`ils vont tous`},
        {w:`ao Palácio da Pena`, p:`aw pɐˈlasju dɐ ˈpenɐ`, t:`au palais de Pena`},
        {w:`e têm um dia fantástico.`, p:`i ˈtɐ̃jɐ̃j ũ ˈdiɐ fɐ̃ˈtaʃtiku`, t:`et passent (litt. « ont ») une journée fantastique`}
      ]
    ],

    vocabulary: [
      {w:`sexta-feira`, p:`ˈsɐjʃtɐ ˈfɐjɾɐ`, fr:`vendredi`, b:`sexta-feira`, gr:`nom féminin`},
      {w:`fazer`, p:`fɐˈzeɾ`, fr:`faire`, b:`fazer · verbe irrégulier (faço, fazes, faz)`, gr:`verbe`},
      {w:`pergunta`, p:`pɨɾˈɡũtɐ`, fr:`question ; fazer uma pergunta = poser une question`, b:`pergunta`, gr:`nom féminin`},
      {w:`amanhã`, p:`amɐˈɲɐ̃`, fr:`demain`, b:`amanhã`, gr:`adverbe`},
      {w:`plano`, p:`ˈplɐnu`, fr:`projet, plan`, b:`plano`, gr:`nom masculin`},
      {w:`amigo`, p:`ɐˈmiɡu`, fr:`ami`, b:`amigo, amiga`, gr:`nom masculin`},
      {w:`vir`, p:`ˈviɾ`, fr:`venir`, b:`vir · verbe irrégulier (venho, vens, vem)`, gr:`verbe`},
      {w:`como`, p:`ˈkomu`, fr:`comment ; comme`, b:`como`, gr:`adverbe interrogatif`},
      {w:`comboio`, p:`kõˈbɔju`, fr:`train (au Brésil : trem)`, b:`comboio`, gr:`nom masculin`, ff:`≠ « convoi ». Comboio = train ; de comboio = en train.`},
      {w:`nove`, p:`ˈnɔvɨ`, fr:`neuf (9)`, b:`nove`, gr:`nombre`},
      {w:`ter de`, p:`ˈteɾ dɨ`, fr:`devoir, être obligé de`, b:`ter · verbe irrégulier`, gr:`périphrase`},
      {w:`casaco`, p:`kɐˈzaku`, fr:`veste, manteau`, b:`casaco`, gr:`nom masculin`, ff:`≠ « casaque ». Um casaco = une veste ou un manteau.`},
      {w:`frio`, p:`ˈfɾiu`, fr:`froid ; faz frio = il fait froid`, b:`frio, fria`, gr:`adjectif / nom masculin`},
      {w:`mais`, p:`ˈmajʃ`, fr:`plus ; davantage`, b:`mais`, gr:`adverbe`},
      {w:`sim`, p:`ˈsĩ`, fr:`oui`, b:`sim`, gr:`adverbe`},
      {w:`sanduíche`, p:`sɐ̃duˈiʃɨ`, fr:`sandwich`, b:`sanduíche (a / o)`, gr:`nom`},
      {w:`almoço`, p:`aɫˈmosu`, fr:`déjeuner (repas de midi)`, b:`almoço`, gr:`nom masculin`},
      {w:`ótimo`, p:`ˈɔtimu`, fr:`excellent, super`, b:`ótimo, ótima`, gr:`adjectif`},
      {w:`até amanhã`, p:`ɐˈtɛ amɐˈɲɐ̃`, fr:`à demain`, b:`até`, gr:`formule`},
      {w:`palácio`, p:`pɐˈlasju`, fr:`palais`, b:`palácio`, gr:`nom masculin`},
      {w:`fantástico`, p:`fɐ̃ˈtaʃtiku`, fr:`fantastique, génial`, b:`fantástico, fantástica`, gr:`adjectif`}
    ],

    grammar: {
      key: `irregulares1`,
      cat: `Conjugaison`,
      concept: `Trois irréguliers essentiels : <i lang="pt-PT">ter</i>, <i lang="pt-PT">ir</i>, <i lang="pt-PT">fazer</i>`,
      excerpt: [
        `— O que <mark>fazes</mark> amanhã? — Não <mark>tenho</mark> planos.`,
        `— <mark>Vou</mark> a Sintra com uns amigos. — <mark>Vamos</mark> de comboio.`,
        `— <mark>Temos</mark> de levar casacos? Em Sintra <mark>faz</mark> sempre mais frio.`
      ],
      exp: `<p>Ces trois verbes reviennent dans presque toutes les phrases. Ils sont irréguliers, il faut donc les apprendre par cœur.</p>
<p><b>Ter</b> (avoir) sert aussi à dire une obligation : <i lang="pt-PT">ter de</i> + infinitif = « devoir ». <i lang="pt-PT">Temos de levar casacos</i> = « nous devons prendre des vestes ».</p>
<p><b>Ir</b> (aller) se construit avec <i lang="pt-PT">a</i> pour une visite (<i lang="pt-PT">vou a Sintra</i>) et avec <i lang="pt-PT">para</i> pour un séjour plus long ou un retour (<i lang="pt-PT">vou para casa</i>). Le moyen de transport prend <i lang="pt-PT">de</i> : <i lang="pt-PT">de comboio</i>, <i lang="pt-PT">de carro</i>, mais <i lang="pt-PT">a pé</i>.</p>
<p><b>Fazer</b> (faire) sert, comme en français, pour la météo : <i lang="pt-PT">faz frio</i>, <i lang="pt-PT">faz calor</i>.</p>`,
      table: {
        head: [`Personne`, `ter`, `ir`, `fazer`],
        rows: [
          [`eu`, `<b>tenho</b>`, `<b>vou</b>`, `<b>faço</b>`],
          [`tu`, `<b>tens</b>`, `<b>vais</b>`, `<b>fazes</b>`],
          [`ele / ela / você`, `<b>tem</b>`, `<b>vai</b>`, `<b>faz</b>`],
          [`nós`, `<b>temos</b>`, `<b>vamos</b>`, `<b>fazemos</b>`],
          [`vós`, `<b>tendes</b>`, `<b>ides</b>`, `<b>fazeis</b>`],
          [`eles / elas / vocês`, `<b>têm</b>`, `<b>vão</b>`, `<b>fazem</b>`]
        ]
      },
      compare: `<p><i lang="pt-PT">Tem</i> (il a) et <i lang="pt-PT">têm</i> (ils ont) s'écrivent presque pareil. À l'oral, la forme plurielle double la nasale : « tãy » / « tãy-ãy ».</p>
<p>Pour accepter une invitation, on répète le verbe au lieu de dire « oui » : <i lang="pt-PT">Vens? — Vou!</i> Le portugais dit « je vais » là où le français dit « je viens ».</p>`,
      also: [
        `<b>Vir</b> (venir) : <i lang="pt-PT">venho, vens, vem, vimos, vêm</i>. <i lang="pt-PT">Vens connosco?</i> = « tu viens avec nous ? »`,
        `<b>Sexta-feira</b> : les jours de la semaine se comptent à partir du dimanche : <i lang="pt-PT">segunda-feira</i> (lundi, le 2<sup>e</sup> jour) jusqu'à <i lang="pt-PT">sexta-feira</i> (vendredi, le 6<sup>e</sup>).`,
        `<b>Até amanhã</b> : « à demain ». Sur le même modèle : <i lang="pt-PT">até logo</i>, <i lang="pt-PT">até já</i> (à tout de suite).`
      ]
    }
  };

  /* ─── T10 — Queres ir à praia? ───────────────── */
  var T10 = {
    id: `a1-10`, level: `A1`,
    title: `Queres ir à praia?`,
    titleFr: `Tu veux aller à la plage ?`,
    theme: `Invitation · loisirs`,
    sentences: [
      [
        {w:`A Sofia`, p:`ɐ suˈfiɐ`, t:`Sofia`},
        {w:`telefona à irmã.`, p:`tɨlɨˈfɔnɐ a iɾˈmɐ̃`, t:`téléphone à sa sœur`}
      ],
      [
        {w:`— Marta, queres ir à praia`, p:`ˈmaɾtɐ ˈkɛɾɨz ˈiɾ a ˈpɾajɐ`, t:`Marta, tu veux aller à la plage`},
        {w:`no domingo?`, p:`nu duˈmĩɡu`, t:`dimanche ?`}
      ],
      [
        {w:`— Quero,`, p:`ˈkɛɾu`, t:`je veux bien`},
        {w:`mas não posso.`, p:`mɐʒ ˈnɐ̃w ˈpɔsu`, t:`mais je ne peux pas`},
        {w:`Tenho de corrigir testes.`, p:`ˈtɐɲu dɨ kuʁiˈʒiɾ ˈtɛʃtɨʃ`, t:`je dois corriger des contrôles`}
      ],
      [
        {w:`— E no sábado?`, p:`i nu ˈsabɐdu`, t:`et samedi ?`},
        {w:`Podes?`, p:`ˈpɔdɨʃ`, t:`tu peux ?`}
      ],
      [
        {w:`— No sábado posso.`, p:`nu ˈsabɐdu ˈpɔsu`, t:`samedi, je peux`},
        {w:`Mas não sei nadar bem…`, p:`mɐʒ ˈnɐ̃w ˈsɐj nɐˈdaɾ ˈbɐ̃j`, t:`mais je ne sais pas bien nager…`}
      ],
      [
        {w:`— Não faz mal!`, p:`ˈnɐ̃w ˈfaʒ ˈmaɫ`, t:`ce n'est pas grave !`, x:1},
        {w:`Vamos a uma praia tranquila.`, p:`ˈvɐmuz ɐ ˈumɐ ˈpɾajɐ tɾɐ̃ˈkwilɐ`, t:`on va à une plage tranquille`}
      ],
      [
        {w:`— E podemos almoçar lá?`, p:`i puˈdemuz aɫmuˈsaɾ ˈla`, t:`et on peut déjeuner là-bas ?`}
      ],
      [
        {w:`— Claro!`, p:`ˈklaɾu`, t:`bien sûr !`, x:1},
        {w:`Conheço`, p:`kuˈɲesu`, t:`je connais`},
        {w:`um ótimo restaurante de peixe.`, p:`ũ ˈɔtimu ʁɨʃtawˈɾɐ̃tɨ dɨ ˈpɐjʃɨ`, t:`un excellent restaurant de poisson`}
      ],
      [
        {w:`— Então está combinado!`, p:`ẽˈtɐ̃w ɨʃˈta kõbiˈnadu`, t:`alors c'est entendu !`, x:1}
      ],
      [
        {w:`— O Rui também pode vir?`, p:`u ˈʁuj tɐ̃ˈbɐ̃j ˈpɔdɨ ˈviɾ`, t:`Rui peut venir aussi ?`}
      ],
      [
        {w:`— Pode,`, p:`ˈpɔdɨ`, t:`oui, il peut`},
        {w:`mas ele não sabe nadar!`, p:`mɐz ˈelɨ ˈnɐ̃w ˈsabɨ nɐˈdaɾ`, t:`mais il ne sait pas nager !`}
      ]
    ],

    vocabulary: [
      {w:`telefonar`, p:`tɨlɨfuˈnaɾ`, fr:`téléphoner ; telefonar a alguém`, b:`telefonar · verbe en -ar`, gr:`verbe`},
      {w:`praia`, p:`ˈpɾajɐ`, fr:`plage`, b:`praia`, gr:`nom féminin`},
      {w:`poder`, p:`puˈdeɾ`, fr:`pouvoir`, b:`poder · verbe irrégulier (posso, podes, pode)`, gr:`verbe`},
      {w:`corrigir`, p:`kuʁiˈʒiɾ`, fr:`corriger`, b:`corrigir · verbe en -ir (corrijo)`, gr:`verbe`},
      {w:`teste`, p:`ˈtɛʃtɨ`, fr:`contrôle, interrogation écrite`, b:`teste`, gr:`nom masculin`},
      {w:`saber`, p:`sɐˈbeɾ`, fr:`savoir ; savoir faire`, b:`saber · verbe irrégulier (sei, sabes, sabe)`, gr:`verbe`},
      {w:`nadar`, p:`nɐˈdaɾ`, fr:`nager`, b:`nadar · verbe en -ar`, gr:`verbe`},
      {w:`não faz mal`, p:`ˈnɐ̃w ˈfaʒ ˈmaɫ`, fr:`ce n'est pas grave, pas de souci`, b:`fazer + mal`, gr:`expression`},
      {w:`tranquilo`, p:`tɾɐ̃ˈkwilu`, fr:`tranquille, calme`, b:`tranquilo, tranquila`, gr:`adjectif`},
      {w:`lá`, p:`ˈla`, fr:`là-bas (loin des deux interlocuteurs)`, b:`lá`, gr:`adverbe`},
      {w:`claro`, p:`ˈklaɾu`, fr:`bien sûr ; aussi : clair`, b:`claro, clara`, gr:`adverbe / adjectif`},
      {w:`está combinado`, p:`ɨʃˈta kõbiˈnadu`, fr:`c'est entendu, ça marche`, b:`combinar · verbe en -ar`, gr:`expression`}
    ],

    grammar: {
      key: `querer-poder`,
      cat: `Conjugaison`,
      concept: `<i lang="pt-PT">Querer</i>, <i lang="pt-PT">poder</i>, <i lang="pt-PT">saber</i> + infinitif`,
      excerpt: [
        `— Marta, <mark>queres ir</mark> à praia no domingo? — Quero, mas não <mark>posso</mark>.`,
        `Mas não <mark>sei nadar</mark> bem… — E <mark>podemos almoçar</mark> lá?`,
        `— O Rui também <mark>pode vir</mark>? — Pode, mas ele não <mark>sabe nadar</mark>!`
      ],
      exp: `<p>Comme en français, ces verbes se placent directement devant un <b>infinitif</b>, sans préposition : <i lang="pt-PT">queres ir</i>, <i lang="pt-PT">podemos almoçar</i>, <i lang="pt-PT">sabe nadar</i>.</p>
<p><b>Querer</b> = vouloir. <b>Poder</b> = pouvoir : avoir la possibilité ou la permission. <b>Saber</b> = savoir, et aussi <b>savoir faire</b> quelque chose qu'on a appris : nager, conduire, cuisiner.</p>
<p>Le Rui <i lang="pt-PT">pode vir</i> (il est libre de venir), mais il <i lang="pt-PT">não sabe nadar</i> (il n'a pas appris).</p>`,
      table: {
        head: [`Personne`, `querer`, `poder`, `saber`],
        rows: [
          [`eu`, `<b>quero</b>`, `<b>posso</b>`, `<b>sei</b>`],
          [`tu`, `<b>queres</b>`, `<b>podes</b>`, `<b>sabes</b>`],
          [`ele / ela / você`, `<b>quer</b>`, `<b>pode</b>`, `<b>sabe</b>`],
          [`nós`, `<b>queremos</b>`, `<b>podemos</b>`, `<b>sabemos</b>`],
          [`eles / elas / vocês`, `<b>querem</b>`, `<b>podem</b>`, `<b>sabem</b>`]
        ]
      },
      compare: `<p><b>Saber ou conhecer ?</b> On <i lang="pt-PT">sabe</i> une information ou un savoir-faire (<i lang="pt-PT">sei nadar</i>, <i lang="pt-PT">sei a morada</i>). On <i lang="pt-PT">conhece</i> une personne, un lieu ou une chose (<i lang="pt-PT">conheço um restaurante</i>). C'est la même nuance que « savoir / connaître ».</p>
<p>Pour répondre « oui », on reprend le verbe : <i lang="pt-PT">Podes? — Posso.</i> / <i lang="pt-PT">Pode vir? — Pode.</i> C'est très naturel en portugais.</p>`,
      also: [
        `<b>À la plage</b> : <i lang="pt-PT">à praia</i> (a + a). La direction prend <i lang="pt-PT">a</i>.`,
        `<b>Aqui, aí, ali, lá</b> : ici (près de moi), là (près de toi), là-bas (visible), là-bas (lointain).`,
        `<b>Está combinado</b> : formule pour conclure un rendez-vous, « c'est entendu ».`
      ]
    }
  };

  /* ─── T11 — Na estação ───────────────────────── */
  var T11 = {
    id: `a1-11`, level: `A1`,
    title: `Na estação`,
    titleFr: `À la gare`,
    theme: `Transports · politesse`,
    sentences: [
      [
        {w:`O pai da Marta`, p:`u ˈpaj dɐ ˈmaɾtɐ`, t:`le père de Marta`},
        {w:`vai ao Porto`, p:`ˈvaj aw ˈpoɾtu`, t:`va à Porto`},
        {w:`de comboio.`, p:`dɨ kõˈbɔju`, t:`en train`}
      ],
      [
        {w:`Na bilheteira`, p:`nɐ biʎɨˈtɐjɾɐ`, t:`au guichet`},
        {w:`de Santa Apolónia:`, p:`dɨ ˈsɐ̃tɐ ɐpuˈlɔniɐ`, t:`de la gare Santa Apolónia`}
      ],
      [
        {w:`— Boa tarde.`, p:`ˈboɐ ˈtaɾdɨ`, t:`bonjour (l'après-midi)`, x:1},
        {w:`Queria um bilhete`, p:`kɨˈɾiɐ ũ biˈʎetɨ`, t:`je voudrais un billet`},
        {w:`para o Porto,`, p:`ˈpɐɾɐ u ˈpoɾtu`, t:`pour Porto`},
        {w:`se faz favor.`, p:`sɨ ˈfaʃ fɐˈvoɾ`, t:`s'il vous plaît`, x:1}
      ],
      [
        {w:`— O senhor quer`, p:`u sɨˈɲoɾ ˈkɛɾ`, t:`vous voulez (litt. « le monsieur veut »)`},
        {w:`ida e volta?`, p:`ˈidɐ i ˈvɔɫtɐ`, t:`un aller-retour ?`, x:1}
      ],
      [
        {w:`— Só ida.`, p:`ˈsɔ ˈidɐ`, t:`aller simple`},
        {w:`A que horas`, p:`ɐ kɨ ˈɔɾɐʃ`, t:`à quelle heure`, x:1},
        {w:`parte o próximo?`, p:`ˈpaɾtɨ u ˈpɾɔsimu`, t:`part le prochain ?`}
      ],
      [
        {w:`— Às dez e um quarto,`, p:`aʒ ˈdɛz i ũ ˈkwaɾtu`, t:`à dix heures et quart`},
        {w:`da linha três.`, p:`dɐ ˈliɲɐ ˈtɾeʃ`, t:`voie trois`}
      ],
      [
        {w:`— Muito obrigado.`, p:`ˈmũjtu ɔbɾiˈɡadu`, t:`merci beaucoup`},
        {w:`A senhora é muito amável.`, p:`ɐ sɨˈɲɔɾɐ ˈɛ ˈmũjtu ɐˈmavɛɫ`, t:`vous êtes très aimable (litt. « la dame est »)`}
      ],
      [
        {w:`No comboio,`, p:`nu kõˈbɔju`, t:`dans le train`},
        {w:`um rapaz pergunta:`, p:`ũ ʁɐˈpaʃ pɨɾˈɡũtɐ`, t:`un jeune homme demande`},
        {w:`— O senhor é do Porto?`, p:`u sɨˈɲoɾ ˈɛ du ˈpoɾtu`, t:`vous êtes de Porto ?`}
      ],
      [
        {w:`— Sou, sim.`, p:`ˈso ˈsĩ`, t:`oui (litt. « je suis, oui »)`},
        {w:`E tu, és estudante?`, p:`i ˈtu ˈɛz ɨʃtuˈdɐ̃tɨ`, t:`et toi, tu es étudiant ?`}
      ],
      [
        {w:`— Sou.`, p:`ˈso`, t:`oui (litt. « je suis »)`},
        {w:`Estudo Engenharia em Lisboa.`, p:`ɨʃˈtudu ẽʒɨɲɐˈɾiɐ ɐ̃j liʒˈboɐ`, t:`j'étudie l'ingénierie à Lisbonne`}
      ]
    ],

    vocabulary: [
      {w:`bilheteira`, p:`biʎɨˈtɐjɾɐ`, fr:`guichet, billetterie`, b:`bilheteira`, gr:`nom féminin`},
      {w:`boa tarde`, p:`ˈboɐ ˈtaɾdɨ`, fr:`bonjour (de midi au coucher du soleil)`, b:`bom, boa + tarde`, gr:`salutation`},
      {w:`queria`, p:`kɨˈɾiɐ`, fr:`je voudrais (forme polie de querer)`, b:`querer · imparfait`, gr:`verbe`},
      {w:`bilhete`, p:`biˈʎetɨ`, fr:`billet, ticket`, b:`bilhete`, gr:`nom masculin`},
      {w:`o senhor`, p:`u sɨˈɲoɾ`, fr:`monsieur ; vous (vouvoiement respectueux)`, b:`senhor, senhora [sɨˈɲɔɾɐ]`, gr:`nom / forme d'adresse`},
      {w:`ida e volta`, p:`ˈidɐ i ˈvɔɫtɐ`, fr:`aller-retour ; só ida = aller simple`, b:`ida, volta`, gr:`expression`},
      {w:`a que horas`, p:`ɐ kɨ ˈɔɾɐʃ`, fr:`à quelle heure`, b:`hora`, gr:`interrogatif`},
      {w:`próximo`, p:`ˈpɾɔsimu`, fr:`prochain ; aussi : proche`, b:`próximo, próxima`, gr:`adjectif`},
      {w:`linha`, p:`ˈliɲɐ`, fr:`voie (gare) ; ligne`, b:`linha`, gr:`nom féminin`},
      {w:`três`, p:`ˈtɾeʃ`, fr:`trois`, b:`três`, gr:`nombre`},
      {w:`amável`, p:`ɐˈmavɛɫ`, fr:`aimable`, b:`amável (pl. amáveis)`, gr:`adjectif invariable en genre`},
      {w:`rapaz`, p:`ʁɐˈpaʃ`, fr:`garçon, jeune homme`, b:`rapaz (pl. rapazes)`, gr:`nom masculin`},
      {w:`estudante`, p:`ɨʃtuˈdɐ̃tɨ`, fr:`étudiant`, b:`estudante (o / a)`, gr:`nom masculin et féminin`},
      {w:`engenharia`, p:`ẽʒɨɲɐˈɾiɐ`, fr:`ingénierie (études d'ingénieur)`, b:`engenharia`, gr:`nom féminin`}
    ],

    grammar: {
      key: `tratamento`,
      cat: `Syntaxe avancée`,
      concept: `Tutoyer ou vouvoyer : <i lang="pt-PT">tu</i>, <i lang="pt-PT">você</i>, <i lang="pt-PT">o senhor</i>`,
      excerpt: [
        `— <mark>O senhor quer</mark> ida e volta?`,
        `— Muito obrigado. <mark>A senhora é</mark> muito amável.`,
        `— <mark>O senhor é</mark> do Porto? — Sou, sim. E <mark>tu, és</mark> estudante?`
      ],
      exp: `<p>Le Portugal a <b>trois façons</b> de s'adresser à quelqu'un, et il faut choisir avec soin.</p>
<p><b>Tu</b> (verbe à la 2<sup>e</sup> personne) : famille, amis, enfants, collègues proches. Un aîné tutoie volontiers un jeune, comme José avec l'étudiant.</p>
<p><b>O senhor / a senhora</b> (verbe à la 3<sup>e</sup> personne) : le vouvoiement respectueux pour un inconnu plus âgé, un client, un supérieur. On s'adresse à la personne comme si on parlait d'elle : <i lang="pt-PT">O senhor quer…?</i> = « Voulez-vous… ? ».</p>
<p><b>Você</b> (verbe à la 3<sup>e</sup> personne) existe, mais au Portugal il peut sembler <b>sec ou distant</b>. Beaucoup le contournent : on dit le prénom (<i lang="pt-PT">A Marta quer café?</i>) ou on omet le pronom (<i lang="pt-PT">Quer café?</i>). Au pluriel, en revanche, <i lang="pt-PT">vocês</i> est normal pour tout le monde.</p>`,
      table: {
        head: [``, `Proche`, `Neutre`, `Respectueux`],
        rows: [
          [`Pronom`, `tu`, `você (ou rien)`, `o senhor / a senhora`],
          [`Verbe`, `queres, és`, `quer, é`, `quer, é`],
          [`« Votre »`, `o teu, a tua`, `o seu, a sua`, `o seu, a sua`],
          [`Exemple`, `Queres um café?`, `Quer um café?`, `O senhor quer um café?`]
        ]
      },
      compare: `<p>En français, « vous » couvre tout le vouvoiement. En portugais, le vouvoiement passe par la <b>3<sup>e</sup> personne</b>, comme « Monsieur désire ? » au restaurant.</p>
<p>Au Brésil, <i lang="pt-BR">você</i> est le pronom normal entre amis, et <i lang="pt-BR">tu</i> est régional. Une série brésilienne utilisera donc <i lang="pt-BR">você</i> partout.</p>`,
      also: [
        `<b>Queria</b> (« je voudrais ») : l'imparfait de <i lang="pt-PT">querer</i> sert de formule polie, comme le conditionnel en français.`,
        `<b>Répondre par le verbe</b> : <i lang="pt-PT">É do Porto? — Sou, sim.</i> Le simple <i lang="pt-PT">sim</i> paraît un peu sec.`,
        `<b>Heures</b> : <i lang="pt-PT">dez e um quarto</i> (10 h 15), <i lang="pt-PT">dez e meia</i> (10 h 30), <i lang="pt-PT">um quarto para as onze</i> (10 h 45).`
      ]
    }
  };

  /* ─── T12 — Na loja ──────────────────────────── */
  var T12 = {
    id: `a1-12`, level: `A1`,
    title: `Na loja`,
    titleFr: `Dans la boutique`,
    theme: `Vêtements · couleurs`,
    sentences: [
      [
        {w:`A Marta e a Sofia`, p:`ɐ ˈmaɾtɐ i ɐ suˈfiɐ`, t:`Marta et Sofia`},
        {w:`estão numa loja`, p:`ɨʃˈtɐ̃w ˈnumɐ ˈlɔʒɐ`, t:`sont dans une boutique`, ff:1},
        {w:`do Chiado.`, p:`du ʃiˈadu`, t:`du Chiado (quartier commerçant de Lisbonne)`}
      ],
      [
        {w:`— Olha,`, p:`ˈoʎɐ`, t:`regarde`},
        {w:`esta camisola`, p:`ˈɛʃtɐ kɐmiˈzɔlɐ`, t:`ce pull-là (près de moi)`, ff:1},
        {w:`é gira!`, p:`ˈɛ ˈʒiɾɐ`, t:`est mignon !`}
      ],
      [
        {w:`— Essa?`, p:`ˈɛsɐ`, t:`celui-là (près de toi) ?`},
        {w:`É muito cara.`, p:`ˈɛ ˈmũjtu ˈkaɾɐ`, t:`il est très cher`},
        {w:`Prefiro aquela ali,`, p:`pɾɨˈfiɾu ɐˈkɛlɐ ɐˈli`, t:`je préfère celui-là, là-bas`},
        {w:`verde.`, p:`ˈveɾdɨ`, t:`le vert`}
      ],
      [
        {w:`— Aquela?`, p:`ɐˈkɛlɐ`, t:`celui-là, là-bas ?`},
        {w:`Isso não é uma camisola,`, p:`ˈisu ˈnɐ̃w ˈɛ ˈumɐ kɐmiˈzɔlɐ`, t:`ça, ce n'est pas un pull`},
        {w:`é um vestido!`, p:`ˈɛ ũ vɨʃˈtidu`, t:`c'est une robe !`}
      ],
      [
        {w:`As duas riem-se.`, p:`ɐʒ ˈduɐʒ ˈʁiɐ̃jsɨ`, t:`toutes les deux rient`}
      ],
      [
        {w:`A Sofia experimenta`, p:`ɐ suˈfiɐ ɐjʃpɨɾiˈmẽtɐ`, t:`Sofia essaie`, ff:1},
        {w:`estas calças`, p:`ˈɛʃtɐʃ ˈkaɫsɐʃ`, t:`ce pantalon (litt. « ces pantalons »)`},
        {w:`e este casaco.`, p:`i ˈeʃtɨ kɐˈzaku`, t:`et cette veste`}
      ],
      [
        {w:`— Ficam-te muito bem!`, p:`ˈfikɐ̃wtɨ ˈmũjtu ˈbɐ̃j`, t:`ça te va très bien !`, x:1},
        {w:`— diz a Marta.`, p:`ˈdiz ɐ ˈmaɾtɐ`, t:`dit Marta`}
      ],
      [
        {w:`— E isto aqui,`, p:`i ˈiʃtu ɐˈki`, t:`et ça, ici`},
        {w:`o que é?`, p:`u kɨ ˈɛ`, t:`qu'est-ce que c'est ?`}
      ],
      [
        {w:`— Isso é um lenço dos namorados,`, p:`ˈisu ˈɛ ũ ˈlẽsu duʒ nɐmuˈɾaduʃ`, t:`ça, c'est un « mouchoir des amoureux »`},
        {w:`do Minho.`, p:`du ˈmiɲu`, t:`du Minho (région du nord)`}
      ],
      [
        {w:`— Que bonito!`, p:`kɨ buˈnitu`, t:`que c'est joli !`},
        {w:`Levo este`, p:`ˈlɛvu ˈeʃtɨ`, t:`je prends celui-ci`},
        {w:`para a mãe.`, p:`ˈpɐɾɐ ɐ ˈmɐ̃j`, t:`pour maman`}
      ]
    ],

    vocabulary: [
      {w:`loja`, p:`ˈlɔʒɐ`, fr:`boutique, magasin`, b:`loja`, gr:`nom féminin`, ff:`≠ « loge ». Uma loja = un magasin.`},
      {w:`olha`, p:`ˈoʎɐ`, fr:`regarde ! (pour attirer l'attention)`, b:`olhar · verbe en -ar`, gr:`interjection`},
      {w:`camisola`, p:`kɐmiˈzɔlɐ`, fr:`pull ; maillot (de foot)`, b:`camisola`, gr:`nom féminin`, ff:`≠ « chemise », qui se dit camisa. Une camisola est un pull.`},
      {w:`giro`, p:`ˈʒiɾu`, fr:`mignon, joli, chouette (familier, Portugal)`, b:`giro, gira`, gr:`adjectif`},
      {w:`esse`, p:`ˈesɨ`, fr:`ce…-là (près de toi) ; essa = celle-là`, b:`esse, essa [ˈɛsɐ]`, gr:`démonstratif`},
      {w:`caro`, p:`ˈkaɾu`, fr:`cher ; barato = bon marché`, b:`caro, cara`, gr:`adjectif`},
      {w:`aquele`, p:`ɐˈkelɨ`, fr:`ce…-là (loin des deux) ; aquela = celle-là`, b:`aquele, aquela [ɐˈkɛlɐ]`, gr:`démonstratif`},
      {w:`verde`, p:`ˈveɾdɨ`, fr:`vert`, b:`verde (pl. verdes)`, gr:`adjectif invariable en genre`},
      {w:`isso`, p:`ˈisu`, fr:`ça, cela (près de toi)`, b:`isso`, gr:`démonstratif neutre`},
      {w:`vestido`, p:`vɨʃˈtidu`, fr:`robe`, b:`vestido`, gr:`nom masculin`, ff:`Comme nom, vestido = robe, et non « vêtement » (les vêtements se disent a roupa).`},
      {w:`rir-se`, p:`ˈʁiɾsɨ`, fr:`rire`, b:`rir · verbe irrégulier (rio, ris, ri)`, gr:`verbe`},
      {w:`experimentar`, p:`ɐjʃpɨɾimẽˈtaɾ`, fr:`essayer (un vêtement) ; goûter`, b:`experimentar · verbe en -ar`, gr:`verbe`, ff:`Au quotidien, experimentar = essayer. On l'emploie en cabine d'essayage.`},
      {w:`calças`, p:`ˈkaɫsɐʃ`, fr:`pantalon (toujours au pluriel)`, b:`calças`, gr:`nom féminin pluriel`, ff:`≠ « caleçon » : calças = pantalon.`},
      {w:`ficar bem`, p:`fiˈkaɾ ˈbɐ̃j`, fr:`aller bien (vêtement) ; fica-te bem = ça te va bien`, b:`ficar · verbe en -ar`, gr:`expression`},
      {w:`isto`, p:`ˈiʃtu`, fr:`ceci, ça (près de moi)`, b:`isto`, gr:`démonstratif neutre`},
      {w:`aqui`, p:`ɐˈki`, fr:`ici`, b:`aqui`, gr:`adverbe`},
      {w:`lenço`, p:`ˈlẽsu`, fr:`mouchoir ; foulard`, b:`lenço`, gr:`nom masculin`},
      {w:`lenço dos namorados`, p:`ˈlẽsu duʒ nɐmuˈɾaduʃ`, fr:`mouchoir brodé de mots d'amour, artisanat du Minho`, b:`lenço`, gr:`nom masculin`}
    ],

    grammar: {
      key: `demonstr`,
      cat: `Grammaire fondamentale`,
      concept: `Les démonstratifs : <i lang="pt-PT">este</i>, <i lang="pt-PT">esse</i>, <i lang="pt-PT">aquele</i>`,
      excerpt: [
        `— Olha, <mark>esta</mark> camisola é gira! — <mark>Essa</mark>? É muito cara. Prefiro <mark>aquela</mark> ali.`,
        `— <mark>Isso</mark> não é uma camisola, é um vestido!`,
        `— E <mark>isto</mark> aqui, o que é? — Levo <mark>este</mark> para a mãe.`
      ],
      exp: `<p>Le français a « ce » et ajoute « -ci » ou « -là ». Le portugais a <b>trois démonstratifs</b>, selon la distance avec les deux personnes qui parlent.</p>
<p><b>Este</b> : près de moi (<i lang="pt-PT">aqui</i>). <b>Esse</b> : près de toi (<i lang="pt-PT">aí</i>). <b>Aquele</b> : loin de nous deux (<i lang="pt-PT">ali</i>, <i lang="pt-PT">lá</i>). Marta tient le pull : <i lang="pt-PT">esta camisola</i>. Sofia lui répond : <i lang="pt-PT">essa?</i> La robe est sur un portant plus loin : <i lang="pt-PT">aquela</i>.</p>
<p>Pour une chose qu'on ne nomme pas, on emploie les formes <b>neutres</b>, invariables : <i lang="pt-PT">isto</i>, <i lang="pt-PT">isso</i>, <i lang="pt-PT">aquilo</i> = « ceci, ça, cela ».</p>`,
      table: {
        head: [``, `Près de moi (aqui)`, `Près de toi (aí)`, `Loin (ali, lá)`],
        rows: [
          [`masc. sing.`, `<b>este</b>`, `<b>esse</b>`, `<b>aquele</b>`],
          [`fém. sing.`, `<b>esta</b>`, `<b>essa</b>`, `<b>aquela</b>`],
          [`masc. pl.`, `<b>estes</b>`, `<b>esses</b>`, `<b>aqueles</b>`],
          [`fém. pl.`, `<b>estas</b>`, `<b>essas</b>`, `<b>aquelas</b>`],
          [`neutre`, `<b>isto</b>`, `<b>isso</b>`, `<b>aquilo</b>`]
        ]
      },
      compare: `<p>À l'oral, la différence entre <i lang="pt-PT">este</i> et <i lang="pt-PT">esse</i> s'entend : « éch-te » contre « é-sse ». En pratique, beaucoup de Portugais utilisent <i lang="pt-PT">esse</i> là où <i lang="pt-PT">este</i> serait attendu. Le contraste reste net dans un dialogue comme celui-ci.</p>
<p>Les démonstratifs se contractent avec <i lang="pt-PT">de</i> et <i lang="pt-PT">em</i> : <i lang="pt-PT">desta loja</i> (de cette boutique), <i lang="pt-PT">nessa rua</i> (dans cette rue), <i lang="pt-PT">naquele dia</i> (ce jour-là).</p>`,
      also: [
        `<b>Calças</b> (pantalon) s'emploie au pluriel, comme « ciseaux » : <i lang="pt-PT">estas calças</i>.`,
        `<b>Giro</b> est un mot très portugais : <i lang="pt-PT">que giro!</i> = « trop mignon ! ». Au Brésil on dirait <i lang="pt-BR">bonito</i> ou <i lang="pt-BR">legal</i>.`,
        `<b>Ficar bem</b> : <i lang="pt-PT">ficam-te bem</i>, « ils te vont bien ». Le pronom <i lang="pt-PT">te</i> se place après le verbe.`
      ]
    }
  };

  /* ─── T13 — Uma noite de fado ────────────────── */
  var T13 = {
    id: `a1-13`, level: `A1`,
    title: `Uma noite de fado`,
    titleFr: `Une soirée de fado`,
    theme: `Musique · goûts`,
    sentences: [
      [
        {w:`O Rui gosta muito`, p:`u ˈʁuj ˈɡɔʃtɐ ˈmũjtu`, t:`Rui aime beaucoup`},
        {w:`de música.`, p:`dɨ ˈmuzikɐ`, t:`la musique`}
      ],
      [
        {w:`Gosta de samba, claro,`, p:`ˈɡɔʃtɐ dɨ ˈsɐ̃bɐ ˈklaɾu`, t:`il aime la samba, bien sûr`},
        {w:`e também gosta do fado.`, p:`i tɐ̃ˈbɐ̃j ˈɡɔʃtɐ du ˈfadu`, t:`et il aime aussi le fado (de + o)`}
      ],
      [
        {w:`Hoje,`, p:`ˈoʒɨ`, t:`aujourd'hui`},
        {w:`vão a uma casa de fados`, p:`ˈvɐ̃w ɐ ˈumɐ ˈkazɐ dɨ ˈfaduʃ`, t:`ils vont dans une maison de fado`},
        {w:`na Alfama.`, p:`nɐ aɫˈfɐmɐ`, t:`dans l'Alfama`}
      ],
      [
        {w:`A sala é pequena e escura;`, p:`ɐ ˈsalɐ ˈɛ pɨˈkenɐ i ɨʃˈkuɾɐ`, t:`la salle est petite et sombre`},
        {w:`as mesas têm velas.`, p:`ɐʒ ˈmezɐʃ ˈtɐ̃jɐ̃j ˈvɛlɐʃ`, t:`les tables ont des bougies`}
      ],
      [
        {w:`A fadista canta`, p:`ɐ fɐˈdiʃtɐ ˈkɐ̃tɐ`, t:`la chanteuse de fado chante`},
        {w:`sobre o mar`, p:`ˈsobɾɨ u ˈmaɾ`, t:`la mer (litt. « sur la mer »)`},
        {w:`e a saudade.`, p:`i ɐ sawˈdadɨ`, t:`et la saudade (nostalgie, manque)`}
      ],
      [
        {w:`— Gostas desta voz?`, p:`ˈɡɔʃtɐʒ ˈdɛʃtɐ ˈvɔʃ`, t:`tu aimes cette voix ? (de + esta)`},
        {w:`— pergunta a Marta`, p:`pɨɾˈɡũtɐ ɐ ˈmaɾtɐ`, t:`demande Marta`},
        {w:`baixinho.`, p:`bajˈʃiɲu`, t:`tout bas`}
      ],
      [
        {w:`— Gosto imenso!`, p:`ˈɡɔʃtu iˈmẽsu`, t:`j'adore ! (litt. « j'aime immensément »)`},
        {w:`E tu, gostas de todos os fados?`, p:`i ˈtu ˈɡɔʃtɐʒ dɨ ˈtoduz uʃ ˈfaduʃ`, t:`et toi, tu aimes tous les fados ?`}
      ],
      [
        {w:`— Não.`, p:`ˈnɐ̃w`, t:`non`},
        {w:`Não gosto nada`, p:`ˈnɐ̃w ˈɡɔʃtu ˈnadɐ`, t:`je n'aime pas du tout`, x:1},
        {w:`de fados muito tristes!`, p:`dɨ ˈfaduʒ ˈmũjtu ˈtɾiʃtɨʃ`, t:`les fados très tristes !`}
      ],
      [
        {w:`No fim,`, p:`nu ˈfĩ`, t:`à la fin`},
        {w:`o Rui compra um disco`, p:`u ˈʁuj ˈkõpɾɐ ũ ˈdiʃku`, t:`Rui achète un disque`},
        {w:`da fadista.`, p:`dɐ fɐˈdiʃtɐ`, t:`de la chanteuse`}
      ]
    ],

    vocabulary: [
      {w:`gostar de`, p:`ɡuʃˈtaɾ dɨ`, fr:`aimer, apprécier`, b:`gostar · verbe en -ar`, gr:`verbe`},
      {w:`música`, p:`ˈmuzikɐ`, fr:`musique`, b:`música`, gr:`nom féminin`},
      {w:`samba`, p:`ˈsɐ̃bɐ`, fr:`samba (musique et danse brésiliennes)`, b:`samba`, gr:`nom masculin`},
      {w:`fado`, p:`ˈfadu`, fr:`fado, chant traditionnel de Lisbonne et de Coimbra`, b:`fado`, gr:`nom masculin`},
      {w:`casa de fados`, p:`ˈkazɐ dɨ ˈfaduʃ`, fr:`restaurant ou bar où l'on écoute du fado`, b:`casa`, gr:`nom féminin`},
      {w:`escuro`, p:`ɨʃˈkuɾu`, fr:`sombre ; foncé`, b:`escuro, escura`, gr:`adjectif`},
      {w:`mesa`, p:`ˈmezɐ`, fr:`table`, b:`mesa`, gr:`nom féminin`},
      {w:`vela`, p:`ˈvɛlɐ`, fr:`bougie ; aussi : voile (bateau)`, b:`vela`, gr:`nom féminin`},
      {w:`fadista`, p:`fɐˈdiʃtɐ`, fr:`chanteur ou chanteuse de fado`, b:`fadista (o / a)`, gr:`nom masculin et féminin`},
      {w:`cantar`, p:`kɐ̃ˈtaɾ`, fr:`chanter`, b:`cantar · verbe en -ar`, gr:`verbe`},
      {w:`sobre`, p:`ˈsobɾɨ`, fr:`sur ; au sujet de`, b:`sobre`, gr:`préposition`},
      {w:`mar`, p:`ˈmaɾ`, fr:`mer (masculin : o mar)`, b:`mar (pl. mares)`, gr:`nom masculin`},
      {w:`saudade`, p:`sawˈdadɨ`, fr:`manque, nostalgie de quelqu'un ou de quelque chose ; tenho saudades tuas = tu me manques`, b:`saudade`, gr:`nom féminin`},
      {w:`voz`, p:`ˈvɔʃ`, fr:`voix`, b:`voz (pl. vozes)`, gr:`nom féminin`},
      {w:`baixinho`, p:`bajˈʃiɲu`, fr:`tout bas, à voix basse`, b:`baixo + -inho`, gr:`adverbe`},
      {w:`imenso`, p:`iˈmẽsu`, fr:`immense ; gosto imenso = j'adore`, b:`imenso, imensa`, gr:`adjectif / adverbe`},
      {w:`nada`, p:`ˈnadɐ`, fr:`rien ; não… nada = ne… pas du tout, ne… rien`, b:`nada`, gr:`pronom / adverbe`},
      {w:`triste`, p:`ˈtɾiʃtɨ`, fr:`triste`, b:`triste (pl. tristes)`, gr:`adjectif invariable en genre`},
      {w:`disco`, p:`ˈdiʃku`, fr:`disque, album`, b:`disco`, gr:`nom masculin`}
    ],

    grammar: {
      key: `gostar`,
      cat: `Grammaire fondamentale`,
      concept: `<i lang="pt-PT">Gostar de</i> : aimer quelque chose`,
      excerpt: [
        `O Rui <mark>gosta</mark> muito <mark>de</mark> música. Também <mark>gosta do</mark> fado.`,
        `— <mark>Gostas desta</mark> voz? — <mark>Gosto</mark> imenso!`,
        `Não <mark>gosto</mark> nada <mark>de</mark> fados muito tristes!`
      ],
      exp: `<p>« Aimer » se dit <b>gostar de</b> : le verbe est toujours suivi de la préposition <i lang="pt-PT">de</i>. Cette préposition se contracte avec l'article ou le démonstratif qui suit : <i lang="pt-PT">gosto do fado</i>, <i lang="pt-PT">gostas desta voz</i>.</p>
<p>Devant un infinitif, on garde <i lang="pt-PT">de</i> : <i lang="pt-PT">gosto de cantar</i> (j'aime chanter).</p>
<p>Dans la réponse, <i lang="pt-PT">de</i> disparaît puisqu'il n'y a plus de complément : <i lang="pt-PT">Gostas? — Gosto.</i></p>`,
      table: {
        head: [`Construction`, `Exemple`, `Sens`],
        rows: [
          [`gostar <b>de</b> + nom sans article`, `gosta <b>de</b> música`, `il aime la musique (en général)`],
          [`gostar <b>do / da</b> + nom`, `gosta <b>do</b> fado`, `il aime le fado`],
          [`gostar <b>desta / deste</b>`, `gostas <b>desta</b> voz?`, `tu aimes cette voix ?`],
          [`gostar <b>de</b> + infinitif`, `gosto <b>de</b> cantar`, `j'aime chanter`],
          [`gostar muito / imenso`, `gosto imenso`, `j'adore`],
          [`não gostar nada`, `não gosto nada`, `je n'aime pas du tout`]
        ]
      },
      compare: `<p>En français, « aimer » prend un complément direct. En portugais, il faut toujours <i lang="pt-PT">de</i> : on ne dit jamais <i lang="pt-PT">gosto o fado</i>.</p>
<p>Le français met un article pour un goût général (« j'aime <b>la</b> musique »). Le portugais peut s'en passer : <i lang="pt-PT">gosto de música</i>.</p>
<p>« Aimer quelqu'un » d'amour se dit <i lang="pt-PT">amar</i> ou, plus souvent, <i lang="pt-PT">gostar muito de alguém</i>. <i lang="pt-PT">Adoro</i> s'emploie aussi pour les choses : <i lang="pt-PT">adoro fado</i>.</p>`,
      also: [
        `<b>Saudade</b> : mot clé du fado. C'est le manque d'une personne, d'un lieu ou d'un temps. On dit <i lang="pt-PT">tenho saudades tuas</i> pour « tu me manques ».`,
        `<b>Diminutif</b> : <i lang="pt-PT">baixinho</i> = <i lang="pt-PT">baixo</i> (bas) + <i lang="pt-PT">-inho</i>, « tout bas ».`,
        `<b>Ter au pluriel</b> : <i lang="pt-PT">as mesas têm velas</i>, avec l'accent circonflexe.`
      ]
    }
  };

  /* ─── T14 — O meu bairro ─────────────────────── */
  var T14 = {
    id: `a1-14`, level: `A1`,
    title: `O meu bairro`,
    titleFr: `Mon quartier`,
    theme: `Ville · nombres · lusophonie`,
    sentences: [
      [
        {w:`Eu moro em Arroios,`, p:`ˈew ˈmɔɾu ɐ̃j ɐˈʁɔjuʃ`, t:`j'habite à Arroios (quartier de Lisbonne)`},
        {w:`um bairro`, p:`ũ ˈbajʁu`, t:`un quartier`},
        {w:`muito multicultural.`, p:`ˈmũjtu muɫtikuɫtuˈɾaɫ`, t:`très multiculturel`}
      ],
      [
        {w:`Na minha rua há`, p:`nɐ ˈmiɲɐ ˈʁuɐ ˈa`, t:`dans ma rue, il y a`},
        {w:`uma padaria,`, p:`ˈumɐ pɐdɐˈɾiɐ`, t:`une boulangerie`},
        {w:`duas farmácias`, p:`ˈduɐʃ fɐɾˈmasjɐʃ`, t:`deux pharmacies`},
        {w:`e três cafés.`, p:`i ˈtɾeʃ kɐˈfɛʃ`, t:`et trois cafés`}
      ],
      [
        {w:`Também há um mercado`, p:`tɐ̃ˈbɐ̃j ˈa ũ mɨɾˈkadu`, t:`il y a aussi un marché`},
        {w:`com mais de cem anos.`, p:`kõ ˈmajʒ dɨ ˈsɐ̃j ˈɐnuʃ`, t:`de plus de cent ans`}
      ],
      [
        {w:`No meu prédio`, p:`nu ˈmew ˈpɾɛdju`, t:`dans mon immeuble`},
        {w:`há seis andares`, p:`ˈa ˈsɐjz ɐ̃ˈdaɾɨʃ`, t:`il y a six étages`, ff:1},
        {w:`e doze apartamentos.`, p:`i ˈdozɨ ɐpɐɾtɐˈmẽtuʃ`, t:`et douze appartements`}
      ],
      [
        {w:`Eu moro no quinto andar,`, p:`ˈew ˈmɔɾu nu ˈkĩtu ɐ̃ˈdaɾ`, t:`j'habite au cinquième étage`},
        {w:`e não há elevador!`, p:`i ˈnɐ̃w ˈa ilɨvɐˈdoɾ`, t:`et il n'y a pas d'ascenseur !`}
      ],
      [
        {w:`Há muitas pessoas`, p:`ˈa ˈmũjtɐʃ pɨˈsoɐʃ`, t:`il y a beaucoup de gens`},
        {w:`de outros países:`, p:`dɨ ˈotɾuʃ pɐˈizɨʃ`, t:`d'autres pays`}
      ],
      [
        {w:`do Brasil,`, p:`du bɾɐˈziɫ`, t:`du Brésil`},
        {w:`de Cabo Verde,`, p:`dɨ ˈkabu ˈveɾdɨ`, t:`du Cap-Vert (sans article)`},
        {w:`da Índia,`, p:`dɐ ˈĩdjɐ`, t:`d'Inde`},
        {w:`do Nepal…`, p:`du nɨˈpaɫ`, t:`du Népal…`}
      ],
      [
        {w:`Ao domingo,`, p:`aw duˈmĩɡu`, t:`le dimanche`},
        {w:`há uma feira`, p:`ˈa ˈumɐ ˈfɐjɾɐ`, t:`il y a un marché en plein air`, ff:1},
        {w:`na praça.`, p:`nɐ ˈpɾasɐ`, t:`sur la place`}
      ],
      [
        {w:`— Há quanto tempo moras aqui?`, p:`ˈa ˈkwɐ̃tu ˈtẽpu ˈmɔɾɐz ɐˈki`, t:`depuis combien de temps tu habites ici ?`},
        {w:`— Há dois anos.`, p:`ˈa ˈdojz ˈɐnuʃ`, t:`depuis deux ans`}
      ]
    ],

    vocabulary: [
      {w:`morar`, p:`muˈɾaɾ`, fr:`habiter`, b:`morar · verbe en -ar`, gr:`verbe`},
      {w:`multicultural`, p:`muɫtikuɫtuˈɾaɫ`, fr:`multiculturel`, b:`multicultural (pl. multiculturais)`, gr:`adjectif invariable en genre`},
      {w:`rua`, p:`ˈʁuɐ`, fr:`rue`, b:`rua`, gr:`nom féminin`},
      {w:`há`, p:`ˈa`, fr:`il y a ; aussi : depuis, il y a (durée)`, b:`haver · verbe impersonnel`, gr:`verbe`},
      {w:`padaria`, p:`pɐdɐˈɾiɐ`, fr:`boulangerie`, b:`padaria`, gr:`nom féminin`},
      {w:`farmácia`, p:`fɐɾˈmasjɐ`, fr:`pharmacie`, b:`farmácia`, gr:`nom féminin`},
      {w:`cem`, p:`ˈsɐ̃j`, fr:`cent (cento dans 101, 102… : cento e um)`, b:`cem`, gr:`nombre`},
      {w:`ano`, p:`ˈɐnu`, fr:`an, année`, b:`ano`, gr:`nom masculin`},
      {w:`prédio`, p:`ˈpɾɛdju`, fr:`immeuble`, b:`prédio`, gr:`nom masculin`},
      {w:`andar`, p:`ɐ̃ˈdaɾ`, fr:`étage ; comme verbe : marcher, aller`, b:`andar (pl. andares)`, gr:`nom masculin / verbe`, ff:`Um andar = un étage. Le rez-de-chaussée se dit rés-do-chão.`},
      {w:`doze`, p:`ˈdozɨ`, fr:`douze`, b:`doze`, gr:`nombre`},
      {w:`apartamento`, p:`ɐpɐɾtɐˈmẽtu`, fr:`appartement`, b:`apartamento`, gr:`nom masculin`},
      {w:`quinto`, p:`ˈkĩtu`, fr:`cinquième`, b:`quinto, quinta`, gr:`ordinal`},
      {w:`elevador`, p:`ilɨvɐˈdoɾ`, fr:`ascenseur`, b:`elevador`, gr:`nom masculin`},
      {w:`pessoa`, p:`pɨˈsoɐ`, fr:`personne ; as pessoas = les gens`, b:`pessoa`, gr:`nom féminin`},
      {w:`país`, p:`pɐˈiʃ`, fr:`pays`, b:`país (pl. países)`, gr:`nom masculin`, ff:`Ne pas confondre país (pays, deux syllabes) et pais (parents, une syllabe).`},
      {w:`Cabo Verde`, p:`ˈkabu ˈveɾdɨ`, fr:`Cap-Vert, pays lusophone d'Afrique`, b:`Cabo Verde`, gr:`nom propre`},
      {w:`feira`, p:`ˈfɐjɾɐ`, fr:`marché de plein air ; foire`, b:`feira`, gr:`nom féminin`, ff:`Feira est aussi la fin des jours de semaine : segunda-feira, terça-feira…`},
      {w:`praça`, p:`ˈpɾasɐ`, fr:`place (d'une ville)`, b:`praça`, gr:`nom féminin`},
      {w:`tempo`, p:`ˈtẽpu`, fr:`temps (durée et météo)`, b:`tempo`, gr:`nom masculin`}
    ],

    grammar: {
      key: `haver`,
      cat: `Grammaire fondamentale`,
      concept: `<i lang="pt-PT">Há</i> (il y a) et les nombres`,
      excerpt: [
        `Na minha rua <mark>há</mark> uma padaria, duas farmácias e três cafés.`,
        `No meu prédio <mark>há</mark> seis andares e doze apartamentos. Não <mark>há</mark> elevador!`,
        `— <mark>Há</mark> quanto tempo moras aqui? — <mark>Há</mark> dois anos.`
      ],
      exp: `<p><b>Há</b> veut dire « il y a ». Il vient du verbe <i lang="pt-PT">haver</i> et reste <b>invariable</b>, même devant un pluriel : <i lang="pt-PT">há três cafés</i>. Le h ne se prononce pas : « a ».</p>
<p>Négation : <i lang="pt-PT">não há</i> = « il n'y a pas (de) », sans article : <i lang="pt-PT">não há elevador</i>.</p>
<p><b>Há + durée</b> exprime le temps écoulé : <i lang="pt-PT">há dois anos</i> = « il y a deux ans » ou « depuis deux ans » selon le verbe. <i lang="pt-PT">Há quanto tempo…?</i> = « depuis combien de temps… ? ».</p>`,
      table: {
        head: [`1 à 10`, `11 à 20`, `Dizaines`],
        rows: [
          [`1 um / uma · 2 dois / duas`, `11 onze · 12 doze`, `20 vinte · 30 trinta`],
          [`3 três · 4 quatro`, `13 treze · 14 catorze`, `40 quarenta · 50 cinquenta`],
          [`5 cinco · 6 seis`, `15 quinze · 16 dezasseis`, `60 sessenta · 70 setenta`],
          [`7 sete · 8 oito`, `17 dezassete · 18 dezoito`, `80 oitenta · 90 noventa`],
          [`9 nove · 10 dez`, `19 dezanove · 20 vinte`, `100 cem · 101 cento e um`]
        ]
      },
      compare: `<p><b>Há ou está ?</b> <i lang="pt-PT">Há</i> présente quelque chose de nouveau : <i lang="pt-PT">há uma farmácia na rua</i> (il y a une pharmacie). <i lang="pt-PT">Estar</i> situe une chose déjà connue : <i lang="pt-PT">a farmácia está ao lado do café</i> (la pharmacie est à côté du café).</p>
<p>Seuls <b>um</b> et <b>dois</b> ont un féminin : <i lang="pt-PT">uma padaria</i>, <i lang="pt-PT">duas farmácias</i>. Au-delà de vingt, on relie avec <i lang="pt-PT">e</i> : <i lang="pt-PT">vinte e um</i>, <i lang="pt-PT">trinta e cinco</i>.</p>
<p>Le Portugal écrit <i lang="pt-PT">dezasseis</i>, <i lang="pt-PT">dezassete</i>, <i lang="pt-PT">dezanove</i>. Le Brésil écrit <i lang="pt-BR">dezesseis</i>, <i lang="pt-BR">dezessete</i>, <i lang="pt-BR">dezenove</i>.</p>`,
      also: [
        `<b>Pays avec ou sans article</b> : <i lang="pt-PT">do Brasil</i>, <i lang="pt-PT">da Índia</i>, mais <i lang="pt-PT">de Cabo Verde</i>, <i lang="pt-PT">de Portugal</i>, <i lang="pt-PT">de Angola</i>.`,
        `<b>Étages</b> : <i lang="pt-PT">no quinto andar</i>. L'adresse s'écrit souvent <i lang="pt-PT">5.º Esq.</i> (5<sup>e</sup> gauche) ou <i lang="pt-PT">5.º Dto.</i> (5<sup>e</sup> droite).`,
        `<b>Lusophonie</b> : on parle portugais au Brésil, en Angola, au Mozambique, au Cap-Vert, en Guinée-Bissau, à São Tomé-et-Príncipe, au Timor oriental et à Macao.`
      ]
    }
  };

  /* ─── T15 — A avó telefona ───────────────────── */
  var T15 = {
    id: `a1-15`, level: `A1`,
    title: `A avó telefona`,
    titleFr: `Grand-mère appelle`,
    theme: `Téléphone · famille`,
    sentences: [
      [
        {w:`Domingo à noite,`, p:`duˈmĩɡu a ˈnojtɨ`, t:`dimanche soir`},
        {w:`a avó Rosa telefona à Marta.`, p:`ɐ ɐˈvɔ ˈʁɔzɐ tɨlɨˈfɔnɐ a ˈmaɾtɐ`, t:`grand-mère Rosa téléphone à Marta`}
      ],
      [
        {w:`— Olá, querida!`, p:`ɔˈla kɨˈɾidɐ`, t:`bonjour, ma chérie !`},
        {w:`Porque é que`, p:`puɾkɨ ˈɛ kɨ`, t:`pourquoi est-ce que`, x:1},
        {w:`nunca me telefonas?`, p:`ˈnũkɐ mɨ tɨlɨˈfɔnɐʃ`, t:`tu ne m'appelles jamais ?`}
      ],
      [
        {w:`— Desculpe, avó,`, p:`dɨʃˈkuɫpɨ ɐˈvɔ`, t:`pardon, grand-mère (vouvoiement)`},
        {w:`tenho muito trabalho.`, p:`ˈtɐɲu ˈmũjtu tɾɐˈbaʎu`, t:`j'ai beaucoup de travail`}
      ],
      [
        {w:`— Comes bem?`, p:`ˈkɔmɨʒ ˈbɐ̃j`, t:`tu manges bien ?`},
        {w:`Não estás doente?`, p:`ˈnɐ̃w ɨʃˈtaʒ duˈẽtɨ`, t:`tu n'es pas malade ?`}
      ],
      [
        {w:`— Não,`, p:`ˈnɐ̃w`, t:`non`},
        {w:`não estou doente.`, p:`ˈnɐ̃w ɨʃˈto duˈẽtɨ`, t:`je ne suis pas malade`},
        {w:`Está tudo bem.`, p:`ɨʃˈta ˈtudu ˈbɐ̃j`, t:`tout va bien`, x:1}
      ],
      [
        {w:`— E quando vens cá?`, p:`i ˈkwɐ̃du ˈvɐ̃jʃ ˈka`, t:`et quand est-ce que tu viens ici ?`}
      ],
      [
        {w:`— No verão, avó.`, p:`nu vɨˈɾɐ̃w ɐˈvɔ`, t:`en été, grand-mère`},
        {w:`Em agosto.`, p:`ɐ̃j ɐˈɡoʃtu`, t:`en août`}
      ],
      [
        {w:`— Quem vem contigo?`, p:`ˈkɐ̃j ˈvɐ̃j kõˈtiɡu`, t:`qui vient avec toi ?`},
        {w:`O Rui?`, p:`u ˈʁuj`, t:`Rui ?`}
      ],
      [
        {w:`— Talvez.`, p:`taɫˈveʃ`, t:`peut-être`},
        {w:`Ele ainda não conhece`, p:`ˈelɨ ɐˈĩdɐ ˈnɐ̃w kuˈɲɛsɨ`, t:`il ne connaît encore`},
        {w:`ninguém da família.`, p:`nĩˈɡɐ̃j dɐ fɐˈmiljɐ`, t:`personne de la famille`}
      ],
      [
        {w:`— Não faz mal.`, p:`ˈnɐ̃w ˈfaʒ ˈmaɫ`, t:`ce n'est pas grave`, x:1},
        {w:`Aqui ninguém morde!`, p:`ɐˈki nĩˈɡɐ̃j ˈmɔɾdɨ`, t:`ici, personne ne mord !`}
      ]
    ],

    vocabulary: [
      {w:`querido`, p:`kɨˈɾidu`, fr:`chéri ; cher (en début de lettre)`, b:`querido, querida`, gr:`adjectif / nom`},
      {w:`porque é que`, p:`puɾkɨ ˈɛ kɨ`, fr:`pourquoi est-ce que ; porque = parce que`, b:`porque`, gr:`interrogatif`},
      {w:`nunca`, p:`ˈnũkɐ`, fr:`jamais (seul devant le verbe : nunca telefonas)`, b:`nunca`, gr:`adverbe`},
      {w:`trabalho`, p:`tɾɐˈbaʎu`, fr:`travail`, b:`trabalho`, gr:`nom masculin`},
      {w:`doente`, p:`duˈẽtɨ`, fr:`malade`, b:`doente (pl. doentes)`, gr:`adjectif invariable en genre`},
      {w:`está tudo bem`, p:`ɨʃˈta ˈtudu ˈbɐ̃j`, fr:`tout va bien ; tudo bem? = ça va ?`, b:`tudo`, gr:`expression`},
      {w:`quando`, p:`ˈkwɐ̃du`, fr:`quand`, b:`quando`, gr:`adverbe interrogatif / conjonction`},
      {w:`agosto`, p:`ɐˈɡoʃtu`, fr:`août (les mois s'écrivent sans majuscule)`, b:`agosto`, gr:`nom masculin`},
      {w:`contigo`, p:`kõˈtiɡu`, fr:`avec toi`, b:`com + ti`, gr:`pronom`},
      {w:`talvez`, p:`taɫˈveʃ`, fr:`peut-être`, b:`talvez`, gr:`adverbe`},
      {w:`ainda`, p:`ɐˈĩdɐ`, fr:`encore ; ainda não = pas encore`, b:`ainda`, gr:`adverbe`},
      {w:`ninguém`, p:`nĩˈɡɐ̃j`, fr:`personne (pronom)`, b:`ninguém`, gr:`pronom indéfini`},
      {w:`morder`, p:`muɾˈdeɾ`, fr:`mordre`, b:`morder · verbe en -er`, gr:`verbe`}
    ],

    grammar: {
      key: `negacao`,
      cat: `Syntaxe avancée`,
      concept: `La négation et les questions`,
      excerpt: [
        `— <mark>Não</mark> estás doente? — <mark>Não</mark>, <mark>não</mark> estou doente.`,
        `Porque é que <mark>nunca</mark> me telefonas? — Ele ainda <mark>não</mark> conhece <mark>ninguém</mark> da família.`,
        `Aqui <mark>ninguém</mark> morde!`
      ],
      exp: `<p><b>Não</b> se place devant le verbe et suffit à nier : <i lang="pt-PT">não estou doente</i>. Il n'y a pas de deuxième mot comme « pas ».</p>
<p>Avec <b>nada</b> (rien), <b>nunca</b> (jamais), <b>ninguém</b> (personne), deux constructions existent :</p>
<p>· le mot négatif <b>avant</b> le verbe, seul : <i lang="pt-PT">nunca telefonas</i>, <i lang="pt-PT">ninguém morde</i> ;<br>· le mot négatif <b>après</b> le verbe, avec <i lang="pt-PT">não</i> devant : <i lang="pt-PT">não conhece ninguém</i>, <i lang="pt-PT">não gosto nada</i>.</p>
<p><b>Questions</b> : à l'oral, l'intonation suffit (<i lang="pt-PT">Comes bem?</i>). Avec un mot interrogatif, on ajoute souvent <i lang="pt-PT">é que</i>, comme « est-ce que » : <i lang="pt-PT">Quando é que vens?</i></p>`,
      table: {
        head: [`Mot interrogatif`, `Sens`, `Exemple`],
        rows: [
          [`<b>quem</b>`, `qui`, `Quem vem contigo?`],
          [`<b>o que</b>`, `que, quoi`, `O que comes hoje?`],
          [`<b>quando</b>`, `quand`, `Quando vens cá?`],
          [`<b>onde</b>`, `où`, `Onde é o castelo?`],
          [`<b>como</b>`, `comment`, `Como vamos?`],
          [`<b>quanto</b>`, `combien`, `Quanto custam as laranjas?`],
          [`<b>porque é que</b>`, `pourquoi`, `Porque é que nunca me telefonas?`]
        ]
      },
      compare: `<p>Le français dit « ne… personne », « ne… jamais ». Le portugais dit <i lang="pt-PT">não… ninguém</i>, <i lang="pt-PT">não… nunca</i>, ou met <i lang="pt-PT">nunca</i> seul devant le verbe.</p>
<p><b>Pourquoi / parce que</b> : au Portugal, <i lang="pt-PT">porque</i> sert aux deux : <i lang="pt-PT">Porque é que…?</i> / <i lang="pt-PT">Porque tenho trabalho.</i> En fin de phrase, on écrit <i lang="pt-PT">porquê?</i> (« pourquoi ? »).</p>`,
      also: [
        `<b>Pronom attiré</b> : <i lang="pt-PT">nunca me telefonas</i>. Après <i lang="pt-PT">nunca</i>, <i lang="pt-PT">não</i> ou <i lang="pt-PT">porque</i>, le pronom passe avant le verbe. Le point sera repris au niveau B1.`,
        `<b>Vouvoyer sa grand-mère</b> : Marta dit <i lang="pt-PT">desculpe, avó</i> à la 3<sup>e</sup> personne, par respect. La grand-mère la tutoie.`,
        `<b>Contigo, connosco, comigo</b> : « avec toi, avec nous, avec moi » s'écrivent en un seul mot.`
      ]
    }
  };

  /* ─── T16 — Santos Populares ─────────────────── */
  var T16 = {
    id: `a1-16`, level: `A1`,
    title: `Santos Populares`,
    titleFr: `Les fêtes populaires de juin`,
    theme: `Fête · expressions`,
    sentences: [
      [
        {w:`É doze de junho,`, p:`ˈɛ ˈdozɨ dɨ ˈʒuɲu`, t:`c'est le douze juin`},
        {w:`véspera de Santo António.`, p:`ˈvɛʃpɨɾɐ dɨ ˈsɐ̃tu ɐ̃ˈtɔnju`, t:`veille de la Saint-Antoine (fête de Lisbonne)`}
      ],
      [
        {w:`Lisboa está em festa:`, p:`liʒˈboɐ ɨʃˈta ɐ̃j ˈfɛʃtɐ`, t:`Lisbonne est en fête`},
        {w:`há sardinhas,`, p:`ˈa sɐɾˈdiɲɐʃ`, t:`il y a des sardines`},
        {w:`música e manjericos.`, p:`ˈmuzikɐ i mɐ̃ʒɨˈɾikuʃ`, t:`de la musique et des pots de basilic`}
      ],
      [
        {w:`— Então, tudo bem?`, p:`ẽˈtɐ̃w ˈtudu ˈbɐ̃j`, t:`alors, ça va ?`, x:1},
        {w:`— pergunta o Tiago.`, p:`pɨɾˈɡũtɐ u tiˈaɡu`, t:`demande Tiago`}
      ],
      [
        {w:`— Tudo!`, p:`ˈtudu`, t:`ça va ! (litt. « tout »)`},
        {w:`E contigo?`, p:`i kõˈtiɡu`, t:`et toi ? (litt. « et avec toi ? »)`}
      ],
      [
        {w:`— Fixe!`, p:`ˈfiʃɨ`, t:`super ! (familier)`},
        {w:`Querem uma bifana?`, p:`ˈkɛɾɐ̃j ˈumɐ biˈfɐnɐ`, t:`vous voulez un sandwich au porc ?`}
      ],
      [
        {w:`— Pois…`, p:`ˈpojʃ`, t:`bon… euh…`, x:1},
        {w:`eu prefiro sardinhas.`, p:`ˈew pɾɨˈfiɾu sɐɾˈdiɲɐʃ`, t:`moi, je préfère des sardines`}
      ],
      [
        {w:`— Está bem,`, p:`ɨʃˈta ˈbɐ̃j`, t:`d'accord`, x:1},
        {w:`então sardinhas para todos!`, p:`ẽˈtɐ̃w sɐɾˈdiɲɐʃ ˈpɐɾɐ ˈtoduʃ`, t:`alors des sardines pour tout le monde !`}
      ],
      [
        {w:`O Rui não percebe:`, p:`u ˈʁuj ˈnɐ̃w pɨɾˈsɛbɨ`, t:`Rui ne comprend pas`, ff:1},
        {w:`— «Pois» quer dizer sim ou não?`, p:`ˈpojʃ ˈkɛɾ diˈzeɾ ˈsĩ o ˈnɐ̃w`, t:`« pois », ça veut dire oui ou non ?`}
      ],
      [
        {w:`— Depende!`, p:`dɨˈpẽdɨ`, t:`ça dépend !`},
        {w:`— responde a Sofia,`, p:`ʁɨʃˈpõdɨ ɐ suˈfiɐ`, t:`répond Sofia`},
        {w:`a rir.`, p:`ɐ ˈʁiɾ`, t:`en riant`}
      ],
      [
        {w:`À meia-noite,`, p:`a mɐjɐˈnojtɨ`, t:`à minuit`},
        {w:`todos dançam na rua`, p:`ˈtoduʒ ˈdɐ̃sɐ̃w nɐ ˈʁuɐ`, t:`tout le monde danse dans la rue`},
        {w:`até de manhã.`, p:`ɐˈtɛ dɨ mɐˈɲɐ̃`, t:`jusqu'au matin`}
      ]
    ],

    vocabulary: [
      {w:`junho`, p:`ˈʒuɲu`, fr:`juin`, b:`junho`, gr:`nom masculin`},
      {w:`véspera`, p:`ˈvɛʃpɨɾɐ`, fr:`veille (le jour d'avant)`, b:`véspera`, gr:`nom féminin`},
      {w:`Santo António`, p:`ˈsɐ̃tu ɐ̃ˈtɔnju`, fr:`saint Antoine, patron populaire de Lisbonne (fête le 13 juin)`, b:`santo`, gr:`nom propre`},
      {w:`festa`, p:`ˈfɛʃtɐ`, fr:`fête ; em festa = en fête`, b:`festa`, gr:`nom féminin`},
      {w:`manjerico`, p:`mɐ̃ʒɨˈɾiku`, fr:`pot de basilic offert avec un petit poème`, b:`manjerico`, gr:`nom masculin`},
      {w:`tudo bem?`, p:`ˈtudu ˈbɐ̃j`, fr:`ça va ? (réponse : tudo, tudo bem)`, b:`tudo`, gr:`salutation`},
      {w:`fixe`, p:`ˈfiʃɨ`, fr:`cool, super (familier, Portugal)`, b:`fixe`, gr:`adjectif invariable`},
      {w:`bifana`, p:`biˈfɐnɐ`, fr:`petit pain garni de porc mariné`, b:`bifana`, gr:`nom féminin`},
      {w:`pois`, p:`ˈpojʃ`, fr:`eh oui, bon, en effet ; pois é = c'est ça ; pois não = bien sûr`, b:`pois`, gr:`marqueur discursif`},
      {w:`está bem`, p:`ɨʃˈta ˈbɐ̃j`, fr:`d'accord`, b:`estar + bem`, gr:`expression`},
      {w:`perceber`, p:`pɨɾsɨˈbeɾ`, fr:`comprendre (au Portugal)`, b:`perceber · verbe en -er`, gr:`verbe`, ff:`Au Portugal, perceber = comprendre : não percebo = je ne comprends pas. « Percevoir » n'est qu'un sens secondaire.`},
      {w:`querer dizer`, p:`kɨˈɾeɾ diˈzeɾ`, fr:`vouloir dire, signifier`, b:`querer + dizer`, gr:`expression`},
      {w:`depender`, p:`dɨpẽˈdeɾ`, fr:`dépendre ; depende! = ça dépend !`, b:`depender · verbe en -er`, gr:`verbe`},
      {w:`responder`, p:`ʁɨʃpõˈdeɾ`, fr:`répondre`, b:`responder · verbe en -er`, gr:`verbe`},
      {w:`a rir`, p:`ɐ ˈʁiɾ`, fr:`en riant (a + infinitif : manière typique du Portugal)`, b:`rir`, gr:`expression`},
      {w:`meia-noite`, p:`mɐjɐˈnojtɨ`, fr:`minuit`, b:`meia-noite`, gr:`nom féminin`},
      {w:`dançar`, p:`dɐ̃ˈsaɾ`, fr:`danser`, b:`dançar · verbe en -ar`, gr:`verbe`}
    ],

    grammar: {
      key: `expressoes`,
      cat: `Expressions idiomatiques`,
      concept: `Les petits mots du quotidien : <i lang="pt-PT">pois</i>, <i lang="pt-PT">está bem</i>, <i lang="pt-PT">tudo bem</i>, <i lang="pt-PT">fixe</i>`,
      excerpt: [
        `— <mark>Então, tudo bem?</mark> — <mark>Tudo!</mark> E contigo? — <mark>Fixe!</mark>`,
        `— <mark>Pois…</mark> eu prefiro sardinhas. — <mark>Está bem</mark>, então sardinhas para todos!`,
        `— «Pois» quer dizer sim ou não? — Depende!`
      ],
      exp: `<p>Ces mots courts reviennent dans chaque conversation au Portugal. On ne les trouve pas toujours dans les manuels, mais sans eux on ne comprend pas les dialogues.</p>
<p><b>Pois</b> est le plus célèbre et le plus difficile. Il marque l'accord (« oui, c'est vrai »), l'hésitation (« bon… euh… ») ou un refus poli, selon l'intonation. Rui a raison d'être perdu, et Sofia aussi : ça dépend !</p>`,
      table: {
        head: [`Expression`, `Sens`, `Quand l'utiliser`],
        rows: [
          [`<b>Tudo bem?</b> — <b>Tudo.</b>`, `Ça va ? — Ça va.`, `Salutation entre proches`],
          [`<b>Então?</b>`, `Alors ? Quoi de neuf ?`, `Pour lancer la conversation`],
          [`<b>Está bem.</b>`, `D'accord.`, `Pour accepter`],
          [`<b>Pois.</b> / <b>Pois é.</b>`, `Eh oui. / C'est bien ça.`, `Pour approuver, ou gagner du temps`],
          [`<b>Pois não.</b>`, `Bien sûr. / Je vous en prie.`, `Formule de service, souvent en magasin`],
          [`<b>Fixe!</b>`, `Cool ! Super !`, `Familier, entre amis`],
          [`<b>Olha…</b>`, `Écoute… / Bon…`, `Pour introduire ce qu'on va dire`],
          [`<b>Já agora…</b>`, `Au fait… / Tant qu'on y est…`, `Pour ajouter une demande`]
        ]
      },
      compare: `<p><i lang="pt-PT">Pois não</i> veut dire « bien sûr », malgré le <i lang="pt-PT">não</i> !</p>
<p>Au Brésil, d'autres mots remplissent ces rôles : <i lang="pt-BR">legal</i> (= <i lang="pt-PT">fixe</i>), <i lang="pt-BR">beleza</i> (= <i lang="pt-PT">tudo bem</i>), <i lang="pt-BR">tá bom</i> (= <i lang="pt-PT">está bem</i>).</p>`,
      also: [
        `<b>A + infinitif</b> : <i lang="pt-PT">a rir</i> = « en riant ». C'est la tournure typique du Portugal (le Brésil dit <i lang="pt-BR">rindo</i>). Elle sera étudiée en A2 avec <i lang="pt-PT">estar a</i>.`,
        `<b>Perceber</b> : au Portugal, c'est le verbe courant pour « comprendre ». <i lang="pt-PT">Percebes?</i> = « tu comprends ? ».`,
        `<b>Santos Populares</b> : en juin, Lisbonne fête Santo António (13), Porto São João (24). On mange des sardines grillées et on offre des <i lang="pt-PT">manjericos</i>.`
      ]
    }
  };

  return [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16];

}());
