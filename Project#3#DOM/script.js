'use strict';
let totalScorePlayer1 = 0,
  totalScorePlayer2 = 0,
  turn = 0,
  winningValue = 20,
  gameOver = false;
//player1->0,player2->1
//selecting elements

const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const currentP1 = document.querySelector('#current--0');
const currentP2 = document.querySelector('#current--1');
const playerOneSection = document.querySelector('.player--0');
const playerTwoSection = document.querySelector('.player--1');
const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');

//functions

function hiddeElement(elementClass) {
  document.querySelector(`.${elementClass}`).classList.add('hidden');
}
function showElement(elementClass) {
  document.querySelector(`.${elementClass}`).classList.remove('hidden');
}
function hasClassName(elementClass, className) {
  return document
    .querySelector(`.${elementClass}`)
    .classList.contains(className);
}
function randomNum(l, r) {
  return Math.trunc(Math.random() * 6) + 1;
}
function activePlayer(active) {
  if (active == 1) {
    playerOneSection.classList.add('player--active');
    playerTwoSection.classList.remove('player--active');
  } else {
    playerOneSection.classList.remove('player--active');
    playerTwoSection.classList.add('player--active');
  }
  playerOneSection.classList.remove('player--winner');
  playerTwoSection.classList.remove('player--winner');
}
function winTheGame(player) {
  if (!player) {
    playerOneSection.classList.remove('player--active');
    playerOneSection.classList.add('player--winner');
  } else {
    playerTwoSection.classList.remove('player--active');
    playerTwoSection.classList.add('player--winner');
  }
}

//end of functions

let diceVal = 0,
  currentScore1 = 0,
  currentScore2 = 0;

//start play
hiddeElement('dice');
//roll
rollBtn.addEventListener('click', function () {
  if (gameOver) return;
  if (hasClassName('dice', 'hidden')) {
    showElement('dice');
  }
  diceVal = randomNum(1, 6);
  dice.src = `dice-${diceVal}.png`;
  if (diceVal === 1) {
    (currentScore1 = 0), (currentScore2 = 0);
    currentP1.textContent = currentScore1;
    currentP2.textContent = currentScore2;
    if (!turn) activePlayer(2);
    else activePlayer(1);
    turn ^= 1;
    return;
  }
  if (!turn) {
    currentScore1 += diceVal;
    currentP1.textContent = currentScore1;
  } else {
    currentScore2 += diceVal;
    currentP2.textContent = currentScore2;
  }
});

//hold
holdBtn.addEventListener('click', function () {
  if (gameOver) return;
  if (!turn) {
    totalScorePlayer1 += currentScore1;
    scorePlayer1.textContent = totalScorePlayer1;
  } else {
    totalScorePlayer2 += currentScore2;
    scorePlayer2.textContent = totalScorePlayer2;
  }
  (currentScore1 = 0), (currentScore2 = 0);
  currentP1.textContent = currentScore1;
  currentP2.textContent = currentScore2;
  if (totalScorePlayer1 >= winningValue || totalScorePlayer2 >= winningValue) {
    winTheGame(turn);
    gameOver = true;
    if (!hasClassName('dice', 'hidden')) hiddeElement('dice');
    return;
  }
  if (!turn) activePlayer(2);
  else activePlayer(1);
  turn ^= 1;
});

newGame.addEventListener('click', function () {
  if (!hasClassName('dice', 'hidden')) {
    hiddeElement('dice');
  }
  gameOver = false;
  turn = 0;
  activePlayer(1);
  (currentScore1 = 0), (currentScore2 = 0);
  currentP1.textContent = currentScore1;
  currentP2.textContent = currentScore2;
  totalScorePlayer1 = 0;
  scorePlayer1.textContent = totalScorePlayer1;
  totalScorePlayer2 = 0;
  scorePlayer2.textContent = totalScorePlayer2;
});
