# tictactoe
Focusing on factory functions, IIFEs, and tucking code away in a organized way

pseudocode
////////////////
function gameFlow
	array of winningCombos
	active player

  function to switchPlayer

  function to return values != chosenCell

  function nextMove
    push chosenCell value if not already in playerArray
      with a nested loop check for winning combo
    switchPlayer();
	
	//checking winning combos loop //
	playertracker = 0
	going through array of combos
		going through the array size 3
                 going through playerArray
		  if chosencell = playerarray[i][j]
                   playertracker += 1

AI Logic

I have nextMove(cell), I need to pass in a generated 
chosen cell from AI, but need to make sure it follows
the nextMove logic


winning combos: 1,2,3 - 4,5,6 -7,8,9 - 1,4,7 - 2,5,8 - 3,6,9 
- 1,5,9 - 3,5,7
	