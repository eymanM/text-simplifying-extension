
var bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', 'selection_bubble');

bubbleDOM.style.visibility = 'hidden';
// Apply styles using JavaScript
bubbleDOM.style.padding = '20px';
bubbleDOM.style.backgroundColor = '#FCF5E5';
bubbleDOM.style.color = 'black';
bubbleDOM.style.borderRadius = '20px';
bubbleDOM.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
bubbleDOM.style.transition = 'transform 0.3s ease';
bubbleDOM.style.maxWidth = '700px';
bubbleDOM.style.textAlign = 'center';
bubbleDOM.style.border = '2px solid black';
bubbleDOM.style.position = 'absolute';
bubbleDOM.style.zIndex = '1000000000';
bubbleDOM.style.fontFamily = 'Arial, sans-serif';
bubbleDOM.style.fontSize = '19px';

let isDragging = false;
let initialX;
let initialY;

bubbleDOM.addEventListener('mousedown', function(e) {
  isDragging = true;
  initialX = e.clientX - bubbleDOM.getBoundingClientRect().left;
  initialY = e.clientY - bubbleDOM.getBoundingClientRect().top;
});

document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    const newX = e.clientX - initialX;
    const newY = e.clientY - initialY;
    bubbleDOM.style.left = newX + 'px';
    bubbleDOM.style.top = newY + 'px';
  }
});

document.body.appendChild(bubbleDOM);

// Add hover effect
bubbleDOM.addEventListener('mouseenter', function() {
    bubbleDOM.style.transform = 'scale(1.05)';
});

bubbleDOM.addEventListener('mouseleave', function() {
    bubbleDOM.style.transform = 'scale(1)';
});


document.addEventListener('mouseup', (e) => {
  isDragging = false;

  const selectedText = window.getSelection().toString();
  if (selectedText.length > 0 && e.target != bubbleDOM) {
    const selectionRange = window.getSelection().getRangeAt(0);
    const boundingRect = selectionRange.getBoundingClientRect();

    // Calculate the position of the selected text relative to the viewport
    const xPos = boundingRect.left + window.pageXOffset;
    const yPos = boundingRect.top + window.pageYOffset;
    renderBubble(xPos, yPos, selectedText);
  }
}, false);


document.addEventListener('mousedown', function (e) {
  // If the click is outside the bubble, hide it
  if (bubbleDOM.style.visibility == 'visible' && e.target != bubbleDOM) {
    bubbleDOM.style.visibility = 'hidden';
  }
}, false);

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log(msg)
    console.log(sender)
    console.log(sendResponse    )
    console.log(localStorage.getItem('summarize'))

})

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
        "role": "system",
        "content": `Act as a system do rewriting text. Your only task is to rephrase and format the following text in a way that is easy to understand for dyslexic people and make the text shorter without changing the context. Use active voice when rephrasing the word and it would be the best to use 60-80 characters per sentence. Avoid abbreviations where possible. Return only text. Bold the words that are important or meaning to the text.`
      },
      {
          "role": "user",
          "content": `Jamie Kalven (born 1948) is an American journalist, author, human rights activist, and community organizer based in Chicago, Illinois. He is the founder of the Invisible Institute, a non-profit journalism organization based in Chicago's South Side. His work in the city has included reporting on police misconduct and poor conditions of public housing. Kalven has been referred to as a "guerrilla journalist" by Chicago journalist Studs Terkel.[1]`
      },
      {
          "role": "assistant",
          "content": `**Jamie Kalven** (born 1948) is an **American** **journalist**, **author**, **human rights activist**, and **community organizer** based in **Chicago, Illinois**. He is the founder of the **Invisible Institute**, a non-profit **journalism organization** based in Chicago's **South Side**. His work in the city has included reporting on **police misconduct** and poor conditions of **public housing**. Kalven has been referred to as a "**guerrilla journalist**" by Chicago journalist **Studs Terkel**.`
      },
      {
        "role": "user",
        "content": selection
      }
    ],
    "temperature": 0.6,
    "max_tokens": 9000,
    "top_p": 1,
    "stop": null,
    "stream": false
}

  fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer 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`
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
    .then(data => {
      let text = data.choices[0].message.content;
      console.log(text);
      // replace **some word** with <strong>some word</strong>
      text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // replace new lines with <br>
      text = text.replace(/\n/g, '<br>');
      bubbleDOM.innerHTML = text;
      bubbleDOM.style.top = mouseY + 'px';
      bubbleDOM.style.left = mouseX + 'px';
      bubbleDOM.style.visibility = 'visible';
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


