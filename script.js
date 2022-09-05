
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");

const playerCurrentChoice = document.getElementById("playerCurrentChoice");
const computerCurrentChoice = document.getElementById("computerCurrentChoice");

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

playerScore.children[0].innerHTML = 0;
computerScore.children[0].innerHTML = 0;



rockDiv.addEventListener("click", () => game("rock", getComputerChoice()), false);
paperDiv.addEventListener("click", () => game("paper", getComputerChoice()), false);
scissorsDiv.addEventListener("click", () => game("scissors", getComputerChoice()), false);


function getComputerChoice() {
    let choice = (Math.floor(Math.random() * 10) + 1) % 3;

    switch(choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        default:
            return "scissors";
    }
}

function game(playerChoice, computerChoice) {
    console.log(`Player: ${playerChoice} || Computer: ${computerChoice}`);

    playerCurrentChoice.children[1].innerHTML = `${playerChoice[0].toUpperCase() + playerChoice.substring(1)}`;
    computerCurrentChoice.children[1].innerHTML = `${computerChoice[0].toUpperCase() + computerChoice.substring(1)}`;


    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
        playerScore.children[0].innerHTML++;
    } else if (
        (computerChoice === "rock" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        console.log("The computer wins!");
        computerScore.children[0].innerHTML++;
    }

    if (playerScore.children[0].innerHTML == 5) {
        playerScore.children[0].innerHTML = "Player Wins!";
    } else if (computerScore.children[0].innerHTML == 5) {
        computerScore.children[0].innerHTML = "Computer Wins!";
    }
}


