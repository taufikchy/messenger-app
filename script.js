const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const messagesDiv = document.getElementById('messages');

// Function to create message bubble
function createMessageElement(text, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.innerText = text;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto scroll to bottom
}

// Load messages from Firebase
db.ref('messages').on('child_added', (snapshot) => {
    const messageData = snapshot.val();
    const type = messageData.sender === 'self' ? 'sent' : 'received';
    createMessageElement(messageData.text, type);
});

// Send message
sendButton.addEventListener('click', () => {
    const text = messageInput.value;
    if (text.trim() !== "") {
        // Save message to Firebase
        db.ref('messages').push({
            text: text,
            sender: 'self',  // You can modify this to differentiate users
            timestamp: Date.now()
        });
        messageInput.value = ''; // Clear input
    }
});

// Optionally, send message on pressing Enter
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});
