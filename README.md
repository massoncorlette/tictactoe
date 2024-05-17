# tictactoe
Focusing on factory functions, IIFEs, and tucking code away in a organized way

pseudocode
////////////////

array p1
array p2

gameBoard()
	
	function to return updated board

	function to drop player symbol
		return value of board cell

gameFlow(playerOne,playerTwo)
	array of winning combos
	boardArray

	function to switchPlayerTurn

	function to nextRound(chosencell)
		if chosencell in boardArray
			Call nextMove
		else
			break

          nextMove function	
	   filter board(chosencell)
	    put the filtered number 
	    into playersArray
	    check player array for win
	    check for tie
	   call switchPlayerTurn
		
		
winning combos: 1,2,3 - 4,5,6 -7,8,9 - 1,4,7 - 2,5,8 - 3,6,9 
- 1,5,9 - 3,5,7
	