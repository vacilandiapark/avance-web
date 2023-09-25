
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



const swiperEl = document.getElementByIdSelector('carrusel')
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });
    swiperEl.initialize();