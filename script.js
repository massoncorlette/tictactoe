const gameBoard = function () {
  const boardArray = [];
  const cells = 9; 

  for (let i = 0; i < cells; i++) {
    boardArray[i] = i;
  }

  const updatedBoard = function() {
    return boardArray;
  };

  const dropToken = function(symbol,cell) {
    const pickedCell = cell;

    return pickedCell = symbol;
  }

};

const Gamer = function(player,symbol,points) {
  this.player = player;
  this.symbol = symbol;
  this.points = points;
};

const gameFlow = function (playerOne, playerTwo) {
  const board = gameBoard();
  let activePlayer = playerOne;

  function switchPlayerTurn() {
    if (activePlayer === playerOne) {
        activePlayer = playerTwo;
    } else {
        activePlayer = playerOne;
    }
  }



};

const boardContainer = document.querySelector('#board-container');

for (let i = 0; i < 9; i++) {
  const newCell = document.createElement('div');
  newCell.classList.add('board-divs');
  boardContainer.appendChild(newCell);
}





