const closeDialog = document.getElementById('closeDialog');
let main = document.querySelector('main');
let titleScreen = document.getElementById('titlescreen');

const gameBoard = function () {
  const boardArray = [];
  const cells = 9; 

  for (let i = 0; i < cells; i++) {
    boardArray[i] = i + 1;
  }

  const displayBoard = function() {
    let createContainer = document.createElement('div');
    createContainer.id = 'board';
    main.removeChild(titleScreen);
    main.appendChild(createContainer);
    let boardContainer = document.querySelector('#board');

    for (let i = 0; i < 9; i++) {
      const newCell = document.createElement('div');
      newCell.classList.add('board-divs');
      boardContainer.appendChild(newCell);
    };
  };

  const resetBoard = function(cell) {
    cell.innerHTML = null;
  }
  return {
    displayBoard:displayBoard,
    resetBoard:resetBoard
  };
};

const Gamer = function(player,symbol,tracker,wins) {
  this.player = player;
  this.symbol = symbol;
  this.tracker = tracker;
  this.wins = wins;
  this.ownArray = [];

  this.incrementWins = function() {
    this.wins += 1;
  };
};

let playerOne = new Gamer("Player One", 'X',0,0);
let playerTwo = new Gamer("Player Two", 'O',0,0);

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

  let activePlayer = playerOne;

  const switchPlayer = function() {
    if(activePlayer === playerOne) {
      activePlayer = playerTwo;
    }else{
      activePlayer = playerOne;
    }
  };

  const returnSymbol = function() {
    return activePlayer.symbol;
  }

  const nextMove = function(chosenCell) {
    let displayWinner = document.querySelector('#winner-display');
    for (let i = 0; i < activePlayer.ownArray.length; i++) {
      if (activePlayer.ownArray[i] === chosenCell) {
        console.log("invalid");
        return;
      };
    };
    activePlayer.ownArray.push(chosenCell);
    // check winning combinations
    for (let i = 0; i < winningCombos.length;i++){
      activePlayer.tracker = 0;
      for (let j = 0; j < 3;j++){
        for (let k = 0; k < activePlayer.ownArray.length; k++){
          if (activePlayer.ownArray[k] === winningCombos[i][j]) {
            activePlayer.tracker += 1;
            if (activePlayer.tracker === 3) {
              activePlayer.incrementWins();
              activePlayer.ownArray = [];
              playerOne.tracker = 0;
              playerTwo.tracker = 0;
              playerOne.ownArray = [];
              playerTwo.ownArray = [];
              document.getElementById('dialog-box').showModal();
              displayWinner.innerHTML = activePlayer.player + `${" Wins! "}` + activePlayer.player + `${" has "}` + activePlayer.wins + `${" wins."}`;
              break;
            }
          };
        };
      };
    };
  };
  console.log(playerOne);
  console.log(playerTwo);
  return {
    nextMove:nextMove,
    switchPlayer:switchPlayer,
    returnSymbol:returnSymbol
  }
};
let game = gameFlow();
let board = gameBoard();

// upon page loading in
document.addEventListener("DOMContentLoaded", () => {
  let screen = document.createElement('img');
  let btnOne = document.createElement('button');
  let btnTwo = document.createElement('button');
  let titleTxt = document.createElement('p');
  titleTxt.id = 'titleTxt';
  titleTxt.textContent = 'This is placeholder Text';
  let selectionDiv = document.createElement('div');
  selectionDiv.classList.add('selectiondiv');
  btnOne.classList.add('selectionBtns');
  btnOne.id = 'startBtn';
  btnTwo.classList.add('selectionBtns');
  screen.src = 'images/egypttheme.jpg';
  selectionDiv.appendChild(btnOne);
  selectionDiv.appendChild(btnTwo);
  selectionDiv.appendChild(titleTxt);
  titleScreen.appendChild(screen);
  titleScreen.appendChild(selectionDiv);

  let startBtn = document.querySelector('#startBtn');

  startBtn.addEventListener('click', () => {
    board.displayBoard();

    let allCells = document.querySelectorAll('.board-divs');

    //index argument in forEach used for iteration
    //each index number maps onto each cell correctly
    allCells.forEach((cell, index) => {
      cell.addEventListener("click", () => {
        if (!cell.innerHTML) {
          game.nextMove(index + 1); 
          cell.innerHTML = game.returnSymbol();
          game.switchPlayer();
        }
      });
    });

    closeDialog.addEventListener("click", () => {
      document.getElementById('dialog-box').close();
      allCells.forEach((cell) => {
        board.resetBoard(cell);
      })
    });
  });
});





