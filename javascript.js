function getComputerChoice() {
    const randomString = Math.floor(Math.random() * string.length);
    const value = string[randomString];
    return value;
};

const string = ["Rock", "Paper", "Scissors"];
const value = getComputerChoice(string);
console.log(value);

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    const answer = humanChoice;
    switch(answer) {
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
    return answer;
};
