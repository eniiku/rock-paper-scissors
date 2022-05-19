const moves = ["rock", "paper", "scissors"];

//gets random input of moves from computer
function computerPlay() {
    let lengthOfMoves = moves.length;
    let random = Math.floor(Math.random() * lengthOfMoves);
    let result = moves[random];
    return result;
}

//plays a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection == moves[0] && computerSelection == moves[1]) {
        console.log("You Lose! Paper beats Rock");
    } else if (playerSelection == moves[1] && computerSelection == moves[0]) {
        console.log("You Win! Paper beats Rock")
    } else{
        console.log("uh-oh. not looking good");
    }
}

//calculates wins and losses and displays scores
function game() {
    let userWin = 0;
    let userLose = 0;

    for (let i = 0; i < 5; i++) {
        if (i < 5) {
            const playerSelection = prompt("Round: " + (i + 1) + " Rock, Paper, Scissors. Whats your move?");
            const computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            if (playerSelection == moves[0] && computerSelection == moves[2]) {
                userWin++;
            } else if (playerSelection == moves[1] && computerSelection == moves[0]) {
                userWin++;
            } else if (playerSelection == moves[2] && computerSelection == moves[1]) {
                userWin++;
            } else if (playerSelection == moves[2] && computerSelection == moves[0]) {
                userLose++;
            } else if (playerSelection == moves[0] && computerSelection == moves[1]) {
                userLose++;
            } else if (playerSelection == moves[1] && computerSelection == moves[2]) {
                userLose++;
            } else {
                alert("its a tie! play again")
                i--;
            }
        }
    }
    
    if (userWin > userLose) {
        console.log("You: " + userWin + " " + "Computer: " + userLose +"\nYou Win!!")
    } else if (userLose > userWin) {
        console.log("You: " + userWin + " " + "Computer: " + userLose +"\nOh no! You lost.")
    } else {
        console.log("ummmmm? wtf do we have here????")
    }
}
game();