function sendMessage() {
  var userInput = document.getElementById("user-input");
  var userMessage = userInput.value;

  if (userMessage.trim() === "") {
    return;
  }

  var chatLog = document.getElementById("chat-log");
  var userDiv = document.createElement("div");
  userDiv.className = "message user-message";
  userDiv.textContent = userMessage;
  chatLog.appendChild(userDiv);

  // Simular resposta do chatbot (pode ser substituído por uma chamada a um backend de verdade)
  setTimeout(function () {
    var botMessage = "Olá! Como posso ajudar?";
    var botDiv = document.createElement("div");
    botDiv.className = "message bot-message";
    botDiv.textContent = botMessage;
    chatLog.appendChild(botDiv);

    // Role para o final do chat
    chatLog.scrollTop = chatLog.scrollHeight;
  }, 500);

  userInput.value = "";
}

function toggleChat() {
  var chatBox = document.querySelector(".chat-box");
  var chatIcon = document.getElementById("chatIcon");

  chatBox.classList.toggle("hidden");

  if (chatBox.classList.contains("hidden")) {
    chatIcon.style.display = "block"; // Exibir o ícone quando o chat for fechado
  } else {
    chatIcon.style.display = "none"; // Ocultar o ícone quando o chat for aberto
  }
}