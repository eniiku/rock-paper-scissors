let moves = ["rock", "paper", "scissors"];

function computerPlay() {
    let movesLength = moves.length;
    let result = Math.floor(Math.random() * movesLength);
    moves = moves[result];
    return moves;
}
