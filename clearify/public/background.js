chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: 'Read out loud',
    id: 'contextMenu1',
    contexts: ['page', 'selection']
  })

  chrome.contextMenus.onClicked.addListener((event) => {
    if (event.menuItemId === 'contextMenu1') {
      chrome.tts.speak(event.selectionText)
    }
  })
  console.log('Extension installed');
});



