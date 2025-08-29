
// Score variables
let hScore = 0;
let cScore = 0;


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

// Function to play one round and return text output representing who won.

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

// Get button DOM elements.

const btnRock = document.querySelector(".Rock");
const btnPaper = document.querySelector(".Paper");
const btnScissors = document.querySelector(".Scissors");

// Add the button event listeners.

btnRock.addEventListener("click", (e) => {
    let humanChoice = e.target.innerText;
    let computerChoice = getComputerChoice();
    let outcome = playRound(e.target.innerText, computerChoice);
    updateScore(outcome, humanChoice, computerChoice);
});

btnPaper.addEventListener("click", (e) => {
    let humanChoice = e.target.innerText;
    let computerChoice = getComputerChoice();
    let outcome = playRound(e.target.innerText, computerChoice);
    updateScore(outcome, humanChoice, computerChoice);
});

btnScissors.addEventListener("click", (e) => {
    let humanChoice = e.target.innerText;
    let computerChoice = getComputerChoice();
    let outcome = playRound(e.target.innerText, computerChoice);
    updateScore(outcome, humanChoice, computerChoice);
});

// Set the dynamic score DOM elements.

const score = document.querySelector(".Score");
const humanScore = document.createElement("p");
humanScore.classList.add("humanScore");
humanScore.textContent = "I'm the human score: " + hScore;
humanScore.style.cssText = "Color: blue;"

const computerScore = document.createElement("p");
computerScore.classList.add("computerScore");
computerScore.textContent = "I'm the computer score: " + cScore;
computerScore.style.cssText = "Color: red;"

const roundOutcome = document.createElement("p");
roundOutcome.classList.add("roundOutcome");

// Update the score and report the outcome of the round.

function updateScore(outcome, humanChoice, computerChoice) {

    if (outcome === "Human Wins") {
        roundOutcome.textContent = humanChoice + " beats " + computerChoice + "!" + " Human wins this round!";
        hScore += 1;
    } else if (outcome === "Computer Wins") {
        roundOutcome.textContent = computerChoice + " beats " + humanChoice + "!" + " Computer wins this round!";
        cScore += 1;
    } else {
        roundOutcome.textContent = computerChoice + " ties with " + humanChoice + "!" + " Nobody wins this round!";
    }

    if (hScore === 5) {
        roundOutcome.textContent = "Human wins!";
        hScore = 0;
        cScore = 0;
        score.removeChild(humanScore);
        score.removeChild(computerScore);
    } else if (cScore === 5) {
        roundOutcome.textContent = "Computer wins!";
        hScore = 0;
        cScore = 0;
        score.removeChild(humanScore);
        score.removeChild(computerScore);
    }

    score.appendChild(roundOutcome);
    score.appendChild(humanScore);
    score.appendChild(computerScore);

    humanScore.textContent = "I'm the human score: " + hScore;
    computerScore.textContent = "I'm the computer score: " + cScore;

}



