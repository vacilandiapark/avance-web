

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



function showOverlay(event) {
  const card = event.currentTarget.closest(".card");
  const overlay = card.querySelector(".overlay");

  // Añadir la clase 'active' al overlay
  overlay.classList.add("active");

  // Establecer la altura y la opacidad deseada
  overlay.style.height = "220px";
  overlay.style.opacity = 1;

  // Obtener el botón de cierre (X) dentro del overlay
  const closeButton = overlay.querySelector(".close-button");

  // Agregar un evento clic al botón de cierre
  closeButton.addEventListener("click", function () {
    // Establecer la altura y la opacidad deseada
    overlay.style.height = "0px";
    overlay.style.opacity = 0;
  });
}





// Función para cambiar la pestaña activa
function changeTab(tabIndex) {
  // Obtener todas las pestañas y el contenido de las pestañas
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  // Desactivar todas las pestañas y ocultar su contenido
  for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
      tabContents[i].classList.remove('active');
  }

  // Activar la pestaña seleccionada y mostrar su contenido
  tabs[tabIndex - 1].classList.add('active');
  tabContents[tabIndex - 1].classList.add('active');
}
