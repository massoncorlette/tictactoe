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
  };

};
let test = gameBoard();
let tested = test.updatedBoard();
console.log(tested);

const Gamer = function(player,symbol,points) {
  this.player = player;
  this.symbol = symbol;
  this.points = points;
  this.ownArray = [];
};

const gameFlow = function () {
  const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  const playerOne = new Gamer("Player One", 'X');
  const playerTwo = new Gamer("Player Two", 'O');
  const board = gameBoard();
  let activeBoard = board.updatedBoard;
  let activePlayer = playerOne;

  function switchPlayerTurn() {
    if (activePlayer === playerOne) {
        activePlayer = playerTwo;
    } else {
        activePlayer = playerOne;
    }
  };

  const nextRound = function(chosenCell) {
    for (let i = 0; i < activeBoard.length; i++){
      if (activeBoard[i] === chosenCell) {
        return nextMove();
      }else if(activeBoard === null) {
        console.log("Tie");
      }
    };

    function nextMove() {
      activeBoard = activeBoard.filter(chosenCell);
      activePlayer.ownArray.push(chosenCell);
      switchPlayerTurn();
    };
  };
  return {
    nextRound: nextRound
  };
};
let round = gameFlow();
console.log(round.nextRound(3));


const boardContainer = document.querySelector('#board-container');

for (let i = 0; i < 9; i++) {
  const newCell = document.createElement('div');
  newCell.classList.add('board-divs');
  boardContainer.appendChild(newCell);
};




