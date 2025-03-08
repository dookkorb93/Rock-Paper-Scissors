function getComputerChoice(textString) {
    const randomString = Math.floor(Math.random() * textString.length);
    return textString[randomString]
}
const myString = ["Rock", "Paper", "Scissors"];
const randomWord = getComputerChoice(myString);