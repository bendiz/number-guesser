let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate random number between 0 and 9 -> int
const generateTarget = () => Math.floor(Math.random() * 10);

// Gets the absolute distance between two numbers
const getAbsoluteDistance = (num1, num2) => {
  Math.abs(num1 - num2);
};

// Compare who is closest to the secret Number -> boolean
const compareGuesses = (userGuess, computerGuess, secretNumber) => {
  playerVsNumber = getAbsoluteDistance(userGuess, secretNumber);
  computerVsNumber = getAbsoluteDistance(computerGuess, secretNumber);
  if (playerVsNumber < computerVsNumber) {
    return true;
  } else if (computerVsNumber > playerVsNumber) {
    return false;
  } else if (computerVsNumber === playerVsNumber) {
    return true;
  }
};

// Updates the total score for human / computer
const updateScore = (winner) => {
  winner === "human" ? humanScore++ : computerScore++;
};

// Updates round number
const advanceRound = () => {
  currentRoundNumber++;
};
