// script.js
function getResponse() {
    var input = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");

    // User's message
    chatBox.innerHTML += "<div class='user'>You: " + input + "</div>";

    // Bot's response
    var botResponse = input.toLowerCase() === "hello" ? "Hello, I am AI" : "I don't understand that.";
    chatBox.innerHTML += "<div class='bot'>Bot: " + botResponse + "</div>";

    // Scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input field
    document.getElementById("user-input").value = "";
}
