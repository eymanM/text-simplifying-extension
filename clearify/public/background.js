// const popoverHTML = `
// <div id="myExtensionPopover" style="position:absolute; padding:10px; background:white; border:1px solid black; display:none;">
//   Popover Content
// </div>
// `;

// document.addEventListener('mouseup', function(e) {
//   const selectedText = window.getSelection().toString().trim();
//   if (selectedText.length > 0) {
//     // Optional: Adjust popover positioning here based on `e.pageX` and `e.pageY`
//     popover.style.left = `${e.pageX}px`;
//     popover.style.top = `${e.pageY}px`;
//     popover.style.display = 'block';
    
//     // Optional: Customize popover content based on selected text
//     popover.innerHTML = `You selected: ${selectedText}`;
//   }
// });

// // Hide the popover when clicking on it
// popover.addEventListener('click', function() {
//   this.style.display = 'none';
// });

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});


// Listening for a message
chrome.runtime.onMessage.addListener((message, sender, sendCallback) => {
  console.log(message);
  // insert the selected text into the page
  // const selection = window.getSelection();
  // const range = selection.getRangeAt(0);
  // const selectedText = range.extractContents();
  const span = document.createElement('span');
  span.appendChild(message.selectedText);
  span.style.backgroundColor = 'yellow';
});