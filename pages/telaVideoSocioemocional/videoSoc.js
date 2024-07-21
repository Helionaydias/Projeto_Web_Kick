document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('my-video');
  const playButton = document.getElementById('play-button');
  const pauseButton = document.getElementById('pause-button');

  if (video && playButton && pauseButton) {
    playButton.addEventListener('click', function () {
      video.play();
    });

    pauseButton.addEventListener('click', function () {
      video.pause();
    });
  } else {
    console.error('Elementos de vídeo ou botões de controle não encontrados.');
  }
});
