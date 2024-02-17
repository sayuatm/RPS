const actions = ['Rock', 'Paper', 'Scissor']
let playerScore = 0
let computerScore = 0

function getRandomInt(low, high) {
    let min = Math.ceil(low)
    let max = Math.floor(high)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function getComputerChoice() {
    return actions[getRandomInt(0, 100) % 3]
}


function getPlayerChoice() {
    let choice = null
    while (!actions.includes(choice)) {
        let s = prompt("Enter choice")
        choice = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
    }
    return choice
}

// console.log(getComputerChoice())
// getComputerChoice()
// getPlayerChoice()

function playRound() {
    let playerChoice = getPlayerChoice()
    let computerChoice = getComputerChoice()
    let diff = playerChoice.length - computerChoice.length
    if (diff == 2 || diff == 1 || diff == -3) {
        playerScore++
        alert(`You win! ${playerChoice} beats ${computerChoice} \n ${playerScore} : ${computerScore}`)
        return 'player'
    }
    else if (diff == 0) {
        alert(`A ${playerChoice}-${computerChoice} tie \n ${playerScore} : ${computerScore}`)
        return playRound()
    }
    else {
        computerScore++
        alert(`You lose! ${computerChoice} beats ${playerChoice} \n ${playerScore} : ${computerScore}`)
        return 'computer'
    }
}

function playGame() {
    while (playerScore < 3 && computerScore < 3) {
        playRound()
    }
    let winner
    if (player > computer) {
        winner = 'player'
    }
    else {
        winner = 'computer'
    }
    alert(`Winner is ${winner}(${playerScore} : ${computerScore})`)
}

// playGame()
playRound