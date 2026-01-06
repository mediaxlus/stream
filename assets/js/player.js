const video = document.getElementById('player');
let unlocked = false;

export function loadVideo(src, poster) {
  video.src = src;
  video.poster = poster;
  video.currentTime = 0;
}

video.addEventListener('timeupdate', () => {
  if (!unlocked && video.currentTime >= APP.previewLimit) {
    video.pause();
    showUnlock();
  }
});

function showUnlock() {
  alert('Preview selesai. Login untuk lanjut HD.');
}

