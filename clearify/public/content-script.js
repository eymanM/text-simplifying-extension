document.addEventListener('mouseup', () => {
  const selectedText = window.getSelection().toString();
  console.log('dddd')
  if (selectedText.length > 0) {
    // Send selected text to service worker
    chrome.runtime.sendMessage({ selectedText: selectedText });
  // const span = document.createElement('span');
  // span.appendChild(selectedText);
  // span.style.backgroundColor = 'yellow';
  }
});