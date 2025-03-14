const string = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * string.length);
    return string[randomIndex];
};

function getHumanChoice() {
    const humanPrompt = prompt("Rock, Paper, or Scissors?");
    const choice = humanPrompt.charAt(0).toUpperCase() + humanPrompt.slice(1).toLowerCase();
    switch(choice) {
        case "Rock":
        case "Paper":
        case "Scissors":
            console.log(choice);
            return choice;
        default:
            console.log("Invalid choice.");
    }
};

let humanScore = 0;
let computerScore = 0;

//Make below two parameters arguments
//Make humanChoice paramater case-insensitive

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie!`);
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//add playGame for 5 rounds below this comment

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round ${i + 1}:`);
        playRound(humanSelection, computerSelection);
    }
    console.log(`Final score: Human ${humanScore} - Computer ${computerScore}`);
}
playGame();