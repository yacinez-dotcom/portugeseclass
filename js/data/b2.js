/* ═══════════════════════════════════════════════
   BRIQUE DONNÉES — B2 · Avançado (Indépendant)
   RÈGLE : toutes les strings en backticks `...`
   Phonétique : API, prononciation standard de Lisbonne.
   Chunk : w = texte affiché (ponctuation comprise), p = API, t = traduction
           x:1 = expression figée (un seul bloc) · ff:1 = faux ami
═══════════════════════════════════════════════ */
'use strict';

var B2_TEXTS = (function () {

  /* ─── T1 — Uma casa em Lisboa ─────────────────── */
  var T1 = {
    id: `b2-1`, level: `B2`,
    title: `Uma casa em Lisboa`,
    titleFr: `Une maison à Lisbonne`,
    theme: `Logement · société`,
    sentences: [
      [
        {w:`Quando`, p:`ˈkwɐ̃du`, t:`quand`},
        {w:`a Inês`, p:`ɐ iˈneʃ`, t:`Inês (article devant le prénom, usuel au Portugal)`},
        {w:`chegou`, p:`ʃɨˈɡo`, t:`arriva, est arrivée (chegar)`},
        {w:`a Lisboa`, p:`ɐ liʒˈboɐ`, t:`à Lisbonne`},
        {w:`para estudar`, p:`ˈpɐɾɐ ɨʃtuˈdaɾ`, t:`pour étudier`},
        {w:`Arquitetura,`, p:`ɐɾkitɛˈtuɾɐ`, t:`l'architecture`},
        {w:`não fazia ideia`, p:`ˈnɐ̃w fɐˈziɐ iˈdɐjɐ`, t:`n'avait aucune idée (não fazer ideia)`, x:1},
        {w:`de como`, p:`dɨ ˈkomu`, t:`de combien, à quel point`},
        {w:`seria difícil`, p:`sɨˈɾiɐ diˈfisiɫ`, t:`ce serait difficile`},
        {w:`encontrar casa.`, p:`ẽkõˈtɾaɾ ˈkazɐ`, t:`trouver un logement`}
      ],
      [
        {w:`De repente,`, p:`dɨ ʁɨˈpẽtɨ`, t:`tout à coup`, x:1},
        {w:`deu conta de que`, p:`ˈdew ˈkõtɐ dɨ kɨ`, t:`elle se rendit compte que (dar conta de)`, x:1},
        {w:`as rendas`, p:`ɐʒ ˈʁẽdɐʃ`, t:`les loyers`, ff:1},
        {w:`tinham subido`, p:`ˈtiɲɐ̃w suˈbidu`, t:`avaient augmenté (subir = monter)`, ff:1},
        {w:`tanto`, p:`ˈtɐ̃tu`, t:`tellement`},
        {w:`que`, p:`kɨ`, t:`que`},
        {w:`um quarto`, p:`ũ ˈkwaɾtu`, t:`une chambre`},
        {w:`custava quase`, p:`kuʃˈtavɐ ˈkwazɨ`, t:`coûtait presque`},
        {w:`metade do salário mínimo.`, p:`mɨˈtadɨ du sɐˈlaɾju ˈminimu`, t:`la moitié du salaire minimum`}
      ],
      [
        {w:`Os senhorios`, p:`uʃ sɨɲuˈɾiuʃ`, t:`les propriétaires bailleurs`, ff:1},
        {w:`preferiam`, p:`pɾɨfɨˈɾiɐ̃w`, t:`préféraient`},
        {w:`arrendar`, p:`ɐʁẽˈdaɾ`, t:`louer, mettre en location`},
        {w:`os apartamentos`, p:`uz ɐpɐɾtɐˈmẽtuʃ`, t:`les appartements`},
        {w:`a turistas,`, p:`ɐ tuˈɾiʃtɐʃ`, t:`à des touristes`},
        {w:`através do`, p:`ɐtɾɐˈvɛʒ du`, t:`par le biais de, via`, x:1},
        {w:`alojamento local,`, p:`ɐluʒɐˈmẽtu luˈkaɫ`, t:`la location touristique meublée (type Airbnb)`},
        {w:`por ser`, p:`puɾ ˈseɾ`, t:`parce que c'est (litt. « pour être »)`},
        {w:`mais rentável.`, p:`ˈmajʃ ʁẽˈtavɛɫ`, t:`plus rentable`}
      ],
      [
        {w:`Para pagar`, p:`ˈpɐɾɐ pɐˈɡaɾ`, t:`pour payer`},
        {w:`as propinas`, p:`ɐʃ pɾuˈpinɐʃ`, t:`les frais de scolarité`, ff:1},
        {w:`e a renda,`, p:`i ɐ ˈʁẽdɐ`, t:`et le loyer`},
        {w:`a Inês`, p:`ɐ iˈneʃ`, t:`Inês`},
        {w:`teve de`, p:`ˈtevɨ dɨ`, t:`a dû (ter de = devoir)`, x:1},
        {w:`arranjar`, p:`ɐʁɐ̃ˈʒaɾ`, t:`trouver, se dégoter`, ff:1},
        {w:`um part-time`, p:`ũ paɾtˈtajm`, t:`un petit boulot à temps partiel`},
        {w:`num café`, p:`nũ kɐˈfɛ`, t:`dans un café (em + um)`},
        {w:`da Baixa.`, p:`dɐ ˈbajʃɐ`, t:`de la Baixa (centre historique bas de Lisbonne)`}
      ],
      [
        {w:`Ao fim de`, p:`aw ˈfĩ dɨ`, t:`au bout de`, x:1},
        {w:`umas semanas,`, p:`ˈumɐʃ sɨˈmɐnɐʃ`, t:`quelques semaines`},
        {w:`já servia`, p:`ˈʒa sɨɾˈviɐ`, t:`elle servait déjà`},
        {w:`bicas e galões`, p:`ˈbikɐz i ɡɐˈlõjʃ`, t:`des expressos et des grands crèmes en verre`},
        {w:`sem pensar,`, p:`sɐ̃j pẽˈsaɾ`, t:`sans réfléchir`},
        {w:`e os clientes habituais`, p:`i uʃ kliˈẽtɨz ɐbituˈajʃ`, t:`et les habitués`},
        {w:`tratavam-na`, p:`tɾɐˈtavɐ̃wnɐ`, t:`l'appelaient, s'adressaient à elle`},
        {w:`pelo nome.`, p:`pɨlu ˈnomɨ`, t:`par son prénom (por + o)`}
      ],
      [
        {w:`Um dia,`, p:`ũ ˈdiɐ`, t:`un jour`},
        {w:`uma senhora idosa`, p:`ˈumɐ sɨˈɲɔɾɐ iˈdɔzɐ`, t:`une dame âgée`},
        {w:`ouviu-a`, p:`oˈviwɐ`, t:`l'entendit`},
        {w:`queixar-se`, p:`kɐjˈʃaɾsɨ`, t:`se plaindre`},
        {w:`ao telefone`, p:`aw tɨlɨˈfɔnɨ`, t:`au téléphone`},
        {w:`e ofereceu-lhe`, p:`i ɔfɨɾɨˈsewʎɨ`, t:`et lui offrit, lui proposa`},
        {w:`um quarto`, p:`ũ ˈkwaɾtu`, t:`une chambre`},
        {w:`em sua casa,`, p:`ɐ̃j ˈsuɐ ˈkazɐ`, t:`chez elle`},
        {w:`em Campo de Ourique.`, p:`ɐ̃j ˈkɐ̃pu dɨ oˈɾikɨ`, t:`à Campo de Ourique (quartier de Lisbonne)`}
      ],
      [
        {w:`Em troca de`, p:`ɐ̃j ˈtɾɔkɐ dɨ`, t:`en échange de`, x:1},
        {w:`uma renda simbólica,`, p:`ˈumɐ ˈʁẽdɐ sĩˈbɔlikɐ`, t:`un loyer symbolique`},
        {w:`bastava`, p:`bɐʃˈtavɐ`, t:`il suffisait`},
        {w:`fazerem companhia`, p:`fɐˈzeɾɐ̃j kõpɐˈɲiɐ`, t:`qu'elles se tiennent compagnie (infinitif personnel)`},
        {w:`uma à outra`, p:`ˈumɐ a ˈotɾɐ`, t:`l'une à l'autre`, x:1},
        {w:`e irem juntas`, p:`i ˈiɾɐ̃j ˈʒũtɐʃ`, t:`et qu'elles aillent ensemble (infinitif personnel)`},
        {w:`ao mercado`, p:`aw mɨɾˈkadu`, t:`au marché`},
        {w:`aos sábados.`, p:`awʃ ˈsabɐduʃ`, t:`le samedi, tous les samedis`}
      ],
      [
        {w:`«É preciso`, p:`ˈɛ pɾɨˈsizu`, t:`il faut`, x:1},
        {w:`os jovens`, p:`uʒ ˈʒɔvɐ̃jʃ`, t:`que les jeunes`},
        {w:`terem`, p:`ˈteɾɐ̃j`, t:`aient (infinitif personnel de ter)`},
        {w:`onde viver,`, p:`ˈõdɨ viˈveɾ`, t:`où vivre`},
        {w:`senão`, p:`sɨˈnɐ̃w`, t:`sinon`},
        {w:`a cidade`, p:`ɐ siˈdadɨ`, t:`la ville`},
        {w:`fica vazia»,`, p:`ˈfikɐ vɐˈziɐ`, t:`se vide, devient vide (ficar + adjectif)`},
        {w:`dizia`, p:`diˈziɐ`, t:`disait`},
        {w:`a Dona Rosário,`, p:`ɐ ˈdonɐ ʁuˈzaɾju`, t:`Dona Rosário (titre de respect + prénom)`},
        {w:`que vivia sozinha`, p:`kɨ viˈviɐ sɔˈziɲɐ`, t:`qui vivait seule`},
        {w:`desde que`, p:`ˈdeʒdɨ kɨ`, t:`depuis que`, x:1},
        {w:`o marido`, p:`u mɐˈɾidu`, t:`son mari`},
        {w:`morrera.`, p:`muˈʁeɾɐ`, t:`était mort (mais-que-perfeito simples)`}
      ],
      [
        {w:`A Inês,`, p:`ɐ iˈneʃ`, t:`Inês`},
        {w:`que no início`, p:`kɨ nu iˈnisju`, t:`qui au début`},
        {w:`achara`, p:`ɐˈʃaɾɐ`, t:`avait trouvé (mais-que-perfeito simples)`},
        {w:`a ideia`, p:`ɐ iˈdɐjɐ`, t:`l'idée`},
        {w:`um bocado`, p:`ũ buˈkadu`, t:`un peu (litt. « un morceau »)`, x:1},
        {w:`esquisita,`, p:`ɨʃkiˈzitɐ`, t:`bizarre`, ff:1},
        {w:`acabou por`, p:`ɐkɐˈbo puɾ`, t:`a fini par (acabar por)`, x:1},
        {w:`ganhar`, p:`ɡɐˈɲaɾ`, t:`gagner`},
        {w:`uma avó lisboeta.`, p:`ˈumɐ ɐˈvɔ liʒbuˈetɐ`, t:`une grand-mère lisboète`}
      ],
      [
        {w:`Hoje,`, p:`ˈoʒɨ`, t:`aujourd'hui`},
        {w:`quando`, p:`ˈkwɐ̃du`, t:`quand`},
        {w:`lhe perguntam`, p:`ʎɨ pɨɾˈɡũtɐ̃w`, t:`on lui demande (perguntar = poser une question)`},
        {w:`se`, p:`sɨ`, t:`si`},
        {w:`vale a pena`, p:`ˈvalɨ ɐ ˈpenɐ`, t:`ça vaut la peine (valer a pena)`, x:1},
        {w:`viver em Lisboa,`, p:`viˈveɾ ɐ̃j liʒˈboɐ`, t:`de vivre à Lisbonne`},
        {w:`responde:`, p:`ʁɨʃˈpõdɨ`, t:`elle répond`},
        {w:`«Pois…`, p:`ˈpojʃ`, t:`bon… eh oui… (marqueur d'hésitation ou d'accord)`, x:1},
        {w:`vale,`, p:`ˈvalɨ`, t:`oui, ça vaut le coup`},
        {w:`se tiveres`, p:`sɨ tiˈveɾɨʃ`, t:`si tu as (futur du subjonctif de ter)`},
        {w:`sorte.»`, p:`ˈsɔɾtɨ`, t:`de la chance`, ff:1}
      ]
    ],

    vocabulary: [
      {w:`fazer ideia`, p:`fɐˈzeɾ iˈdɐjɐ`, fr:`avoir idée de, imaginer ; não fazer ideia = n'en avoir aucune idée`, b:`fazer (irrégulier) + ideia`, gr:`expression`},
      {w:`de repente`, p:`dɨ ʁɨˈpẽtɨ`, fr:`tout à coup, soudain`, b:`de repente`, gr:`locution adverbiale`},
      {w:`dar conta de`, p:`ˈdaɾ ˈkõtɐ dɨ`, fr:`se rendre compte de`, b:`dar · verbe en -ar irrégulier (dou, deu)`, gr:`expression`},
      {w:`renda`, p:`ˈʁẽdɐ`, fr:`loyer`, b:`renda`, gr:`nom féminin`, ff:`≠ « rente ». Au Portugal, renda = loyer ; au Brésil, renda = revenu (le loyer s'y dit aluguel).`},
      {w:`subir`, p:`suˈbiɾ`, fr:`monter, augmenter`, b:`subir · verbe en -ir (subo, sobes, sobe)`, gr:`verbe`, ff:`≠ « subir ». Subir = monter. « Subir une épreuve » se dit sofrer ou suportar.`},
      {w:`quarto`, p:`ˈkwaɾtu`, fr:`chambre ; aussi : quart`, b:`quarto`, gr:`nom masculin`},
      {w:`metade`, p:`mɨˈtadɨ`, fr:`moitié`, b:`metade`, gr:`nom féminin`},
      {w:`salário mínimo`, p:`sɐˈlaɾju ˈminimu`, fr:`salaire minimum (≈ SMIC)`, b:`salário`, gr:`nom masculin`},
      {w:`senhorio`, p:`sɨɲuˈɾiu`, fr:`propriétaire bailleur`, b:`senhorio, senhoria`, gr:`nom masculin`, ff:`≠ « seigneurie ». Au Portugal, c'est simplement le bailleur.`},
      {w:`preferir`, p:`pɾɨfɨˈɾiɾ`, fr:`préférer`, b:`preferir · verbe en -ir (prefiro, preferes)`, gr:`verbe`},
      {w:`arrendar`, p:`ɐʁẽˈdaɾ`, fr:`louer (un logement, à long terme)`, b:`arrendar · verbe en -ar`, gr:`verbe`},
      {w:`através de`, p:`ɐtɾɐˈvɛʒ dɨ`, fr:`par le biais de, à travers`, b:`através de`, gr:`locution prépositive`},
      {w:`alojamento local`, p:`ɐluʒɐˈmẽtu luˈkaɫ`, fr:`location touristique de courte durée (AL)`, b:`alojamento`, gr:`nom masculin`},
      {w:`rentável`, p:`ʁẽˈtavɛɫ`, fr:`rentable`, b:`rentável (pl. rentáveis)`, gr:`adjectif invariable en genre`},
      {w:`propina`, p:`pɾuˈpinɐ`, fr:`frais de scolarité, droits d'inscription`, b:`propina`, gr:`nom féminin`, ff:`Au Portugal, ce n'est pas un « pourboire » (sens espagnol) : le pourboire se dit gorjeta.`},
      {w:`ter de`, p:`ˈteɾ dɨ`, fr:`devoir, être obligé de`, b:`ter · verbe en -er irrégulier (tenho, teve)`, gr:`périphrase`},
      {w:`arranjar`, p:`ɐʁɐ̃ˈʒaɾ`, fr:`trouver, se procurer (un emploi, une maison) ; réparer`, b:`arranjar · verbe en -ar`, gr:`verbe`, ff:`Rarement « arranger ». Arranjar emprego = trouver du travail.`},
      {w:`part-time`, p:`paɾtˈtajm`, fr:`emploi à temps partiel, petit boulot`, b:`part-time`, gr:`nom masculin (anglicisme)`},
      {w:`ao fim de`, p:`aw ˈfĩ dɨ`, fr:`au bout de`, b:`fim`, gr:`locution prépositive`},
      {w:`servir`, p:`sɨɾˈviɾ`, fr:`servir`, b:`servir · verbe en -ir (sirvo, serves)`, gr:`verbe`},
      {w:`bica`, p:`ˈbikɐ`, fr:`expresso (mot de Lisbonne)`, b:`bica`, gr:`nom féminin`},
      {w:`galão`, p:`ɡɐˈlɐ̃w`, fr:`café au lait servi dans un grand verre`, b:`galão (pl. galões)`, gr:`nom masculin`},
      {w:`habitual`, p:`ɐbituˈaɫ`, fr:`habituel ; cliente habitual = habitué`, b:`habitual (pl. habituais)`, gr:`adjectif invariable en genre`},
      {w:`tratar alguém pelo nome`, p:`tɾɐˈtaɾ aɫˈɡɐ̃j pɨlu ˈnomɨ`, fr:`appeler quelqu'un par son prénom`, b:`tratar · verbe en -ar`, gr:`expression`},
      {w:`idoso`, p:`iˈdozu`, fr:`âgé ; une personne âgée`, b:`idoso, idosa [iˈdɔzɐ]`, gr:`adjectif / nom`},
      {w:`queixar-se`, p:`kɐjˈʃaɾsɨ`, fr:`se plaindre`, b:`queixar-se · verbe pronominal en -ar`, gr:`verbe`},
      {w:`oferecer`, p:`ɔfɨɾɨˈseɾ`, fr:`offrir, proposer`, b:`oferecer · verbe en -er (ofereço)`, gr:`verbe`},
      {w:`em troca de`, p:`ɐ̃j ˈtɾɔkɐ dɨ`, fr:`en échange de`, b:`troca`, gr:`locution prépositive`},
      {w:`bastar`, p:`bɐʃˈtaɾ`, fr:`suffire`, b:`bastar · verbe en -ar`, gr:`verbe`},
      {w:`fazer companhia`, p:`fɐˈzeɾ kõpɐˈɲiɐ`, fr:`tenir compagnie`, b:`fazer (irrégulier) + companhia`, gr:`expression`},
      {w:`junto`, p:`ˈʒũtu`, fr:`ensemble (s'accorde : juntos, juntas)`, b:`junto, junta`, gr:`adjectif`},
      {w:`é preciso`, p:`ˈɛ pɾɨˈsizu`, fr:`il faut`, b:`preciso`, gr:`expression impersonnelle`},
      {w:`jovem`, p:`ˈʒɔvɐ̃j`, fr:`jeune ; un jeune`, b:`jovem (pl. jovens)`, gr:`adjectif / nom, invariable en genre`},
      {w:`senão`, p:`sɨˈnɐ̃w`, fr:`sinon`, b:`senão`, gr:`conjonction`},
      {w:`vazio`, p:`vɐˈziu`, fr:`vide`, b:`vazio, vazia`, gr:`adjectif`},
      {w:`sozinho`, p:`sɔˈziɲu`, fr:`seul, tout seul`, b:`sozinho, sozinha`, gr:`adjectif`},
      {w:`desde que`, p:`ˈdeʒdɨ kɨ`, fr:`depuis que`, b:`desde que`, gr:`conjonction`},
      {w:`achar`, p:`ɐˈʃaɾ`, fr:`trouver (estimer), penser`, b:`achar · verbe en -ar`, gr:`verbe`},
      {w:`um bocado`, p:`ũ buˈkadu`, fr:`un peu (familier)`, b:`bocado`, gr:`locution adverbiale`},
      {w:`esquisito`, p:`ɨʃkiˈzitu`, fr:`bizarre, étrange`, b:`esquisito, esquisita`, gr:`adjectif`, ff:`≠ « exquis ». Exquis se dit requintado ou delicioso.`},
      {w:`acabar por`, p:`ɐkɐˈbaɾ puɾ`, fr:`finir par`, b:`acabar · verbe en -ar`, gr:`périphrase`},
      {w:`avó`, p:`ɐˈvɔ`, fr:`grand-mère (≠ avô [ɐˈvo], grand-père)`, b:`avó`, gr:`nom féminin`},
      {w:`lisboeta`, p:`liʒbuˈetɐ`, fr:`lisboète, de Lisbonne`, b:`lisboeta`, gr:`adjectif / nom, invariable en genre`},
      {w:`perguntar`, p:`pɨɾɡũˈtaɾ`, fr:`demander (poser une question)`, b:`perguntar · verbe en -ar`, gr:`verbe`, ff:`Ne sert pas à demander quelque chose : « demander un service » = pedir.`},
      {w:`valer a pena`, p:`vɐˈleɾ ɐ ˈpenɐ`, fr:`valoir la peine`, b:`valer · verbe en -er (valho, vale)`, gr:`expression`},
      {w:`pois`, p:`ˈpojʃ`, fr:`eh oui, bon, en effet ; pois é = c'est bien ça`, b:`pois`, gr:`marqueur discursif`},
      {w:`sorte`, p:`ˈsɔɾtɨ`, fr:`chance`, b:`sorte`, gr:`nom féminin`, ff:`≠ « sorte ». Une sorte de = uma espécie de, um tipo de.`}
    ],

    grammar: {
      key: `inf-pessoal`,
      cat: `Conjugaison`,
      concept: `L'infinitif personnel (infinitivo pessoal)`,
      excerpt: [
        `Em troca de uma renda simbólica, bastava <mark>fazerem</mark> companhia uma à outra e <mark>irem</mark> juntas ao mercado aos sábados.`,
        `«É preciso os jovens <mark>terem</mark> onde viver, senão a cidade fica vazia.»`
      ],
      exp: `<p>Le portugais possède un infinitif <b>qui se conjugue</b>. On garde l'infinitif entier (<i lang="pt-PT">fazer</i>, <i lang="pt-PT">ir</i>, <i lang="pt-PT">ter</i>) et on lui ajoute une terminaison de personne : <b>–, -es, –, -mos, -des, -em</b>.</p>
<p>On l'emploie quand l'infinitif a <b>son propre sujet</b>, différent de celui du verbe principal, ou quand il faut préciser qui fait l'action. Dans <i lang="pt-PT">bastava fazerem companhia</i>, le sujet de <i lang="pt-PT">bastava</i> est impersonnel (« il suffisait »), mais celles qui tiennent compagnie sont Inês et Dona Rosário : d'où <i lang="pt-PT">fazer<b>em</b></i>.</p>
<p>Point rassurant : la forme est <b>régulière pour tous les verbes</b>, même irréguliers. <i lang="pt-PT">ser</i> → <i lang="pt-PT">sermos</i>, <i lang="pt-PT">ir</i> → <i lang="pt-PT">irem</i>, <i lang="pt-PT">ter</i> → <i lang="pt-PT">terem</i>.</p>`,
      table: {
        head: [`Personne`, `falar`, `fazer`, `ir`, `ter`],
        rows: [
          [`eu`, `falar`, `fazer`, `ir`, `ter`],
          [`tu`, `falar<b>es</b>`, `fazer<b>es</b>`, `ir<b>es</b>`, `ter<b>es</b>`],
          [`ele / ela / você`, `falar`, `fazer`, `ir`, `ter`],
          [`nós`, `falar<b>mos</b>`, `fazer<b>mos</b>`, `ir<b>mos</b>`, `ter<b>mos</b>`],
          [`vós`, `falar<b>des</b>`, `fazer<b>des</b>`, `ir<b>des</b>`, `ter<b>des</b>`],
          [`eles / elas / vocês`, `falar<b>em</b>`, `fazer<b>em</b>`, `ir<b>em</b>`, `ter<b>em</b>`]
        ]
      },
      compare: `<p>Le français passe par le <b>subjonctif</b> : « il faut que les jeunes <b>aient</b> où vivre ». Le portugais peut faire pareil (<i lang="pt-PT">é preciso que os jovens tenham</i>), mais préfère souvent l'infinitif personnel, plus léger : <i lang="pt-PT">é preciso os jovens terem</i>.</p>
<p>Il est très fréquent après une préposition : <i lang="pt-PT">antes de saíres</i> (avant que tu partes), <i lang="pt-PT">para percebermos</i> (pour que nous comprenions), <i lang="pt-PT">apesar de serem caros</i> (bien qu'ils soient chers).</p>
<p><b>Piège :</b> avec un verbe régulier, il a la même forme que le futur du subjonctif (<i lang="pt-PT">quando falarem</i>). Avec un irrégulier, ils se séparent : <i lang="pt-PT">terem</i> (infinitif personnel) ≠ <i lang="pt-PT">tiverem</i> (futur du subjonctif). Comparez avec la dernière phrase du texte : <i lang="pt-PT">se tiveres sorte</i>.</p>`,
      also: [
        `<b>Futur du subjonctif</b> : <i lang="pt-PT">se tiveres sorte</i>. Après <i lang="pt-PT">se</i> ou <i lang="pt-PT">quando</i> tournés vers l'avenir, là où le français met un présent (« si tu as »).`,
        `<b>Plus-que-parfait simple</b> : <i lang="pt-PT">morrera</i>, <i lang="pt-PT">achara</i>. Forme littéraire de <i lang="pt-PT">tinha morrido</i>, <i lang="pt-PT">tinha achado</i> ; le texte emploie aussi la forme composée, <i lang="pt-PT">tinham subido</i>.`,
        `<b>Ênclise</b> : <i lang="pt-PT">tratavam-na</i>, <i lang="pt-PT">ouviu-a</i>, <i lang="pt-PT">ofereceu-lhe</i>. Dans une phrase affirmative simple, le pronom se place après le verbe, avec un trait d'union. Après <i lang="pt-PT">-m</i>, <i lang="pt-PT">o / a</i> deviennent <i lang="pt-PT">no / na</i>.`,
        `<b>Contractions</b> : <i lang="pt-PT">do</i> (de + o), <i lang="pt-PT">num</i> (em + um), <i lang="pt-PT">ao</i> (a + o), <i lang="pt-PT">pelo</i> (por + o).`
      ]
    }
  };

  return [T1];

}());
