function getComputerChoice() {
    let options = ["rock", "paper", "scissor"];
    return(options[Math.floor(Math.random()*options.length)]);
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) return(playerTie());
    else if ((playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper"))
    return (playerWin());
    else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissor") || (playerSelection == "scissor" && computerSelection == "rock"))
    return (playerLose());
}

function playerWin() {
    const container = document.querySelector(".container");
    container.textContent = "You won !";
    playerScore += 1;
    const playerResult = document.querySelector(".playerScore");
    playerResult.textContent = `Your score : ${playerScore}`;
    if(playerScore === 5) {
        const endGame = document.querySelector(".result");
        endGame.textContent = "You won the game !!";
    }
}

function playerLose() {
    const container = document.querySelector(".container");
    container.textContent = "You lost...";
    computerScore += 1;
    const computerResult = document.querySelector(".computerScore");
    computerResult.textContent = `Computer score : ${computerScore}`;
    if(computerScore === 5) {
        const endGame = document.querySelector(".result");
        endGame.textContent = "You lost the game...";
    }
}

function playerTie() {
    const container = document.querySelector(".container");
    container.textContent = "It's a tie.";
}

const rockButton = document.querySelector("#rockButton");
rockButton.addEventListener('click', () => {
   playRound("rock", getComputerChoice());

});

const paperButton = document.querySelector("#paperButton");
paperButton.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});

const scissorButton = document.querySelector("#scissorButton");
scissorButton.addEventListener('click', () => {
    playRound("scissor", getComputerChoice());
});

//function game() {
//        console.log(playRound(prompt().toLowerCase(), getComputerChoice()));
//    }