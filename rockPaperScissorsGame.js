function rockPaperScissors() {
    
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

if (playerTurn == "r" || playerTurn == "rock") {
    playerTurn = rock;
} else if (playerTurn == "p" || playerTurn == "paper") {
    playerTurn = paper;
} else if (playerTurn == "s" || playerTurn == "scissors") {
    playerTurn = scissors;
} else {
    console.log("Invalid Iput. Tray Again...");
}

let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

switch (computerRandomNumber) {
    case 1:
        computerMove = Rock;
        break;
    case 2:
        computerMove = Paper;
        break;
    case 3:
        computerMove = Scissors:
        break;

    default:
        console.log(`The computer chooses ${computerTurn}`);
        break;
}

if ((playerTurn === rock && computerTurn === scissors) || (playerTurn === paper && computerTurn === rock) || (playerTurn === scissors && computerTurn === paper)) {
    console.log("You win~");
} else if () {

} else {
    console.log("This game was a draw!");
}
}

rockPaperScissors();
