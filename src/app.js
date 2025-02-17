const audio = document.getElementById("audio");
const playerContainer = document.querySelector(".player-container");

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const source = audioContext.createMediaElementSource(audio);

source.connect(analyser);
analyser.connect(audioContext.destination);

analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

function createEqualizer() {
    const equalizer = document.createElement('div');
    const body = document.querySelector('body');
    equalizer.classList.add('equalizer');
    
    for (let i = 0; i < 19; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.id = `bar${i + 1}`; 
        equalizer.appendChild(bar);
    }

    body.insertBefore(equalizer, playerContainer);
}


function updateEqualizer() {
    analyser.getByteFrequencyData(dataArray);

    const bars = document.querySelectorAll(".bar");

    for (let i = 0; i < bars.length; i++) {
        const value = dataArray[i * 2] * 2;  
        const scale = (value / 128) * 1;  

        bars[i].style.transform = `scaleY(${Math.min(4, Math.max(0.1, scale))})`; 

        const gradient = `linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, ${scale / 1}) 100%)`;
        bars[i].style.background = gradient;
    }

    requestAnimationFrame(updateEqualizer);
}

audio.onplay = () => {
    audioContext.resume().then(() => {
        updateEqualizer();
    });
};


const playPauseButton = document.getElementById("playPauseButton");
playPauseButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = `<i class="ri-pause-mini-line"></i>`;
    } else {
        audio.pause();
        playPauseButton.innerHTML = `<i class="ri-play-fill"></i>`;
    }
});

const volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("input", (e) => {
    audio.volume = e.target.value;
});


createEqualizer();
