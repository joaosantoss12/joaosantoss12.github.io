const bodyOverlayIndex = document.querySelector('.loader');
const video = document.querySelector('video.loading');

video.defaultPlaybackRate = 2.5;
video.load();

loader();

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function loader() {  
    delay(4300).then(() => bodyOverlayIndex.style.display = "none");
}