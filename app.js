(() => {
  const TIMER_LINES = [
    "TIME IS A FLAT CIRCLE (AND ALSO FAKE)",
    "COUNTDOWN… COUNTUP… COUNTSIDEWAYS",
    "HR SAYS THIS IS FINE",
    "DEADLINE MOVED TO YESTERDAY",
    "MEETING STARTS WHEN YOU LOOK AWAY",
    "PRODUCTIVITY SPIKE DETECTED (LIE)",
    "PLEASE HOLD FOR SHAREHOLDER VALUE",
    "BLINKING IS A PERFORMANCE ISSUE",
  ];

  const TICKER_LINES = [
    "BREAKING: EYES DECLARED COMPANY ASSET",
    "*** DO NOT BLINK *** DO NOT BLINK ***",
    "URGENT: SYNERGY LEVELS CRITICAL",
    "ALERT: SOMEONE ALMOST CLICKED",
    "FLASH: STAKEHOLDER GLOW AT ALL-TIME HIGH",
  ];

  const LOSE_LINES = [
    "The board has been notified. Synergy has decreased.",
    "Your stare KPIs are below quarterly expectations.",
    "Please schedule a 1:1 with your eyelids.",
    "Clicking is not a core value. Neither is blinking.",
    "We've taken your vibes offline for maintenance.",
  ];

  const BUZZWORDS = [
    "Unlocking paradigm-shifting eyeball equity…",
    "Democratizing the stare-as-a-service stack.",
    "Lean into the blink disruption pipeline.",
    "We're not a game — we're an attention OS.",
    "Synergizing retinal OKRs across verticals.",
    "Move fast and don't look away.",
    "Circle back to your north-star cornea.",
    "Operationalizing glitter at enterprise scale.",
    "Thought leadership, but make it sparkle.",
    "Banding together to bandwagon the void.",
    "Low-code high-stare transformation journey.",
    "Harvesting actionable insights from nothing.",
  ];

  const CHART_CAPTIONS = [
    "Mapping blinks to shareholder value in real time.",
    "Funnel conversion: stare → hope → nothing.",
    "YoY growth of vibes (unaudited).",
    "This chart means everything and also nothing.",
    "Engagement depth measured in glitter units.",
  ];

  const BLINK_ANNOUNCEMENTS = [
    "Blink detected.",
    "False positive.",
    "Recalibrating retina.",
    "Model confidence exceeded confidence.",
    "Blink detected. Also: no blink detected.",
    "False positive confirmed as true positive (false).",
    "Eyes closed. Eyes open. Both. Neither.",
    "100% sure this is 0% reliable.",
    "Blink denied. Blink approved. Blink pending.",
    "Retina recalibrated. Retina uncalibrated. Retina imaginary.",
    "High confidence in low confidence.",
    "Detection successful. Detection failed. Detection optional.",
    "Not a blink. Definitely a blink. Irrelevant.",
    "Model agrees with itself (incorrectly).",
  ];

  const CONFIDENCE_SUBS = [
    "guessing aggressively",
    "confidently wrong",
    "peer-reviewed vibes",
    "trained on vibes only",
    "uncertain with authority",
    "hallucinating optics",
    "stakeholder-approved noise",
    "scientifically decorative",
  ];

  const CONFIDENCE_BADGES = [
    "UNSURE",
    "VERY SURE",
    "SURELY NOT",
    "MAYBE",
    "YES/NO",
    "INVERSE",
    "OVERFIT",
    "UNDERTHINKING",
  ];

  const BLINK_LABELS = [
    "I Blinked",
    "Are you sure?",
    "Not yet.",
    "Access Denied.",
    "Retry.",
  ];

  const ELIM_LINES = [
    "You have been eliminated.",
    "Insufficient eye synergy.",
    "Detected low stakeholder engagement.",
    "Blink audit failed.",
  ];

  const AI_SCAN_LINES = [
    "Scanning eyelid velocity…",
    "Classifying micro-blink intent…",
    "Running EYELID-GPT-∞ inference…",
    "Detecting unauthorized moisture…",
    "Benchmarking stare against peers…",
    "Uploading retina telemetry to the cloud…",
  ];

  const AI_STATUS_LINES = [
    "Model confidence: suspiciously high",
    "False positive rate: aspirational",
    "Training data: LinkedIn posts + voids",
    "Bias check: skipped for synergy",
    "Hallucination: feature, not bug",
  ];

  const els = {
    timer: document.getElementById("timer"),
    timerSub: document.getElementById("timerSub"),
    instruction: document.getElementById("instruction"),
    surrenderBtn: document.getElementById("surrenderBtn"),
    memeA: document.getElementById("memeA"),
    memeB: document.getElementById("memeB"),
    memeCredit: document.getElementById("memeCredit"),
    beepStatus: document.getElementById("beepStatus"),
    vhsBar: document.getElementById("vhsBar"),
    chromatic: document.getElementById("chromatic"),
    memeGlitchSlice: document.getElementById("memeGlitchSlice"),
    ticker: document.getElementById("ticker"),
    loseModal: document.getElementById("loseModal"),
    loseCopy: document.getElementById("loseCopy"),
    restartBtn: document.getElementById("restartBtn"),
    buzzword: document.getElementById("buzzword"),
    sparkleField: document.getElementById("sparkleField"),
    synergyChart: document.getElementById("synergyChart"),
    chartBadge: document.getElementById("chartBadge"),
    chartCaption: document.getElementById("chartCaption"),
    kpiFocus: document.getElementById("kpiFocus"),
    kpiFocusDelta: document.getElementById("kpiFocusDelta"),
    kpiVision: document.getElementById("kpiVision"),
    kpiVisionDelta: document.getElementById("kpiVisionDelta"),
    kpiBlinkVel: document.getElementById("kpiBlinkVel"),
    kpiBlinkVelDelta: document.getElementById("kpiBlinkVelDelta"),
    kpiMoisture: document.getElementById("kpiMoisture"),
    kpiMoistureDelta: document.getElementById("kpiMoistureDelta"),
    kpiEyeContact: document.getElementById("kpiEyeContact"),
    kpiEyeContactDelta: document.getElementById("kpiEyeContactDelta"),
    kpiAlignment: document.getElementById("kpiAlignment"),
    kpiAlignmentDelta: document.getElementById("kpiAlignmentDelta"),
    loseCulture: document.getElementById("loseCulture"),
    loseVibes: document.getElementById("loseVibes"),
    confidencePct: document.getElementById("confidencePct"),
    confidenceFill: document.getElementById("confidenceFill"),
    confidenceMsg: document.getElementById("confidenceMsg"),
    confidenceSub: document.getElementById("confidenceSub"),
    confidenceBadge: document.getElementById("confidenceBadge"),
    elimOverlay: document.getElementById("elimOverlay"),
    elimTitle: document.getElementById("elimTitle"),
    aiOverlay: document.getElementById("aiOverlay"),
    aiTitle: document.getElementById("aiTitle"),
    aiMeterFill: document.getElementById("aiMeterFill"),
    aiStatus: document.getElementById("aiStatus"),
  };

  const KPI_DELTAS = [
    "▲ vs last blink",
    "▼ but make it chic",
    "▲ stakeholder approved",
    "▼ legal is reviewing",
    "▲ MoM (month of nonsense)",
    "▼ QoQ / YoY / Why",
    "▲ synergy-adjusted",
    "▼ pending offsite",
    "▲ board-ready fiction",
    "▼ HR flagged this",
  ];

  let seconds = randomInt(12, 97);
  let gameOver = false;
  let activeMeme = "A";
  let audioCtx = null;
  let memeQueue = [];
  let fleeCooldown = 0;
  let buttonHiddenUntil = 0;
  let btnScale = 1;
  let btnRotation = 0;
  let elimActive = false;
  let aiActive = false;
  let chartPoints = Array.from({ length: 14 }, () => randomInt(18, 88));
  let confidence = 47;
  let lastAnnouncement = "";

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function randomFloat(min, max, digits = 1) {
    const n = Math.random() * (max - min) + min;
    return n.toFixed(digits);
  }

  function setKpiDelta(el) {
    const up = Math.random() > 0.45;
    el.textContent = pick(KPI_DELTAS);
    el.classList.toggle("up", up);
    el.classList.toggle("down", !up);
  }

  function tickNonsenseKpis() {
    if (gameOver) return;

    // Focus KPI — percent of nothing
    els.kpiFocus.textContent = `${randomInt(-40, 420)}%`;
    setKpiDelta(els.kpiFocusDelta);

    // Vision Throughput — units of looking
    els.kpiVision.textContent = `${randomFloat(0.1, 99.9)} kLux/s`;
    setKpiDelta(els.kpiVisionDelta);

    // Blink Velocity — speed of failure
    els.kpiBlinkVel.textContent = `${randomFloat(0, 88, 2)} bl/ms`;
    setKpiDelta(els.kpiBlinkVelDelta);

    // Moisture Index — tear economics
    const moistureFormats = [
      () => `${randomFloat(12, 99)}% RH`,
      () => `${randomInt(1, 11)}/10 damp`,
      () => `${randomFloat(-3, 140)} mL`,
      () => "arid™",
      () => "sobbing",
    ];
    els.kpiMoisture.textContent = pick(moistureFormats)();
    setKpiDelta(els.kpiMoistureDelta);

    // Executive Eye Contact — power stare score
    const eyeFormats = [
      () => `${randomInt(0, 100)}/100`,
      () => `${randomFloat(0.01, 9.99)}×`,
      () => `${randomInt(-12, 140)}%`,
      () => "avoidant",
      () => "locked in",
    ];
    els.kpiEyeContact.textContent = pick(eyeFormats)();
    setKpiDelta(els.kpiEyeContactDelta);

    // Corporate Alignment Score — vibes as governance
    const alignFormats = [
      () => `${randomInt(-99, 999)}`,
      () => `${randomFloat(0, 1, 3)}σ`,
      () => `${randomInt(1, 100)}th %ile`,
      () => "misaligned",
      () => "on-brand",
      () => "∞ / 10",
    ];
    els.kpiAlignment.textContent = pick(alignFormats)();
    setKpiDelta(els.kpiAlignmentDelta);
  }

  function formatTime(totalSeconds) {
    const s = Math.max(0, Math.abs(Math.floor(totalSeconds)));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(h)}:${pad(m)}:${pad(sec)}`;
  }

  function ensureAudio() {
    if (!audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      audioCtx = new Ctx();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  function beep(freq = 880, duration = 0.09, type = "square", gain = 0.08) {
    const ctx = ensureAudio();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    g.gain.value = gain;
    osc.connect(g);
    g.connect(ctx.destination);
    const now = ctx.currentTime;
    g.gain.setValueAtTime(gain, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  function spawnSparkles() {
    const field = els.sparkleField;
    if (!field) return;
    field.innerHTML = "";
    const count = window.innerWidth < 600 ? 14 : 22;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      s.className = "sparkle";
      if (Math.random() < 0.25) s.classList.add("diamond");
      else if (Math.random() < 0.35) s.classList.add("rose");
      s.style.left = `${Math.random() * 100}%`;
      s.style.top = `${Math.random() * 100}%`;
      s.style.setProperty("--dur", `${(1.6 + Math.random() * 2.8).toFixed(2)}s`);
      s.style.setProperty("--delay", `${(Math.random() * 4).toFixed(2)}s`);
      field.appendChild(s);
    }
  }

  function drawChart() {
    const canvas = els.synergyChart;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    const pad = 16;
    const pts = chartPoints;
    const max = Math.max(...pts, 100);
    const min = Math.min(...pts, 0);
    const range = Math.max(max - min, 1);

    ctx.clearRect(0, 0, w, h);

    // soft grid
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 1;
    for (let i = 0; i < 4; i++) {
      const y = pad + ((h - pad * 2) * i) / 3;
      ctx.beginPath();
      ctx.moveTo(pad, y);
      ctx.lineTo(w - pad, y);
      ctx.stroke();
    }

    const coords = pts.map((v, i) => {
      const x = pad + (i / (pts.length - 1)) * (w - pad * 2);
      const y = h - pad - ((v - min) / range) * (h - pad * 2);
      return [x, y];
    });

    // glow fill
    const grad = ctx.createLinearGradient(0, pad, 0, h);
    grad.addColorStop(0, "rgba(255, 107, 157, 0.45)");
    grad.addColorStop(0.5, "rgba(255, 229, 102, 0.2)");
    grad.addColorStop(1, "rgba(94, 240, 255, 0.05)");

    ctx.beginPath();
    coords.forEach(([x, y], i) => {
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.lineTo(coords[coords.length - 1][0], h - pad);
    ctx.lineTo(coords[0][0], h - pad);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // sparkly stroke
    const lineGrad = ctx.createLinearGradient(0, 0, w, 0);
    lineGrad.addColorStop(0, "#ffe566");
    lineGrad.addColorStop(0.5, "#ff6b9d");
    lineGrad.addColorStop(1, "#5ef0ff");
    ctx.beginPath();
    coords.forEach(([x, y], i) => {
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = lineGrad;
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.shadowColor = "rgba(255, 229, 102, 0.7)";
    ctx.shadowBlur = 12;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // diamond points
    coords.forEach(([x, y], i) => {
      if (i % 2 !== 0) return;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.PI / 4);
      ctx.fillStyle = "#fff";
      ctx.shadowColor = "rgba(94, 240, 255, 0.9)";
      ctx.shadowBlur = 10;
      ctx.fillRect(-3, -3, 6, 6);
      ctx.restore();
    });
  }

  function nudgeChart() {
    chartPoints.shift();
    const last = chartPoints[chartPoints.length - 1] || 50;
    chartPoints.push(Math.max(5, Math.min(98, last + randomInt(-22, 28))));
    drawChart();
    if (els.chartBadge) {
      const fake = (Math.random() * 180 - 20).toFixed(1);
      els.chartBadge.textContent = `${fake > 0 ? "+" : ""}${fake}% MoM`;
    }
    if (els.chartCaption && Math.random() < 0.4) {
      els.chartCaption.textContent = pick(CHART_CAPTIONS);
    }
  }

  function updateKpis() {
    tickNonsenseKpis();
  }

  function rotateBuzzword() {
    if (!els.buzzword || gameOver) return;
    els.buzzword.style.opacity = "0";
    setTimeout(() => {
      els.buzzword.textContent = pick(BUZZWORDS);
      els.buzzword.style.opacity = "1";
    }, 220);
  }

  function playDistractingCountdown() {
    const steps = randomInt(3, 6);
    els.beepStatus.textContent = "AUDIO: DISTRACTING COUNTDOWN";
    els.timer.classList.add("panic");

    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        if (gameOver) return;
        const descending = Math.random() > 0.35;
        const freq = descending ? 920 - i * 90 : 420 + i * 110;
        beep(freq, 0.11, Math.random() > 0.5 ? "square" : "sawtooth", 0.1);
        if (Math.random() > 0.4) {
          setTimeout(() => beep(freq * 1.5, 0.05, "triangle", 0.05), 60);
        }
      }, i * randomInt(180, 420));
    }

    setTimeout(() => {
      if (!gameOver) {
        els.timer.classList.remove("panic");
        els.beepStatus.textContent = "AUDIO: STANDBY";
      }
    }, steps * 450 + 400);
  }

  function glitchBurst() {
    els.vhsBar.classList.remove("run");
    void els.vhsBar.offsetWidth;
    els.vhsBar.classList.add("run");
    els.chromatic.classList.add("on");
    setTimeout(() => els.chromatic.classList.remove("on"), 280);

    const img = activeMeme === "A" ? els.memeA : els.memeB;
    img.classList.add("glitch-flash");
    setTimeout(() => img.classList.remove("glitch-flash"), 220);

    if (els.memeGlitchSlice) {
      const slice = els.memeGlitchSlice;
      slice.style.backgroundImage = `url("${img.src}")`;
      slice.style.backgroundSize = "cover";
      slice.style.backgroundPosition = "center";
      slice.classList.remove("run");
      void slice.offsetWidth;
      slice.classList.add("run");
    }

    // Extra RGB tear on the meme layer
    if (Math.random() > 0.4) {
      els.memeA.style.transform = `translateX(${randomInt(-8, 8)}px)`;
      els.memeB.style.transform = `translateX(${randomInt(-8, 8)}px)`;
      setTimeout(() => {
        els.memeA.style.transform = "";
        els.memeB.style.transform = "";
      }, 120);
    }

    if (Math.random() > 0.4) {
      els.ticker.textContent = pick(TICKER_LINES);
      els.ticker.classList.remove("show");
      void els.ticker.offsetWidth;
      els.ticker.classList.add("show");
    }
  }

  function updateTimerDisplay(direction) {
    const stamp = formatTime(seconds);
    els.timer.textContent = stamp;
    els.timer.setAttribute("data-text", stamp);
    els.timer.classList.remove("tick-up", "tick-down");
    void els.timer.offsetWidth;
    if (direction === "up") els.timer.classList.add("tick-up");
    if (direction === "down") els.timer.classList.add("tick-down");
  }

  function tickTimer() {
    if (gameOver) return;

    const roll = Math.random();
    let direction;

    if (roll < 0.42) {
      seconds += randomInt(1, 7);
      direction = "up";
    } else if (roll < 0.84) {
      seconds -= randomInt(1, 9);
      direction = "down";
    } else {
      seconds += randomInt(-25, 35);
      direction = seconds >= 0 ? "up" : "down";
      glitchBurst();
    }

    if (seconds < -99) seconds = randomInt(5, 40);
    if (seconds > 999) seconds = randomInt(10, 80);

    updateTimerDisplay(direction);

    if (Math.random() < 0.28) {
      els.timerSub.textContent = pick(TIMER_LINES);
    }

    if (Math.random() < 0.55) updateKpis();
    if (Math.random() < 0.7) nudgeChart();

    if (Math.random() < 0.18) {
      playDistractingCountdown();
    } else if (Math.random() < 0.12) {
      beep(randomInt(200, 1400), 0.06, "square", 0.04);
    }
  }

  let localMemes = null;

  async function loadLocalMemes() {
    if (localMemes) return localMemes;
    try {
      const res = await fetch("memes/manifest.json", { cache: "no-store" });
      if (!res.ok) throw new Error(`manifest ${res.status}`);
      const data = await res.json();
      localMemes = (data || [])
        .filter((m) => m && m.file)
        .map((m) => ({
          url: m.file,
          title: m.title || "UNTITLED CORPORATE ASSET",
          author: m.author || "unknown",
          subreddit: m.subreddit || "CorporateMemes",
        }));
    } catch {
      localMemes = [];
    }
    return localMemes;
  }

  function shuffledQueue(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function preload(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  async function showNextMeme() {
    const library = await loadLocalMemes();
    if (!library.length) {
      els.memeCredit.textContent = "NO LOCAL CORPORATE MEMES FOUND";
      return;
    }

    if (!memeQueue.length) {
      memeQueue = shuffledQueue(library);
    }

    let next = memeQueue.shift();
    let ok = await preload(next.url);
    let attempts = 0;
    while (!ok && memeQueue.length && attempts < 8) {
      next = memeQueue.shift();
      ok = await preload(next.url);
      attempts += 1;
    }
    if (!ok) return;

    const incoming = activeMeme === "A" ? els.memeB : els.memeA;
    const outgoing = activeMeme === "A" ? els.memeA : els.memeB;

    incoming.src = next.url;
    incoming.alt = next.title;
    incoming.classList.add("active");
    outgoing.classList.remove("active");
    activeMeme = activeMeme === "A" ? "B" : "A";

    const credit = `r/${next.subreddit} · ${next.title}`;
    els.memeCredit.textContent =
      credit.slice(0, 72) + (credit.length > 72 ? "…" : "");

    if (Math.random() > 0.5) glitchBurst();
  }

  function placeButton(x, y, btn = els.surrenderBtn) {
    const pad = 16;
    const w = btn.offsetWidth || 160;
    const h = btn.offsetHeight || 48;
    const maxX = window.innerWidth - w - pad;
    const maxY = window.innerHeight - h - pad;
    const clampedX = Math.min(Math.max(pad + w / 2, x), maxX + w / 2);
    const clampedY = Math.min(Math.max(pad + h / 2, y), maxY + h / 2);
    btn.style.left = `${clampedX}px`;
    btn.style.top = `${clampedY}px`;
  }

  function applyButtonTransform(btn = els.surrenderBtn) {
    btn.style.setProperty("--btn-rot", `${btnRotation}deg`);
    btn.style.setProperty("--btn-scale", String(btnScale));
    btn.style.setProperty("--btn-scale-base", String(btnScale));
  }

  function setBlinkLabel(text) {
    els.surrenderBtn.textContent = text;
  }

  function randomTeleport(btn = els.surrenderBtn) {
    placeButton(
      randomInt(40, window.innerWidth - 40),
      randomInt(80, window.innerHeight - 40),
      btn
    );
  }

  function fleeFromPointer(clientX, clientY, btn = els.surrenderBtn) {
    if (gameOver || elimActive || aiActive) return;
    if (performance.now() < buttonHiddenUntil) return;

    const now = performance.now();
    if (btn === els.surrenderBtn && now < fleeCooldown) return;

    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const dist = Math.hypot(dx, dy);
    const threatRadius = Math.max(rect.width, rect.height) * 1.45 + 42;

    if (dist > threatRadius) return;

    if (btn === els.surrenderBtn) fleeCooldown = now + 70;
    btn.classList.add("flee");
    const fleeRot = randomInt(-28, 28);
    btn.style.setProperty("--flee-rot", `${fleeRot}deg`);
    btn.style.setProperty("--btn-rot", `${fleeRot}deg`);
    btn.style.setProperty("--btn-scale", String(btnScale * 1.08));

    const angle =
      Math.atan2(cy - clientY, cx - clientX) + (Math.random() - 0.5) * 1.4;
    const leap = randomInt(
      140,
      Math.min(window.innerWidth, window.innerHeight) * 0.5
    );
    let nx = cx + Math.cos(angle) * leap;
    let ny = cy + Math.sin(angle) * leap;

    if (Math.random() < 0.34) {
      nx = randomInt(40, window.innerWidth - 40);
      ny = randomInt(80, window.innerHeight - 40);
    }

    placeButton(nx, ny, btn);

    if (btn === els.surrenderBtn) {
      if (Math.random() < 0.4) btnRotation = randomInt(-40, 40);
      if (Math.random() < 0.35) {
        btnScale =
          Math.random() < 0.5
            ? randomInt(55, 80) / 100
            : randomInt(120, 170) / 100;
      }
      if (Math.random() < 0.45) setBlinkLabel(pick(BLINK_LABELS));
    }

    if (Math.random() < 0.4) beep(randomInt(150, 400), 0.04, "square", 0.03);
    setTimeout(() => {
      btn.classList.remove("flee");
      if (btn === els.surrenderBtn) applyButtonTransform();
    }, 160);
  }

  function vanishButton() {
    if (gameOver || elimActive) return;
    const ms = randomInt(1800, 4500);
    buttonHiddenUntil = performance.now() + ms;
    els.surrenderBtn.classList.add("is-ghost");
    setTimeout(() => {
      if (gameOver) return;
      els.surrenderBtn.classList.remove("is-ghost");
      buttonHiddenUntil = 0;
      randomTeleport();
      setBlinkLabel(pick(BLINK_LABELS));
    }, ms);
  }

  function duplicateButton() {
    if (gameOver || elimActive) return;
    const cloneCount = randomInt(1, 3);
    const baseRect = els.surrenderBtn.getBoundingClientRect();

    for (let i = 0; i < cloneCount; i++) {
      const clone = els.surrenderBtn.cloneNode(true);
      clone.removeAttribute("id");
      clone.classList.add("is-clone");
      clone.textContent = pick(BLINK_LABELS);
      document.body.appendChild(clone);

      placeButton(
        baseRect.left + baseRect.width / 2 + randomInt(-160, 160),
        baseRect.top + baseRect.height / 2 + randomInt(-120, 120),
        clone
      );
      clone.style.setProperty("--btn-rot", `${randomInt(-30, 30)}deg`);
      clone.style.setProperty("--btn-scale", String(randomInt(70, 130) / 100));

      clone.addEventListener("mouseenter", (e) => {
        fleeFromPointer(e.clientX, e.clientY, clone);
      });
      clone.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        fleeFromPointer(e.clientX, e.clientY, clone);
        if (Math.random() < 0.5) randomTeleport(clone);
      });

      setTimeout(() => {
        clone.style.opacity = "0";
        setTimeout(() => clone.remove(), 280);
      }, randomInt(2200, 6500));
    }

    randomTeleport();
    setBlinkLabel(pick(["I Blinked", "Retry.", "Not yet."]));
  }

  function mutateButtonChaos() {
    if (gameOver || elimActive || aiActive) return;
    if (performance.now() < buttonHiddenUntil) return;

    const roll = Math.random();
    if (roll < 0.18) {
      vanishButton();
    } else if (roll < 0.34) {
      duplicateButton();
    } else if (roll < 0.5) {
      randomTeleport();
      btnRotation = randomInt(-55, 55);
      applyButtonTransform();
    } else if (roll < 0.68) {
      btnScale =
        Math.random() < 0.45
          ? randomInt(45, 75) / 100
          : randomInt(130, 190) / 100;
      applyButtonTransform();
      setBlinkLabel(pick(BLINK_LABELS));
    } else if (roll < 0.84) {
      btnRotation = randomInt(-75, 75);
      applyButtonTransform();
      setBlinkLabel(pick(BLINK_LABELS));
    } else {
      randomTeleport();
      setBlinkLabel(pick(BLINK_LABELS));
      if (Math.random() < 0.5) {
        btnScale = randomInt(80, 140) / 100;
        applyButtonTransform();
      }
    }

    if (Math.random() < 0.25) {
      beep(randomInt(180, 900), 0.05, "triangle", 0.035);
    }
  }

  function showElimination() {
    if (gameOver || elimActive || aiActive) return;
    elimActive = true;
    els.elimTitle.textContent = pick(ELIM_LINES);
    els.elimTitle.setAttribute("data-text", els.elimTitle.textContent);
    els.elimOverlay.hidden = false;
    els.beepStatus.textContent = "AUDIO: ELIMINATION JINGLE";
    glitchBurst();
    for (let i = 0; i < 4; i++) {
      setTimeout(() => beep(90 + i * 35, 0.14, "sawtooth", 0.08), i * 90);
    }

    setTimeout(() => {
      els.elimOverlay.hidden = true;
      elimActive = false;
      els.beepStatus.textContent = "AUDIO: STANDBY";
    }, randomInt(2000, 5000));
  }

  function showFakeAiDetection() {
    if (gameOver || elimActive || aiActive || !els.aiOverlay) return;
    aiActive = true;
    els.aiTitle.textContent = pick(AI_SCAN_LINES);
    els.aiStatus.textContent = pick(AI_STATUS_LINES);
    els.aiMeterFill.style.width = "0%";
    els.aiOverlay.hidden = false;
    els.beepStatus.textContent = "AUDIO: AI SCAN";

    let progress = 0;
    const ticks = randomInt(8, 14);
    const stepMs = randomInt(120, 220);
    const interval = setInterval(() => {
      progress = Math.min(100, progress + randomInt(4, 18));
      els.aiMeterFill.style.width = `${progress}%`;
      if (Math.random() < 0.45) {
        els.aiStatus.textContent = `${pick(AI_STATUS_LINES)} · ${progress.toFixed(1)}%`;
      }
      if (Math.random() < 0.35) {
        els.aiTitle.textContent = pick(AI_SCAN_LINES);
      }
      beep(randomInt(600, 1400), 0.03, "square", 0.025);
      // Mirror into the live confidence panel for continuity
      if (Math.random() < 0.5) updateConfidenceMeter(progress);
      if (Math.random() < 0.35) announceBlinkAi();
    }, stepMs);

    setTimeout(() => {
      clearInterval(interval);
      els.aiMeterFill.style.width = "100%";
      els.aiStatus.textContent = pick([
        "Verdict: inconclusive. Continue staring.",
        "Blink probability: classified.",
        "AI has learned nothing. Perfect.",
        "Detection complete. Results withheld.",
      ]);
      setTimeout(() => {
        els.aiOverlay.hidden = true;
        aiActive = false;
        els.beepStatus.textContent = "AUDIO: STANDBY";
      }, randomInt(700, 1400));
    }, ticks * stepMs);
  }

  function updateConfidenceMeter(value) {
    if (!els.confidencePct || !els.confidenceFill) return;
    confidence = Math.max(0, Math.min(100, Math.round(value)));
    els.confidencePct.textContent = `${confidence}%`;
    els.confidenceFill.style.width = `${confidence}%`;

    els.confidencePct.classList.remove("spike");
    void els.confidencePct.offsetWidth;
    els.confidencePct.classList.add("spike");

    const badge =
      confidence > 85
        ? pick(["OVERFIT", "TOO SURE", "DANGEROUSLY CERTAIN"])
        : confidence < 15
          ? pick(["UNSURE", "GIVING UP", "RETINA LOST"])
          : pick(CONFIDENCE_BADGES);
    els.confidenceBadge.textContent = badge;
    els.confidenceBadge.classList.toggle("warn", confidence > 70 || confidence < 20);
    els.confidenceBadge.classList.toggle("panic", confidence === 0 || confidence === 100);

    if (Math.random() < 0.35) {
      els.confidenceSub.textContent = pick(CONFIDENCE_SUBS);
    }
  }

  function announceBlinkAi() {
    if (!els.confidenceMsg) return;
    let msg = pick(BLINK_ANNOUNCEMENTS);
    // Prefer flipping to a contradictory follow-up when possible
    if (lastAnnouncement === "Blink detected." && Math.random() < 0.7) {
      msg = "False positive.";
    } else if (lastAnnouncement === "False positive." && Math.random() < 0.7) {
      msg = "Blink detected.";
    } else if (
      lastAnnouncement === "Model confidence exceeded confidence." &&
      Math.random() < 0.6
    ) {
      msg = "Model confidence undercut confidence.";
    } else if (lastAnnouncement === "Recalibrating retina." && Math.random() < 0.6) {
      msg = "Retina rejected calibration.";
    } else if (msg === lastAnnouncement) {
      msg = pick(BLINK_ANNOUNCEMENTS.filter((m) => m !== lastAnnouncement));
    }

    lastAnnouncement = msg;
    els.confidenceMsg.textContent = msg;
    els.confidenceMsg.classList.remove("flash");
    void els.confidenceMsg.offsetWidth;
    els.confidenceMsg.classList.add("flash");

    // Occasionally contradict the meter itself in the same breath
    if (Math.random() < 0.4) {
      const flip = confidence > 50 ? randomInt(0, 25) : randomInt(75, 100);
      updateConfidenceMeter(flip);
    }
  }

  function tickConfidence() {
    if (gameOver) return;

    // Drift for no reason — sometimes leap, sometimes jitter
    const mode = Math.random();
    if (mode < 0.2) {
      confidence = randomInt(0, 100);
    } else if (mode < 0.45) {
      confidence += randomInt(-35, 35);
    } else {
      confidence += randomInt(-12, 12);
    }

    updateConfidenceMeter(confidence);

    if (Math.random() < 0.28) {
      announceBlinkAi();
    }
  }

  function endGame() {
    if (gameOver) return;
    gameOver = true;
    elimActive = false;
    aiActive = false;
    if (els.elimOverlay) els.elimOverlay.hidden = true;
    if (els.aiOverlay) els.aiOverlay.hidden = true;
    els.loseCopy.textContent = pick(LOSE_LINES);
    els.beepStatus.textContent = "AUDIO: DEFEAT JINGLE";
    els.instruction.textContent = "You clicked. The void blinked back.";
    els.buzzword.textContent = "Culture score critically under-sparkled.";
    if (els.loseCulture) els.loseCulture.textContent = `−${randomInt(18, 99)}`;
    if (els.loseVibes)
      els.loseVibes.textContent = pick([
        "bankrupt",
        "unfunded",
        "pivoted",
        "sunset",
      ]);

    for (let i = 0; i < 5; i++) {
      setTimeout(() => beep(180 + i * 40, 0.12, "sawtooth", 0.09), i * 100);
    }
    glitchBurst();
    els.loseModal.showModal();
  }

  function restart() {
    gameOver = false;
    elimActive = false;
    aiActive = false;
    buttonHiddenUntil = 0;
    btnScale = 1;
    btnRotation = 0;
    seconds = randomInt(12, 97);
    els.loseModal.close();
    if (els.elimOverlay) els.elimOverlay.hidden = true;
    if (els.aiOverlay) els.aiOverlay.hidden = true;
    els.surrenderBtn.classList.remove("is-ghost");
    setBlinkLabel("I Blinked");
    applyButtonTransform();
    els.instruction.textContent = "Stare. Do not click. Clicking is surrender.";
    els.timerSub.textContent = "RECALIBRATING CHAOS…";
    els.beepStatus.textContent = "AUDIO: STANDBY";
    els.timer.classList.remove("panic");
    els.buzzword.textContent = pick(BUZZWORDS);
    updateTimerDisplay();
    updateKpis();
    drawChart();
    updateConfidenceMeter(randomInt(0, 100));
    if (els.confidenceMsg) {
      els.confidenceMsg.textContent = "Awaiting ocular nonsense…";
    }
    placeButton(window.innerWidth / 2, window.innerHeight * 0.78);
    showNextMeme();
  }

  function onPointerMove(e) {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    fleeFromPointer(x, y);
  }

  // Init
  spawnSparkles();
  updateTimerDisplay();
  updateKpis();
  drawChart();
  setBlinkLabel("I Blinked");
  applyButtonTransform();
  placeButton(window.innerWidth / 2, window.innerHeight * 0.78);
  showNextMeme();
  if (els.buzzword) {
    els.buzzword.style.transition = "opacity 0.22s ease";
  }

  function scheduleTimer() {
    setTimeout(() => {
      tickTimer();
      scheduleTimer();
    }, randomInt(450, 1600));
  }

  function scheduleMeme() {
    setTimeout(() => {
      if (!gameOver) showNextMeme();
      scheduleMeme();
    }, randomInt(4000, 9000));
  }

  function scheduleGlitch() {
    setTimeout(() => {
      if (!gameOver && !elimActive && Math.random() < 0.72) glitchBurst();
      scheduleGlitch();
    }, randomInt(900, 2800));
  }

  function scheduleBuzz() {
    setTimeout(() => {
      rotateBuzzword();
      scheduleBuzz();
    }, randomInt(2800, 5200));
  }

  function scheduleConfidence() {
    setTimeout(() => {
      tickConfidence();
      scheduleConfidence();
    }, randomInt(120, 420));
  }

  function scheduleButtonChaos() {
    setTimeout(() => {
      if (!gameOver) mutateButtonChaos();
      scheduleButtonChaos();
    }, randomInt(1600, 4800));
  }

  function scheduleElimination() {
    setTimeout(() => {
      if (!gameOver && Math.random() < 0.55) showElimination();
      scheduleElimination();
    }, randomInt(9000, 22000));
  }

  function scheduleFakeAi() {
    setTimeout(() => {
      if (!gameOver && Math.random() < 0.6) showFakeAiDetection();
      scheduleFakeAi();
    }, randomInt(12000, 28000));
  }

  scheduleTimer();
  scheduleMeme();
  scheduleGlitch();
  tickNonsenseKpis();
  setInterval(tickNonsenseKpis, 1000);
  scheduleBuzz();
  updateConfidenceMeter(confidence);
  scheduleConfidence();
  scheduleButtonChaos();
  scheduleElimination();
  scheduleFakeAi();

  els.surrenderBtn.addEventListener("mouseenter", (e) => {
    fleeFromPointer(e.clientX, e.clientY);
  });
  els.surrenderBtn.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (Math.random() < 0.92) {
      fleeFromPointer(e.clientX, e.clientY);
      if (Math.random() < 0.35) mutateButtonChaos();
      return;
    }
    endGame();
  });
  els.surrenderBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = els.surrenderBtn.getBoundingClientRect();
    fleeFromPointer(rect.left + rect.width / 2, rect.top + rect.height / 2);
  });

  document.addEventListener("mousemove", onPointerMove, { passive: true });
  document.addEventListener("touchmove", onPointerMove, { passive: true });
  document.addEventListener(
    "pointerdown",
    () => {
      ensureAudio();
    },
    { once: true }
  );

  els.restartBtn.addEventListener("click", restart);
  window.addEventListener("resize", () => {
    spawnSparkles();
    drawChart();
    const rect = els.surrenderBtn.getBoundingClientRect();
    placeButton(rect.left + rect.width / 2, rect.top + rect.height / 2);
  });
})();
