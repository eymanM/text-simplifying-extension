var bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', 'selection_bubble');
document.body.appendChild(bubbleDOM);

document.addEventListener('mouseup', (e) => {
  const selectedText = window.getSelection().toString();
  console.log('dddd')
  if (selectedText.length > 0) {
    // Send selected text to service worker
    chrome.runtime.sendMessage({ selectedText: selectedText });
    console.log(selectedText)
    renderBubble(e.clientX, e.clientY, selectedText);
  // const span = document.createElement('span');
  // span.appendChild(selectedText);
  // span.style.backgroundColor = 'yellow';
  }
}, false);


document.addEventListener('mousedown', function (e) {
  bubbleDOM.style.visibility = 'hidden';
}, false);

// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection) {
  bubbleDOM.innerHTML = selection;
  bubbleDOM.style.top = mouseY + 'px';
  bubbleDOM.style.left = mouseX + 'px';
  bubbleDOM.style.visibility = 'visible';
}