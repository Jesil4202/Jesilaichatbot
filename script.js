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
    const apiKey = " https://api.openai.com/v1/chat/completions"; // Replace with your actual API key

    const endpoint = "https://api.openai.com/v1/chat/completions";

    const payload = {
        model: "gpt-3.5-turbo", // Model to use (can be updated to a newer model if available)
        messages: [{ role: "user", content: userMessage }],
        max_tokens: 100, // Limit the response length
    };

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            const data = await response.json();
            return data.choices[0].message.content.trim(); // Return the AI's response
        } else {
            console.error("API Error:", response.status, response.statusText);
            return "Sorry, I couldn't process your request.";
        }
    } catch (error) {
        console.error("Network Error:", error);
        return "There was a problem connecting to the AI.";
    }
}
    
    // Simulate AI processing time
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(simulatedResponses[Math.floor(Math.random() * simulatedResponses.length)]);
        }, 1000);
    });
}
