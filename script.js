const container = document.querySelector('.results');
const round = document.getElementById("round");
const scorePlayer = document.getElementById('scorePlayer');
const scoreComputer = document.getElementById('scoreComputer');
const winner = document.getElementById('winner');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3));
    let choiceString = "default";
    if (choice == 0) {
        choiceString = "rock";
    } else if (choice == 1) {
        choiceString= "paper";
    } else if (choice == 2) {
        choiceString = "scissors";
    }
    document.getElementById("computerImg").src="images/" + choiceString + ".png";
    return choiceString;
}

function playRound(playerSelection, computerSelection) {
    let winner = "default";
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        winner = "You lose! Paper beats rock!";
        computerScore++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        winner = "You win! Paper beats rock!";
        playerScore++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        winner = "You lose! Scissors beats paper!";
        computerScore++;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        winner = "You win! Rock beats scissors!";
        playerScore++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
        winner = "You lose! Rock beats scissors!";
        computerScore++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        winner = "You win! Scissors beats paper!";
        playerScore++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
        winner = "You win! Scissors beats paper!";
        playerScore++;
    } else if (playerSelection.toLowerCase() === computerSelection) {
        winner = "Draw!";
    }
    return winner;
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    round.classList.add('round');
    playerSelection = "rock";
    winnerRound(round);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    round.classList.add('round');
  playerSelection = "paper";
  winnerRound(round);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    round.classList.add('round');
  playerSelection = "scissors";
  winnerRound(round);
});

function winnerRound(round) {
    winner.textContent = "Winner: ?";
    document.getElementById("playerImg").src="images/" + playerSelection + ".png";
    round.textContent = playRound(playerSelection, getComputerChoice());
        scorePlayer.textContent = ("Player: " + playerScore);
        scoreComputer.textContent = ("Computer: " + computerScore);
        console.log(checkEnd());
}

function checkEnd() {
    if (playerScore == 5 || computerScore == 5) {
        winner.textContent = ("Winner: " + checkWinner());
        (confirm("Winner: " + checkWinner() + "\nPlayer: " + playerScore + "\nComputer: " + computerScore + "\nPress OK to reset"));
        playerScore = 0;
        computerScore = 0;
        scorePlayer.textContent = ("Player: " + playerScore);
        scoreComputer.textContent = ("Computer: " + computerScore);
    }
}

function checkWinner() {
    let winner = "Winner: ?";

    if (playerScore > computerScore) {
        winner = "Player";
    } else {
        winner = "Computer";
    }
    return winner;
}