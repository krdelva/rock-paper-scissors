const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");

const playerCurrentChoice = document.getElementById("playerCurrentChoice");
const computerCurrentChoice = document.getElementById("computerCurrentChoice");
const currentWinner = document.getElementById("currentWinner");

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const modalButton = document.getElementById("modalButton");

playerScore.children[0].innerHTML = 0;
computerScore.children[0].innerHTML = 0;


// Event listeners for the player's choice
rockDiv.addEventListener("click", () => game("rock", getComputerChoice()), false);
paperDiv.addEventListener("click", () => game("paper", getComputerChoice()), false);
scissorsDiv.addEventListener("click", () => game("scissors", getComputerChoice()), false);

// Modal button event listener, restarts the match
modalButton.addEventListener("click", () => {
    playerScore.children[0].innerHTML = 0;
    computerScore.children[0].innerHTML = 0;
    playerCurrentChoice.children[1].innerHTML = ``;
    computerCurrentChoice.children[1].innerHTML = ``;
    currentWinner.innerHTML = ``;
    modal.style.display = "none";
    overlay.style.display = "none";
});

// Function to randoize the computer's choice
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
    //console.log(`Player: ${playerChoice} || Computer: ${computerChoice}`);

    // Shows the player and computer's current choice
    playerCurrentChoice.children[1].innerHTML = `${playerChoice[0].toUpperCase() + playerChoice.substring(1)}`;
    computerCurrentChoice.children[1].innerHTML = `${computerChoice[0].toUpperCase() + computerChoice.substring(1)}`;

    // Game logic, conditionals to determine who won the current hand
    if (playerChoice === computerChoice) {
        currentWinner.innerHTML = "It's a tie!!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        currentWinner.innerHTML = "Player wins hand!!";
        playerScore.children[0].innerHTML++;
    } else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        currentWinner.innerHTML = "Computer wins hand!!"
        computerScore.children[0].innerHTML++;
    }

    // Conditionals to determine if match is over
    if (playerScore.children[0].innerHTML == 5) {
        playerScore.children[0].innerHTML = "Player Wins!";
        endGame();
    } else if (computerScore.children[0].innerHTML == 5) {
        computerScore.children[0].innerHTML = "Computer Wins!";
        endGame();
    }

}

// Function called to display overlay and modal
function endGame() {
    modal.style.display = "flex";
    overlay.style.display = "flex";
}
