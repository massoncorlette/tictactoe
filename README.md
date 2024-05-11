# tictactoe
Focusing on factory functions, IIFEs, and tucking code away in a organized way

some beginning rough pseudo
declare player object(symbol)
	this.symbol = symbol


declare gameBoard object(player arg)

	initialize gameBoard array
	loop through array to append divs
	forEach element add Event listener (click => 
		append(player.symbol) to array[i]


First thing instructions ask is to put the gameboard in a array,
I am initially thinking about doing a 2D array that is numbered
1-3 per row and column, and the diagonals would include numbers
1,2,3 which could track when there is a winner. (1,1,1 or 3,2,1
etc)