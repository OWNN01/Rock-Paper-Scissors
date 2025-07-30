

function getComputerChoice() {
    let choiceValue = Math.random();
    let choice = "";

    if (choiceValue < 0.33) {
        choice = "Rock"
    } else if (choiceValue >= .33 && choiceValue < .66) {
        choice = "Paper"
    } else {
        choice = "Scissors"
    }

    return choice;
}

//console.log(getComputerChoice());