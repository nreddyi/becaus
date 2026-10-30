(() => {
  /* ---------- Config ----------
     Videos and posters load from the original site. To self-host, copy the
     files into a local "media" folder and set MEDIA_BASE = "media/". */
  const MEDIA_BASE = "https://becaus-pin-wall.sumanngadde.chatgpt.site/media/";
  const media = (id, ext) => (window.BECAUS_MEDIA && window.BECAUS_MEDIA[id + "." + ext]) || MEDIA_BASE + id + "." + ext;

  /* ---------- Icons (Phosphor) ---------- */
  const P = {
    house: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z",
    houseFill: "M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z",
    bookmark: "M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z",
    bookmarkFill: "M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Z",
    check: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z",
    shuffle: "M237.66,178.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L212.69,192H200.94a72.12,72.12,0,0,1-58.59-30.15l-41.72-58.4A56.1,56.1,0,0,0,55.06,80H32a8,8,0,0,1,0-16H55.06a72.12,72.12,0,0,1,58.59,30.15l41.72,58.4A56.1,56.1,0,0,0,200.94,176h11.75l-10.35-10.34a8,8,0,0,1,11.32-11.32ZM143,107a8,8,0,0,0,11.16-1.86l1.2-1.67A56.1,56.1,0,0,1,200.94,80h11.75L202.34,90.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L212.69,64H200.94a72.12,72.12,0,0,0-58.59,30.15l-1.2,1.67A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86l-1.2,1.67A56.1,56.1,0,0,1,55.06,176H32a8,8,0,0,0,0,16H55.06a72.12,72.12,0,0,0,58.59-30.15l1.2-1.67A8,8,0,0,0,113,149Z",
    info: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z",
    search: "M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z",
    x: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
    sliders: "M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z",
    pauseFill: "M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z",
    playFill: "M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z",
    mute: "M53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76ZM32,96H72v64H32ZM144,207.64,88,164.09V95.89l56,61.6Zm42-63.77a24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.57,40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.59Zm-80.16-76a8,8,0,0,1,1.4-11.23l39.85-31A8,8,0,0,1,160,32v74.83a8,8,0,0,1-16,0V48.36l-26.94,21A8,8,0,0,1,105.84,67.91ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z",
    external: "M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z",
    film: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,88h80v80H40Zm96-16V56h32V72Zm-16,0H88V56h32Zm0,112v16H88V184Zm16,0h32v16H136Zm0-16V88h80v80Zm80-96H184V56h32ZM72,56V72H40V56ZM40,184H72v16H40Zm176,16H184V184h32v16Z",
    users: "M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z",
    squares: "M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"
  };
  const icon = (name, size = 24) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" viewBox="0 0 256 256"><path d="${P[name]}"></path></svg>`;
  document.querySelectorAll("[data-icon]").forEach(el => { el.outerHTML = icon(el.dataset.icon, +el.dataset.size); });

  /* ---------- Data ---------- */
  const mix = c => "https://mixkit.co/free-stock-video/discover/" + c + "/?orientation=vertical";
  const RAW = [
    ["50784","indian"],["50792","indian"],["50793","indian"],
    ["51185","skincare"],["51187","skincare"],["51186","skincare"],["51183","skincare"],
    ["41865","coffee"],["43270","coffee"],["43269","coffee"],["43391","coffee"],
    ["12171","food"],["10428","food"],["40534","food"],["26094","food"],
    ["51792","travel"],["39930","travel"],["51797","travel"],["51793","travel"],
    ["52079","fitness"],["40246","fitness"],["52080","fitness"],["52082","fitness"]
  ].map(([id, category]) => ({ id, category, source: mix(category) }));

  const CATS = ["All", "Beauty", "Style", "Food", "Travel", "Lifestyle"];
  const CAT_MAP = { indian: "Style", skincare: "Beauty", coffee: "Food", food: "Food", travel: "Travel", fitness: "Lifestyle" };
  const TITLES = {
    indian: ["More good days.", "Style, on your terms.", "A whole mood."],
    skincare: ["A little everyday glow.", "Your daily skin ritual.", "A moment for yourself.", "Up close. All glow."],
    coffee: ["But first, coffee.", "Good conversations start here.", "Your kind of morning.", "One sip, sold."],
    food: ["Good food. Brighter mood.", "Fresh ideas, served daily.", "Worth another bite.", "Made to be shared."],
    travel: ["Collect different views.", "Take the scenic route.", "A different kind of everyday.", "Go a little further."],
    fitness: ["Find your rhythm.", "Your daily reset.", "Good energy only.", "Show up for yourself."]
  };
  const counts = {};
  const VIDEOS = RAW.filter(v => v.id !== "10428").map((v, i) => {
    const n = counts[v.category] || 0; counts[v.category] = n + 1;
    return { ...v, key: v.id, kind: "video", cat: CAT_MAP[v.category], title: TITLES[v.category][n],
      type: i % 3 ? "UGC" : "Influencer", ratio: [.66, .8, 1, .72, .9, .6][i % 6] };
  });
  const TEXTS = [
    { key: "good", theme: "yellow", label: "BECAUS", title: "Good content.\nGreat company.", foot: "Distribution Performance", ratio: .89 },
    { key: "brand", theme: "black", label: "FOR BRANDS", title: "I’m a\nbrand.", foot: "Find your kind of creator.", action: "brand", button: "Let’s make something", ratio: .91 },
    { key: "creator", theme: "yellow", label: "FOR CREATORS", title: "I’m a\ncreator.", foot: "Good ideas deserve good company.", action: "creator", button: "Find your people", ratio: .78 },
    { key: "culture", theme: "white", label: "THE BECAUS WAY", title: "Creators\nmove\nculture.", foot: "Real people. Bigger stories.", ratio: .92 },
    { key: "stay", theme: "black", label: "THE CONTENT LOBBY", title: "Stay for\nthe\ncontent.", foot: "Come for the ideas. Stay for the people.", ratio: .78 },
    { key: "swipe", theme: "yellow", label: "MAKE YOUR NEXT MOVE", title: "Swipe.\nPick.\nCreate.", foot: "A little curiosity goes a long way.", ratio: 1 },
    { key: "together", theme: "white", label: "A JANRISE INITIATIVE", title: "Same\nbrains.\nBigger\nplay.", foot: "Same brighter together.", ratio: .74 },
    { key: "game", theme: "yellow", label: "A LITTLE PLAY BREAK", title: "Beat\nthe\nscroll.", foot: "8 cards. 4 connections.", action: "game", button: "Play a round", ratio: .79 },
    { key: "human", theme: "black", label: "GOOD CONTENT", title: "Greater\nhumans.", foot: "A world of different voices. All welcome.", ratio: 1.05 },
    { key: "stories", theme: "yellow", label: "THIS IS BECAUS", title: "Real\npeople.\nBigger\nstories.", foot: "A Janrise initiative.", ratio: .8 }
  ].map(t => ({ ...t, kind: "text" }));
  const ALL = [...VIDEOS, ...TEXTS];

  let instanceSeq = 0;
  const inst = p => ({ ...p, instance: ++instanceSeq });
  const shuffle = arr => { arr = [...arr]; for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; };
  const T = TEXTS, V = VIDEOS;
  const lobby = () => [T[0],V[3],V[0],T[1],V[11],V[7],T[2],V[15],V[4],T[3],V[1],V[12],T[4],V[19],V[5],T[5],V[8],V[16],T[7],V[6],T[6],V[13],V[20],T[8],V[2],V[17],T[9],V[9]].filter(Boolean).map(inst);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- State ---------- */
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const S = {
    q: "", cat: "All", fmt: "Everything", view: "Explore", filtersOpen: false, modal: null,
    autoplay: !reduced, saved: (() => { try { return JSON.parse(localStorage.getItem("becaus-pins") || "[]"); } catch { return []; } })(),
    feed: lobby(), cols: 5, loading: false
  };
  const persist = () => { try { localStorage.setItem("becaus-pins", JSON.stringify(S.saved)); } catch {} };
  const matches = p =>
    (S.cat === "All" || p.cat === S.cat) &&
    (S.fmt === "Everything" || (S.fmt === "Our world" ? p.kind === "text" : p.type === S.fmt)) &&
    (!S.q || `${p.title} ${p.foot || ""} ${p.cat || ""} ${p.type || ""}`.toLowerCase().includes(S.q.toLowerCase()));
  const pool = () => ALL.filter(matches);
  const isSaved = k => S.saved.includes(k);

  /* ---------- DOM refs ---------- */
  const $ = id => document.getElementById(id);
  const wall = $("wall"), sentinel = $("sentinel"), sentinelText = $("sentinelText"), qInput = $("q");

  /* ---------- Video playback ---------- */
  const visible = new Set();
  const videoIO = new IntersectionObserver(entries => {
    entries.forEach(e => { e.isIntersecting ? visible.add(e.target) : visible.delete(e.target); });
    syncVideos();
  }, { threshold: .2 });
  function syncVideos() {
    const play = S.autoplay && !S.modal;
    wall.querySelectorAll("video").forEach(v => {
      if (play && visible.has(v)) v.play().catch(() => {}); else v.pause();
    });
  }

  /* ---------- Pin elements (cached so videos aren't reloaded) ---------- */
  const pinCache = new Map();
  function saveBtnHTML(p) {
    const s = isSaved(p.key), label = p.title.replaceAll("\n", " ");
    return `<button class="save ${s ? "saved" : ""}" data-save="${p.key}" aria-label="${s ? "Unsave " : "Save "}${esc(label)}">${icon(s ? "check" : "bookmark", 17)}</button>`;
  }
  function makePin(p) {
    const el = document.createElement("article");
    if (p.kind === "text") {
      el.className = "pin text-pin";
      el.innerHTML = `<div class="text-card ${p.theme}">
          <span class="pin-eyebrow">${esc(p.label)}</span>
          <h2>${esc(p.title)}</h2>
          <div class="text-bottom"><p>${esc(p.foot)}</p>${p.action ? `<button class="pin-cta" data-open="${p.action}">${esc(p.button)}</button>` : ""}</div>
          ${saveBtnHTML(p)}
        </div>
        <div class="pin-caption"><h3>${p.action === "game" ? "A little less scrolling. A little more play." : "Good content. Greater humans."}</h3><span>becaus <span class="dot">·</span> our world</span></div>`;
    } else {
      el.className = "pin";
      el.innerHTML = `<div class="pin-media" style="aspect-ratio:${p.ratio}">
          <button class="video-open" data-video="${p.key}" aria-label="Watch ${esc(p.title)}">
            <video src="${media(p.id, "mp4")}" poster="${media(p.id, "jpg")}" muted loop playsinline preload="none"></video>
            <span class="format">${p.type} video</span>
            <span class="video-play">${icon("playFill", 20)}</span>
            <span class="category">${p.cat}</span>
            <span class="mute">${icon("mute", 16)}</span>
          </button>
          ${saveBtnHTML(p)}
        </div>
        <div class="pin-caption"><h3>${esc(p.title)}</h3><span>becaus <span class="dot">·</span> concept reels</span></div>`;
      videoIO.observe(el.querySelector("video"));
    }
    return el;
  }

  /* ---------- Render ---------- */
  function currentList() { return S.view === "Saved" ? ALL.filter(p => isSaved(p.key) && matches(p)) : S.feed; }

  function renderWall() {
    const list = currentList();
    const cols = Array.from({ length: S.cols }, () => []), h = Array(S.cols).fill(0);
    list.forEach(p => { const i = h.indexOf(Math.min(...h)); cols[i].push(p); h[i] += 1 / p.ratio + .24; });

    const keep = new Set(list.map(p => p.instance || p.key));
    for (const [id, el] of pinCache) if (!keep.has(id)) {
      const v = el.querySelector("video"); if (v) { videoIO.unobserve(v); visible.delete(v); }
      pinCache.delete(id);
    }
    const frag = document.createDocumentFragment();
    cols.forEach(col => {
      const c = document.createElement("div"); c.className = "column";
      col.forEach(p => {
        const id = p.instance || p.key;
        if (!pinCache.has(id)) pinCache.set(id, makePin(p));
        c.appendChild(pinCache.get(id));
      });
      frag.appendChild(c);
    });
    wall.replaceChildren(frag);

    $("empty").hidden = list.length > 0;
    $("emptyTitle").textContent = S.view === "Saved" ? "Good ideas live here." : "No pins found.";
    $("emptyText").textContent = S.view === "Saved" ? "Save videos and words you want to come back to." : "Try a different word or category.";
    renderSentinel();
    syncVideos();
    // re-arm infinite scroll in case the sentinel is still on screen
    feedIO.disconnect(); feedIO.observe(sentinel);
  }

  function renderSentinel() {
    sentinelText.textContent = S.view === "Explore" && pool().length ? (S.loading ? "Mixing it up…" : "More good company below.") : "";
  }

  function renderChrome() {
    const ex = $("railExplore"), sv = $("railSaved");
    ex.className = S.view === "Explore" ? "active" : "";
    ex.innerHTML = icon(S.view === "Explore" ? "houseFill" : "house", 24);
    sv.className = S.view === "Saved" ? "active" : "";
    sv.innerHTML = icon(S.view === "Saved" ? "bookmarkFill" : "bookmark", 24) + (S.saved.length ? `<small>${S.saved.length}</small>` : "");

    $("tabs").innerHTML = CATS.map(c =>
      `<button data-cat="${c}" class="${S.cat === c ? "selected" : ""}">${c === "All" ? (S.view === "Saved" ? "Your saved pins" : "The lobby") : c}</button>`).join("");

    $("filterBtn").className = S.filtersOpen ? "active" : "";
    const ap = $("autoplayBtn");
    ap.setAttribute("aria-label", S.autoplay ? "Pause all videos" : "Play all videos");
    ap.innerHTML = icon(S.autoplay ? "pauseFill" : "playFill", 18);

    const f = $("filters");
    f.hidden = !S.filtersOpen;
    f.innerHTML = ["Everything", "UGC", "Influencer", "Our world"].map(n =>
      `<button data-fmt="${n}" class="${S.fmt === n ? "selected" : ""}">${S.fmt === n ? icon("check", 15) : ""} ${n}</button>`).join("");

    $("clearQ").hidden = !S.q;
    if (qInput.value !== S.q) qInput.value = S.q;
  }

  function refreshSaveButtons(key) {
    const p = ALL.find(x => x.key === key);
    document.querySelectorAll(`[data-save="${key}"]`).forEach(b => {
      const s = isSaved(key);
      b.classList.toggle("saved", s);
      b.setAttribute("aria-label", (s ? "Unsave " : "Save ") + p.title.replaceAll("\n", " "));
      b.innerHTML = icon(s ? "check" : "bookmark", 17);
    });
  }

  /* ---------- Actions ---------- */
  function filtersChanged() {
    S.feed = (S.q || S.cat !== "All" || S.fmt !== "Everything") ? shuffle(pool()).map(inst) : lobby();
    renderChrome(); renderWall();
  }
  function goHome() {
    S.view = "Explore"; S.cat = "All"; S.fmt = "Everything"; S.q = "";
    S.feed = lobby(); renderChrome(); renderWall();
  }
  function toggleSave(key) {
    S.saved = isSaved(key) ? S.saved.filter(k => k !== key) : [...S.saved, key];
    persist(); refreshSaveButtons(key); renderChrome();
    if (S.view === "Saved") renderWall();
    const primary = document.querySelector(".dialog .primary");
    if (primary && S.modal && S.modal.key === key) primary.innerHTML = (isSaved(key) ? "Saved" : "Save pin") + " " + icon("bookmark", 17);
  }

  /* ---------- Infinite scroll ---------- */
  let loadTimer;
  const feedIO = new IntersectionObserver(([e]) => {
    const p = pool();
    if (!e.isIntersecting || S.loading || S.view !== "Explore" || !p.length) return;
    S.loading = true; renderSentinel();
    clearTimeout(loadTimer);
    loadTimer = setTimeout(() => {
      S.feed = [...S.feed, ...shuffle(p).slice(0, 18).map(inst)];
      S.loading = false; renderWall();
    }, 250);
  }, { rootMargin: "450px" });

  /* ---------- Modals ---------- */
  let lastFocus = null;
  function openModal(m) {
    lastFocus = document.activeElement;
    S.modal = m; syncVideos();
    const root = $("modalRoot");
    const isVideo = m.kind === "video";
    root.innerHTML = `<div class="overlay"><section class="dialog ${isVideo ? "video-dialog" : ""}" role="dialog" aria-modal="true" aria-label="${esc((m.title || m.kind).replaceAll("\n", " "))}">
      <button class="close" aria-label="Close">${icon("x", 22)}</button>${modalBody(m)}</section></div>`;
    const overlay = root.querySelector(".overlay"), dialog = root.querySelector(".dialog");
    overlay.addEventListener("click", closeModal);
    dialog.addEventListener("click", e => e.stopPropagation());
    dialog.querySelector(".close").addEventListener("click", closeModal);
    wireModal(m, dialog);
    document.body.style.overflow = "hidden";
    dialog.querySelector(".close").focus();
  }
  function closeModal() {
    if (!S.modal) return;
    S.modal = null; $("modalRoot").innerHTML = "";
    document.body.style.overflow = "";
    syncVideos();
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  }
  document.addEventListener("keydown", e => {
    if (!S.modal) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "Tab") {
      const f = [...document.querySelectorAll(".dialog button,.dialog a,.dialog input,.dialog video")];
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last && last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first && first.focus(); }
    }
  });

  function modalBody(m) {
    if (m.kind === "video") return `
      <video src="${media(m.id, "mp4")}" controls autoplay loop playsinline></video>
      <div class="video-details">
        <span class="modal-kicker">${m.cat} / ${m.type}</span>
        <h2>${esc(m.title)}</h2>
        <p>Save the idea. Make it your own.</p>
        <button class="primary">${isSaved(m.key) ? "Saved" : "Save pin"} ${icon("bookmark", 17)}</button>
        <p class="fine">Sample footage, not a commissioned becaus campaign. Format labels are illustrative.</p>
        <a href="${m.source}" target="_blank" rel="noreferrer">Video source ${icon("external", 14)}</a>
      </div>`;
    if (m.kind === "game") return `<div id="game"></div>`;
    if (m.kind === "brand") return `
      <span class="modal-kicker">I’M A BRAND</span>
      <h2>Find your kind<br>of creator.</h2>
      <p>Start with the content. Find a style you love. Save the ideas that feel like your brand.</p>
      <div class="path-buttons">
        <button data-path="UGC">${icon("film", 25)}<strong>UGC content</strong><span>Everyday voices. Real product stories.</span></button>
        <button data-path="Influencer">${icon("users", 25)}<strong>Influencer content</strong><span>Different perspectives. Shared possibilities.</span></button>
      </div>`;
    if (m.kind === "creator") return `
      <span class="modal-kicker">I’M A CREATOR</span>
      <h2>Good ideas.<br>Good company.</h2>
      <p>Explore the lobby, find your inspiration and save the content you’d love to create.</p>
      <div class="creator-categories">${CATS.slice(1).map(c => `<button data-cc="${c}">${c}</button>`).join("")}</div>
      <p class="fine">Creator registration will be available when the platform launches.</p>`;
    return `
      <img class="wordmark" src="images/becaus-logo.png" alt="becaus — Instant Influence">
      <span class="modal-kicker">DISTRIBUTION PERFORMANCE</span>
      <h2>Good content.<br>Great company.</h2>
      <p>Creators move culture. This is a place for brands, creators and good ideas to find each other.</p>
      <p>Real people. Bigger stories.<br>A Janrise initiative.</p>
      <p class="fine">This working preview mixes brand pins with 22 sample videos from Mixkit. Scrolling loads a new randomized selection from that collection. Saved pins stay in this browser.</p>`;
  }

  function wireModal(m, d) {
    if (m.kind === "video") d.querySelector(".primary").addEventListener("click", () => toggleSave(m.key));
    if (m.kind === "brand") d.querySelectorAll("[data-path]").forEach(b => b.addEventListener("click", () => {
      closeModal(); S.view = "Explore"; S.fmt = b.dataset.path; S.cat = "All"; S.q = ""; filtersChanged();
    }));
    if (m.kind === "creator") d.querySelectorAll("[data-cc]").forEach(b => b.addEventListener("click", () => {
      closeModal(); S.view = "Explore"; S.cat = b.dataset.cc; S.fmt = "Everything"; S.q = ""; filtersChanged();
    }));
    if (m.kind === "game") mountGame(d.querySelector("#game"));
  }

  /* ---------- Memory game ---------- */
  function mountGame(root) {
    const g = { cards: shuffle(["HOOK", "STORY", "IDEA", "PEOPLE", "HOOK", "STORY", "IDEA", "PEOPLE"]), open: [], matched: [], moves: 0 };
    let timer;
    const draw = () => {
      root.innerHTML = `
        <span class="modal-kicker">8 CARDS. 4 CONNECTIONS.</span>
        <h2>Beat the scroll.</h2>
        <p>Find the pairs. Good ideas belong together.</p>
        <div class="game-grid">${g.cards.map((c, i) => {
          const shown = g.open.includes(i) || g.matched.includes(i);
          const cls = g.matched.includes(i) ? "matched" : g.open.includes(i) ? "flipped" : "";
          return `<button data-i="${i}" class="${cls}" aria-label="${shown ? c : "Reveal card " + (i + 1)}">${shown ? c : "b"}</button>`;
        }).join("")}</div>
        <div class="game-score"><span>${g.moves} moves · ${g.matched.length / 2}/4 connections</span><button data-again>Play again</button></div>
        ${g.matched.length === 8 ? `<p class="success">Same brains. Bigger play. You found your people.</p>` : ""}`;
    };
    root.addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      if (b.hasAttribute("data-again")) {
        clearTimeout(timer); g.cards = shuffle(g.cards); g.open = []; g.matched = []; g.moves = 0; draw(); return;
      }
      const i = +b.dataset.i;
      if (g.open.length === 2 || g.open.includes(i) || g.matched.includes(i)) return;
      g.open.push(i);
      if (g.open.length === 2) {
        g.moves++;
        const [a, c] = g.open;
        if (g.cards[a] === g.cards[c]) { g.matched.push(a, c); g.open = []; }
        else timer = setTimeout(() => { g.open = []; draw(); }, 850);
      }
      draw();
      const again = root.querySelector(`[data-i="${i}"]`); again && again.focus();
    });
    draw();
  }

  /* ---------- Events ---------- */
  $("brand").addEventListener("click", goHome);
  $("railExplore").addEventListener("click", goHome);
  $("emptyBack").addEventListener("click", goHome);
  $("railSaved").addEventListener("click", () => { S.view = "Saved"; renderChrome(); renderWall(); });
  $("railShuffle").addEventListener("click", () => { S.view = "Explore"; S.feed = shuffle(pool()).map(inst); renderChrome(); renderWall(); });
  $("railAbout").addEventListener("click", () => openModal({ kind: "about" }));
  $("aboutTop").addEventListener("click", () => openModal({ kind: "about" }));
  $("playTop").addEventListener("click", () => openModal({ kind: "game" }));
  qInput.addEventListener("input", () => { S.q = qInput.value; filtersChanged(); });
  $("clearQ").addEventListener("click", () => { S.q = ""; filtersChanged(); qInput.focus(); });
  $("filterBtn").addEventListener("click", () => { S.filtersOpen = !S.filtersOpen; renderChrome(); });
  $("autoplayBtn").addEventListener("click", () => { S.autoplay = !S.autoplay; renderChrome(); syncVideos(); });
  $("tabs").addEventListener("click", e => { const b = e.target.closest("[data-cat]"); if (b) { S.cat = b.dataset.cat; filtersChanged(); } });
  $("filters").addEventListener("click", e => { const b = e.target.closest("[data-fmt]"); if (b) { S.fmt = b.dataset.fmt; filtersChanged(); } });
  wall.addEventListener("click", e => {
    const s = e.target.closest("[data-save]"); if (s) { toggleSave(s.dataset.save); return; }
    const v = e.target.closest("[data-video]"); if (v) { openModal(VIDEOS.find(x => x.key === v.dataset.video)); return; }
    const o = e.target.closest("[data-open]");
    if (o) { const t = TEXTS.find(x => x.action === o.dataset.open); openModal({ kind: o.dataset.open, title: t ? t.title : "" }); }
  });

  const colCount = () => innerWidth < 580 ? 2 : innerWidth < 850 ? 3 : innerWidth < 1150 ? 4 : 5;
  window.addEventListener("resize", () => { const n = colCount(); if (n !== S.cols) { S.cols = n; renderWall(); } });

  /* ---------- Boot ---------- */
  S.cols = colCount();
  renderChrome();
  renderWall();
})();
