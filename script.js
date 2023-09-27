

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