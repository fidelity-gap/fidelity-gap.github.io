// Shared loading and motion policy for all video components.
(() => {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = motion.matches || navigator.connection?.saveData === true;
  const apply = () => {
    document.querySelectorAll('[data-motion-toggle]').forEach(button => {
      button.textContent = paused ? 'Play page videos' : 'Pause page videos';
      button.setAttribute('aria-pressed', String(paused));
    });
    document.dispatchEvent(new Event('site:motion'));
  };
  const hydrate = video => {
    if (video.dataset.poster) { video.poster = video.dataset.poster; delete video.dataset.poster; }
    if (video.dataset.src) { video.src = video.dataset.src; delete video.dataset.src; video.load(); }
  };
  const ready = (video, signal) => new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(new DOMException('Cancelled', 'AbortError'));
    if (video.readyState >= 2) return resolve();
    let timer;
    const finish = error => {
      clearTimeout(timer);
      ['loadeddata', 'canplay', 'seeked'].forEach(event => video.removeEventListener(event, loaded));
      video.removeEventListener('error', failed);
      signal?.removeEventListener('abort', aborted);
      error ? reject(error) : resolve();
    };
    const loaded = () => { if (video.readyState >= 2) finish(); };
    const failed = () => finish(new Error('Video could not load'));
    const aborted = () => finish(new DOMException('Cancelled', 'AbortError'));
    ['loadeddata', 'canplay', 'seeked'].forEach(event => video.addEventListener(event, loaded));
    video.addEventListener('error', failed);
    signal?.addEventListener('abort', aborted, { once: true });
    timer = setTimeout(() => finish(new Error('Video loading timed out')), 20000);
    video.preload = 'auto';
    const missing = Boolean(video.dataset.src);
    hydrate(video);
    if (!missing && (video.networkState === 0 || video.error)) video.load();
    loaded();
  });
  // Safari discards the decoded frame of paused videos (off screen, in a
  // background tab, or when other videos claim the decoders) and paints black.
  // While a video is paused, show a still image of its current frame on top of
  // it; an <img> is never blanked. The still hides once playback presents a frame.
  const scratch = document.createElement('canvas');
  const stills = new WeakMap();
  const place = (video, still) => {
    if (still.parentElement !== video.parentElement || still.previousElementSibling !== video) video.after(still);
    const style = getComputedStyle(video);
    Object.assign(still.style, {
      left: `${video.offsetLeft}px`, top: `${video.offsetTop}px`,
      width: `${video.offsetWidth}px`, height: `${video.offsetHeight}px`,
      objectFit: style.objectFit, borderRadius: style.borderRadius, mixBlendMode: style.mixBlendMode,
    });
    // The video itself is transparent while its still shows; keep its own opacity.
    if (!video._stillShown) still.style.opacity = style.opacity;
  };
  const hideStill = video => {
    const still = stills.get(video);
    if (!still || still.hidden) return;
    still.hidden = true; video._stillShown = false;
    video.style.removeProperty('opacity');
  };
  const showStill = (video, still) => {
    if (!video.paused || video.seeking || video.controls || !still.dataset.ready) return;
    place(video, still);
    still.hidden = false; video._stillShown = true;
    // Opacity rather than visibility, so the video still receives clicks.
    video.style.opacity = '0';
  };
  const capture = video => {
    if (!video.paused || video.seeking || video.readyState < 2 || !video.videoWidth) return;
    const scale = Math.min(1, (video.offsetWidth || video.videoWidth) * Math.min(devicePixelRatio || 1, 2) / video.videoWidth);
    scratch.width = Math.max(1, Math.round(video.videoWidth * scale));
    scratch.height = Math.max(1, Math.round(video.videoHeight * scale));
    try { scratch.getContext('2d').drawImage(video, 0, 0, scratch.width, scratch.height); } catch { return; }
    const token = (video._stillToken || 0) + 1; video._stillToken = token;
    scratch.toBlob(blob => {
      if (!blob || token !== video._stillToken || !video.paused) return;
      let still = stills.get(video);
      if (!still) {
        still = document.createElement('img');
        still.className = 'video-still'; still.alt = ''; still.hidden = true;
        still.setAttribute('aria-hidden', 'true');
        stills.set(video, still);
      }
      const previous = still.src;
      still.onload = () => {
        if (previous) URL.revokeObjectURL(previous);
        if (token !== video._stillToken) return;
        still.dataset.ready = 'true';
        showStill(video, still);
      };
      still.src = URL.createObjectURL(blob);
    }, 'image/jpeg', .92);
  };
  const holdFrames = video => {
    ['pause', 'seeked', 'loadeddata', 'ended'].forEach(type => video.addEventListener(type, () => capture(video)));
    video.addEventListener('emptied', () => {
      video._stillToken = (video._stillToken || 0) + 1;
      const still = stills.get(video);
      if (still) delete still.dataset.ready;
      hideStill(video);
    });
    video.addEventListener('seeking', () => { video._stillToken = (video._stillToken || 0) + 1; });
    video.addEventListener('playing', () => {
      video._stillToken = (video._stillToken || 0) + 1;
      // Keep the still until playback has actually painted a new frame.
      if ('requestVideoFrameCallback' in video) video.requestVideoFrameCallback(() => hideStill(video));
      else setTimeout(() => hideStill(video), 100);
    });
    if ('ResizeObserver' in window) new ResizeObserver(() => {
      const still = stills.get(video);
      if (still && !still.hidden) place(video, still);
    }).observe(video.parentElement || video);
  };
  document.addEventListener('fullscreenchange', () => document.querySelectorAll('video').forEach(video => {
    const still = stills.get(video);
    if (still && !still.hidden) place(video, still);
  }));
  // If Safari released the media entirely, reload it at the same position.
  const decoded = new WeakSet();
  document.addEventListener('loadeddata', event => decoded.add(event.target), true);
  const repaint = video => {
    if (!decoded.has(video) || !video.paused || video.seeking || video.dataset.src) return;
    if (!video.error && video.readyState >= 2) return;
    const time = video.currentTime;
    const restore = () => { if (Number.isFinite(video.duration)) video.currentTime = Math.min(time, Math.max(0, video.duration - .08)); };
    video.addEventListener('loadedmetadata', restore, { once: true });
    video.preload = 'auto'; video.load();
  };
  window.SiteMedia = { motion, hydrate, ready, repaint, autoAllowed: () => !paused && !document.hidden };
  document.addEventListener('click', event => {
    if (!event.target.closest('[data-motion-toggle]')) return;
    paused = !paused; apply();
  });
  motion.addEventListener('change', event => { paused = event.matches; apply(); });
  document.addEventListener('DOMContentLoaded', () => {
    apply();
    const videos = [...document.querySelectorAll('video')];
    // Sequence sources are drawn into a canvas and never shown themselves.
    videos.filter(video => !video.closest('[data-sequence]')).forEach(holdFrames);
    const shown = new Set();
    const repaintShown = () => shown.forEach(repaint);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) repaintShown(); });
    window.addEventListener('pageshow', repaintShown);
    if ('IntersectionObserver' in window) {
      const watcher = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { shown.add(entry.target); repaint(entry.target); }
        else shown.delete(entry.target);
      }), { threshold: 0 });
      videos.forEach(video => watcher.observe(video));
    }
    const posters = [...document.querySelectorAll('video[data-poster]')];
    if (!('IntersectionObserver' in window)) return posters.forEach(hydrate);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const video = entry.target;
        if (video.dataset.poster) { video.poster = video.dataset.poster; delete video.dataset.poster; }
        observer.unobserve(video);
      });
    }, { rootMargin: '250px' });
    posters.forEach(video => observer.observe(video));
  });
})();
