
function getComputerChoice() {
    let choice = (Math.floor(Math.random() * 10) + 1) % 3;
    console.log(`${choice} : 1 = rock, 2 = paper, 0 = scissors`);

    switch(choice) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        default:
            return "Scissors";
    }
}

function playerSelection() {
    let playerChoice;
    while (true) {
        playerChoice = prompt("Please make your choice: Rock, Paper or Scissors?").toLowerCase();
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") break;
        alert("Incorrect option! Please choose between Rock, Paper or Scissors");
        continue;
    }
    return playerChoice;
}

function playGame(playerChoice, computerChoice) {
    console.log(`${playerChoice} || ${computerChoice}`);
    computerChoice = computerChoice.toLowerCase();
    while (playerChoice === computerChoice) {
        computerChoice = getComputerChoice();
        playerChoice = playerSelection();
        continue;
    }
    if ((playerChoice === "rock" && computerChoice === "scissors") || 
    (playerChoice === "paper" && computerChoice === "rock") || 
    (playerChoice === "scissors" && computerChoice === "paper")) {
        alert("Player wins!");
        return true;
    }
    alert("Computer wins!");
    return false;
}


//playGame(playerSelection(), getComputerChoice());

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result;
    for (let i = 0; i < 5; i++) {
        result = playGame(playerSelection(), getComputerChoice());
        if (result) {
            playerScore++;
        } else {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        alert("PLAYER WINS");
    } else {
        alert("COMPUTER WINS");
    }

}

game();