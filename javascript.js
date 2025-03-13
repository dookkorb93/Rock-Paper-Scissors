function getComputerChoice() {
    const randomString = Math.floor(Math.random() * string.length);
    const value = string[randomString];
    return value;
};

const string = ["Rock", "Paper", "Scissors"];
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
            console.log("Please enter a valid value");
    }
    return humanPrompt;
};

let humanScore = getHumanChoice(init=0);
let computerScore = getComputerChoice(init=0);

//Make below two parameters arguments
//Make humanChoice paramater case-insensitive

function playRound(humanChoice, computerChoice) {
    //let humanChoice = humanScore;
    //let computerChoice = computerScore(value);
    if (humanChoice === "Rock" && computerChoice === "Paper") {
                computerScore++;
                console.log("You lose! Paper beats Rock!"); {
            if (humanChoice === "Paper" && computerChoice === "Scissors") {
                computerScore++;
                console.log("You lose! Scissors beats Paper!");
            } else (humanChoice === "Scissors" && computerChoice === "Rock")
                computerScore++;
                console.log("You lose! Rock beats Scissors!");
        }
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
                humanScore++;
                console.log("You win! Rock beats Scissors!"); {
            if (humanChoice === "Paper" && computerChoice === "Rock") {
                humanScore++;
                console.log("You win! Paper beats Rock!");
        } else (humanChoice === "Scissors" && computerChoice === "Paper")
                humanScore++;
                console.log("You win! Scissors beats Paper!");
        }
    } else (humanChoice === '' || humanChoice === null)
        console.log("Please enter a valid value");
}

// Add return values for above code and then pass function calls as arguments for different function call (log)
// Don't forget backticks 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

//add playGame for 5 rounds below this comment