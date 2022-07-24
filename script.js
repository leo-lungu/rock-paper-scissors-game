let playerScore = 0;

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
    return choiceString;
}

function playRound(playerSelection, computerSelection) {
    let winner = "default";
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        winner = "You lose! Paper beats rock!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        winner = "You win! Paper beats rock!";
        playerScore++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        winner = "You lose! Scissors beats paper!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        winner = "You win! Rock beats scissors!";
        playerScore++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
        winner = "You lose! Rock beats scissors!";
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

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = "";
        playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(playerScore);
}

game();