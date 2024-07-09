const choices = ["rock", "paper", "scissors"]

const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("results")
const playerScoreDisplay = document.getElementById("playerScore")
const computerScoreDisplay = document.getElementById("ComputerScore")
let playerScore = 0
let computerScore = 0

function playGame(playerChoice){
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    console.log(computerChoice)

    let results = ""
    if(playerChoice === computerChoice){
        results = "It's a tie"
    }
    else{
        switch(playerChoice){
            case "rock":
                results = (computerChoice === "scissors")? "You Win!":"You Lose"
                break;
            case "paper":
                results = (computerChoice === "rock")? "You Win!":"You Lose"

                break;
            case "scissors":
                results = (computerChoice === "paper")? "You Win!":"You Lose"
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`

    resultDisplay.textContent = results
    resultDisplay.classList.remove("green", "red")

    switch(results){
        case "You Win!":
            resultDisplay.classList.add("green")
            playerScore++
            playerScoreDisplay.textContent = `Player: ${playerScore}`
            break;
        case "You Lose":
            resultDisplay.classList.add("red")
            computerScore++
            computerScoreDisplay.textContent = `Computer ${computerScore}`
            break;
    }
}