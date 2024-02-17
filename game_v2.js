const actions = ['Grass', 'Fire', 'Water']
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

function loadUp() {
    let buttons = document.querySelectorAll('button');
    let types = [...buttons];
    types.forEach(type => {
        type.addEventListener('click', () => playRound(type.id));
    });
}

function playRound(playerChoice) {
    let res;
    let computerChoice = getComputerChoice();
    let result = document.querySelector('.result');
    if (computerChoice == playerChoice) {
        res = `Tie, ${playerChoice} type is weak against ${computerChoice} type...`;
        result.setAttribute('style', 'background-color: yellow;');
    }
    else {
        let player = actions.indexOf(playerChoice);
        let computer  =actions.indexOf(computerChoice);
        let diff = player - computer;
        if (diff == 1 || diff == -2 ) {
            playerScore++;
            res = `You win! ${playerChoice} type is super effective against ${computerChoice} type!`;
            result.setAttribute('style', 'background-color: aquamarine;');
        }
        else {
            computerScore++;
            res = `You lose! ${playerChoice} type is weak to ${computerChoice} type!`
            result.setAttribute('style', 'background-color: rgb(221, 32, 88);');
        }
    }

    displayResult(res);
    updateBoard();

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            alert(`You win the game ${playerScore} : ${computerScore}!`);
        }
        else {
            alert(`You lose the game ${computerScore} : ${playerScore}!`);
        }
        location.reload();
    }
}

function displayResult(res) {
    let result = document.querySelector('.result');
    result.textContent = res;
}

function updateBoard() {
    let playerName = document.querySelector('#p1-name');
    let computerName = document.querySelector('#p2-name');
    let pScore = document.querySelector('#p1-score');
    let cScore = document.querySelector('#p2-score');

    playerName.textContent = 'Player';
    computerName.textContent = 'Computer';
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}

loadUp();