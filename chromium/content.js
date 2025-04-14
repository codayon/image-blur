(async function () {
  const storage = await chrome.storage.local.get('blurEnabled');
  const isBlurEnabled = storage.blurEnabled !== false; // default true

  // Create a style tag to encapsulate styles
  const style = document.createElement('style');
  style.textContent = `
      img {
        transition: filter 0.3s ease-in-out;
        filter: ${isBlurEnabled ? 'blur(20px)' : 'none'};
        clip-path: inset(0 round 0); /* Keeps blur inside image box */
      }
      img:hover {
        filter: none !important;
      }
    `;
  document.head.appendChild(style);

  // Count and send image blur count to update badge
  const images = document.querySelectorAll('img');
  chrome.runtime.sendMessage({ type: 'updateCount', count: images.length });
})();
