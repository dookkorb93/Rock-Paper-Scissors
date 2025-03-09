function getComputerChoice() {
    const randomString = Math.floor(Math.random() * string.length);
    const value = string[randomString];
    return value;
};

const string = ["Rock", "Paper", "Scissors"];
const value = getComputerChoice(string);

//Double check the global variables in the global scope are compatible with function below

function getHumanChoice() {
    const humanPrompt = prompt("Rock, Paper, or Scissors?");
    switch(humanPrompt) {
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
            console.log("Please enter a valid value");
    }
    return humanPrompt;
};

let humanScore = getHumanChoice(init=0);
let computerScore = getComputerChoice(init=0);

//Make these two parameters arguments
//Make humanChoice paramater case-insensitive

function playRound(humanChoice, computerChoice) {
    let humanChoice = humanScore;
    let computerChoice = computerScore(value);
    if (humanChoice === "Rock" && computerChoice === "Paper") {
            console.log("You lose! Paper beats Rock!"); {
        if (humanChoice === "Paper" && computerChoice === "Scissors")
            console.log("You lose! Scissors beats Paper!");
        else (humanChoice === "Scissors" && computerChoice === "Rock")
            console.log("You lose! Rock beats Scissors!");
        }  
    }

    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win! Rock beats Scissors!"); {
        if (humanChoice === "Paper" && computerChoice === "Rock")
            console.log("You win! Paper beats Rock!");
        else (humanChoice === "Scissors" && computerChoice === "Paper")
            console.log("You win! Scissors beats Paper!");
        }
    }
        
    else (humanChoice === '' || humanChoice === null)
        console.log("Please enter a valid value");
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);