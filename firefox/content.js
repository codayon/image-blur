(async function () {
  const storage = await browser.storage.local.get('blurEnabled');
  const isBlurEnabled = storage.blurEnabled !== false; // default true

  const style = document.createElement('style');
  style.textContent = `
      img {
        transition: filter 0.3s ease-in-out;
        filter: ${isBlurEnabled ? 'blur(20px)' : 'none'};
        clip-path: inset(0 round 0);
      }
      img:hover {
        filter: none !important;
      }
    `;
  document.head.appendChild(style);

  const images = document.querySelectorAll('img');
  browser.runtime.sendMessage({ type: 'updateCount', count: images.length });
})();
