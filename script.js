const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

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
