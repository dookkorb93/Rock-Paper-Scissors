function getComputerChoice(textString) {
    const string = ["Rock", "Paper", "Scissors"];
    const randomString = Math.floor(Math.random() * string.length);
    return textString[randomString]
}

const randomWord = getComputerChoice(myString);

//let choice = prompt("Rock, Paper, or Scissors?");
function getHumanChoice() {
    return randomWord;
}

console.log(randomWord);
