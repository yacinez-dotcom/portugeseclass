/* ═══════════════════════════════════════════════
   BRIQUE FINALE — APP
   Lit les globales des briques : LEVELS, GRAMMAR_CATS (config.js),
   XX_TEXTS (js/data/xx.js), XX_VOCAB_THEMATIC (js/vocab/xx_thematic.js).
   Ne connaît aucun contenu : ajouter un texte ou un niveau ne la touche pas.
   Routes (ancres simples) : #  ·  #B2  ·  #b2-1  ·  #revisao  ·  #vocabulario
═══════════════════════════════════════════════ */
'use strict';

(function () {

  /* ── Utilitaires ─────────────────────────────── */
  var main = document.getElementById('main');
  var nav = document.getElementById('nav');
  var tip = document.getElementById('tip');

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function norm(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
  }
  function vocabKey(v) { return String(v.key || v.w || '').toLowerCase().normalize('NFC').replace(/[?!.,;:«»]/g, '').trim(); }
  function stripTags(s) { return String(s || '').replace(/<[^>]*>/g, ''); }
  function store(key, val) {
    try {
      if (val === undefined) return localStorage.getItem('calcada:' + key);
      localStorage.setItem('calcada:' + key, val);
    } catch (e) { return null; }
  }

  var ICON = {
    play: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9-5.5z" fill="currentColor"/></svg>',
    pause: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" fill="currentColor"/></svg>',
    stop: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3.5" y="3.5" width="9" height="9" rx="1" fill="currentColor"/></svg>',
    speak: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 6h3l4-3v10l-4-3H2z" fill="currentColor"/><path d="M11 5.5c1 .8 1 4.2 0 5M12.8 4c2 1.6 2 6.4 0 8" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>',
    chev: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 6l4.5 4.5L12.5 6" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    search: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4.6" stroke="currentColor" stroke-width="1.7" fill="none"/><path d="M10.5 10.5L14 14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v15H5.5c-.8 0-1.5.7-1.5 1.5zM20 5.5c0-.8-.7-1.5-1.5-1.5H13v15h5.5c.8 0 1.5.7 1.5 1.5z" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linejoin="round"/></svg>',
    tiles: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.6" fill="none"/><rect x="13.5" y="3.5" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.6" fill="none"/><rect x="3.5" y="13.5" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.6" fill="none"/><rect x="13.5" y="13.5" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity=".25"/></svg>'
  };

  /* ── Assemblage des briques ──────────────────── */
  var LV = (typeof LEVELS !== 'undefined' && Array.isArray(LEVELS)) ? LEVELS : [];
  var CATS = (typeof GRAMMAR_CATS !== 'undefined' && Array.isArray(GRAMMAR_CATS)) ? GRAMMAR_CATS : [];
  var TEXTS = {}, THEMATIC = {}, BY_ID = {};

  LV.forEach(function (L) {
    var t = window[L.id + '_TEXTS'];
    var v = window[L.id + '_VOCAB_THEMATIC'];
    TEXTS[L.id] = Array.isArray(t) ? t : [];
    THEMATIC[L.id] = Array.isArray(v) ? v : [];
    TEXTS[L.id].forEach(function (tx, i) { BY_ID[tx.id] = { text: tx, level: L, index: i }; });
  });

  /* Vocabulaire nouveau : un mot vu dans un texte précédent du même niveau n'est pas répété */
  var NEWVOCAB = {};
  LV.forEach(function (L) {
    var seen = Object.create(null);
    TEXTS[L.id].forEach(function (tx) {
      var list = [], hidden = 0;
      (tx.vocabulary || []).forEach(function (v) {
        var k = vocabKey(v);   /* les accents comptent : pais ≠ país, avô ≠ avó */
        if (seen[k]) { hidden++; return; }
        seen[k] = true; list.push(v);
      });
      NEWVOCAB[tx.id] = { list: list, hidden: hidden };
    });
  });

  function levelOf(id) { return LV.filter(function (L) { return L.id === id; })[0]; }
  function tone(L) { return 't-' + (L && L.tone ? L.tone : 'cobalto'); }
  function countWords(L) {
    var n = 0;
    TEXTS[L.id].forEach(function (t) { n += NEWVOCAB[t.id].list.length; });
    THEMATIC[L.id].forEach(function (th) { n += (th.words || []).length; });
    return n;
  }
  function sentenceText(s) { return s.map(function (c) { return c.w; }).join(' '); }

  /* ── Audio ───────────────────────────────────────
     1. Pistes enregistrées (briques js/audio/xx_audio.js, voix pt-PT native)
     2. À défaut, synthèse du navigateur, UNIQUEMENT avec une voix portugaise
     3. Sinon : rien n'est lu (jamais de voix anglaise), un message l'explique
  ──────────────────────────────────────────────── */
  function audioKey(s) { return String(s || '').replace(/[«»“”"]/g, '').replace(/\s+/g, ' ').trim(); }

  var AUDIO_INDEX = Object.create(null), AUDIO_COUNT = 0;
  LV.forEach(function (L) {
    var a = window[L.id + '_AUDIO'];
    if (!a || !Array.isArray(a.tracks)) return;
    a.tracks.forEach(function (tr) {
      Object.keys(tr.seg || {}).forEach(function (k) {
        if (!AUDIO_INDEX[k]) { AUDIO_INDEX[k] = { src: tr.src, s: tr.seg[k][0], e: tr.seg[k][1] }; AUDIO_COUNT++; }
      });
    });
  });

  var TTS = {
    ok: 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined',
    voice: null, kind: 'none', rate: parseFloat(store('rate')) || 0.9,
    queue: [], idx: 0, playing: false, gen: 0, onState: null
  };
  var players = {}, current = null;

  function player(src) {
    if (!players[src]) {
      var a = new Audio();
      a.preload = 'auto';
      a.src = src;
      if ('preservesPitch' in a) a.preservesPitch = true;
      if ('webkitPreservesPitch' in a) a.webkitPreservesPitch = true;
      players[src] = a;
    }
    return players[src];
  }
  function stopClip() {
    if (current) { current.a.pause(); cancelAnimationFrame(current.raf); clearTimeout(current.to); current = null; }
  }
  /* Joue un segment enregistré ; renvoie false si le texte n'a pas d'enregistrement */
  function playClip(text, onend) {
    var seg = AUDIO_INDEX[audioKey(text)];
    if (!seg) return false;
    stopClip();
    var a = player(seg.src), me = { a: a, raf: 0, to: 0 };
    current = me;
    var finish = function () {
      if (current !== me) return;
      a.pause(); cancelAnimationFrame(me.raf); clearTimeout(me.to); current = null;
      if (onend) onend();
    };
    var watch = function () {
      if (current !== me) return;
      if (a.currentTime >= seg.e) { finish(); return; }
      me.raf = requestAnimationFrame(watch);
    };
    var go = function () {
      if (current !== me) return;
      try { a.currentTime = seg.s; } catch (e) {}
      a.playbackRate = TTS.rate;
      var p = a.play();
      if (p && p.catch) p.catch(function () { finish(); });
      me.raf = requestAnimationFrame(watch);
      /* filet de sécurité si l'onglet passe en arrière-plan */
      me.to = setTimeout(finish, ((seg.e - seg.s) / TTS.rate) * 1000 + 1500);
    };
    if (a.readyState >= 1) go(); else a.addEventListener('loadedmetadata', go, { once: true });
    return true;
  }

  function pickVoice() {
    if (!TTS.ok) return;
    var vs = window.speechSynthesis.getVoices() || [];
    var find = function (f) { return vs.filter(f)[0] || null; };
    var v = find(function (x) { return /^pt[-_]PT$/i.test(x.lang); }) ||
            find(function (x) { return /^pt/i.test(x.lang) && /portugal|joana|catarina|duarte|raquel|helia|in[eê]s|cristiano/i.test(x.name); });
    if (v) { TTS.voice = v; TTS.kind = 'pt-PT'; }
    else {
      v = find(function (x) { return /^pt/i.test(x.lang); });
      TTS.voice = v; TTS.kind = v ? 'pt-other' : 'none';
    }
    updateVoiceInfo();
    if (TTS.onState) TTS.onState();
  }
  if (TTS.ok) {
    pickVoice();
    window.speechSynthesis.onvoiceschanged = pickVoice;
  }

  function textHasAudio() { return TTS.queue.length > 0 && TTS.queue.every(function (s) { return !!AUDIO_INDEX[audioKey(s)]; }); }
  function canSpeak() { return TTS.ok && !!TTS.voice; }   /* jamais de voix non portugaise */

  function updateVoiceInfo() {
    var el = document.getElementById('voice-info');
    if (!el) return;
    el.classList.remove('warn');
    if (textHasAudio()) { el.textContent = 'Voix enregistrée : portugais du Portugal (voix neuronale « tugão »).'; return; }
    if (TTS.kind === 'pt-PT') el.textContent = 'Voix du navigateur : ' + TTS.voice.name + ' (portugais du Portugal).';
    else if (TTS.kind === 'pt-other') { el.textContent = 'Pas d’enregistrement pour ce texte : lecture avec ' + TTS.voice.name + ' (' + TTS.voice.lang + '), accent brésilien.'; el.classList.add('warn'); }
    else { el.textContent = 'Pas d’enregistrement pour ce texte et aucune voix portugaise sur cet appareil : la lecture est désactivée plutôt que lue avec un accent étranger.'; el.classList.add('warn'); }
  }

  function makeUtt(text) {
    var u = new SpeechSynthesisUtterance(text);
    u.lang = TTS.voice ? TTS.voice.lang : 'pt-PT';
    u.voice = TTS.voice;
    u.rate = TTS.rate;
    return u;
  }
  /* Lit un mot ou une expression */
  function speakOnce(text) {
    stopSpeech();
    if (playClip(text)) return;
    if (canSpeak()) window.speechSynthesis.speak(makeUtt(audioKey(text)));
  }
  /* Lit une phrase ; appelle next() à la fin */
  function speakSentence(text, next) {
    if (playClip(text, next)) return true;
    if (!canSpeak()) return false;
    var u = makeUtt(audioKey(text));
    u.onend = next; u.onerror = next;
    window.speechSynthesis.speak(u);
    return true;
  }
  function highlight(i) {
    var all = main.querySelectorAll('.sent');
    for (var k = 0; k < all.length; k++) all[k].classList.toggle('on', k === i);
  }
  function playFrom(i) {
    stopClip();
    if (TTS.ok) window.speechSynthesis.cancel();
    var gen = ++TTS.gen;
    TTS.playing = true; TTS.idx = i;
    if (TTS.onState) TTS.onState();
    (function step() {
      if (gen !== TTS.gen) return;
      if (TTS.idx >= TTS.queue.length) { TTS.playing = false; TTS.idx = 0; highlight(-1); if (TTS.onState) TTS.onState(); return; }
      highlight(TTS.idx);
      var ok = speakSentence(TTS.queue[TTS.idx], function () { if (gen !== TTS.gen) return; TTS.idx++; step(); });
      if (!ok) { TTS.playing = false; highlight(-1); if (TTS.onState) TTS.onState(); }
    }());
  }
  function pauseSpeech() {   /* pause = arrêt en gardant la phrase courante */
    TTS.gen++; TTS.playing = false;
    stopClip();
    if (TTS.ok) window.speechSynthesis.cancel();
    if (TTS.onState) TTS.onState();
  }
  function stopSpeech() {
    TTS.gen++; TTS.playing = false; TTS.idx = 0;
    stopClip();
    if (TTS.ok) window.speechSynthesis.cancel();
    highlight(-1);
    if (TTS.onState) TTS.onState();
  }

  /* ── Aide à la prononciation ─────────────────── */
  var HAS_PRON = typeof PRON !== 'undefined';
  var PMODES = HAS_PRON ? ['none', 'guide', 'ipa'] : ['none', 'ipa'];
  var pmode = store('pmode');
  if (PMODES.indexOf(pmode) === -1) pmode = HAS_PRON ? 'guide' : 'ipa';
  function setPmode(m) {
    pmode = m; store('pmode', m);
    document.documentElement.setAttribute('data-pm', m);
  }
  setPmode(pmode);
  function guideOf(item) { return item.g || (HAS_PRON ? PRON.guide(item.p) : esc(item.p)); }
  function pronCell(item) {   /* lecture guidée + API, l'affichage suit le mode choisi */
    return '<span class="pg">' + guideOf(item) + '</span><span class="pi">[' + esc(item.p) + ']</span>';
  }

  /* ── Infobulle ───────────────────────────────── */
  var tipFor = null;
  function showTip(el) {
    var t = el.getAttribute('data-t');
    if (!t) return;
    var tag = el.classList.contains('ff') ? 'Faux ami' : (el.classList.contains('x') ? 'Expression figée' : '');
    tip.innerHTML = '<b lang="pt-PT">' + esc(el.getAttribute('data-w')) + '</b>' +
      '<span class="tip-ph">' + (pmode === 'ipa' ? '[' + esc(el.getAttribute('data-p')) + ']' : el.getAttribute('data-g')) + '</span>' + esc(t) +
      (tag ? '<span class="tip-tag">' + tag + '</span>' : '');
    tip.hidden = false;
    var r = el.getBoundingClientRect(), tr = tip.getBoundingClientRect();
    var left = Math.min(Math.max(8, r.left + r.width / 2 - tr.width / 2), window.innerWidth - tr.width - 8);
    var top = r.top - tr.height - 8;
    if (top < 8) top = r.bottom + 8;
    tip.style.left = left + 'px'; tip.style.top = top + 'px';
    if (tipFor && tipFor !== el) tipFor.classList.remove('active');
    tipFor = el; el.classList.add('active');
  }
  function hideTip() {
    tip.hidden = true;
    if (tipFor) tipFor.classList.remove('active');
    tipFor = null;
  }
  window.addEventListener('scroll', hideTip, { passive: true });
  window.addEventListener('resize', hideTip);
  document.addEventListener('click', function (e) { if (!e.target.closest('.ck')) hideTip(); });

  /* ── Navigation latérale ─────────────────────── */
  function renderNav(active) {
    var h = '<div class="nav-label">Niveaux</div>';
    LV.forEach(function (L) {
      h += '<a class="nav-lv ' + tone(L) + '" href="#' + L.id + '"' + (active === L.id ? ' aria-current="page"' : '') + '>' +
        '<span class="lv-chip"><span>' + L.id + '</span></span>' +
        '<span class="nav-lv__txt"><b>' + esc(L.pt) + '</b><small>' + esc(L.fr) + '</small></span>' +
        '<span class="nav-count">' + TEXTS[L.id].length + '</span></a>';
    });
    h += '<div class="nav-sep" aria-hidden="true"></div><div class="nav-label">Réviser</div>';
    h += '<a class="nav-tool" href="#revisao"' + (active === 'revisao' ? ' aria-current="page"' : '') + '><span class="ico">' + ICON.book + '</span><span class="nav-lv__txt"><b>Grammaire</b><small>Toutes les leçons</small></span></a>';
    h += '<a class="nav-tool" href="#vocabulario"' + (active === 'vocabulario' ? ' aria-current="page"' : '') + '><span class="ico">' + ICON.tiles + '</span><span class="nav-lv__txt"><b>Vocabulaire</b><small>Textes et thèmes</small></span></a>';
    nav.innerHTML = h;
  }

  /* ── Accueil ─────────────────────────────────── */
  function renderHome() {
    renderNav(null);
    var cards = LV.map(function (L) {
      var nT = TEXTS[L.id].length, nW = countWords(L);
      return '<a class="lv-card ' + tone(L) + '" href="#' + L.id + '">' +
        '<span class="lv-chip"><span>' + L.id + '</span></span>' +
        '<div><h3>' + esc(L.pt) + ' <small>' + esc(L.fr) + ' · examen ' + esc(L.exam) + '</small></h3>' +
        '<p>' + esc(L.desc) + '</p>' +
        '<div class="lv-meta"><span><b>' + nT + '</b> texte' + (nT > 1 ? 's' : '') + '</span><span><b>' + nW + '</b> mots</span><span><b>' + L.programme.length + '</b> points de grammaire</span></div></div></a>';
    }).join('');

    main.innerHTML =
      '<section class="hero">' +
        '<div><p class="eyebrow">Portugais européen · A1 → B2</p>' +
        '<h1>Lire, écouter, <em>entendre</em> le portugais du Portugal.</h1>' +
        '<p class="lede">Des textes découpés en groupes de mots, lus à voix haute par une voix native du Portugal. Une lecture guidée s’affiche au-dessus de chaque mot, puis on la retire quand l’oreille a suivi.</p></div>' +
        '<div class="hero-panel" aria-hidden="true"><div class="hero-panel__card">' +
          '<div class="pt" lang="pt-PT">' + [['Vale a pena', 'ˈvalɨ ɐ ˈpenɐ'], ['viver', 'viˈveɾ'], ['em Lisboa', 'ɐ̃j liʒˈboɐ']].map(function (x) {
            return '<span><small>' + (HAS_PRON ? PRON.guide(x[1]) : x[1]) + '</small>' + x[0] + '</span>';
          }).join('') + '</div>' +
          '<p class="fr">«\u00a0Ça vaut la peine de vivre à Lisbonne.\u00a0» Le e final s’efface, le s de Lisboa se dit «\u00a0j\u00a0», em devient une nasale.</p>' +
        '</div></div>' +
      '</section>' +
      '<div class="how">' +
        '<div><b>1 · Écouter</b><p>Lecture du texte phrase par phrase, de 0,5× à 1,25×. Un clic sur un mot le fait prononcer seul.</p></div>' +
        '<div><b>2 · Lire avec la lecture guidée</b><p>Chaque mot réécrit comme on le lit en français, avec quelques marques pour le r battu, les nasales et la syllabe accentuée.</p></div>' +
        '<div><b>3 · Retenir</b><p>Les mots nouveaux du texte, les faux amis signalés, une leçon de grammaire tirée du texte.</p></div>' +
      '</div>' +
      '<div class="rule-onda" aria-hidden="true"></div>' +
      '<section class="section"><div class="section-title"><h2>Les niveaux</h2><span class="count">Noms des niveaux et examens CAPLE (Camões, I.P.)</span></div>' +
      '<div class="levels-grid">' + cards + '</div></section>';
  }

  /* ── Tables de vocabulaire ───────────────────── */
  function vocabRow(v, opts) {
    opts = opts || {};
    var ff = v.ff ? '<div class="ff-note"><span class="chip chip--ff">Faux ami</span><span>' + esc(v.ff) + '</span></div>' : '';
    return '<tr' + (v.ff ? ' class="is-ff"' : '') + '>' +
      '<td class="w" lang="pt-PT"><button class="say" type="button" data-say="' + esc(v.w) + '" aria-label="Écouter ' + esc(v.w) + '">' + ICON.speak + '</button>' + esc(v.w) + '</td>' +
      '<td class="p">' + pronCell(v) + '</td>' +
      '<td class="fr">' + esc(v.fr) + ff + '</td>' +
      (opts.br ? '<td class="br" lang="pt-BR">' + esc(v.br || '') + '</td>' : '') +
      '<td class="b"><b lang="pt-PT">' + esc(v.b || v.w) + '</b><br>' + esc(v.gr || '') + '</td>' +
      (opts.level ? '<td class="lv"><span class="chip">' + esc(v._lv) + '</span></td>' : '') +
      '</tr>';
  }
  function vocabHead(opts) {
    opts = opts || {};
    return '<thead><tr><th>Mot</th><th>Prononciation</th><th>Traduction</th>' +
      (opts.br ? '<th>Au Brésil</th>' : '') + '<th>Forme de base</th>' +
      (opts.level ? '<th>Source</th>' : '') + '</tr></thead>';
  }
  function themesHTML(L) {
    return THEMATIC[L.id].map(function (th, i) {
      var opts = { br: !!th.br };
      return '<details class="theme"' + (i === 0 ? ' open' : '') + '><summary><div><small>' + esc(th.group || '') + '</small><h3>' + esc(th.theme) + '</h3></div>' +
        '<span class="chip">' + (th.words || []).length + ' mots</span></summary>' +
        (th.intro ? '<p class="theme__intro">' + esc(th.intro) + '</p>' : '') +
        '<div class="table-wrap"><table>' + vocabHead(opts) + '<tbody>' + (th.words || []).map(function (w) { return vocabRow(w, opts); }).join('') + '</tbody></table></div></details>';
    }).join('');
  }

  /* ── Page niveau ─────────────────────────────── */
  function renderLevel(id) {
    var L = levelOf(id);
    renderNav(id);
    var texts = TEXTS[id];
    var covered = {};
    texts.forEach(function (t) { if (t.grammar && t.grammar.key) covered[t.grammar.key] = t; });

    var list = texts.length ? '<div class="text-list">' + texts.map(function (t, i) {
      var nv = NEWVOCAB[t.id].list.length;
      return '<a class="text-row" href="#' + t.id + '"><span class="text-row__n">' + (i + 1) + '</span>' +
        '<span class="text-row__t"><b lang="pt-PT">' + esc(t.title) + '</b><span>' + esc(t.titleFr) + '</span></span>' +
        '<span class="text-row__meta">' + (t.grammar ? '<span class="chip">' + esc(stripTags(t.grammar.concept)) + '</span>' : '') +
        '<span>' + esc(t.theme || '') + ' · ' + nv + ' mots nouveaux</span></span></a>';
    }).join('') + '</div>'
      : '<div class="empty"><b>Pas encore de texte à ce niveau</b><p>Les textes arrivent un par un. Le programme de grammaire ci-dessous montre ce qu’ils couvriront.</p></div>';

    var prog = '<ul class="programme">' + L.programme.map(function (p) {
      var t = covered[p.id];
      return '<li class="' + (t ? 'done' : '') + '"><span class="dot" aria-hidden="true"></span><span>' +
        (t ? '<a href="#' + t.id + '">' + esc(p.label) + '</a><small>Traité dans « ' + esc(t.title) + ' »</small>' : esc(p.label)) +
        '</span></li>';
    }).join('') + '</ul>';

    var nThem = THEMATIC[id].reduce(function (n, th) { return n + (th.words || []).length; }, 0);
    var them = THEMATIC[id].length ? themesHTML(L)
      : '<div class="empty"><b>Vocabulaire thématique à venir</b><p>Technologie, société, santé, culture portugaise, vie quotidienne, différences PT-PT / PT-BR.</p></div>';

    main.innerHTML =
      '<nav class="crumbs ' + tone(L) + '"><a href="#">Accueil</a><span>›</span><span>' + L.id + '</span></nav>' +
      '<header class="page-head ' + tone(L) + '"><p class="eyebrow">Niveau ' + L.id + ' · examen ' + esc(L.exam) + '</p>' +
      '<h1>' + esc(L.pt) + ' <span style="color:var(--ink-3);font-weight:500">· ' + esc(L.fr) + '</span></h1>' +
      '<p class="lede">' + esc(L.desc) + '</p></header>' +
      '<section class="' + tone(L) + '"><div class="section-title"><h2>Textes</h2><span class="count">' + texts.length + '</span></div>' + list + '</section>' +
      '<section class="section"><div class="section-title"><h2>Programme de grammaire</h2><span class="count">' + Object.keys(covered).length + ' / ' + L.programme.length + ' traités</span></div>' + prog + '</section>' +
      '<div class="rule-onda" aria-hidden="true"></div>' +
      '<section class="section"><div class="section-title"><h2>Vocabulaire thématique</h2><span class="count">' + nThem + ' mots</span></div>' + them + '</section>';
    bindSay();
  }

  /* ── Page texte ──────────────────────────────── */
  var IPA_KEY = [
    ['ɐ', 'a fermé, proche du « e » de « le » : casa [ˈkazɐ]'],
    ['ɨ', 'e réduit, presque muet : de [dɨ], pequeno [pɨˈkenu]'],
    ['ʃ  ʒ', 's et z en fin de syllabe chuintent : Inês [iˈneʃ], Lisboa [liʒˈboɐ]'],
    ['ɐ̃  ẽ  ĩ  õ  ũ', 'voyelles nasales ; ão [ɐ̃w], em final [ɐ̃j]'],
    ['ʁ', 'r initial ou rr : r grasseyé comme en français'],
    ['ɾ', 'r battu, une seule frappe de la langue : para [ˈpɐɾɐ]'],
    ['ɫ', 'l en fin de syllabe, sombre : Portugal [puɾtuˈɡaɫ]'],
    ['ʎ  ɲ', 'lh et nh : « li » et « gn » mouillés'],
    ['ˈ', 'la syllabe suivante porte l’accent tonique']
  ];

  function renderText(entry) {
    var t = entry.text, L = entry.level, i = entry.index, list = TEXTS[L.id];
    renderNav(L.id);
    TTS.queue = t.sentences.map(sentenceText);
    TTS.idx = 0;

    var body = t.sentences.map(function (s, si) {
      return '<span class="sent" data-i="' + si + '">' + s.map(function (c) {
        var cls = 'ck' + (c.x ? ' x' : '') + (c.ff ? ' ff' : '');
        return '<span class="' + cls + '" tabindex="0" data-w="' + esc(c.w) + '" data-p="' + esc(c.p) + '" data-g="' + esc(guideOf(c)) + '" data-t="' + esc(c.t) + '">' +
          '<span class="pw">' + esc(c.w) + '</span><span class="ph">' + pronCell(c) + '</span></span>';
      }).join(' ') + '</span>';
    }).join(' ');

    var nv = NEWVOCAB[t.id];
    var vocab = nv.list.length
      ? '<div class="table-wrap"><table>' + vocabHead() + '<tbody>' + nv.list.map(function (v) { return vocabRow(v); }).join('') + '</tbody></table></div>'
      : '<p class="hidden-note">Tous les mots de ce texte ont déjà été vus dans les textes précédents du niveau.</p>';
    if (nv.hidden) vocab += '<p class="hidden-note">' + nv.hidden + ' mot' + (nv.hidden > 1 ? 's' : '') + ' déjà vu' + (nv.hidden > 1 ? 's' : '') + ' dans un texte précédent du niveau ' + L.id + ' : non répété' + (nv.hidden > 1 ? 's' : '') + '.</p>';

    var g = t.grammar, lesson = '';
    if (g) {
      lesson = '<section class="section lesson ' + tone(L) + '"><p class="eyebrow">Leçon de grammaire · ' + esc(g.cat || '') + '</p>' +
        '<h2>' + g.concept + '</h2>' +
        '<div class="excerpts">' + (g.excerpt || []).map(function (e) { return '<blockquote lang="pt-PT">' + e + '</blockquote>'; }).join('') + '</div>' +
        '<div class="exp">' + (g.exp || '') + '</div>' +
        (g.table ? '<div class="table-wrap"><table><thead><tr>' + g.table.head.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' +
          g.table.rows.map(function (r) { return '<tr>' + r.map(function (c, ci) { return '<td' + (ci ? ' lang="pt-PT"' : '') + '>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>' : '') +
        (g.compare ? '<div class="compare"><h3>Et en français ?</h3>' + g.compare + '</div>' : '') +
        (g.also && g.also.length ? '<div class="also"><h3>À repérer aussi dans le texte</h3><ul>' + g.also.map(function (a) { return '<li>' + a + '</li>'; }).join('') + '</ul></div>' : '') +
        '</section>';
    }

    var prev = list[i - 1], next = list[i + 1];
    var pager = '<nav class="pager">' +
      (prev ? '<a href="#' + prev.id + '"><small>← Texte précédent</small><b lang="pt-PT">' + esc(prev.title) + '</b></a>' : '') +
      (next ? '<a class="next" href="#' + next.id + '"><small>Texte suivant →</small><b lang="pt-PT">' + esc(next.title) + '</b></a>' : '<a class="next" href="#' + L.id + '"><small>Retour au niveau →</small><b>' + L.id + ' · ' + esc(L.pt) + '</b></a>') +
      '</nav>';

    main.innerHTML =
      '<nav class="crumbs"><a href="#">Accueil</a><span>›</span><a href="#' + L.id + '">' + L.id + ' · ' + esc(L.pt) + '</a><span>›</span><span>Texte ' + (i + 1) + '</span></nav>' +
      '<header class="text-head ' + tone(L) + '"><p class="eyebrow">' + L.id + ' · texte ' + (i + 1) + ' sur ' + list.length + (t.theme ? ' · ' + esc(t.theme) : '') + '</p>' +
      '<h1 lang="pt-PT">' + esc(t.title) + '</h1><p class="sub">' + esc(t.titleFr) + '</p></header>' +

      '<div class="player" role="toolbar" aria-label="Lecture audio et prononciation">' +
        '<div class="player__group"><button class="btn" id="tts-play" type="button"></button>' +
        '<button class="btn btn--ghost btn--icon" id="tts-stop" type="button" aria-label="Arrêter">' + ICON.stop + '</button></div>' +
        '<label class="speed" for="tts-rate">Vitesse <input id="tts-rate" type="range" min="0.5" max="1.25" step="0.05" value="' + TTS.rate + '"><output id="tts-rate-out">' + TTS.rate.toFixed(2).replace('.', ',') + '×</output></label>' +
        '<div class="pm" role="group" aria-label="Aide à la prononciation"><span class="pm__label">Prononciation</span>' +
          PMODES.map(function (m) {
            var lab = { none: 'Masquée', guide: 'Lecture guidée', ipa: 'API' }[m];
            return '<button type="button" class="pm__btn" data-pm="' + m + '" aria-pressed="' + (pmode === m) + '">' + lab + '</button>';
          }).join('') + '</div>' +
        '<span class="voice-info" id="voice-info"></span>' +
      '</div>' +

      '<div class="reading-wrap">' +
        '<div class="reading" id="reading" lang="pt-PT">' + body + '</div>' +
        '<div class="legend"><span>Survolez un mot pour sa traduction, cliquez pour l’entendre.</span><span><i class="lg-x"></i>expression figée</span><span><i class="lg-ff"></i>faux ami</span></div>' +
        (HAS_PRON ? '<div class="ph-key ph-key--guide"><h3>Lire la lecture guidée</h3><p class="ph-key__intro">On lit comme en français, sauf ces marques.</p><dl>' +
          PRON.KEY.map(function (k) {
            return '<dt>' + k.m + '</dt><dd>' + esc(k.fr) + '<span class="ph-key__ex"><i lang="pt-PT">' + esc(k.ex) + '</i> → ' + PRON.guide(k.p) + '</span></dd>';
          }).join('') + '</dl></div>' : '') +
        '<div class="ph-key ph-key--ipa"><h3>Lire l’API (alphabet phonétique international)</h3><dl>' +
          IPA_KEY.map(function (k) { return '<dt>' + k[0] + '</dt><dd>' + esc(k[1]) + '</dd>'; }).join('') + '</dl></div>' +
      '</div>' +

      '<section class="section"><div class="section-title"><h2>Vocabulaire du texte</h2><span class="count">' + nv.list.length + ' mots nouveaux</span></div>' + vocab + '</section>' +
      lesson + pager;

    /* Lecture */
    var playBtn = document.getElementById('tts-play');
    TTS.onState = function () {
      if (!playBtn.isConnected) return;
      playBtn.innerHTML = TTS.playing ? ICON.pause + 'Pause' : ICON.play + (TTS.idx > 0 ? 'Reprendre' : 'Écouter le texte');
      playBtn.disabled = !textHasAudio() && !canSpeak();
    };
    TTS.onState();
    playBtn.addEventListener('click', function () { if (TTS.playing) pauseSpeech(); else playFrom(TTS.idx); });
    document.getElementById('tts-stop').addEventListener('click', stopSpeech);
    var rate = document.getElementById('tts-rate'), out = document.getElementById('tts-rate-out');
    rate.addEventListener('input', function () {
      TTS.rate = parseFloat(rate.value);
      out.textContent = TTS.rate.toFixed(2).replace('.', ',') + '×';
      store('rate', String(TTS.rate));
    });
    updateVoiceInfo();

    /* Prononciation : Masquée / Lecture guidée / API */
    var reading = document.getElementById('reading');
    main.querySelectorAll('.pm__btn').forEach(function (b) {
      b.addEventListener('click', function () {
        setPmode(b.getAttribute('data-pm'));
        main.querySelectorAll('.pm__btn').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        hideTip();
      });
    });

    /* Mots : survol = traduction, clic = prononciation */
    reading.addEventListener('mouseover', function (e) { var c = e.target.closest('.ck'); if (c) showTip(c); });
    reading.addEventListener('mouseleave', hideTip);
    reading.addEventListener('focusin', function (e) { var c = e.target.closest('.ck'); if (c) showTip(c); });
    reading.addEventListener('click', function (e) {
      var c = e.target.closest('.ck'); if (!c) return;
      showTip(c);
      speakOnce(c.getAttribute('data-w').replace(/[«»]/g, ''));
    });
    reading.addEventListener('keydown', function (e) {
      if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('ck')) { e.preventDefault(); e.target.click(); }
    });
    reading.addEventListener('dblclick', function (e) {   /* double-clic = lire à partir de cette phrase */
      var s = e.target.closest('.sent'); if (s) playFrom(parseInt(s.getAttribute('data-i'), 10));
    });
    bindSay();
  }

  function bindSay() {
    main.querySelectorAll('[data-say]').forEach(function (b) {
      b.addEventListener('click', function () { speakOnce(b.getAttribute('data-say')); });
    });
  }

  /* ── Révision : toutes les leçons ────────────── */
  var lessonFilter = 'Tout';
  function renderLessons() {
    renderNav('revisao');
    var all = [];
    LV.forEach(function (L) { TEXTS[L.id].forEach(function (t) { if (t.grammar) all.push({ L: L, t: t, g: t.grammar }); }); });
    var cats = ['Tout'].concat(CATS);

    function body() {
      var shown = all.filter(function (x) { return lessonFilter === 'Tout' || x.g.cat === lessonFilter; });
      if (!shown.length) return '<div class="empty"><b>Aucune leçon dans cette catégorie pour l’instant</b><p>Chaque nouveau texte ajoute sa leçon ici automatiquement.</p></div>';
      return LV.map(function (L) {
        var mine = shown.filter(function (x) { return x.L.id === L.id; });
        if (!mine.length) return '';
        return '<div class="lv-group ' + tone(L) + '"><h2><span class="lv-chip"><span>' + L.id + '</span></span>' + esc(L.pt) + '</h2><div class="lesson-grid">' +
          mine.map(function (x) {
            var mini = x.g.table ? '<div class="table-wrap mini"><table><tbody>' + x.g.table.rows.slice(0, 3).map(function (r) {
              return '<tr>' + r.slice(0, 3).map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
            }).join('') + '</tbody></table></div>' : '';
            return '<article class="lesson-card ' + tone(L) + '"><div class="lesson-card__top"><span class="chip">' + esc(x.g.cat || '') + '</span><span class="nav-count" lang="pt-PT">' + esc(x.t.title) + '</span></div>' +
              '<h3>' + x.g.concept + '</h3>' +
              (x.g.excerpt && x.g.excerpt[0] ? '<blockquote lang="pt-PT">' + x.g.excerpt[0] + '</blockquote>' : '') + mini +
              '<a class="more" href="#' + x.t.id + '">Voir la leçon et le texte →</a></article>';
          }).join('') + '</div></div>';
      }).join('');
    }

    main.innerHTML =
      '<nav class="crumbs"><a href="#">Accueil</a><span>›</span><span>Grammaire</span></nav>' +
      '<header class="page-head"><p class="eyebrow">Révision</p><h1>Toutes les leçons de grammaire</h1>' +
      '<p class="lede">Chaque leçon vient d’un texte. Filtrez par domaine, puis retournez au texte pour voir le point en contexte.</p></header>' +
      '<div class="filters" role="group" aria-label="Filtrer par domaine">' + cats.map(function (c) {
        return '<button type="button" class="filter-btn" aria-pressed="' + (c === lessonFilter) + '" data-cat="' + esc(c) + '">' + esc(c) + '</button>';
      }).join('') + '</div><div id="lessons-body">' + body() + '</div>';

    main.querySelectorAll('[data-cat]').forEach(function (b) {
      b.addEventListener('click', function () {
        lessonFilter = b.getAttribute('data-cat');
        main.querySelectorAll('[data-cat]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        document.getElementById('lessons-body').innerHTML = body();
      });
    });
  }

  /* ── Vocabulaire global ──────────────────────── */
  var VF = { q: '', lv: 'Tous', src: 'Tout', ff: false };
  function allVocab() {
    var out = [];
    LV.forEach(function (L) {
      TEXTS[L.id].forEach(function (t) {
        NEWVOCAB[t.id].list.forEach(function (v) { out.push(Object.assign({ _lv: L.id + ' · ' + t.title, _level: L.id, _src: 'Textes' }, v)); });
      });
      THEMATIC[L.id].forEach(function (th) {
        (th.words || []).forEach(function (v) { out.push(Object.assign({ _lv: L.id + ' · ' + th.theme, _level: L.id, _src: 'Thèmes' }, v)); });
      });
    });
    return out;
  }
  function renderVocab() {
    renderNav('vocabulario');
    var data = allVocab();
    data.forEach(function (v) { v._k = norm([v.w, v.fr, v.b, v.br].join(' ')); });

    function rows() {
      var q = norm(VF.q);
      var r = data.filter(function (v) {
        return (VF.lv === 'Tous' || v._level === VF.lv) && (VF.src === 'Tout' || v._src === VF.src) &&
          (!VF.ff || v.ff) && (!q || v._k.indexOf(q) !== -1);
      });
      document.getElementById('vocab-count').textContent = r.length + ' / ' + data.length + ' mots';
      return r.length ? r.map(function (v) { return vocabRow(v, { level: true }); }).join('')
        : '<tr><td colspan="5" style="color:var(--ink-3)">Aucun mot ne correspond. Essayez sans accent ou en français.</td></tr>';
    }
    function pills(key, values) {
      return values.map(function (v) {
        return '<button type="button" class="filter-btn" data-f="' + key + '" data-v="' + esc(v) + '" aria-pressed="' + (VF[key] === v) + '">' + esc(v) + '</button>';
      }).join('');
    }

    main.innerHTML =
      '<nav class="crumbs"><a href="#">Accueil</a><span>›</span><span>Vocabulaire</span></nav>' +
      '<header class="page-head"><p class="eyebrow">Révision</p><h1>Tout le vocabulaire</h1>' +
      '<p class="lede">Les mots nouveaux de chaque texte et le vocabulaire thématique de chaque niveau. Recherche en portugais ou en français, avec ou sans accents.</p></header>' +
      '<div class="vocab-tools"><div class="search">' + ICON.search +
        '<label class="visually-hidden" for="vocab-q">Rechercher un mot</label><input id="vocab-q" type="search" placeholder="renda, loyer, autocarro…" value="' + esc(VF.q) + '" autocomplete="off"></div>' +
        '<span class="vocab-count" id="vocab-count"></span>' +
        '<div class="filters" role="group" aria-label="Filtres">' + pills('lv', ['Tous'].concat(LV.map(function (L) { return L.id; }))) +
        '<span style="width:12px"></span>' + pills('src', ['Tout', 'Textes', 'Thèmes']) +
        '<label class="ff-toggle" for="vocab-ff"><input id="vocab-ff" type="checkbox"' + (VF.ff ? ' checked' : '') + '>Faux amis seulement</label></div>' +
      '</div>' +
      '<div class="table-wrap"><table>' + vocabHead({ level: true }) + '<tbody id="vocab-body"></tbody></table></div>';

    var tbody = document.getElementById('vocab-body');
    function refresh() { tbody.innerHTML = rows(); }   /* ne met à jour que le tbody */
    refresh();
    document.getElementById('vocab-q').addEventListener('input', function (e) { VF.q = e.target.value; refresh(); });
    document.getElementById('vocab-ff').addEventListener('change', function (e) { VF.ff = e.target.checked; refresh(); });
    main.querySelectorAll('[data-f]').forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-f'); VF[k] = b.getAttribute('data-v');
        main.querySelectorAll('[data-f="' + k + '"]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        refresh();
      });
    });
    tbody.addEventListener('click', function (e) {
      var b = e.target.closest('[data-say]'); if (b) speakOnce(b.getAttribute('data-say'));
    });
  }

  /* ── Routeur ─────────────────────────────────── */
  function route() {
    stopSpeech(); hideTip(); TTS.onState = null;
    var h = decodeURIComponent((location.hash || '').slice(1));
    if (h === 'revisao') renderLessons();
    else if (h === 'vocabulario') renderVocab();
    else if (levelOf(h.toUpperCase()) && h.length === 2) renderLevel(h.toUpperCase());
    else if (BY_ID[h]) renderText(BY_ID[h]);
    else renderHome();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  route();

}());
