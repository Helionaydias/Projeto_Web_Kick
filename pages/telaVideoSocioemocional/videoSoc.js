document.addEventListener('DOMContentLoaded', function () {
  const notificationSound = new Audio(
    '../../pages/telaVideoSocioemocional/media/notification_sound.mp3',
  );
  const notificationBadge = document.getElementById('notification-badge');
  const newNotification = document.getElementById('new-notification');

  newNotification.addEventListener('click', function () {
    notificationSound.play();
    let currentCount = parseInt(notificationBadge.textContent);
    notificationBadge.textContent = currentCount + 1;
  });

  const video = document.getElementById('my-video');
  const playButton = document.getElementById('play-button');
  const pauseButton = document.getElementById('pause-button');

  playButton.addEventListener('click', function () {
    video.play();
  });

  pauseButton.addEventListener('click', function () {
    video.pause();
  });
});
