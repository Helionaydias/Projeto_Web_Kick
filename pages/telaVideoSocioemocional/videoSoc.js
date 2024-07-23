var myVideo = document.getElementById('video1');
var isPlaying = false;

function playPause() {
  if (isPlaying) {
    myVideo.pause();
  } else {
    myVideo.play();
  }
}

myVideo.onplaying = function () {
  isPlaying = true;
};

myVideo.onpause = function () {
  isPlaying = false;
};
