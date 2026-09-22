/* Native scrolling stays native. The edge blur is entirely CSS. */
(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.querySelectorAll('.gallery').forEach(gallery => {
    const track = gallery.querySelector(':scope > .gallery-track');
    if (!track) return;
    const controls = gallery.querySelector(':scope > .gallery-controls');
    const previous = controls.querySelector('[data-direction="-1"]');
    const next = controls.querySelector('[data-direction="1"]');
    const update = () => {
      const lastItemRight = track.lastElementChild.getBoundingClientRect().right;
      const viewportRight = track.getBoundingClientRect().left + track.clientLeft + track.clientWidth;
      previous.disabled = track.scrollLeft <= 1;
      // Scroll snapping can expose the final item before the raw scroll limit.
      next.disabled = lastItemRight <= viewportRight + 2 || track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
    };
    controls.addEventListener('click', event => {
      const button = event.target.closest('button');
      if (!button) return;
      track.scrollBy({
        left: Number(button.dataset.direction) * (track.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap)),
        behavior: reducedMotion.matches ? 'instant' : 'smooth'
      });
    });
    track.addEventListener('scroll', update, { passive: true });
    if ('ResizeObserver' in window) new ResizeObserver(update).observe(track);
    else window.addEventListener('resize', update);
    update();
  });

  const dialog = document.querySelector('.lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const enlarged = dialog.querySelector('img');
  const caption = dialog.querySelector('.lightbox-caption');
  let opener;
  const lightboxSource = link => {
    const still = link.querySelector('source[media="(prefers-reduced-motion: reduce)"]');
    return reducedMotion.matches && still ? still.srcset : link.href;
  };
  reducedMotion.addEventListener('change', () => {
    if (dialog.open && opener) enlarged.src = lightboxSource(opener);
  });

  document.addEventListener('click', event => {
    const link = event.target.closest('a[data-lightbox]');
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    opener = link;
    enlarged.src = lightboxSource(link);
    enlarged.alt = link.querySelector('img').alt;
    caption.textContent = link.closest('figure').querySelector('figcaption')?.textContent || '';
    dialog.showModal();
  });
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => opener?.focus({ preventScroll: true }));
})();
