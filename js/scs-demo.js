// SCS illustration: GT and predicted masks for one evaluation clip (idx112),
// their overlay, and the per-frame IoU that SCS averages over future frames 1-16.
(() => {
  const root = document.getElementById('scs-demo');
  if (!root) return;

  const FPS = 10, FRAMES = 17, SIZE = 512, PLAY_FPS = 3, KEY_FRAMES = [1, 4, 8, 12, 16];
  const COLORS = { ov: [202, 229, 219], gt: [220, 90, 127], pr: [112, 98, 187] };
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const src = (budget, kind) => `videos/scs/idx112_${budget}${kind ? `_${kind}_mask` : ''}.mp4`;

  const canvases = {
    gt: root.querySelector('[data-scs-canvas="gt"]'),
    pr: root.querySelector('[data-scs-canvas="pr"]'),
    ov: root.querySelector('[data-scs-canvas="ov"]'),
  };
  const ctx = Object.fromEntries(Object.entries(canvases).map(([k, c]) => {
    c.width = c.height = SIZE;
    return [k, c.getContext('2d')];
  }));
  const status = root.querySelector('.scs-status');
  const bars = root.querySelector('.scs-bars');
  const frameLabel = root.querySelector('[data-scs-frame]');
  const frameIou = root.querySelector('[data-scs-frame-iou]');
  const scoreOut = root.querySelector('[data-scs-score]');
  const playButton = root.querySelector('.scs-play');
  const strip = root.querySelector('.scs-strip');

  const state = { element: 'object', budget: '300h', frame: 1, playing: false, wanted: !motion.matches, timer: 0 };
  const cache = new Map();

  // Decode every frame of a 10 fps clip by seeking to the middle of each frame.
  function decode(url, asMask) {
    if (cache.has(url)) return cache.get(url);
    // Clips are small; fetching them whole keeps frame-accurate seeking independent of server range support.
    const job = fetch(url).then(r => {
      if (!r.ok) throw new Error(`Could not load ${url}`);
      return r.blob();
    }).then(blob => new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.muted = true; video.playsInline = true; video.preload = 'auto'; video.src = URL.createObjectURL(blob);
      const scratch = document.createElement('canvas');
      scratch.width = scratch.height = SIZE;
      const g = scratch.getContext('2d', { willReadFrequently: true });
      const frames = [];
      const grab = () => {
        g.drawImage(video, 0, 0, SIZE, SIZE);
        const data = g.getImageData(0, 0, SIZE, SIZE).data;
        if (asMask) {
          const mask = new Uint8Array(SIZE * SIZE);
          for (let i = 0; i < mask.length; i++) mask[i] = data[i * 4] >= 128 ? 1 : 0;
          frames.push(mask);
        } else {
          frames.push(new ImageData(new Uint8ClampedArray(data), SIZE, SIZE));
        }
        if (frames.length === FRAMES) { URL.revokeObjectURL(video.src); resolve(frames); }
        else video.currentTime = (frames.length + .5) / FPS;
      };
      video.addEventListener('seeked', grab);
      video.addEventListener('loadeddata', () => { video.currentTime = .5 / FPS; }, { once: true });
      video.addEventListener('error', () => reject(new Error(`Could not load ${url}`)), { once: true });
    }));
    cache.set(url, job);
    return job;
  }

  function iou(a, b) {
    let inter = 0, union = 0;
    for (let i = 0; i < a.length; i++) { inter += a[i] & b[i]; union += a[i] | b[i]; }
    return union ? inter / union : 1;
  }

  let current = null;

  async function load() {
    const { element, budget } = state;
    status.hidden = false; status.textContent = 'Loading clip…';
    try {
      const [gtRgb, prRgb, gtMask, prMask] = await Promise.all([
        decode(src('gt'), false), decode(src(budget), false),
        decode(src('gt', element), true), decode(src(budget, element), true),
      ]);
      if (element !== state.element || budget !== state.budget) return;
      const ious = gtMask.map((m, i) => iou(m, prMask[i]));
      const future = ious.slice(1);
      current = { gtRgb, prRgb, gtMask, prMask, ious, scs: future.reduce((s, v) => s + v, 0) / future.length };
      status.hidden = true;
      renderBars(); renderStrip(); draw();
    } catch (err) {
      status.textContent = 'The clip could not be loaded.';
    }
  }

  function tint(target, rgb, mask, color) {
    const out = new ImageData(new Uint8ClampedArray(rgb.data), SIZE, SIZE);
    const d = out.data;
    for (let i = 0; i < mask.length; i++) {
      if (!mask[i]) continue;
      const p = i * 4;
      d[p] = d[p] * .45 + color[0] * .55; d[p + 1] = d[p + 1] * .45 + color[1] * .55; d[p + 2] = d[p + 2] * .45 + color[2] * .55;
    }
    target.putImageData(out, 0, 0);
  }

  function overlay(target, a, b) {
    const out = target.createImageData(SIZE, SIZE), d = out.data;
    for (let i = 0; i < a.length; i++) {
      const p = i * 4, c = a[i] && b[i] ? COLORS.ov : a[i] ? COLORS.gt : b[i] ? COLORS.pr : null;
      if (c) { d[p] = c[0]; d[p + 1] = c[1]; d[p + 2] = c[2]; } else { d[p] = 23; d[p + 1] = 29; d[p + 2] = 28; }
      d[p + 3] = 255;
    }
    target.putImageData(out, 0, 0);
  }

  function draw() {
    if (!current) return;
    const f = state.frame;
    tint(ctx.gt, current.gtRgb[f], current.gtMask[f], COLORS.gt);
    tint(ctx.pr, current.prRgb[f], current.prMask[f], COLORS.pr);
    overlay(ctx.ov, current.gtMask[f], current.prMask[f]);
    frameLabel.textContent = f === 0 ? 'Frame 0 · observed' : `Frame ${f} / 16`;
    frameIou.textContent = f === 0 ? 'not scored' : current.ious[f].toFixed(2);
    scoreOut.textContent = current.scs.toFixed(3);
    bars.querySelectorAll('.scs-bar').forEach(bar => bar.classList.toggle('active', +bar.dataset.frame === f));
    strip.querySelectorAll('button').forEach(b => b.classList.toggle('active', +b.dataset.frame === f));
  }

  // Per-frame IoU bars for frames 1-16; the dashed line is their mean, i.e. the clip's SCS.
  function renderBars() {
    const W = 640, H = 120, pad = { l: 30, r: 8, t: 10, b: 22 };
    const step = (W - pad.l - pad.r) / 16, y = v => pad.t + (1 - v) * (H - pad.t - pad.b);
    let html = '';
    [0, .5, 1].forEach(v => {
      html += `<line class="scs-grid" x1="${pad.l}" x2="${W - pad.r}" y1="${y(v)}" y2="${y(v)}"/><text class="scs-tick" x="${pad.l - 6}" y="${y(v) + 3}" text-anchor="end">${v.toFixed(1)}</text>`;
    });
    for (let f = 1; f <= 16; f++) {
      const x = pad.l + (f - 1) * step, v = current.ious[f];
      html += `<g class="scs-bar" data-frame="${f}"><rect class="scs-hit" x="${x}" y="${pad.t}" width="${step}" height="${H - pad.t - pad.b}"/><rect class="scs-fill" x="${x + step * .18}" y="${y(v)}" width="${step * .64}" height="${y(0) - y(v)}" rx="1.5"/>${f % 4 === 0 || f === 1 ? `<text class="scs-tick" x="${x + step / 2}" y="${H - 6}" text-anchor="middle">${f}</text>` : ''}</g>`;
    }
    html += `<line class="scs-mean" x1="${pad.l}" x2="${W - pad.r}" y1="${y(current.scs)}" y2="${y(current.scs)}"/>`;
    bars.setAttribute('viewBox', `0 0 ${W} ${H}`);
    bars.innerHTML = html;
    bars.querySelectorAll('.scs-bar').forEach(bar => {
      const pick = () => { state.frame = +bar.dataset.frame; state.wanted = false; setPlaying(false); draw(); };
      bar.addEventListener('click', pick);
      bar.addEventListener('mouseenter', () => { if (!state.playing) pick(); });
    });
  }

  // Key frames side by side, so the change across the horizon is visible without playback.
  const thumbSource = document.createElement('canvas');
  thumbSource.width = thumbSource.height = SIZE;
  const thumbCtx = thumbSource.getContext('2d');
  function renderStrip() {
    strip.innerHTML = '';
    KEY_FRAMES.forEach(f => {
      const button = document.createElement('button');
      button.type = 'button'; button.dataset.frame = f;
      button.setAttribute('aria-label', `Frame ${f}, IoU ${current.ious[f].toFixed(2)}`);
      const thumb = document.createElement('canvas');
      thumb.width = thumb.height = 160;
      overlay(thumbCtx, current.gtMask[f], current.prMask[f]);
      thumb.getContext('2d').drawImage(thumbSource, 0, 0, 160, 160);
      button.append(thumb);
      button.insertAdjacentHTML('beforeend', `<span class="mono">Frame ${f}</span><b>${current.ious[f].toFixed(2)}</b>`);
      button.addEventListener('click', () => { state.frame = f; state.wanted = false; setPlaying(false); draw(); });
      strip.append(button);
    });
  }

  function tick() {
    state.frame = (state.frame + 1) % FRAMES;
    draw();
  }

  function setPlaying(on) {
    state.playing = on;
    clearInterval(state.timer);
    if (on) state.timer = setInterval(tick, 1000 / PLAY_FPS);
    playButton.setAttribute('aria-pressed', String(on));
    playButton.setAttribute('aria-label', on ? 'Pause' : 'Play');
    playButton.classList.toggle('paused', !on);
  }

  function bindGroup(name) {
    root.querySelectorAll(`[data-scs-${name}]`).forEach(button => {
      button.addEventListener('click', () => {
        state[name] = button.dataset[`scs${name[0].toUpperCase()}${name.slice(1)}`];
        root.querySelectorAll(`[data-scs-${name}]`).forEach(b => {
          b.classList.toggle('active', b === button);
          b.setAttribute('aria-pressed', String(b === button));
        });
        load();
      });
    });
  }
  bindGroup('element');
  bindGroup('budget');
  playButton.addEventListener('click', () => { state.wanted = !state.playing; setPlaying(state.wanted); });

  // Start decoding only when the figure scrolls near view; pause while it is off-screen.
  let started = false;
  const start = () => { if (started) return; started = true; load(); };
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { start(); setPlaying(state.wanted); }
      else setPlaying(false);
    }), { rootMargin: '200px 0px' }).observe(root);
  } else {
    start(); setPlaying(state.wanted);
  }
})();
