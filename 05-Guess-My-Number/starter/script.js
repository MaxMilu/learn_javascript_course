'use strict';

let magicNumber = 0;
let hightScore = 0;
buttonInit();
initGame();

console.log(`magicNumber: ${magicNumber}`);

function buttonInit() {
  document.querySelector('.again').addEventListener('click', function () {
    initGame();
    console.log('click again');
  });

  document.querySelector('.check').addEventListener('click', function () {
    checkInputNumber(Number(document.querySelector('.guess').value));
    console.log('click ckeck');
  });
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function initGame() {
  magicNumber = getRandomNumber();
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  if (hightScore !== 0) {
    document.querySelector('.highscore').textContent = String(hightScore);
  } else {
    document.querySelector('.highscore').textContent = '0';
  }
}

function playerWin() {
  displayMessage('You Win !!!');
  document.querySelector('.number').textContent = String(magicNumber);
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '25rem';
  let finalScore = Number(document.querySelector('.score').textContent);
  if (finalScore !== 0) {
    hightScore = finalScore;
  }
}

function checkInputNumber(number) {
  console.log('number: ' + number);
  console.log('type: ' + typeof number);
  if (number === 0) {
    displayMessage('Empty Number !!!');
    reduceScore();
  } else if (number > magicNumber) {
    displayMessage('Too Big !!!');
    reduceScore();
  } else if (number < magicNumber) {
    displayMessage('Too Small !!!');
    reduceScore();
  } else if (number === magicNumber) {
    playerWin();
  }
}

function reduceScore() {
  let score = Number(document.querySelector('.score').textContent);
  if (score === 0 || score - 1 === 0) {
    displayMessage('You Loose !!! Play Again!!!');
  }
  if (score > 0) {
    document.querySelector('.score').textContent = String(score - 1);
  }
}

function getRandomNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}
