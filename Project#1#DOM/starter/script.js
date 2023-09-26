'use strict';

const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);
function getRandom(l, r) {
  return Math.trunc(Math.random() * 20) + 1;
}
let correctNumber = getRandom(1, 20);
let againBtn = document.querySelector('.again');
let falg = false,
  lost = false;
//functions
function getMessage(guess) {
  if (!guess) return 'No Number!';
  if (guess == correctNumber) return 'Correct!🙂';
  if (guess > correctNumber) return 'HIGH💢';
  else return 'LOW💢';
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayCurrentScore(score) {
  document.querySelector('.score').textContent = score;
}
//againBtn
againBtn.addEventListener('click', function () {
  correctNumber = getRandom(1, 20);
  lost = false;
  message.textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  if (falg) highscore = Math.max(highscore, score);
  document.querySelector('.highscore').textContent = highscore;
  score = 20;
  displayCurrentScore(score);
  document.querySelector('.number').style.width = '15rem';
});
//checkBtn
checkBtn.addEventListener('click', function () {
  if (lost) return;
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage(getMessage(guess));
    return;
  }
  if (guess === correctNumber) {
    falg = true;
    displayMessage(getMessage(guess));
    document.querySelector('.number').textContent = correctNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    highscore = Math.max(highscore, score);
    console.log(highscore);
    document.querySelector('.highscore').textContent = highscore;
  } else {
    displayMessage(getMessage(guess));
    score--;
    if (!score) displayMessage('You Lost'), (lost = true);
    displayCurrentScore(score);
  }
});
