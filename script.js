function mostrar(id) {
    document.getElementById(id).style.opacity = "1";
}

function ocultar(id) {
    document.getElementById(id).style.opacity = "0";
}

let video = document.getElementById("video1");

function play() {
    video.play();
}

function pause() {
    video.pause();
}

function atrasar() {
    video.playbackRate -= 0.2;
}

function adiantar() {
    video.playbackRate += 0.2;
}

function stop(){
    video.pause();
    video.currentTime = 0;
}