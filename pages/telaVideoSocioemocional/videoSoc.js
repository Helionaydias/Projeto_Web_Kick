document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('my-video');
  var playButton = document.getElementById('play-button');
  var pauseButton = document.getElementById('pause-button');

  playButton.addEventListener('click', function () {
    video.play();
  });

  pauseButton.addEventListener('click', function () {
    video.pause();
  });
});
