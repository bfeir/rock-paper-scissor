function getComputerChoice() {
    let options = ["rock", "paper", "scissor"];
    return(options[Math.floor(Math.random()*options.length)]);
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) return("It's a tie !")
    else if ((playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper")) return ("You win !")
    else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissor") || (playerSelection == "scissor" && computerSelection == "rock")) return ("You lose !")
}

function game() {
    for(i=0; i<5; i++) {
        console.log(playRound(prompt().toLowerCase(), getComputerChoice()));
    }
}
