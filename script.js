document.addEventListener("DOMContentLoaded", function () {
  const hamburguer = document.querySelector(".hamburguer");
  const menuPanel = document.getElementById("menuPanel");
  const closeButton = document.querySelector("#menuPanel .close-button");

  hamburguer.addEventListener("click", function () {
    menuPanel.classList.add("open");
  });

  closeButton.addEventListener("click", function () {
    menuPanel.classList.remove("open");
  });
});


/* WHATSAPP */

// Obtener elementos del DOM
const button = document.getElementById('whatsapp-icon');
const chatBox = document.getElementById('whatsapp-chat');
const closeButton = document.getElementById('whatsapp-close');
const sendButton = document.getElementById('whatsapp-send');
const messageInput = document.getElementById('whatsapp-message-input');

// Función para abrir o cerrar el chat
function toggleChat() {
  chatBox.classList.toggle('open');
}

// Función para enviar el mensaje a WhatsApp
function sendMessage() {
  const phoneNumber = '+51913479416'; // Reemplaza con tu número de teléfono
  const message = messageInput.value;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  window.location.href = whatsappURL;
}

// Evento click en el botón de WhatsApp
button.addEventListener('click', toggleChat);

// Evento click en el botón de cerrar
closeButton.addEventListener('click', toggleChat);

// Evento click en el botón de enviar
sendButton.addEventListener('click', sendMessage);