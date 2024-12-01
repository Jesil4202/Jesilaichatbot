const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function appendMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(sender === "user" ? "user-msg" : "ai-msg");
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
}

async function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    // Display user message
    appendMessage(message, "user");

    // Clear input field
    userInput.value = "";

    // Get AI response (replace with API integration for real responses)
    const aiResponse = await getAiResponse(message);
    
    // Display AI response
    appendMessage(aiResponse, "ai");
}

async function getAiResponse(userMessage) {
    // Simulating an AI response (replace with actual AI API or backend)
    const simulatedResponses = [
        "Hello! How can I assist you today?",
        "I'm Jesilai, your virtual assistant!",
        "That sounds interesting! Tell me more.",
        "I'm not sure about that. Can you explain further?",
        "Let me think about that... Okay, I have an answer!"
    ];
    
    // Simulate AI processing time
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(simulatedResponses[Math.floor(Math.random() * simulatedResponses.length)]);
        }, 1000);
    });
}