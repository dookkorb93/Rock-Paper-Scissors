function getComputerChoice() {
    const randomString = Math.floor(Math.random() * string.length);
    const value = string[randomString];
    return value;
};

const string = ["Rock", "Paper", "Scissors"];
const value = getComputerChoice(string);

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

let humanScore = getHumanChoice(0);
let computerScore = getComputerChoice(0);

function playRound(humanChoice, computerChoice) {
    //Make these two parameters arguments
    //Make humanChoice paramater case-insensitive
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);