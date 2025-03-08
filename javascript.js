function getComputerChoice(textString) {
    const randomString = Math.floor(Math.random() * textString.length);
    return textString [randomString]
}

