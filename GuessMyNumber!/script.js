'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

//check btn
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no imput
  if (!guess) {
    document.querySelector('.message').textContent = 'no number eneter !😒';
  } // when player win
  else if (guess === number) {
    document.querySelector('.message').textContent =
      'you enter the correct number 🎊';
    const hid = (document.querySelector('.number').textContent = number);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = ' 40rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > number) {
    if (score == 0) {
      document.querySelector('.message').textContent = 'you lost 💥';
    } else {
      document.querySelector('.message').textContent =
        'you enter higher number';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    if (score == 0) {
      document.querySelector('.message').textContent = 'you lost 💥';
    } else {
      document.querySelector('.message').textContent = 'you enter lower number';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

//again btn
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start gussing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
