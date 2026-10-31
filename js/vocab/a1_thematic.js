/* ═══════════════════════════════════════════════
   BRIQUE VOCABULAIRE THÉMATIQUE — A1
   Format d'un thème : { theme, group, intro, br?, words:[…] }
   Format d'un mot : { w, p, fr, b, gr, ff?, br?, say? }
   RÈGLE : toutes les strings en backticks `...`
═══════════════════════════════════════════════ */
'use strict';

var A1_VOCAB_THEMATIC = [

  {
    theme: `Saluer et remercier`, group: `Vie quotidienne`,
    intro: `Les formules de base. Au Portugal, on dit bom dia jusqu'à midi, boa tarde jusqu'à la nuit, puis boa noite, qui sert aussi pour dire au revoir le soir.`,
    words: [
      {w:`boa noite`, p:`ˈboɐ ˈnojtɨ`, fr:`bonsoir ; bonne nuit`, b:`bom, boa + noite`, gr:`salutation`},
      {w:`adeus`, p:`ɐˈdewʃ`, fr:`au revoir ; adieu`, b:`adeus`, gr:`salutation`},
      {w:`até logo`, p:`ɐˈtɛ ˈlɔɡu`, fr:`à tout à l'heure, à plus tard`, b:`logo`, gr:`salutation`},
      {w:`até já`, p:`ɐˈtɛ ˈʒa`, fr:`à tout de suite`, b:`já`, gr:`salutation`},
      {w:`muito prazer`, p:`ˈmũjtu pɾɐˈzeɾ`, fr:`enchanté(e)`, b:`prazer`, gr:`formule`},
      {w:`como está?`, p:`ˈkomu ɨʃˈta`, fr:`comment allez-vous ? (tu : como estás?)`, b:`estar`, gr:`formule`},
      {w:`com licença`, p:`kõ liˈsẽsɐ`, fr:`pardon, je peux passer ? ; excusez-moi d'entrer`, b:`licença`, gr:`formule de politesse`},
      {w:`por favor`, p:`puɾ fɐˈvoɾ`, fr:`s'il vous plaît (plus neutre que se faz favor)`, b:`favor`, gr:`formule de politesse`},
      {w:`de nada`, p:`dɨ ˈnadɐ`, fr:`de rien`, b:`nada`, gr:`formule de politesse`},
      {w:`bem-vindo`, p:`bɐ̃jˈvĩdu`, fr:`bienvenu ; bem-vinda au féminin`, b:`bem-vindo, bem-vinda`, gr:`adjectif`},
      {w:`parabéns`, p:`pɐɾɐˈbɐ̃jʃ`, fr:`félicitations ; joyeux anniversaire`, b:`parabéns (toujours au pluriel)`, gr:`formule`}
    ]
  },

  {
    theme: `Les nombres`, group: `Vie quotidienne`,
    intro: `Pour les prix, l'heure et les adresses. Le Portugal écrit dezasseis, dezassete et dezanove avec un a ; le Brésil écrit dezesseis, dezessete et dezenove.`,
    words: [
      {w:`zero`, p:`ˈzɛɾu`, fr:`zéro`, b:`zero`, gr:`nombre`},
      {w:`cinco`, p:`ˈsĩku`, fr:`cinq`, b:`cinco`, gr:`nombre`},
      {w:`treze`, p:`ˈtɾezɨ`, fr:`treize`, b:`treze`, gr:`nombre`},
      {w:`catorze`, p:`kɐˈtoɾzɨ`, fr:`quatorze`, b:`catorze`, gr:`nombre`},
      {w:`quinze`, p:`ˈkĩzɨ`, fr:`quinze`, b:`quinze`, gr:`nombre`},
      {w:`dezasseis`, p:`dɨzɐˈsɐjʃ`, fr:`seize (Brésil : dezesseis)`, b:`dezasseis`, gr:`nombre`},
      {w:`dezassete`, p:`dɨzɐˈsɛtɨ`, fr:`dix-sept`, b:`dezassete`, gr:`nombre`},
      {w:`dezoito`, p:`dɨˈzojtu`, fr:`dix-huit`, b:`dezoito`, gr:`nombre`},
      {w:`dezanove`, p:`dɨzɐˈnɔvɨ`, fr:`dix-neuf`, b:`dezanove`, gr:`nombre`},
      {w:`trinta`, p:`ˈtɾĩtɐ`, fr:`trente`, b:`trinta`, gr:`nombre`},
      {w:`cinquenta`, p:`sĩˈkwẽtɐ`, fr:`cinquante`, b:`cinquenta`, gr:`nombre`},
      {w:`mil`, p:`ˈmiɫ`, fr:`mille (invariable : dois mil)`, b:`mil`, gr:`nombre`}
    ]
  },

  {
    theme: `Jours, mois, heures`, group: `Vie quotidienne`,
    intro: `Les jours de semaine sont numérotés à partir du dimanche : segunda-feira est le « deuxième jour ». Dans la conversation, on dit souvent juste a segunda, a terça.`,
    words: [
      {w:`segunda-feira`, p:`sɨˈɡũdɐ ˈfɐjɾɐ`, fr:`lundi`, b:`segunda-feira`, gr:`nom féminin`},
      {w:`terça-feira`, p:`ˈteɾsɐ ˈfɐjɾɐ`, fr:`mardi`, b:`terça-feira`, gr:`nom féminin`},
      {w:`quarta-feira`, p:`ˈkwaɾtɐ ˈfɐjɾɐ`, fr:`mercredi`, b:`quarta-feira`, gr:`nom féminin`},
      {w:`quinta-feira`, p:`ˈkĩtɐ ˈfɐjɾɐ`, fr:`jeudi`, b:`quinta-feira`, gr:`nom féminin`},
      {w:`fim de semana`, p:`ˈfĩ dɨ sɨˈmɐnɐ`, fr:`week-end`, b:`fim`, gr:`nom masculin`},
      {w:`semana`, p:`sɨˈmɐnɐ`, fr:`semaine`, b:`semana`, gr:`nom féminin`},
      {w:`janeiro`, p:`ʒɐˈnɐjɾu`, fr:`janvier`, b:`janeiro`, gr:`nom masculin`},
      {w:`março`, p:`ˈmaɾsu`, fr:`mars`, b:`março`, gr:`nom masculin`},
      {w:`maio`, p:`ˈmaju`, fr:`mai`, b:`maio`, gr:`nom masculin`},
      {w:`dezembro`, p:`dɨˈzẽbɾu`, fr:`décembre`, b:`dezembro`, gr:`nom masculin`},
      {w:`ontem`, p:`ˈõtɐ̃j`, fr:`hier`, b:`ontem`, gr:`adverbe`},
      {w:`que horas são?`, p:`kɨ ˈɔɾɐʃ ˈsɐ̃w`, fr:`quelle heure est-il ? (réponse : são duas, é uma)`, b:`hora`, gr:`formule`}
    ]
  },

  {
    theme: `La famille élargie`, group: `Vie quotidienne`,
    intro: `Le masculin pluriel englobe les deux sexes : os tios = l'oncle et la tante, os primos = les cousins et cousines.`,
    words: [
      {w:`marido`, p:`mɐˈɾidu`, fr:`mari`, b:`marido`, gr:`nom masculin`},
      {w:`tio`, p:`ˈtiu`, fr:`oncle ; tia = tante`, b:`tio, tia`, gr:`nom masculin`},
      {w:`primo`, p:`ˈpɾimu`, fr:`cousin`, b:`primo, prima`, gr:`nom masculin`},
      {w:`sobrinho`, p:`suˈbɾiɲu`, fr:`neveu ; sobrinha = nièce`, b:`sobrinho, sobrinha`, gr:`nom masculin`},
      {w:`neto`, p:`ˈnɛtu`, fr:`petit-fils ; os netos = les petits-enfants`, b:`neto, neta`, gr:`nom masculin`},
      {w:`sogro`, p:`ˈsoɡɾu`, fr:`beau-père (père du conjoint) ; sogra [ˈsɔɡɾɐ] = belle-mère`, b:`sogro, sogra`, gr:`nom masculin`},
      {w:`cunhado`, p:`kuˈɲadu`, fr:`beau-frère ; cunhada = belle-sœur`, b:`cunhado, cunhada`, gr:`nom masculin`},
      {w:`bebé`, p:`bɛˈbɛ`, fr:`bébé (Brésil : bebê)`, b:`bebé (o / a)`, gr:`nom`},
      {w:`gémeos`, p:`ˈʒɛmjuʃ`, fr:`jumeaux`, b:`gémeo, gémea`, gr:`nom masculin pluriel`}
    ]
  },

  {
    theme: `À table`, group: `Culture portugaise`,
    intro: `Une soupe à presque chaque repas, du poisson et de la morue sous toutes les formes. On commande souvent o prato do dia, le plat du jour, au déjeuner.`,
    words: [
      {w:`bacalhau`, p:`bɐkɐˈʎaw`, fr:`morue (salée et séchée), plat national`, b:`bacalhau`, gr:`nom masculin`},
      {w:`caldo verde`, p:`ˈkaɫdu ˈveɾdɨ`, fr:`soupe au chou vert et au chouriço`, b:`caldo`, gr:`nom masculin`},
      {w:`francesinha`, p:`fɾɐ̃sɨˈziɲɐ`, fr:`gros sandwich gratiné en sauce, spécialité de Porto`, b:`francesinha`, gr:`nom féminin`},
      {w:`queijo`, p:`ˈkɐjʒu`, fr:`fromage`, b:`queijo`, gr:`nom masculin`},
      {w:`presunto`, p:`pɾɨˈzũtu`, fr:`jambon cru`, b:`presunto`, gr:`nom masculin`, ff:`≠ « présumé ». Le jambon cuit se dit fiambre.`},
      {w:`arroz`, p:`ɐˈʁoʃ`, fr:`riz`, b:`arroz`, gr:`nom masculin`},
      {w:`prato do dia`, p:`ˈpɾatu du ˈdiɐ`, fr:`plat du jour`, b:`prato`, gr:`nom masculin`, ff:`Prato = assiette ou plat cuisiné.`},
      {w:`sobremesa`, p:`subɾɨˈmezɐ`, fr:`dessert`, b:`sobremesa`, gr:`nom féminin`},
      {w:`copo`, p:`ˈkɔpu`, fr:`verre (à boire)`, b:`copo`, gr:`nom masculin`},
      {w:`garrafa`, p:`ɡɐˈʁafɐ`, fr:`bouteille`, b:`garrafa`, gr:`nom féminin`, ff:`≠ « carafe », qui se dit jarro. Garrafa = bouteille.`},
      {w:`chávena`, p:`ˈʃavɨnɐ`, fr:`tasse (Brésil : xícara)`, b:`chávena`, gr:`nom féminin`},
      {w:`vinho verde`, p:`ˈviɲu ˈveɾdɨ`, fr:`vin jeune et léger du Minho (blanc, rouge ou rosé)`, b:`vinho`, gr:`nom masculin`}
    ]
  },

  {
    theme: `En ville`, group: `Vie quotidienne`,
    intro: `Se déplacer et s'orienter. Le Multibanco, réseau national de distributeurs, sert aussi à payer factures et billets.`,
    words: [
      {w:`elétrico`, p:`iˈlɛtɾiku`, fr:`tramway (o 28, à Lisbonne)`, b:`elétrico`, gr:`nom masculin`},
      {w:`autocarro`, p:`awtɔˈkaʁu`, fr:`bus (Brésil : ônibus)`, b:`autocarro`, gr:`nom masculin`},
      {w:`paragem`, p:`pɐˈɾaʒɐ̃j`, fr:`arrêt (de bus, de tram)`, b:`paragem (pl. paragens)`, gr:`nom féminin`},
      {w:`táxi`, p:`ˈtaksi`, fr:`taxi`, b:`táxi`, gr:`nom masculin`},
      {w:`passe`, p:`ˈpasɨ`, fr:`abonnement de transport`, b:`passe`, gr:`nom masculin`},
      {w:`avenida`, p:`ɐvɨˈnidɐ`, fr:`avenue`, b:`avenida`, gr:`nom féminin`},
      {w:`largo`, p:`ˈlaɾɡu`, fr:`petite place ; comme adjectif : large`, b:`largo`, gr:`nom masculin`},
      {w:`esquina`, p:`ɨʃˈkinɐ`, fr:`coin de rue`, b:`esquina`, gr:`nom féminin`},
      {w:`semáforo`, p:`sɨˈmafuɾu`, fr:`feu de circulation`, b:`semáforo`, gr:`nom masculin`},
      {w:`câmara municipal`, p:`ˈkɐmɐɾɐ munisiˈpaɫ`, fr:`mairie`, b:`câmara`, gr:`nom féminin`},
      {w:`correios`, p:`kuˈʁɐjuʃ`, fr:`la poste (os CTT)`, b:`correio`, gr:`nom masculin pluriel`},
      {w:`Multibanco`, p:`muɫtiˈbɐ̃ku`, fr:`distributeur automatique ; carte bancaire`, b:`Multibanco`, gr:`nom masculin`}
    ]
  },

  {
    theme: `À la maison`, group: `Vie quotidienne`,
    intro: `Les pièces et les objets du logement. Le rez-de-chaussée a un nom à rallonge : o rés-do-chão.`,
    words: [
      {w:`casa de banho`, p:`ˈkazɐ dɨ ˈbɐɲu`, fr:`salle de bain ; toilettes (Brésil : banheiro)`, b:`casa`, gr:`nom féminin`},
      {w:`frigorífico`, p:`fɾiɡuˈɾifiku`, fr:`réfrigérateur (Brésil : geladeira)`, b:`frigorífico`, gr:`nom masculin`},
      {w:`cama`, p:`ˈkɐmɐ`, fr:`lit`, b:`cama`, gr:`nom féminin`},
      {w:`chave`, p:`ˈʃavɨ`, fr:`clé`, b:`chave`, gr:`nom féminin`},
      {w:`sofá`, p:`suˈfa`, fr:`canapé`, b:`sofá`, gr:`nom masculin`},
      {w:`cadeira`, p:`kɐˈdɐjɾɐ`, fr:`chaise`, b:`cadeira`, gr:`nom féminin`},
      {w:`porta`, p:`ˈpɔɾtɐ`, fr:`porte`, b:`porta`, gr:`nom féminin`},
      {w:`escada`, p:`ɨʃˈkadɐ`, fr:`escalier ; échelle`, b:`escada`, gr:`nom féminin`},
      {w:`varanda`, p:`vɐˈɾɐ̃dɐ`, fr:`balcon`, b:`varanda`, gr:`nom féminin`, ff:`Une varanda est un balcon, pas une véranda fermée.`},
      {w:`rés-do-chão`, p:`ˈʁɛʒ du ˈʃɐ̃w`, fr:`rez-de-chaussée`, b:`rés-do-chão`, gr:`nom masculin`},
      {w:`luz`, p:`ˈluʃ`, fr:`lumière ; électricité`, b:`luz (pl. luzes)`, gr:`nom féminin`}
    ]
  },

  {
    theme: `Couleurs et vêtements`, group: `Vie quotidienne`,
    intro: `Les couleurs s'accordent comme les autres adjectifs, sauf celles qui viennent d'un nom : laranja, cor-de-rosa restent invariables.`,
    words: [
      {w:`vermelho`, p:`vɨɾˈmɐʎu`, fr:`rouge`, b:`vermelho, vermelha`, gr:`adjectif`},
      {w:`preto`, p:`ˈpɾetu`, fr:`noir`, b:`preto, preta`, gr:`adjectif`},
      {w:`castanho`, p:`kɐʃˈtɐɲu`, fr:`marron (yeux, cheveux : châtain)`, b:`castanho, castanha`, gr:`adjectif`},
      {w:`cinzento`, p:`sĩˈzẽtu`, fr:`gris (Brésil : cinza)`, b:`cinzento, cinzenta`, gr:`adjectif`},
      {w:`cor-de-rosa`, p:`ˈkoɾ dɨ ˈʁɔzɐ`, fr:`rose (couleur), invariable`, b:`cor-de-rosa`, gr:`adjectif invariable`},
      {w:`roupa`, p:`ˈʁopɐ`, fr:`vêtements, habits (singulier collectif)`, b:`roupa`, gr:`nom féminin`},
      {w:`camisa`, p:`kɐˈmizɐ`, fr:`chemise`, b:`camisa`, gr:`nom féminin`},
      {w:`saia`, p:`ˈsajɐ`, fr:`jupe`, b:`saia`, gr:`nom féminin`},
      {w:`sapatos`, p:`sɐˈpatuʃ`, fr:`chaussures`, b:`sapato`, gr:`nom masculin`},
      {w:`meias`, p:`ˈmɐjɐʃ`, fr:`chaussettes ; collants`, b:`meia`, gr:`nom féminin`},
      {w:`fato`, p:`ˈfatu`, fr:`costume (veste et pantalon) ; fato de banho = maillot de bain`, b:`fato`, gr:`nom masculin`, ff:`≠ « fait », qui se dit facto au Portugal. Fato = costume.`}
    ]
  },

  {
    theme: `Le Portugal en quelques mots`, group: `Culture portugaise`,
    intro: `Régions, villes et symboles que l'on croise dès les premières conversations.`,
    words: [
      {w:`azulejo`, p:`ɐzuˈlɐʒu`, fr:`carreau de faïence peint, souvent bleu et blanc`, b:`azulejo`, gr:`nom masculin`},
      {w:`calçada portuguesa`, p:`kaɫˈsadɐ puɾtuˈɡezɐ`, fr:`pavage de pierres blanches et noires des trottoirs`, b:`calçada`, gr:`nom féminin`},
      {w:`os Açores`, p:`uz ɐˈsoɾɨʃ`, fr:`les Açores, archipel au milieu de l'Atlantique`, b:`Açores`, gr:`nom propre`},
      {w:`a Madeira`, p:`ɐ mɐˈdɐjɾɐ`, fr:`Madère, île de l'Atlantique (madeira = bois)`, b:`Madeira`, gr:`nom propre`},
      {w:`o Douro`, p:`u ˈdoɾu`, fr:`le Douro, fleuve de Porto et région du vin de Porto`, b:`Douro`, gr:`nom propre`},
      {w:`o Algarve`, p:`u aɫˈɡaɾvɨ`, fr:`l'Algarve, région des plages du sud`, b:`Algarve`, gr:`nom propre`},
      {w:`o Alentejo`, p:`u ɐlẽˈtɐʒu`, fr:`l'Alentejo, grande région agricole du sud`, b:`Alentejo`, gr:`nom propre`},
      {w:`Coimbra`, p:`kuˈĩbɾɐ`, fr:`Coimbra, ville universitaire du centre`, b:`Coimbra`, gr:`nom propre`},
      {w:`galo de Barcelos`, p:`ˈɡalu dɨ bɐɾˈsɛluʃ`, fr:`coq de Barcelos, emblème populaire du pays`, b:`galo`, gr:`nom masculin`},
      {w:`guitarra portuguesa`, p:`ɡiˈtaʁɐ puɾtuˈɡezɐ`, fr:`guitare portugaise à douze cordes, instrument du fado`, b:`guitarra`, gr:`nom féminin`},
      {w:`lusofonia`, p:`luzufuˈniɐ`, fr:`lusophonie, ensemble des pays de langue portugaise`, b:`lusofonia`, gr:`nom féminin`}
    ]
  },

  {
    theme: `Portugal / Brésil : premiers mots qui changent`, group: `PT-PT / PT-BR`, br: true,
    intro: `Les mots du quotidien qui changent d'un côté à l'autre de l'Atlantique. Utile pour comprendre une série ou une chanson brésilienne.`,
    words: [
      {w:`pequeno-almoço`, p:`pɨˈkenu aɫˈmosu`, fr:`petit-déjeuner`, b:`pequeno-almoço`, gr:`nom masculin`, br:`café da manhã`},
      {w:`comboio`, p:`kõˈbɔju`, fr:`train`, b:`comboio`, gr:`nom masculin`, br:`trem`},
      {w:`autocarro`, p:`awtɔˈkaʁu`, fr:`bus`, b:`autocarro`, gr:`nom masculin`, br:`ônibus`},
      {w:`telemóvel`, p:`tɛlɛˈmɔvɛɫ`, fr:`téléphone portable`, b:`telemóvel`, gr:`nom masculin`, br:`celular`},
      {w:`casa de banho`, p:`ˈkazɐ dɨ ˈbɐɲu`, fr:`toilettes, salle de bain`, b:`casa`, gr:`nom féminin`, br:`banheiro`},
      {w:`sumo`, p:`ˈsumu`, fr:`jus de fruits`, b:`sumo`, gr:`nom masculin`, br:`suco`},
      {w:`bica`, p:`ˈbikɐ`, fr:`expresso`, b:`bica`, gr:`nom féminin`, br:`cafezinho`},
      {w:`fixe`, p:`ˈfiʃɨ`, fr:`cool, super`, b:`fixe`, gr:`adjectif`, br:`legal`},
      {w:`giro`, p:`ˈʒiɾu`, fr:`mignon, joli`, b:`giro, gira`, gr:`adjectif`, br:`bonitinho, fofo`},
      {w:`tu`, p:`ˈtu`, fr:`tu (entre proches)`, b:`tu`, gr:`pronom`, br:`você`},
      {w:`apanhar`, p:`ɐpɐˈɲaɾ`, fr:`prendre (le bus, le train)`, b:`apanhar`, gr:`verbe`, br:`pegar`},
      {w:`perceber`, p:`pɨɾsɨˈbeɾ`, fr:`comprendre`, b:`perceber`, gr:`verbe`, br:`entender`}
    ]
  }

];
