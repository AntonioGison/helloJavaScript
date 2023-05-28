let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let xRandom;
// Write your code below:
function generateTarget() {
  return (xRandom = Math.floor(Math.random() * 9));
}

//calculate the distance
function difference(a, b) {
  return Math.abs(a - b);
}

function compareGuesses(human, ai, secret) {
  let distHuman;
  let distAi;

  distHuman = difference(secret, human);
  distAi = difference(secret, ai);

  if (distHuman < distAi) {
    return true;
  } else {
    return false;
  }
}

function advanceRound(){

let currentRoundNumber;

currentRoundNumber++;
}

//node hello.js per il terminale
