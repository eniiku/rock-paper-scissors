const moves = ["rock", "paper", "scissors"];
const playerSelection = moves[0];
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection))

//gets random input of moves from computer
function computerPlay() {
    let lengthOfMoves = moves.length;
    let random = Math.floor(Math.random() * lengthOfMoves);
    let result = moves[random];
    return result;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == moves[0] && computerSelection == moves[1]) {
        console.log("You Lose! Paper beats");
    } else {
        console.log("uh-oh. not looking good");
    }
    return
}

