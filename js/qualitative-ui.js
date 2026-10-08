// Assemble only reviewed examples before the shared playback controls bind.
// Source identities and measurements remain in qualitative-data.js.
(() => {
  const data = typeof QUALITATIVE_ADDITIONS !== 'undefined' ? QUALITATIVE_ADDITIONS : window.QUALITATIVE_ADDITIONS;
  if (!data) return;
  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text != null) element.textContent = text;
    return element;
  };
  const mediaPath = (value, type) => typeof value === 'string' && !value.includes('..') &&
    (type === 'video' ? /^videos\/[\w./-]+\.mp4$/ : /^img\/[\w./-]+\.(?:jpg|jpeg|png|webp)$/).test(value);
  const videoFor = (item, label) => {
    const video = make('video');
    video.dataset.src = item.src;
    video.dataset.poster = item.poster;
    video.muted = true;
    video.playsInline = true;
    video.preload = 'none';
    video.setAttribute('aria-label', label);
    return video;
  };
  const controls = () => {
    const toolbar = make('div', 'video-toolbar ladder-playback');
    toolbar.innerHTML = `<div class="comparison-playback"><div class="playback-cluster" role="group" aria-label="Training-scale comparison playback">
      <button class="playback-button" type="button" data-comparison-play data-playing="false" aria-label="Play ground truth and all three training scales together" title="Play ground truth and all three training scales together"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path class="playback-play-icon" d="M8 5v14l11-7z"/><path class="playback-pause-icon" d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg></button>
      <button class="playback-button" type="button" data-comparison-replay aria-label="Replay ground truth and all three training scales" title="Replay ground truth and all three training scales"><svg class="replay-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M20 10a8 8 0 1 0 0 5M20 4v6h-6"/></svg></button>
      <button class="playback-button" type="button" data-comparison-fullscreen aria-label="Full screen training-scale comparison" title="Full screen training-scale comparison"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M9 4H4v5m11-5h5v5M4 15v5h5m11-5v5h-5"/></svg></button>
      </div></div><input class="video-seek" type="range" data-comparison-seek min="0" max="1000" value="0" aria-label="Seek ground truth and all three training scales together">`;
    return toolbar;
  };
  const budgets = [300, 3000, 30000];
  const budgetNames = { 300: '300 h', 3000: '3k h', 30000: '30k h' };
  const ladder = (data.ladder || []).filter(item => item.reviewed === true && item.title && item.caption &&
    item.groundTruth && mediaPath(item.groundTruth.src, 'video') && mediaPath(item.groundTruth.poster, 'image') &&
    Array.isArray(item.panels) && item.panels.length === budgets.length && item.panels.every((panel, index) =>
      panel.hours === budgets[index] && mediaPath(panel.src, 'video') && mediaPath(panel.poster, 'image')));
  const ladderGallery = document.getElementById('ladder-gallery');
  const ladderTabs = document.getElementById('ladder-tabs');
  ladderTabs.dataset.tabs = '';
  ladderTabs.dataset.tabTargets = '#ladder-gallery > .ladder-comparison';
  ladder.forEach((item, index) => {
    const tab = make('button', `tab${index === 0 ? ' active' : ''}`, item.title);
    tab.type = 'button';
    tab.dataset.tab = item.id;
    tab.setAttribute('aria-controls', item.id);
    ladderTabs.appendChild(tab);
    const article = make('article', 'comparison-viewer ladder-comparison');
    article.id = item.id;
    article.dataset.key = item.id;
    article.hidden = index !== 0;
    article.dataset.comparison = '';
    article.dataset.loop = 'once';
    article.dataset.sample = item.id;
    const panels = make('div', 'comparison-panels');
    [item.groundTruth, ...item.panels].forEach((panel, panelIndex) => {
      const isGroundTruth = panelIndex === 0;
      const label = isGroundTruth ? 'GT' : budgetNames[panel.hours];
      const description = `${item.title}, ${isGroundTruth ? 'ground truth' : label + ' training'}`;
      const figure = make('figure');
      const caption = make('figcaption');
      caption.append(make('span', `comparison-dot ${isGroundTruth ? 'gt-dot' : 'scale-dot'}`), make('b', '', label));
      const frame = make('div', 'comparison-video-frame');
      const video = videoFor(panel, description);
      video.dataset.comparisonLabel = description;
      frame.appendChild(video);
      figure.append(caption, frame);
      panels.appendChild(figure);
    });
    panels.appendChild(controls());
    const status = make('p', 'media-status comparison-status');
    status.setAttribute('role', 'status');
    status.hidden = true;
    article.append(panels, status);
    ladderGallery.appendChild(article);
  });
  document.getElementById('ladder-comparisons').hidden = ladder.length === 0;
})();
