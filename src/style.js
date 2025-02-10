const style = document.createElement("style");
style.innerHTML = `  
    @import url('https://fonts.googleapis.com/css2?family=Handjet:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    h1, p {
        font-family: 'Poppins', sans-serif;
    }

    body {
        background: linear-gradient(135deg, #000000, #3a3a3a, #ffffff);
        background-size: 400% 400%;
        animation: gradientAnimation 10s ease infinite;
        color: white;
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }

    @keyframes gradientAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    #audio {
        display: none;
    }

    .player-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: auto;
        height: 100vh;
        gap: 40px;
    }

    .equalizer {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
        margin-bottom: 20px;
        width: 80%;
        height: 100px;
    }

    .bar {
        width: 5%;
        height: 100%;
        background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%);
        border-radius: 5px;
        transform: scaleY(1);
        transition: transform 0.05s ease-out, background 0.2s ease-in-out;
    }

    .bar:nth-child(odd) {
        background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%);
    }

    .bar:nth-child(even) {
        background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%);
    }

    .audio-controls {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .audio-controls button {
        background-color: #fff;
        color: #000;
        border: none;
        padding: 15px 15px;
        font-size: 20px;
        cursor: pointer;
        border-radius: 9999px;
    }
`;
document.head.appendChild(style);
