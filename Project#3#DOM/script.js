'use strict';
let totalScorePlayer1 = 0,
  totalScorePlayer2 = 0,
  turn = 0,
  winningValue = 10,
  gameOver = false;
//player1->0,player2->1
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
console.log(scorePlayer1);
//functions
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
}
//
let dicValue = 0,
  currentScore1 = 0,
  currentScore2 = 0;
//roll
rollBtn.addEventListener('click', function () {
  if (gameOver) return;
  dicValue = randomNum(1, 6);
  dice.src = `dice-${dicValue}.png`;
  if (dicValue == 1) {
    (currentScore1 = 0), (currentScore2 = 0);
    currentP1.textContent = currentScore1;
    currentP2.textContent = currentScore2;
    if (!turn) {
      activePlayer(2);
    } else {
      activePlayer(1);
    }
    turn ^= 1;
    return;
  }
  if (!turn) {
    currentScore1 += dicValue;
    currentP1.textContent = currentScore1;
  } else {
    currentScore2 += dicValue;
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
    gameOver = true;
    return;
  }
  if (!turn) {
    activePlayer(2);
  } else {
    activePlayer(1);
  }
  turn ^= 1;
});

newGame.addEventListener('click', function () {
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
