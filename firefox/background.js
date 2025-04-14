// Updates badge count with blurred image count
browser.runtime.onMessage.addListener((message, sender) => {
  if (message.type === 'updateCount') {
    browser.browserAction.setBadgeText({
      text: message.count.toString(),
      tabId: sender.tab.id,
    });
    browser.browserAction.setBadgeBackgroundColor({
      color: '#4A90E2',
      tabId: sender.tab.id,
    });
  }
});
