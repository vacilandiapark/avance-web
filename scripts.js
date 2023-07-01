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
        autoplaySpeed: 3000,
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
        prevArrow: '<button class="slick-prev" type="button"></button>',
        nextArrow: '<button class="slick-next" type="button"></button>',
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
