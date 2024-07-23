var myVideo = document.getElementById('video1');
var isPlaying = false;
var isTransitioning = false;

function playPause() {
  if (!isTransitioning) {
    if (isPlaying) {
      myVideo.pause();
    } else {
      myVideo.play().catch((error) => {
        console.error('Erro ao tentar reproduzir o vídeo:', error);
      });
    }
    isTransitioning = true;
  }
}

myVideo.onplaying = function () {
  isPlaying = true;
  isTransitioning = false;
};

myVideo.onpause = function () {
  isPlaying = false;
  isTransitioning = false;
};

myVideo.onerror = function (event) {
  console.error('Erro de vídeo:', event);
  isTransitioning = false;
};
