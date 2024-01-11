// Object containing predefined responses
const responses = {
    "hello": "Hello, I am AI",
    "how are you": "I'm good, thank you for asking!",
    "bye": "Goodbye! Have a great day!",
    "what is your name": "My name is Oxygen, I am a basic prototype Chatbot with scheduled LLM implementation coming soon.",
    // Add more intents and responses here
};

window.onload = function() {
    var loginModal = document.getElementById('login-modal');
    var closeButton = document.querySelector('.close-button');

    // Show login modal
    loginModal.style.display = 'block';

    // Close button in login modal
    closeButton.onclick = function() {
        loginModal.style.display = 'none';
    };

    // Click outside modal to close
    window.onclick = function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    };
};

// Login function
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example credentials (replace with your authentication logic)
    if (username === "user" && password === "pass") {
        document.getElementById('login-modal').style.display = 'none';
        enableChat();
    } else {
        alert("Incorrect username or password!");
    }
}

// Enable chat function
function enableChat() {
    var userInput = document.getElementById('user-input');
    var sendButton = document.querySelector('#input-area button');

    userInput.disabled = false;
    sendButton.disabled = false;
}

// Function to handle user's input
function getResponse() {
    var input = document.getElementById('user-input').value.trim().toLowerCase();
    if (!input) return; // Ignore empty input

    var chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += "<div class='user'>You: " + input + "</div>";

    // Show typing indicator
    chatBox.innerHTML += "<div class='bot typing-indicator-container'><span class='typing-indicator'></span><span class='typing-indicator'></span><span class='typing-indicator'></span></div>";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate delay for bot's response
    setTimeout(function() {
        // Remove typing indicator
        document.querySelector('.typing-indicator-container').remove();

        // Bot's response
        var botResponse = responses[input] || "I don't understand that.";
        chatBox.innerHTML += "<div class='bot'>Bot: " + botResponse + "</div>";

        // Scroll to the latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 2000); // Adjust delay as needed
}

// Handle Enter key press for sending messages
function handleKeyPress(event) {
    if (event.key === "Enter") {
        getResponse();
    }
}

