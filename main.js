// Rock, paper, scissors: Refactored with functions
const initGame = () => {
  const startGame = confirm(
    "Do you want to play Rock, Paper, Scissors with me?"
  );
  startGame ? playGame() : alert("Okay:') Maybe next time!");
};
//Game flow functions
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

const getPlayerChoice = () => {
  return prompt("Please enter rock, paper or scissors.");
};

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

const decidedNotToPlay = () => {
  alert("I guess you changed your mind. See you next time!");
};

const invalidChoice = () => {
  alert("You didn't enter rock, paper or scissors. Try again!");
};

const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    return false;
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[randomNumber];
};

const determineWinner = (playerOne, computer) => {
  const winner =
    playerOne === computer
      ? "Tie game!"
      : playerOne === "rock" && computer === "paper"
      ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
      : playerOne === "paper" && computer === "scissors"
      ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
      : playerOne === "scissors" && computer === "rock"
      ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
      : `playerOne: ${playerOne}\nComputer: ${computer} \nplayerOne wins!`;
  return winner;
};

const displayResult = (result) => {
  alert(result);
};

const askToPlayAgain = () => {
  return confirm("Play again?");
};

const thanksForPlaying = () => {
  alert("Okay, thanks for playing! See you!");
};

initGame();
