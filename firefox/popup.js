const toggle = document.getElementById('toggleBlur');

browser.storage.local.get('blurEnabled').then((data) => {
  toggle.checked = data.blurEnabled !== false; // default true
});

toggle.addEventListener('change', () => {
  const value = toggle.checked;
  browser.storage.local.set({ blurEnabled: value });

  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    browser.tabs.executeScript(tabs[0].id, { file: 'content.js' });
  });
});
