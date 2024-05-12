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

  //trying to get used to es6
  const getBoard = () => {
    return board;
  };
  //this is the traditional way, not es6
  //getting the cordinate value of 2D array?
  const getCellValue = function(cell) {
    return cell
  };
 
}

function gameController(playerOne,Playertwo) {

  playerOneName = playerOneName || "Player One";
  playerTwoName = playerTwoName || "Player Two";

  const board = Gameboard();

  // make player object with two arrays
  const playersObject = [{name: playerOneName, token: 1}, 
  {name: playerTwoName, token: 2}];

  const activePlayer = players[0];

  const switchPlayerTurn = function() {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = function() {
    return activePlayer;
  };

  const printNewRound = function() {
    board.printBoard();
    console.log(getActivePlayer().name + "'s turn.");

    switchPlayerTurn();
    printNewRound();
  };

  // printing updated board alongside who's turn it is
  printNewRound();

};


const createGamer = function(playerSelect, symbol) {
  return (playerSelect, symbol);
}

Gameboard();




