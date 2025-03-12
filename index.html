<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Actions Chat</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
        #chat-box { width: 300px; height: 400px; border: 1px solid #ccc; overflow-y: scroll; margin: 20px auto; padding: 10px; background: #f9f9f9; }
        input, button { padding: 8px; margin-top: 5px; }
        #name-section { display: block; }
        #chat-section { display: none; }
    </style>
</head>
<body>
    <h2>GitHub Actions Chat</h2>

    <!-- Phần nhập tên -->
    <div id="name-section">
        <input type="text" id="username" placeholder="Nhập tên của bạn...">
        <button onclick="setUsername()">Vào chat</button>
    </div>

    <!-- Khung chat -->
    <div id="chat-section">
        <div id="chat-box"></div>
        <input type="text" id="message" placeholder="Nhập tin nhắn...">
        <button onclick="sendMessage()">Gửi</button>
    </div>

    <script>
        let username = "";

        function setUsername() {
            let nameInput = document.getElementById("username").value.trim();
            if (nameInput) {
                username = nameInput;
                document.getElementById("name-section").style.display = "none";
                document.getElementById("chat-section").style.display = "block";
                loadChat();
            } else {
                alert("Vui lòng nhập tên!");
            }
        }

        async function loadChat() {
            let response = await fetch('chat.txt');
            let text = await response.text();
            document.getElementById("chat-box").innerText = text;
        }

        function sendMessage() {
            let message = document.getElementById("message").value;
            if (message.trim() !== "") {
                let now = new Date().toLocaleString();
                let newMessage = `${now} - ${username}: ${message}`;

                fetch('https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/contents/chat.txt', {
                    method: "PUT",
                    headers: {
                        "Authorization": "token YOUR_GITHUB_TOKEN",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        message: "Update chat",
                        content: btoa(newMessage + "\n"),
                        sha: "", // SHA sẽ cập nhật bằng GitHub API
                    })
                }).then(() => {
                    document.getElementById("message").value = "";
                    loadChat();
                });
            }
        }

        setInterval(loadChat, 5000);
    </script>
</body>
</html>
