function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = "";

    //get random computer choice

    switch (randomNumber) {
        case 0:
            computerChoice = "rock";
            break;

        case 1:
            computerChoice = "paper";
            break;

        case 2:
            computerChoice = "scissors";
            break;
    };

    console.log(`Computer: ${computerChoice}`);
    return computerChoice;
};

function getHumanChoice() {

    //prompt for input, check if valid

    let humanChoice;
    let humanInput = prompt("Rock, paper or scissors?");

    if (humanInput != null) {
        humanChoice = humanInput.toLowerCase();
    }

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        console.log(`Human: ${humanChoice}`);
        return humanChoice;
    }
    else {
        alert("Invalid choice, please choose either rock, paper or scissors.");
        return getHumanChoice();
    };
};

//main game loop

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log(`It's a tie!`);
            console.log(`Human score: ${humanScore} Computer score: ${computerScore}`)
        }
        else if (humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "rock") {
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}!`);
            computerScore++;
            console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
        }
        else if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}!`);
            humanScore++;
            console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
        }
    };

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    };

    if (humanScore > computerScore) {
        console.log(`Game is finished! You won!`)
    }
    else if (humanScore < computerScore) {
        console.log(`Game is finished! You lost!`);
    }
    else if (humanScore === computerScore) {
        console.log(`Game has ended, neither player won.`);
    };
};


