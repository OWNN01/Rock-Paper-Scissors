

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choiceValue = Math.random();
    let computerChoice = "";

    if (choiceValue < 0.33) {
        computerChoice = "Rock"
    } else if (choiceValue >= .33 && choiceValue < .66) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }

    return computerChoice;
}

//console.log(getComputerChoice());


function getHumanChoice() {
    let rightChoice = true;
    let humanChoice = '';

    while (rightChoice) {

        humanChoice = prompt("Type Rock, Paper, or Scissors. (Exactly)");

        if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
            rightChoice = false;
            return humanChoice;
        } else {
            console.log("Please type one of the choices. CASE SENSITIVE.");
        }
    }
}



console.log(getHumanChoice());