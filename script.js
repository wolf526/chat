function sendMessage() {
    let username = document.getElementById('username').value;
    let message = document.getElementById('message').value;
    if (username.trim() === '' || message.trim() === '') return;
    
    let chatBox = document.getElementById('chat-box');
    let newMessage = document.createElement('div');
    newMessage.textContent = username + ': ' + message;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    
    document.getElementById('message').value = '';
}
