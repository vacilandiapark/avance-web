




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
    playButton.getElementsByTagName('svg')[0].style.display = 'none'; // Ocultar el primer SVG (reproducción)
    playButton.getElementsByTagName('svg')[1].style.display = 'inline'; // Mostrar el segundo SVG (pausa)
    isPlaying = true;
  } else {
    // Pausamos la música cuando se presiona nuevamente el botón de reproducción
    audio.pause();
    playButton.getElementsByTagName('svg')[0].style.display = 'inline'; // Mostrar el primer SVG (reproducción)
    playButton.getElementsByTagName('svg')[1].style.display = 'none'; // Ocultar el segundo SVG (pausa)
    isPlaying = false;
  }
}
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
  modalContent.style.transform = 'scale(0.3)';

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



function toggleInfo(infoNumber) {
  const targetClass = `info-${infoNumber}`;
  const infoContainers = document.querySelectorAll(`.${targetClass}`);

  // Verificar si el contenedor está activo o inactivo
  const isOpen = infoContainers[0].classList.contains('active');

  // Cerrar todos los contenedores activos
  const allInfoContainers = document.querySelectorAll('.info-container');
  allInfoContainers.forEach(container => {
    container.classList.remove('active');
  });

  // Abrir el contenedor si no estaba abierto previamente
  if (!isOpen) {
    infoContainers[0].classList.add('active');
  }

  // Evitar la propagación del evento para que no afecte al modal de imagen
  event.stopPropagation();
}