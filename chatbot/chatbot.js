// Get the chat bot icon and chat popup
const chatbotIcon = document.getElementById('chatbot-icon');
const chatPopup = document.getElementById('chat-popup');

// Get the "Send" button and input field
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');

// Get the chat messages container
const chatMessages = document.getElementById('chat-messages');


// When chat bot icon is clicked, display the chat popup
chatbotIcon.addEventListener('click', function() {
  chatPopup.style.display = 'block';
});

// Get the close button for the chat popup
const closeBtn = document.getElementById('close-popup');

// When close button is clicked, hide the chat popup
closeBtn.addEventListener('click', function() {
chatPopup.style.display = 'none';
});


// Add event listener to the "Send" button
sendBtn.addEventListener('click', function() {
  // Get the text from the input field
  const message = userInput.value.trim(); // Trim any leading or trailing whitespace

  // Check if the message is not empty
  if (message !== '') {
    // Create a new paragraph element to display the message
    const messageElement = document.createElement('p');
    messageElement.textContent = message;

    // Append the message to the chat messages container
    chatMessages.appendChild(messageElement);

    // Clear the input field after sending the message
    userInput.value = '';
  }
});
