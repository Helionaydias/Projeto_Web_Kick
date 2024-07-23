var myVideo = document.getElementById('video1');
var isPlaying = false;

function playPause() {
  if (isPlaying) {
    myVideo.pause();
  } else {
    myVideo.play().catch((error) => {
      console.error('Erro ao tentar reproduzir o vídeo:', error);
    });
  }
}

myVideo.onplaying = function () {
  isPlaying = true;
};

myVideo.onpause = function () {
  isPlaying = false;
};

myVideo.onerror = function (event) {
  console.error('Erro de vídeo:', event);
};
