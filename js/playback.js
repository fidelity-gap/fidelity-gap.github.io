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
  // Safari discards the decoded frame of paused videos that sit off screen or in
  // a background tab, and paints black until something forces a new decode.
  // Re-seek (or reload, if the media was released) to the same position.
  const decoded = new WeakSet();
  document.addEventListener('loadeddata', event => decoded.add(event.target), true);
  const repaint = video => {
    if (!decoded.has(video) || !video.paused || video.seeking || video.dataset.src) return;
    const time = video.currentTime;
    if (video.error || video.readyState < 2) {
      const restore = () => { if (Number.isFinite(video.duration)) video.currentTime = Math.min(time, Math.max(0, video.duration - .08)); };
      video.addEventListener('loadedmetadata', restore, { once: true });
      video.preload = 'auto'; video.load();
    } else video.currentTime = time > .002 ? time - .001 : time + .001;
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
