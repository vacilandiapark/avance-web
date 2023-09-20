
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