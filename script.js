'use strict';

let guessNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

// When Player clicks 'Check'
document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.guess').value);

  if (!inputNumber) displayMessage('No number entered. Enter between 1 - 20!');
  else if (inputNumber < 0 || inputNumber > 20)
    displayMessage('Invalid Number. Enter betweeen 1 - 20!');
  // When Player guesses right
  else if (inputNumber === guessNumber) {
    if (score > highscore) highscore = score;
    document.querySelector('.number').textContent = guessNumber;
    document.querySelector('.number').style.width = '30rem';
    displayMessage('Correct guess!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore;
  }

  //When Player guesses wrong
  else if (inputNumber !== guessNumber) {
    if (score > 1) {
      displayMessage(inputNumber > guessNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost!!!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff2626';
    }
  }
});

// When Player clicks 'Again'
document.querySelector('.again').addEventListener('click', function () {
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
