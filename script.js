let playerOneMoves = [];
let playerTwoMoves = [];

const gameBoard = function () {
  const boardArray = [];
  const cells = 9; 

  for (let i = 0; i < cells; i++) {
    boardArray[i] = i + 1;
  }

  const updatedBoard = function() {
    return boardArray;
  };

  return {
    updatedBoard: updatedBoard,
    dropToken: dropToken
  };

};
let test = gameBoard();
let tested = test.updatedBoard();
console.log(tested);

const Gamer = function(player,symbol,points) {
  this.player = player;
  this.symbol = symbol;
  this.points = points;
};

const gameFlow = function (playerOne, playerTwo) {
  const board = gameBoard();
  let activeBoard = board.updatedBoard;
  let activePlayer = playerOne;

  function switchPlayerTurn() {
    if (activePlayer === playerOne) {
        activePlayer = playerTwo;
    } else {
        activePlayer = playerOne;
    }

  const nextRound = function(chosenCell) {
    for (let i = 0; i < activeBoard.length; i++){
      if (activeBoard[i] === chosenCell) {
        return nextMove();
      }else if(activeBoard === null) {
        console.log("Tie");
      }
    };

    function nextMove(player) {
      activeBoard = activeBoard.filter(chosenCell);
      };
    };
  };
};

const boardContainer = document.querySelector('#board-container');

for (let i = 0; i < 9; i++) {
  const newCell = document.createElement('div');
  newCell.classList.add('board-divs');
  boardContainer.appendChild(newCell);
};





