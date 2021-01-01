(function () {
  'use strict';

  const layers = Array.from(document.querySelectorAll('.p-layer[data-speed]'));
  if (!layers.length) return;

  const speeds = layers.map(function (el) {
    return parseFloat(el.dataset.speed);
  });

  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateLayers(scrollY) {
    for (let i = 0; i < layers.length; i++) {
      layers[i].style.transform = 'translateY(' + (-(scrollY * speeds[i] / 100)) + 'px)';
    }
  }

  window.addEventListener('scroll', function () {
    lastScrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(function () {
        updateLayers(lastScrollY);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  updateLayers(lastScrollY);
}());
