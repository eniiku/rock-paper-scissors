const moves = ["rock", "paper", "scissors"];
let playerSelection;
const computerSelection = computerPlay();

//gets random input of moves from computer
function computerPlay() {
    let lengthOfMoves = moves.length;
    let random = Math.floor(Math.random() * lengthOfMoves);
    let result = moves[random];
    return result;
}

//plays rounds of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection == moves[0] && computerSelection == moves[2]) {
        console.log("You Win! Rock beats Scissors")
    } else if (playerSelection == moves[1] && computerSelection == moves[0]) {
        console.log("You Win! Paper beats Rock")
    } else if (playerSelection == moves[2] && computerSelection == moves[1]) {
        console.log("You Win! Scissors beats Paper")
    } else if (playerSelection == moves[1] && computerSelection == moves[2]) {
        console.log("You Lose! Scissors beats Paper")
    } else if (playerSelection == moves[0] && computerSelection == moves[1]) {
        console.log("You Lose! Paper beats Rock")
    } else if (playerSelection == moves[2] && computerSelection == moves[0]) {
        console.log("You Lose! Rock beats Scissors")
    }  else {
        console.log("Its a tie!");
    }
}

//collects functions to simulate game
function game() {
            if (playerSelection == moves[0] && computerSelection == moves[0] || 
                playerSelection == moves[0] && computerSelection == moves[0] || 
                playerSelection == moves[0] && computerSelection == moves[0]) {
                    alert("its a tie")
                }
            displayScores();
}

//displays scores and result of game
function displayScores() {
    let userWin = 0;
    let userLose = 0;
    let userScore = document.querySelector('.user-win');
    let uiScore = document.querySelector('.user-lose');
    
    if (playerSelection == moves[0] && computerSelection == moves[2] || 
        playerSelection == moves[1] && computerSelection == moves[0] || 
        playerSelection == moves[2] && computerSelection == moves[1]) {
            userWin++;
        } else if (playerSelection == moves[2] && computerSelection == moves[0] || 
            playerSelection == moves[0] && computerSelection == moves[1] || 
            playerSelection == moves[1] && computerSelection == moves[2]) {
                userLose++;
            }
            
    userScore.textContent = userWin;
    uiScore.textContent = userLose;
            
    if (userWin > userLose) {
        console.log("You: " + userWin + " " + "Computer: " + userLose +"\nYou Win!!")
    } else {
        console.log("You: " + userWin + " " + "Computer: " + userLose +"\nOh no! You lost.")
    }
}


// plays game based on user input 
document.querySelector('#player-moves').addEventListener
('click', function(e) {
    const play = e.target.getAttribute('id');

    if (play == (moves[0])) {
        playerSelection = moves[0];
        game();
    } else if (play == (moves[1])) {
        playerSelection = moves[1];
        game();
    } else {
        playerSelection = moves[2];
        game();
    }
});