let humanScore = 0;
let computerScore = 0;

const divMainContent = document.querySelector("#mainContent");
const scoreText = document.querySelector("#score");
const choicesText = document.querySelector("#choices");
const resultsText = document.querySelector("#results");
const divStatus = document.querySelector("#gameStatus");

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

buttonRock.addEventListener("click", playRound);
buttonPaper.addEventListener("click", playRound);
buttonScissors.addEventListener("click", playRound);

//get random computer choice

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = "";
    let computerOptions = ["rock", "paper", "scissors"];

    computerChoice = computerOptions[randomNumber];

    return computerChoice;
};

function playRound(e) {
    let humanChoice = e.target.value;
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        resultsText.textContent = `It's a tie!`;
    }
    else if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        resultsText.textContent = `You lost this round! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}!`;

    }
    else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        resultsText.textContent = `You won this round! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}!`;
    }

    choicesText.textContent = `Human chose: ${humanChoice} // Computer chose: ${computerChoice}`
    scoreText.textContent = `Human: ${humanScore} Computer: ${computerScore}`;

    concludeGame();
};

function concludeGame() {
    if (humanScore === 5 || computerScore === 5) {
        resultsText.setAttribute("style", "color: red;");
        resultsText.textContent = (humanScore > computerScore ? `You won the game!` : `Computer won the game!`)
        buttonRock.style.display = "none";
        buttonPaper.style.display = "none";
        buttonScissors.style.display = "none";

        const buttonPlayAgain = document.createElement("button");
        buttonPlayAgain.textContent = "Play Again";
        buttonPlayAgain.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            scoreText.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
            buttonRock.style.display = "inline";
            buttonPaper.style.display = "inline";
            buttonScissors.style.display = "inline";
            resultsText.setAttribute("style", "color: black;");
            buttonPlayAgain.remove();
        });
        divStatus.append(buttonPlayAgain);
    };
}


