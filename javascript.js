function getComputerChoice(textString) {
    const string = ["Rock", "Paper", "Scissors"];
    const randomString = Math.floor(Math.random() * string.length);
    return textString[randomString]
}

const randomWord = getComputerChoice(myString);

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, or Scissors?");
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
}

console.log(randomWord);
