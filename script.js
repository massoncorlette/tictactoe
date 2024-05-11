const boardSelector = document.querySelector('#board-container');

function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];


  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i][j] = j + 1;
    }
  }
  console.log(board);
  return board;
}

Gameboard();

function displayController() {

}

function createGamer(playerSelect, symbol) {
  return (playerSelect, symbol);
}

