// script.js
function getResponse() {
    var input = document.getElementById("user-input").value;
    if (!input.trim()) return; // Ignore empty input

    var chatBox = document.getElementById("chat-box");

    // User's message
    chatBox.innerHTML += "<div class='user'>You: " + input + "</div>";

    // Clear input field
    document.getElementById("user-input").value = "";

    // Show typing indicator
    chatBox.innerHTML += "<div class='bot typing-indicator-container'><span class='typing-indicator'></span><span class='typing-indicator'></span><span class='typing-indicator'></span></div>";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate delay for bot's response
    setTimeout(function() {
        // Remove typing indicator
        document.querySelector('.typing-indicator-container').remove();

        // Bot's response
        var botResponse = input.toLowerCase() === "hello" ? "Hello, I am AI" : "I don't understand that.";
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
