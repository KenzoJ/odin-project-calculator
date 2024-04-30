let playerScore = 0
let computerScore = 0
let currentRound = 0
let playerCounter = document.querySelector("#player")
let computerCounter = document.querySelector("#computer")
let currentComputerChoice = document.querySelector("#computer-choice-round")
let finalWinner = document.querySelector("#winner")


const btn = document.querySelectorAll(".buttons")
//button is clicked and gets the computer choice
//then uses Round to mark the score and update the standings
btn.forEach((button) =>{
    button.addEventListener("click", function(e) {
        let playerSelection = e.target.innerText
        let computerSelection = getComputerChoice();
        Round(playerSelection, computerSelection)
        }
    )})

function getComputerChoice() {
    let computerHand = Math.floor(Math.random() * 3);
    switch (computerHand) {
        case 0:
            currentComputerChoice.innerText = "Rock"
            return "rock";
        case 1:
            currentComputerChoice.innerText = "Scissors"
            return "scissors"
        case 2: 
            currentComputerChoice.innerText = "Paper"
            return "paper"
    }
}

//checks the winner and updates the standings
function Round(playerSelection, computerSelection) {
    currentRound++

    document.querySelector("#current-rounds").innerHTML = currentRound
    if (playerSelection === "Rock") {
        if (computerSelection === "rock") {
            tie();
        } else if (computerSelection === "scissors") {
            won();    
        } else {
            lost();
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "paper") {
            tie();
        } else if (computerSelection === "rock") {
            won();     
        } else {
            lost();
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "scissors") {
            tie();
        } else if (computerSelection === "paper") {
            won();     
        } else {
            lost();
        }
    
    }}

function won() {
    playerScore++
    document.querySelector("#player").innerHTML = playerScore
    if (currentRound === 5) checkWinner()
}

function lost() {
    computerScore++
    document.querySelector("#computer").innerHTML = computerScore
    if (currentRound === 5) checkWinner()
}

function tie() {
    if (currentRound === 5) checkWinner()
}

function checkWinner() {
    if (playerScore > computerScore) {
        finalWinner.innerText = "You won!"
    } else if (playerScore < computerScore) {
        finalWinner.innerText = "You lost..."
    
    } 
}
