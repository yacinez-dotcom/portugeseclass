/* ═══════════════════════════════════════════════
   BRIQUE VOCABULAIRE THÉMATIQUE — B2
   Format d'un thème :
     { theme:`Nom`, group:`Vie quotidienne`, intro:`…`, br:true?, words:[…] }
   Format d'un mot (même structure que le vocabulaire des textes) :
     { w, p, fr, b, gr, ff? , br? }   br = équivalent brésilien
   RÈGLE : toutes les strings en backticks `...`
═══════════════════════════════════════════════ */
'use strict';

var B2_VOCAB_THEMATIC = [

  {
    theme: `Louer un logement`, group: `Vie quotidienne`,
    intro: `Le vocabulaire du bail et des démarches. Au Portugal, le NIF est demandé partout, du contrat de location à la carte de fidélité.`,
    words: [
      {w:`inquilino`, p:`ĩkiˈlinu`, fr:`locataire`, b:`inquilino, inquilina`, gr:`nom masculin`},
      {w:`contrato de arrendamento`, p:`kõˈtɾatu dɨ ɐʁẽdɐˈmẽtu`, fr:`bail, contrat de location`, b:`contrato`, gr:`nom masculin`},
      {w:`fiador`, p:`fiɐˈdoɾ`, fr:`garant (caution personnelle)`, b:`fiador, fiadora`, gr:`nom masculin`},
      {w:`caução`, p:`kawˈsɐ̃w`, fr:`dépôt de garantie`, b:`caução (pl. cauções)`, gr:`nom féminin`},
      {w:`T2`, say:`tê dois`, p:`ˈte ˈdojʃ`, fr:`appartement à deux chambres + séjour (≈ F3 français)`, b:`T0, T1, T2… (tipologia)`, gr:`nom masculin`, ff:`Un T2 portugais n'est pas un T2 français : le chiffre compte les chambres, pas les pièces.`},
      {w:`assoalhada`, p:`ɐsuɐˈʎadɐ`, fr:`pièce principale (hors cuisine et salle de bain)`, b:`assoalhada`, gr:`nom féminin`},
      {w:`morada`, p:`muˈɾadɐ`, fr:`adresse (postale)`, b:`morada`, gr:`nom féminin`},
      {w:`NIF`, say:`nif`, p:`ˈnif`, fr:`numéro d'identification fiscale`, b:`número de identificação fiscal`, gr:`nom masculin (sigle)`},
      {w:`as Finanças`, p:`ɐʃ fiˈnɐ̃sɐʃ`, fr:`le fisc, les services des impôts`, b:`finanças`, gr:`nom féminin pluriel`},
      {w:`Loja do Cidadão`, p:`ˈlɔʒɐ du sidɐˈdɐ̃w`, fr:`guichet unique des services publics`, b:`loja`, gr:`nom féminin`},
      {w:`condomínio`, p:`kõduˈminju`, fr:`copropriété ; charges de copropriété`, b:`condomínio`, gr:`nom masculin`},
      {w:`recibo de renda`, p:`ʁɨˈsibu dɨ ˈʁẽdɐ`, fr:`quittance de loyer`, b:`recibo`, gr:`nom masculin`}
    ]
  },

  {
    theme: `Au café`, group: `Vie quotidienne`,
    intro: `Le café se commande debout au comptoir, vite et souvent. Chaque façon de le boire a son nom, et certains changent entre Lisbonne et Porto.`,
    words: [
      {w:`meia de leite`, p:`ˈmɐjɐ dɨ ˈlɐjtɨ`, fr:`café au lait en tasse`, b:`meia`, gr:`nom féminin`},
      {w:`abatanado`, p:`ɐbɐtɐˈnadu`, fr:`café allongé`, b:`abatanado`, gr:`nom masculin`},
      {w:`pingo`, p:`ˈpĩɡu`, fr:`expresso avec une goutte de lait`, b:`pingo`, gr:`nom masculin`},
      {w:`cimbalino`, p:`sĩbɐˈlinu`, fr:`expresso (mot de Porto ; à Lisbonne : bica)`, b:`cimbalino`, gr:`nom masculin`},
      {w:`carioca de limão`, p:`kɐɾiˈɔkɐ dɨ liˈmɐ̃w`, fr:`infusion d'écorce de citron`, b:`carioca`, gr:`nom masculin`},
      {w:`tosta mista`, p:`ˈtɔʃtɐ ˈmiʃtɐ`, fr:`croque-monsieur`, b:`tosta`, gr:`nom féminin`},
      {w:`torrada`, p:`tuˈʁadɐ`, fr:`grosse tranche de pain grillé beurré`, b:`torrada`, gr:`nom féminin`},
      {w:`pastel de nata`, p:`pɐʃˈtɛɫ dɨ ˈnatɐ`, fr:`flan à la crème en pâte feuilletée`, b:`pastel (pl. pastéis)`, gr:`nom masculin`},
      {w:`prego`, p:`ˈpɾeɡu`, fr:`sandwich au steak ; aussi : clou`, b:`prego`, gr:`nom masculin`},
      {w:`imperial`, p:`ĩpɨɾiˈaɫ`, fr:`demi pression (Lisbonne ; à Porto : fino)`, b:`imperial (pl. imperiais)`, gr:`nom féminin (uma imperial)`},
      {w:`se faz favor`, p:`sɨ ˈfaʃ fɐˈvoɾ`, fr:`s'il vous plaît (aussi pour interpeller)`, b:`favor`, gr:`formule de politesse`},
      {w:`a conta`, p:`ɐ ˈkõtɐ`, fr:`l'addition`, b:`conta`, gr:`nom féminin`}
    ]
  },

  {
    theme: `Santos Populares et São Martinho`, group: `Culture portugaise`,
    intro: `En juin, les quartiers de Lisbonne et de Porto fêtent leurs saints dans la rue. En novembre, la Saint-Martin réunit autour des châtaignes et du vin nouveau.`,
    words: [
      {w:`Santos Populares`, p:`ˈsɐ̃tuʃ pupuˈlaɾɨʃ`, fr:`fêtes de juin (Santo António, São João, São Pedro)`, b:`santo`, gr:`nom masculin pluriel`},
      {w:`arraial`, p:`ɐʁɐˈjaɫ`, fr:`bal populaire de quartier`, b:`arraial (pl. arraiais)`, gr:`nom masculin`},
      {w:`sardinha assada`, p:`sɐɾˈdiɲɐ ɐˈsadɐ`, fr:`sardine grillée`, b:`sardinha`, gr:`nom féminin`},
      {w:`manjerico`, p:`mɐ̃ʒɨˈɾiku`, fr:`pot de basilic offert avec un petit poème`, b:`manjerico`, gr:`nom masculin`},
      {w:`marchas populares`, p:`ˈmaɾʃɐʃ pupuˈlaɾɨʃ`, fr:`défilés costumés des quartiers de Lisbonne`, b:`marcha`, gr:`nom féminin pluriel`},
      {w:`São Martinho`, p:`ˈsɐ̃w mɐɾˈtiɲu`, fr:`la Saint-Martin (11 novembre)`, b:`São Martinho`, gr:`nom propre`},
      {w:`castanhas assadas`, p:`kɐʃˈtɐɲɐz ɐˈsadɐʃ`, fr:`châtaignes grillées`, b:`castanha`, gr:`nom féminin pluriel`},
      {w:`magusto`, p:`mɐˈɡuʃtu`, fr:`fête des châtaignes autour d'un feu`, b:`magusto`, gr:`nom masculin`},
      {w:`água-pé`, p:`ˈaɡwɐ ˈpɛ`, fr:`vin léger de fin de pressurage`, b:`água-pé`, gr:`nom féminin`}
    ]
  },

  {
    theme: `Découvertes, Estado Novo, 25 de Abril`, group: `Culture portugaise`,
    intro: `Trois moments qui reviennent sans cesse dans la presse, les discours et les manuels : l'expansion maritime, la dictature et la révolution de 1974.`,
    words: [
      {w:`os Descobrimentos`, p:`uʒ dɨʃkubɾiˈmẽtuʃ`, fr:`les Grandes Découvertes (XVe-XVIe s.)`, b:`descobrimento`, gr:`nom masculin pluriel`},
      {w:`caravela`, p:`kɐɾɐˈvɛlɐ`, fr:`caravelle`, b:`caravela`, gr:`nom féminin`},
      {w:`o Estado Novo`, p:`u ɨʃˈtadu ˈnovu`, fr:`la dictature salazariste (1933-1974)`, b:`estado`, gr:`nom masculin`},
      {w:`a PIDE`, say:`a pide`, p:`ɐ ˈpidɨ`, fr:`la police politique du régime`, b:`PIDE`, gr:`nom féminin (sigle)`},
      {w:`guerra colonial`, p:`ˈɡɛʁɐ kuluniˈaɫ`, fr:`guerre coloniale (1961-1974)`, b:`guerra`, gr:`nom féminin`},
      {w:`o 25 de Abril`, say:`o vinte e cinco de Abril`, p:`u ˈvĩtɨ i ˈsĩku dɨ ɐˈbɾiɫ`, fr:`la révolution du 25 avril 1974`, b:`Abril`, gr:`nom masculin`},
      {w:`Revolução dos Cravos`, p:`ʁɨvuluˈsɐ̃w duʃ ˈkɾavuʃ`, fr:`révolution des Œillets`, b:`revolução`, gr:`nom féminin`},
      {w:`cravo`, p:`ˈkɾavu`, fr:`œillet`, b:`cravo`, gr:`nom masculin`},
      {w:`descolonização`, p:`dɨʃkulunizɐˈsɐ̃w`, fr:`décolonisation`, b:`descolonização`, gr:`nom féminin`},
      {w:`retornados`, p:`ʁɨtuɾˈnaduʃ`, fr:`rapatriés des anciennes colonies (1975)`, b:`retornado, retornada`, gr:`nom masculin pluriel`}
    ]
  },

  {
    theme: `Portugal / Brésil : les mots qui changent`, group: `PT-PT / PT-BR`, br: true,
    intro: `Pour comprendre aussi séries, chansons et vidéos brésiliennes. Quelques mots anodins d'un côté de l'Atlantique sont vulgaires ou insultants de l'autre.`,
    words: [
      {w:`autocarro`, p:`awtɔˈkaʁu`, fr:`bus`, b:`autocarro`, gr:`nom masculin`, br:`ônibus`},
      {w:`comboio`, p:`kõˈbɔju`, fr:`train`, b:`comboio`, gr:`nom masculin`, br:`trem`},
      {w:`pequeno-almoço`, p:`pɨˈkenu aɫˈmosu`, fr:`petit-déjeuner`, b:`pequeno-almoço`, gr:`nom masculin`, br:`café da manhã`},
      {w:`telemóvel`, p:`tɛlɛˈmɔvɛɫ`, fr:`téléphone portable`, b:`telemóvel (pl. telemóveis)`, gr:`nom masculin`, br:`celular`},
      {w:`casa de banho`, p:`ˈkazɐ dɨ ˈbɐɲu`, fr:`salle de bain ; toilettes`, b:`casa`, gr:`nom féminin`, br:`banheiro`},
      {w:`frigorífico`, p:`fɾiɡuˈɾifiku`, fr:`réfrigérateur`, b:`frigorífico`, gr:`nom masculin`, br:`geladeira`},
      {w:`ecrã`, p:`ɛˈkɾɐ̃`, fr:`écran`, b:`ecrã`, gr:`nom masculin`, br:`tela`},
      {w:`sumo`, p:`ˈsumu`, fr:`jus de fruits`, b:`sumo`, gr:`nom masculin`, br:`suco`},
      {w:`fixe`, p:`ˈfiʃɨ`, fr:`cool, sympa`, b:`fixe`, gr:`adjectif familier, invariable`, br:`legal`},
      {w:`apelido`, p:`ɐpɨˈlidu`, fr:`nom de famille`, b:`apelido`, gr:`nom masculin`, br:`sobrenome`, ff:`Au Brésil, apelido veut dire « surnom ».`},
      {w:`rapariga`, p:`ʁɐpɐˈɾiɡɐ`, fr:`jeune fille`, b:`rapariga`, gr:`nom féminin`, br:`moça, garota`, ff:`Neutre au Portugal, vulgaire au Brésil.`},
      {w:`bicha`, p:`ˈbiʃɐ`, fr:`file d'attente (on dit aussi fila)`, b:`bicha`, gr:`nom féminin`, br:`fila`, ff:`Au Brésil, c'est une injure homophobe : préférez fila partout.`}
    ]
  }

];
