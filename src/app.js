const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("playPauseButton");
const volumeSlider = document.getElementById("volumeSlider");

// Função para alternar entre Play e Pause
playPauseButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = `<i class="ri-pause-mini-line"></i>`;
    } else {
        audio.pause();
        playPauseButton.innerHTML = `<i class="ri-play-fill"></i>`;
    }
});

// Controle do volume
volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});
