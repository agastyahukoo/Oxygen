
// Add this to the top of your script.js
window.onload = function() {
    document.querySelector('.close-button').onclick = function() {
        document.getElementById('login-modal').style.display = 'none';
    };
    document.getElementById('login-modal').style.display = 'block';
};

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Mock credentials (Replace with your own logic)
    if (username === "user" && password === "pass") {
        document.getElementById('login-modal').style.display = 'none';
    } else {
        alert("Incorrect username or password!");
    }
}

// script.js
const responses = {
    "hello": "Hello, I am AI",
    "how are you": "I'm good, thank you for asking!",
    "bye": "Goodbye! Have a great day!",
    "What is your name": "My name is Oxygen, I am a basic prototype Chatbot with scheduled LLM implementation coming soon.",
    // Add more intents and responses here
};

function getResponse() {
    var input = document.getElementById("user-input").value.trim().toLowerCase();
    if (!input) return; // Ignore empty input

    var chatBox = document.getElementById("chat-box");

    // User's message
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

function handleKeyPress(event) {
    if (event.key === "Enter") {
        getResponse();
    }
}

