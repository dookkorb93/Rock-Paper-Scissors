const string = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomString = Math.floor(Math.random() * string.length);
    return string[randomString];
};

const value = getComputerChoice(string);
//May need to redefine value const or remove entirely depending on the rest of the code

//Double check the global variables in the global scope are compatible with function below

function getHumanChoice() {
    const humanPrompt = prompt("Rock, Paper, or Scissors?");
    switch(humanPrompt.charAt(0).toUpperCase() + humanPrompt.slice(1).toLowerCase()) {
        case "Rock":
            console.log("Rock");
            break;

        case "Paper":
            console.log("Paper");
            break;

        case "Scissors":
            console.log("Scissors");
            break;

        default:
            console.log("Invalid choice.");
    }
    return humanPrompt;
};

let humanScore = 0;
let computerScore = 0;

//Make below two parameters arguments
//Make humanChoice paramater case-insensitive

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
                console.log("You lose! Paper beats Rock!");
                computerScore++; {
            if (humanChoice === "Paper" && computerChoice === "Scissors") {
                console.log("You lose! Scissors beats Paper!");
                computerScore++;
            } else (humanChoice === "Scissors" && computerChoice === "Rock")
                console.log("You lose! Rock beats Scissors!");
                computerScore++;
        }
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
                console.log("You win! Rock beats Scissors!");
                humanScore++; {
            if (humanChoice === "Paper" && computerChoice === "Rock") {
                console.log("You win! Paper beats Rock!");
                humanScore++;
        } else (humanChoice === "Scissors" && computerChoice === "Paper")
                console.log("You win! Scissors beats Paper!");
                humanScore++;
        }
    } else (humanChoice === '' || humanChoice === null)
        console.log("Please enter a valid value");
}

// Add return values for above code and then pass function calls as arguments for different function call (log)
// Don't forget backticks 

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