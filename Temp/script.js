// script.js

// Object containing predefined responses
const responses = {
    "hello": "Hello, I am AI",
    "how are you": "I'm good, thank you for asking!",
    "bye": "Goodbye! Have a great day!",
    // Add more intents and responses here
};

let dontUnderstandCount = 0; // Counter for "I don't understand that." responses

// Load the login modal on page load
window.onload = function() {
    document.getElementById('login-modal').style.display = 'block';
    document.getElementById('chat-input').disabled = true;
    document.getElementById('send-button').disabled = true;
};

// Function to simulate user login
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Mock user authentication
    if (username === "user" && password === "pass") {
        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('chat-input').disabled = false;
        document.getElementById('send-button').disabled = false;
    } else {
        alert("Incorrect username or password!");
    }
}

// Function to handle sending messages
function sendMessage() {
    var input = document.getElementById('chat-input').value.trim().toLowerCase();
    var chatBody = document.getElementById('chat-body');
    
    if (!input) return; // Ignore empty input

    // User's message
    chatBody.innerHTML += "<div class='user-message'>You: " + input + "</div>";

    // Simulate bot typing
    var typingIndicator = "<div class='typing-indicator'><div></div><div></div><div></div></div>";
    chatBody.innerHTML += typingIndicator;
    document.getElementById('chat-input').value = ''; // Clear input field

    // Simulate delay for bot's response
    setTimeout(function() {
        chatBody.lastElementChild.remove(); // Remove typing indicator

        // Bot's response logic
        var botResponse = getBotResponse(input);
        chatBody.innerHTML += "<div class='bot-message'>Bot: " + botResponse + "</div>";
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
    }, 1500);
}

// Function to get the bot's response
function getBotResponse(input) {
    if (responses[input]) {
        dontUnderstandCount = 0; // Reset count on valid response
        return responses[input];
    } else {
        dontUnderstandCount++;
        if (dontUnderstandCount >= 3) {
            dontUnderstandCount = 0; // Reset count after unique response
            return "Sorry, but I don't know.";
        } else {
            return "I don't understand that.";
        }
    }
}

// Event listener for the send button
document.getElementById('send-button').addEventListener('click', sendMessage);

// Event listener for enter key in the chat input
document.getElementById('chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
