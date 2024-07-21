document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('my-video');
  const playButton = document.getElementById('play-button');
  const pauseButton = document.getElementById('pause-button');

  playButton.addEventListener('click', function () {
    video.play().catch((error) => {
      console.error('Playback prevented: ', error);
    });
  });

  pauseButton.addEventListener('click', function () {
    video.pause();
  });
});
