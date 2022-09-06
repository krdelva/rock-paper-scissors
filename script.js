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
    // Resets score to 0
    playerScore.children[0].innerHTML = 0;
    computerScore.children[0].innerHTML = 0;
    
    // Resets the player and computer's choices to blank
    playerCurrentChoice.children[1].innerHTML = ``;
    computerCurrentChoice.children[1].innerHTML = ``;
    
    // Resets current winner to blank
    currentWinner.innerHTML = ``;
    
    // Closes overlay and modal
    modal.style.display = "none";
    overlay.style.display = "none";


    // Call to function to reset the player and computer's current choice style
    resetCurrentChoiceStyle();

    // Resets background and text color to initial values  of the player and computer's score
    playerScore.children[0].style.backgroundColor = "white";
    playerScore.children[0].style.color = "black";
    computerScore.children[0].style.backgroundColor = "white";
    computerScore.children[0].style.color = "black";
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
        // Adds text to the currentWinner element, to show current hand is a tie
        currentWinner.innerHTML = "It's a tie!!";

        // Call to function to reset the player and computer's current choice style
        resetCurrentChoiceStyle();

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {

        // Adds text to the currentWinner element, to show player won current hand
        currentWinner.innerHTML = "Player wins hand!!";
        
        // Adds 1 to the player's score
        playerScore.children[0].innerHTML++;

        // Add style to player's current choice and reset's computer's choice style
        currentChoiceStyle("black", "white");

    } else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {

        // Adds text to the currentWinner element, to show computer won current hand
        currentWinner.innerHTML = "Computer wins hand!!";
        
        // Adds 1 to the computer's score
        computerScore.children[0].innerHTML++;

        // Add style to computer's current choice and reset's players's choice style
        currentChoiceStyle("white", "black");
    }

    // Conditionals to determine if match is over
    if (playerScore.children[0].innerHTML == 5) {

        // Adds text to score, to show player won the match
        playerScore.children[0].innerHTML = "Player Wins!";

        // Adds style to score div, to show player won
        playerScore.children[0].style.backgroundColor = "black";
        playerScore.children[0].style.color = "white";

        // Calls function to show overlay/modal
        endGame();

    } else if (computerScore.children[0].innerHTML == 5) {

        // Adds text to score, to show computer won the match
        computerScore.children[0].innerHTML = "Computer Wins!";

         // Adds style to score div, to show computer won
        computerScore.children[0].style.backgroundColor = "black";
        computerScore.children[0].style.color = "white";

        // Calls function to show overlay/modal
        endGame();
    }

}

// Function for adding style to the player and computer's current choice of hand
function currentChoiceStyle(colorOne, colorTwo) {
        playerCurrentChoice.children[1].style.backgroundColor = colorOne;
        playerCurrentChoice.children[1].style.color = colorTwo;
    
        computerCurrentChoice.children[1].style.backgroundColor = colorTwo;
        computerCurrentChoice.children[1].style.color = colorOne;
}

// Function thath resets background and text color to initial values of the player and computer's choice
function resetCurrentChoiceStyle() {

        playerCurrentChoice.children[1].style.backgroundColor = "white";
        playerCurrentChoice.children[1].style.color = "black";
        computerCurrentChoice.children[1].style.backgroundColor = "white";
        computerCurrentChoice.children[1].style.color = "black";
}


// Function called to display overlay and modal
function endGame() {
    modal.style.display = "flex";
    overlay.style.display = "flex";
}
