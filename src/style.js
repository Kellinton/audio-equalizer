document.addEventListener("DOMContentLoaded", () => {
    const playPauseButton = document.getElementById("playPauseButton");
    const volumeSlider = document.getElementById("volumeSlider");
    const audio = document.getElementById("audio");

    // Alteração dinâmica da cor do botão ao clicar
    playPauseButton.addEventListener("click", () => {
        playPauseButton.classList.toggle("playing");
    });

    // Controle do volume
    volumeSlider.addEventListener("input", () => {
        audio.volume = volumeSlider.value;
    });
});
