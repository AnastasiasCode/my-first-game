let playGame = confirm("Do you want to play Rock, Paper, Scissors with me?");
if (playGame) {
    //play
    let playerChoice = prompt("Please enter rock, paper or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLocaleLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock": computerChoice === 2 ? "paper": "scissors";
            let result =
            playerOne === computer ? 
            "Tie game!"
            : playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`: 
            playerOne === "paper" && computer === "scissors" ?`playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`:
            playerOne === "scissors" && computer === "rock" ?`playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`: `playerOne: ${playerOne}\nComputer: ${computer} \nplayerOne wins!`;
            alert(result);
            let playAgain = confirm("Do you want to play again?")
            playAgain ? location.reload() : alert ("Fine :') maybe next time! Thanks for playing!")
        } else {
            alert("You didn't enter rock, paper or scissors.");
            let tryAgain = confirm("Do you want to try again?")
            tryAgain ? location.reload() : alert ("Fine :') I guess you changed your mind...")
        }
    } else {
        alert("I guess you changed your mind:(");
        let tryAgain = confirm("Do you want to try again?")
            tryAgain ? location.reload() : alert ("Fine :') I guess you changed your mind...")
    }
} else{
    alert("Oh, too bad:( Maybe next time");
    let changedMind = confirm("Do you want to play?")
            changedMind ? location.reload() : alert ("Fine :') Maybe next time...")
}