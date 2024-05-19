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

  let playerOne = new Gamer("Player One", 'X');
  let playerTwo = new Gamer("Player Two", 'O');
  let board = gameBoard();
  let activePlayer = playerOne;

  function switchPlayer() {
    if(activePlayer === playerOne) {
      activePlayer = playerTwo;
    }else{
      activePlayer = playerOne;
    }
  };

  const nextMove = function(chosenCell) {
    for (let i = 0; i < activePlayer.ownArray.length; i++) {
      if (activePlayer.ownArray[i] === chosenCell) {
        console.log("invalid");
        return;
      };
    };
    activePlayer.ownArray.push(chosenCell);
    // check winning combinations
    let counter = 0;
    for (let i = 0; i < winningCombos.length;i++){
      counter = 0;
      for (let j = 0; j < 3;j++){
        if (chosenCell === winningCombos[i][j]) {
          counter += 1;
          console.log(counter);
          if (counter === 3) {
            console.log(activePlayer.player);
            return activePlayer.player;
          }
        };
      };
    };
    switchPlayer();
  }
  console.log(playerOne);
  console.log(playerTwo);
  return {
    nextMove:nextMove
  }
};
gameFlow();


const boardContainer = document.querySelector('#board-container');

for (let i = 0; i < 9; i++) {
  const newCell = document.createElement('div');
  newCell.classList.add('board-divs');
  boardContainer.appendChild(newCell);
};

let allCells = document.querySelectorAll('.board-divs');

let game = gameFlow();
//index argument in forEach used for iteration
//each index number maps onto each cell correctly
allCells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    game.nextMove(index + 1); 
    console.log(`Cell ${index + 1}`, cell);
  });
});



