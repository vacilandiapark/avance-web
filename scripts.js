$(document).ready(function () {
    $('.hamburger').click(function () {
        $('#menuPanel').toggleClass('open');
    });
});

// CARRUSEL //

$(document).ready(function () {
    $('.slick-carousel').slick({
        autoplay: true, // Activar reproducción automática
        prevArrow: $('.slick-prev'), // Selector del botón de navegación anterior
        nextArrow: $('.slick-next'), // Selector del botón de navegación siguiente
        autoplaySpeed: 2000,
    });
});


// CARRUSEL INTRODUCCION //

$(document).ready(function () {
    $(".carrusel").slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">&#8249;</button>',
        nextArrow: '<button type="button" class="slick-next">&#8250;</button>',
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    });
});

// CARRUSEL EXPLORA EL PARQUE //

$(document).ready(function () {
    // Carrusel para pantallas grandes (más de 768px)
    $('.carrusel-recorrido').slick({
        slidesToShow: 3,
        slidesToScroll: 1, // Cambiado a 1 para que se mueva de uno en uno
        prevArrow: '<button class="slick-prev rec" type="button"></button>',
        nextArrow: '<button class="slick-next rec" type="button"></button>',
        autoplay: true, // Agregado para hacer que el carrusel se mueva automáticamente
        autoplaySpeed: 2000, // Velocidad en milisegundos entre las transiciones automáticas
        responsive: [
            {
                // Configuración para pantallas móviles (menos de 768px)
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

/* SCROLL REVEAL */

ScrollReveal().reveal('.scroll-reveal', {
    delay: 0,
    duration: 1000,
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    scale: 0.8, // Reducir escala inicialmente
    distance: '50px', // Desplazamiento hacia arriba
    origin: 'bottom', // Punto de origen: inferior
    reset: true
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


// PÁGINA PAQUETE CUMPLEAÑERO //

$(document).ready(function () {
    var $carousel = $('.carousel');
    var $thumbnails = $('.thumbnails');
    var $arrowUp = $('.arrow-up');
    var $arrowDown = $('.arrow-down');

    $carousel.slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        asNavFor: '.thumbnails'
    });

    $thumbnails.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.carousel',
        focusOnSelect: true,
        prevArrow: '',
        nextArrow: '',
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true
    });

    $arrowUp.click(function () {
        $thumbnails.slick('slickPrev');
    });

    $arrowDown.click(function () {
        $thumbnails.slick('slickNext');
    });
});

/* CARACTERISTICAS */
