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

// CARRUSEL RECORRIDO VACILÓN //

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


/* OPTIMIZACION */

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Cargar la imagen cuando sea visible
            const img = entry.target;
            img.src = img.dataset.src;
            img.onload = () => {
                img.removeAttribute('data-src');
                observer.unobserve(img);
            };
        }
    });
});

// Observar todas las imágenes con el atributo data-src
const images = document.querySelectorAll('img[data-src]');
images.forEach(img => {
    observer.observe(img);
});