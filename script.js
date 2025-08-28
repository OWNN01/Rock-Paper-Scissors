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
        return "Human Wins";
    } else if ((humanChoice === "Paper") && (computerChoice === "Rock")) {
        return "Human Wins";
    } else if ((humanChoice === "Scissors") && (computerChoice === "Paper")) {
        return "Human Wins";
    } else if (humanChoice === computerChoice) {
        return "Tie!";
    } else {
        return "Computer Wins";
    }

}



// Function to play through the game of Rock Paper Scissors by keeping score up to 5. 
function playGame() {
    let humanScore = 0;
    let computerScore = 0;


    while ((humanScore < 1) && (computerScore < 1)) {
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


//playGame();

const btnRock = document.querySelector(".Rock");
const btnPaper = document.querySelector(".Paper");
const btnScissors = document.querySelector(".Scissors");

btnRock.addEventListener("click", (e) => {
    console.log(playRound(e.target.innerText, getComputerChoice()));
})

btnPaper.addEventListener("click", (e) => {
    console.log(playRound(e.target.innerText, getComputerChoice()));
})

btnScissors.addEventListener("click", (e) => {
    console.log(playRound(e.target.innerText, getComputerChoice()));
})
