//Function to get a random choice by converting math.random values into choices.
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



// Function to prompt the user for a choice.
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



// Function to play one round and return a numerical output representing who won.
// 1 for the human, 2 for the computer, and nothing for a tie.
// There are 3 win cases, 1 tie case, and one loss case for the user.
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



// Function to play through the game of Rock Paper Scissors by keeping score up to 5. 
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    while ((humanScore < 5) && (computerScore < 5)) {
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
