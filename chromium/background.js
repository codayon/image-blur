// Updates the badge count based on blurred images
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type === 'updateCount') {
    chrome.action.setBadgeText({
      text: message.count.toString(),
      tabId: sender.tab.id,
    });
    chrome.action.setBadgeBackgroundColor({
      color: '#4A90E2',
      tabId: sender.tab.id,
    });
  }
});
