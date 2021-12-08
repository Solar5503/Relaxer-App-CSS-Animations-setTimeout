const container = document.getElementById('container');
const text = document.getElementById('text');
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
let isPlaying = false;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Вдохни!';
  container.classList.remove('shrink');
  container.classList.add('grow');

  setTimeout(() => {
    text.innerText = 'Не дыши!';

    setTimeout(() => {
      text.innerText = 'Выдыхай!';
      container.classList.remove('grow');
      container.classList.add('shrink');
    }, holdTime);
  }, breatheTime);
}
setInterval(() => {
  breathAnimation();
}, totalTime);

function audioPlay() {
  isPlaying = true;
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  audio.volume = 0.7;
  audio.play();
}

function audioPause() {
  isPlaying = false;
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  audio.pause();
}

playBtn.addEventListener('click', () => {
  if (isPlaying) audioPause();
  else audioPlay();
});
//if music ended then play music again
audio.addEventListener('ended', audioPlay);
