function rockPaperScissors() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    let playerTurn;


    let recursivePlayAgain = function () {

        readline.question('\nDo you want to play again (Y/N): ', answer => {
            tries = 0;

            if (answer == 'y' || answer == 'Y') {
                console.log('')
                recursivePlayGame();
            } else if (answer == 'n' || answer == 'N') {
                console.log('\nGood Bye!');
                return readline.close();
            } else {
                console.log('\nY/N')
                recursivePlayAgain();
            }
        })
    }

    let recursivePlayGame = function () {
        readline.question(`Choose one of the following three options:
        1.Type "r" OR rock" in console, if your choice is "Rock";
        2.Type "p" OR "paper" in console, if your choice is "Paper"
        3.Type "s" OR "scissors" in console, if your choice is "Scissors"\n`, ask => {
            tries = 0;

            if (ask == "r" || ask == "rock") {
                playerTurn = rock;
            } else if (ask == "p" || ask == "paper") {
                playerTurn = paper;
            } else if (ask == "s" || ask == "scissors") {
                playerTurn = scissors;
            } else {
                console.log("Invalid Iput. Tray Again...");
                recursivePlayGame();
                return;
            }

            console.log(`You choose ${playerTurn}`);

            let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
            let computerTurn;

            switch (computerRandomNumber) {
                case 1:
                    computerTurn = rock;
                    break;
                case 2:
                    computerTurn = paper;
                    break;
                case 3:
                    computerTurn = scissors;
                    break;
            }

            console.log(`The computer chooses ${computerTurn}`);

            if ((playerTurn === rock && computerTurn === scissors)
                || (playerTurn === paper && computerTurn === rock)
                || (playerTurn === scissors && computerTurn === paper)) {
                console.log("You win!");
                recursivePlayAgain();
            } else if ((playerTurn === rock && computerTurn === paper)
                || (playerTurn === paper && computerTurn === scissors)
                || (playerTurn === scissors && computerTurn === rock)) {
                console.log("You lose!");
                recursivePlayAgain();
            } else {
                console.log("This game was a draw!");
                recursivePlayAgain();
            }

        })
    }
    recursivePlayGame();
}

rockPaperScissors();
