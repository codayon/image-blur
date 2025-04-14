// Manage UI state and toggle storage
const toggle = document.getElementById('toggleBlur');

chrome.storage.local.get('blurEnabled', (data) => {
  toggle.checked = data.blurEnabled !== false; // default true
});

toggle.addEventListener('change', () => {
  const value = toggle.checked;
  chrome.storage.local.set({ blurEnabled: value });
  // Reload the tab to apply the setting immediately
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ['content.js'],
    });
  });
});
