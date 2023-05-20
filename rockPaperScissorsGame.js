function rockPaperScissors() {
    const chalk = require('chalk');
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    let playerTurn;
    let computerTurn;

    let recursiveAsyncReadline = function () {
        let isInvalid = false;
        readline.question(`Choose one of the following three options:
    1.Type "r" OR rock" in console, if your choice is "Rock";
    2.Type "p" OR "paper" in console, if your choice is "Paper"
    3.Type "s" OR "scissors" in console, if your choice is "Scissors"\n`, string => {

            playerTurn = String(string);

            if (playerTurn == "r" || playerTurn == "rock") {
                playerTurn = rock;
            } else if (playerTurn == "p" || playerTurn == "paper") {
                playerTurn = paper;
            } else if (playerTurn == "s" || playerTurn == "scissors") {
                playerTurn = scissors;
            } else {
                isInvalid = true;
                console.log(chalk.bgRedBright("Invalid Iput. Tray Again..."));
                recursiveAsyncReadline();
            }

            if (!isInvalid) {
                console.log(chalk.bgWhiteBright(`You choose ${playerTurn}`));

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

                    default:
                        break;
                }

                console.log(chalk.bgWhite(`The computer chooses ${computerTurn}`));

                if ((playerTurn === rock && computerTurn === scissors)
                    || (playerTurn === paper && computerTurn === rock)
                    || (playerTurn === scissors && computerTurn === paper)) {
                    console.log(chalk.bgGreen("You win!"));
                    return readline.close();
                } else if ((playerTurn === rock && computerTurn === paper)
                    || (playerTurn === paper && computerTurn === scissors)
                    || (playerTurn === scissors && computerTurn === rock)) {
                    console.log(chalk.bgRed("You lose!"));
                    return readline.close();
                } else {
                    console.log(chalk.bgYellow("This game was a draw!"));
                    return readline.close();
                }

            }
        })
    }
    recursiveAsyncReadline();
}

rockPaperScissors();
