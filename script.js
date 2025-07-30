

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choiceValue = Math.random();
    let computerChoice = "";

    if (choiceValue < 0.33) {
        computerChoice = "Rock";
    } else if (choiceValue >= .33 && choiceValue < .66) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
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




function playRound(humanChoice, computerChoice) {

    if ((humanChoice === "Rock") && (computerChoice === "Scissors")) {
        return 1;
    } else if ((humanChoice === "Paper") && (computerChoice === "Rock")) {
        return 1;
    } else if ((humanChoice === "Scissors") && (computerChoice === "Paper")) {
        return 1;
    } else if (humanChoice === computerChoice) {
        console.log("Tie!")
    } else {
        return 2;
    }

}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    while ((humanScore < 5) || (computerScore < 5)) {
        let outcome = 0;
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        outcome = playRound(humanChoice, computerChoice);
        if (outcome === 1) {
            console.log(humanChoice + " beats " + computerChoice + "!" + " Human wins this round!");
            humanScore += 1;
        } else if (outcome === 2) {
            console.log(computerChoice + " beats " + humanChoice + "!" + " Computer wins this round!");
            computerScore += 1;
        }
        console.log("Human Score: " + humanScore);
        console.log("ComputerScore: " + computerScore);
    }

    if (humanScore === 5) {
        console.log("Human wins!");
    } else {
        console.log("Computer wins!");
    }

}

playGame();
