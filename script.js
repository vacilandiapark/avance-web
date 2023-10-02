

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




// Obtenemos el elemento de audio y el botón de reproducción
var playButton = document.getElementById('play-button');
var audio = new Audio('Audio/ytmp3free.cc_vacilandia-park-el-parque-acuatico-mas-grande-de-lima-youtubemp3free.org.mp3');
var isPlaying = false;

function closeCard() {
  // Detenemos la música y ocultamos la tarjeta al hacer clic en el botón de cierre
  audio.pause();
  document.getElementById('music-card').style.display = 'none';
}

function playMusic() {
  if (!isPlaying) {
    // Reproducimos la música cuando se presiona el botón de reproducción
    audio.play();
    playButton.textContent = 'Pause';
    isPlaying = true;
  } else {
    // Pausamos la música cuando se presiona nuevamente el botón de reproducción
    audio.pause();
    playButton.textContent = 'Play';
    isPlaying = false;
  }
}





window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / scrollHeight) * 100;

  // Ajusta la escala (ancho) de la barra de progreso
  const scaleX = 1 + progress / 100; // Aumenta el ancho de 1 a 2
  document.querySelector(".row-gradient").style.transform = `scaleX(${scaleX})`;
});





// PREGUNTAS Y RESPUESTAS //
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.question');
    const answerWrapper = item.querySelector('.answer-wrapper');

    item.classList.add('closed'); // Agregamos la clase "closed" por defecto

    question.addEventListener('click', () => {
      if (!item.classList.contains('active')) {
        // Abrir la pregunta
        closeAllQuestions();
        item.classList.add('active');
        item.classList.remove('closed');
        answerWrapper.style.maxHeight = answerWrapper.scrollHeight + 'px';
      } else {
        // Cerrar la pregunta
        item.classList.remove('active');
        item.classList.add('closed');
        answerWrapper.style.maxHeight = '0';
      }
    });
  });

  function closeAllQuestions() {
    faqItems.forEach(item => {
      const answerWrapper = item.querySelector('.answer-wrapper');
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        item.classList.add('closed');
        answerWrapper.style.maxHeight = '0';
      }
    });
  }
});




// Obtén elementos del DOM
const images = document.querySelectorAll('.galeria .image img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.getElementById('close-modal');

// Función para mostrar el modal
function openModal(imgSrc) {
  // Restablecer la escala a su valor inicial
  modalContent.style.transform = 'scale(0.8)';

  modal.style.display = 'block';
  modal.classList.add('active'); // Agregar la clase "active" para mostrar la modal
  modalImg.src = imgSrc;

  // Retrasar ligeramente la aplicación de la escala para permitir la transición
  setTimeout(() => {
    modalContent.style.transform = 'scale(1)';
  }, 0);
}

// Función para cerrar el modal
function closeModalFunction() {
  modal.style.display = 'none';
  modal.classList.remove('active'); // Remover la clase "active" para ocultar la modal
  modalContent.style.transform = 'scale(0.8)'; // Restablecer la escala
}

// Agrega un controlador de clic a cada imagen
images.forEach((image) => {
  image.addEventListener('click', () => {
    openModal(image.src);
  });
});

// Agrega un controlador de clic para cerrar el modal
closeModal.addEventListener('click', () => {
  closeModalFunction();
});

// Cierra el modal si se hace clic en cualquier parte de la pantalla
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModalFunction();
  }
});




/* CARTA */

// Activar la pestaña 1 por defecto
document.addEventListener("DOMContentLoaded", function () {
  openTab("tab1");
});

function openTab(tabId) {
  // Oculta todos los contenidos de pestañas
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  // Desactivar todas las pestañas y quitar la clase 'active' y 'hovered'
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => {
    button.classList.remove("active", "hovered");
  });

  // Muestra el contenido de la pestaña seleccionada
  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.add("active");

  // Marcar la pestaña como activa y agregar la clase 'hovered'
  const selectedTabButton = document.querySelector(`[onclick="openTab('${tabId}')"]`);
  selectedTabButton.classList.add("active", "hovered");
}







// Obtén una referencia al botón y al pop-up
const popupButton = document.getElementById('popup-button');
const popup = document.querySelector('.pop-up');

// Agrega un manejador de clic al botón
popupButton.addEventListener('click', () => {
  // Cambia el estilo del pop-up al hacer clic en el botón
  popup.style.height = '200px';
  popup.style.background = 'rgba(var(--rgba-blanco), 0.9)';
  popup.style.opacity = '1';
});
