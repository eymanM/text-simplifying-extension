var bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', 'selection_bubble');
document.body.appendChild(bubbleDOM);


document.addEventListener('mouseup', (e) => {
  const selectedText = window.getSelection().toString();
  if (selectedText.length > 0) {
    // Send selected text to service worker
    //chrome.runtime.sendMessage({ selectedText: selectedText });
    console.log('content script')
    console.log(selectedText)
    renderBubble(e.clientX, e.clientY, selectedText);
  }
}, false);


document.addEventListener('mousedown', function (e) {
  bubbleDOM.style.visibility = 'hidden';
}, false);

// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection) {
  // const data = {
  //   model: "gpt-4-turbo-preview",
  //   messages: [{role: "user", content: `Simplify selected text for people with dislexia in a way that is easy to understand and: 
    
  //   ====
  //   ${selection}`}],
  //   temperature: 0.9
  // };

  const data = {
    "model": "mixtral-8x7b-32768",
    "messages": [
        {
            "role": "user",
            "content": `Rephrase the following text in a way that is easy to understand for dislexic people and return nice formatted HTML text.
            
            ====
            ${selection}`
        }
    ],
    "temperature": 0.5,
    "max_tokens": 14000,
    "top_p": 1,
    "stop": null,
    "stream": false
}

  fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer`
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
    .then(data => {
      console.log(data.choices[0].message.content);
      bubbleDOM.innerHTML = data.choices[0].message.content;
      bubbleDOM.style.top = mouseY + 'px';
      bubbleDOM.style.left = mouseX + 'px';
      bubbleDOM.style.visibility = 'visible';
      bubbleDOM.style.position = 'absolute';
      bubbleDOM.style.backgroundColor = 'yellow';
    })
    .catch(error => console.error('Error:', error));

  // fetch('https://api.openai.com/v1/chat/completions', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bear`
  //   },
  //   body: JSON.stringify(data)
  // }).then(response => response.json())
  //   .then(data => {
  //     bubbleDOM.innerHTML = data.choices[0].message.content;
  //     bubbleDOM.style.top = mouseY + 'px';
  //     bubbleDOM.style.left = mouseX + 'px';
  //     bubbleDOM.style.visibility = 'visible';
  //     bubbleDOM.style.position = 'absolute';
  //     bubbleDOM.style.backgroundColor = 'yellow';
  //   })
  //   .catch(error => console.error('Error:', error));
}


