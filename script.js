const closeDialog = document.getElementById('closeDialog');
let main = document.querySelector('main');
let titleScreen = document.getElementById('titlescreen');

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
let activePlayer = playerOne;

const gameBoard = function () {

  function makeBoard() {
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
  }

  const displayBoardAI = function(difficulty) {
    makeBoard();
    let allCells = document.querySelectorAll('.board-divs');
    let moves = [1,2,3,4,5,6,7,8,9];

    function availableMoves(cell) {
      return !playerOne.ownArray.includes(cell) && !playerTwo.ownArray.includes(cell);
    };

    function getAIMove(chosenCell) {
      let randomMove = null;
      let currentMoves = moves.filter(availableMoves);
      console.log(currentMoves);

      if (difficulty === "Normal") {
        randomMove = currentMoves[Math.floor(Math.random() * currentMoves.length )];
      }else if (difficulty === "Hard") {
        for (let i = 0; i < currentMoves.length; i++) {
          
        }
      };
      return randomMove;
    }; 

    allCells.forEach((cell, index) => {
      cell.addEventListener("click", () => {
        if (!cell.innerHTML) {
          cell.innerHTML = game.returnSymbol();
          game.nextMove(index + 1);
          if (activePlayer === playerTwo) {
            aiMove = getAIMove();
            allCells[aiMove - 1].innerHTML = game.returnSymbol();
            game.nextMove(aiMove);
          } 
        }
      });
    });
    closeDialog.addEventListener("click", () => {
      document.getElementById('dialog-box').close();
      allCells.forEach((cell) => {
        board.resetBoard(cell);
      })
    });  
  };

  const displayBoard = function() {
    makeBoard();
    let allCells = document.querySelectorAll('.board-divs');
    //index argument in forEach used for iteration
    //each index number maps onto each cell correctly
    allCells.forEach((cell, index) => {
      cell.addEventListener("click", () => {
        if (!cell.innerHTML) {
          cell.innerHTML = game.returnSymbol();
          game.nextMove(index + 1); 
        }
      });
    });
    closeDialog.addEventListener("click", () => {
      document.getElementById('dialog-box').close();
      allCells.forEach((cell) => {
        board.resetBoard(cell);
      })
    });
  };

  const resetBoard = function(cell) {
    cell.innerHTML = null;
  };

  return {
    displayBoard:displayBoard,
    displayBoardAI:displayBoardAI,
    resetBoard:resetBoard
  };
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

  function switchPlayer() {
    if(activePlayer === playerOne) {
      activePlayer = playerTwo;
    }else{
      activePlayer = playerOne;
    }
  };

  const returnSymbol = function() {
    return activePlayer.symbol;
  }

  function checkWinningCombos() {
    let displayWinner = document.querySelector('#winner-display');
    for (let i = 0; i < winningCombos.length;i++){
      activePlayer.tracker = 0;
      for (let j = 0; j < 3;j++){
        for (let k = 0; k < activePlayer.ownArray.length; k++){
          if (activePlayer.ownArray[k] === winningCombos[i][j]) {
            activePlayer.tracker += 1;
            // upon winning
            if (activePlayer.tracker === 3) {
              activePlayer.incrementWins();
              document.getElementById('dialog-box').showModal();
              displayWinner.innerHTML = activePlayer.player + `${" Wins! "}` + activePlayer.player + `${" has "}` + activePlayer.wins + `${" wins."}`;
              playerOne.tracker = 0;
              playerTwo.tracker = 0;
              playerOne.ownArray = [];
              playerTwo.ownArray = [];
              return 1;
            }
          };
        };
      };
    };
  }

  const nextMove = function(chosenCell) {
    let displayWinner = document.querySelector('#winner-display');
    for (let i = 0; i < activePlayer.ownArray.length; i++) {
      if (activePlayer.ownArray[i] === chosenCell) {
        console.log("invalid");
        return 1;
      };
    };
    activePlayer.ownArray.push(chosenCell);
    console.log(playerOne);
    console.log(playerTwo);
    // check winning combinations
    if (checkWinningCombos() === 1) {
      activePlayer = playerOne;
      return;
    }
    if (activePlayer.ownArray.length === 5) {
      document.getElementById('dialog-box').showModal();
      displayWinner.innerHTML = "Uh oh... TIE Game!"
    }
    switchPlayer();
  };
  return {
    nextMove:nextMove,
    returnSymbol:returnSymbol,
    checkWinningCombos:checkWinningCombos
  }
};
let game = gameFlow();
let board = gameBoard();

// upon page loading in
document.addEventListener("DOMContentLoaded", () => {
  let screen = document.createElement('img');
  let btnOne = document.createElement('button');
  let btnTwo = document.createElement('button');
  let designTxt = document.createElement('p');
  let titleTxt = document.createElement('h1');
  designTxt.id = 'designTxt';
  titleTxt.id = 'titleTxt';
  designTxt.textContent = 'برج إله الكلببرج إله الكلب يترجم بالملايين مع ديب كل يوم. الشائعة: من الإسبانية إلى الإنجليزية، ومن الفرنسية إلى الإنجليزية، ومن اليابانية إلى الإنجليزية. حدد لغة المصدر. تم اختياره حاليًا وهو القاموس وقاموس المرادفات الأكثر شيوعًا لمتعلمي اللغة الإنجليزية. معاني وتعريفات الكلمات مع النطق والترجمات.  أكثر من الملايين يترجمون كل يوم. الشائعة: من الإسبانية إلى الإنجليزية، ومن الفرنسية إلى الإنجليزية، ومن اليابانية إلى الإنجليزية. حدد لغة المصدر. تم اختياره حاليًا وهو القاموس وقاموس المرادفات الأكثر شيوعًا لمتعلمي اللغة الإنجليزية. المعاني ولماذا تعريفات الكلمات مع النطق والترجمات. ترجمة النصوص والمستندات على الفور وبدقة. تعزيز التعاون من خلال الترجمة اللغوية الدقيقة. جرب مترجمنا اللغوي الفعال الذي يترجم ملايين الأشخاص كل يوم. الشائعة: من الإسبانية إلى الإنجليزية، ومن الفرنسية إلى الإنجليزية، ومن اليابانية إلى الإنجليزية. حدد لغة المصدر. تم اختياره حاليًا وهو القاموس وقاموس المرادفات الأكثر شيوعًا لمتعلمي اللغة الإنجليزية. معاني وتعريفات الكلمات مع النطق والترجمات. برج إله الكلب يترجم بالملايين مع ديب كل يوم. الشائعة: من الإسبانية إلى الإنجليزية، ومن الفرنسية إلى الإنجليزية، ومن اليابانية إلى الإنجليزية. حدد لغة المصدر. تم اختياره حاليًا وهو القاموس وقاموس المرادفات الأكثر شيوعًا لمتعلمي اللغة الإنجليزية. معاني وتعريفات الكلمات مع النطق والترجمات. ترجمة النصوص والمستندات على الفور وبدقة. تعزيز التعاون من خلال الترجمة اللغوية الدقيقة. جرب مترجم لغة الذكاء الاصطناعي الفعال لدينابرج إله الكلببرج إله الكلب يترجم بالملايين مع ديب كل يوم. الشائعة: من الإسبانية إلى الإنجليزية، ومن الفرنسية إلى الإنجليزية، ومن اليابانية إلى الإنجليزية. حدد لغة المصدر. تم اختياره حاليًا وهو القاموس وقاموس المرادفات الأكثر شيوعًا لمتعلمي اللغة الإنجليزية. معاني وتعريفات الكلمات مع النطق والترجمات. أكثر من الملايين يترجمون كل يوم. الشائعة: من الإسبانية إلى الإنجليزية، ومن الفرنسية إلى الإنجليزية، ومن اليابانية إلى الإنجليزية. حدد لغة المصدر. تم اختياره حاليًا وهو القاموس وقاموس المرادفات الأكثر شيوعًا لمتعلمي اللغة الإنجليزية. المعاني ولماذا تعريفات الكلمات مع النطق والترجمات. ترجمة النصوص والمستندات على الفور وبدقة. تعزيز التعاون من خلال الترجمة اللغوية الدقيقة. جرب مترجمنا اللغوي الفعال الذي يترجم ملايين الأشخاص كل يوم. الشائعة: من الإسبانية إلى الإنجليزية، ومن الفرنسية إلى الإنجليزية، ومن اليابانية إلى الإنجليزية. حدد لغة المصدر. تم اختياره حاليًا وهو القاموس وقاموس المرادفات الأكثر شيوعًا لمتعلمي اللغة الإنجليزية. معاني وتعريفات الكلمات مع النطق والترجمات. برج إله الكلب يترجم بالملايين مع ديب كل يوم. الشائعة: من الإسبانية إلى الإنجليزية، ومن الفرنسية إلى الإنجليزية، ومن اليابانية إلى الإنجليزية. حدد لغة المصدر. تم اختياره حاليًا وهو القاموس وقاموس المرادفات الأكثر شيوعًا لمتعلمي اللغة الإنجليزية. معاني وتعريفات الكلمات مع النطق والترجمات. ترجمة النصوص والمستندات على الفور وبدقة. تعزيز التعاون من خلال الترجمة اللغوية الدقيقة. جرب مترجم لغة الذكاء الاصطناعي الفعال لدينابرج إله الكلببرج إله الكلب يترجم بالملايين مع ديب كل يوم. الشائعة: من الإسبانية إلى الإنجليزية، ومن الفرنسية إلى الإنجليزية، ومن اليابانية إلى الإنجليزية. حدد لغة المصدر. تم اختياره حاليًا وهو القاموس وقاموس المرادفات الأكثر شيوعًا لمتعلمي اللغة الإنجليزية. معاني وتعريفات الكلمات مع النطق والترجمات. أكثر من الملايين يترجمون كل يوم. الشائعة: من الإسبانية إلى الإنجليزية، ومن الفرنسية إلى الإنجليزية، ومن اليابانية إلى الإنجليزية. حدد لغة المصدر. تم اختياره حاليًا وهو القاموس وقاموس المرادفات الأكثر شيوعًا لمتعلمي اللغة الإنجليزية. المعاني ولماذا تعريفات الكلمات مع النطق والترجمات. ترجمة النصوص والمستندات على الفور وبدقة. تعزيز التعاون من خلال الترجمة اللغوية الدقيقة. جرب مترجمنا اللغوي الفعال الذي يترجم ملايين الأشخاص كل يوم. الشائعة: من الإسبانية إلى الإنجليزية، ومن الفرنسية إلى الإنجليزية، ومن اليابانية إلى الإنجليزية. حدد لغة المصدر. تم اختياره حاليًا وهو القاموس وقاموس المرادفات الأكثر شيوعًا لمتعلمي اللغة الإنجليزية. معاني وتعريفات الكلمات مع النطق والترجمات. برج إله الكلب يترجم بالملايين مع ديب كل يوم. الشائعة: من الإسبانية إلى الإنجليزية، ومن الفرنسية إلى الإنجليزية، ومن اليابانية إلى الإنجليزية. حدد لغة المصدر. تم اختياره حاليًا وهو القاموس وقاموس المرادفات الأكثر شيوعًا لمتعلمي اللغة الإنجليزية. معاني وتعريفات الكلمات مع النطق والترجمات. ترجمة النصوص والمستندات على الفور وبدقة. تعزيز التعاون من خلال الترجمة اللغوية الدقيقة. جرب مترجم لغة الذكاء الاصطناعي الفعال لدينابرج إله الكلببرج إله الكلب يترجم بالملايين مع ديب كل يوم. الشائعة: من الإسبانية إلى الإنجليزية، ومن الفرنسية إلى الإنجليزية، ومن اليابانية إلى الإنجليزية. حدد لغة المصدر. تم اختياره حاليًا وهو القاموس وقاموس المرادفات الأكثر شيوعًا لمتعلمي اللغة الإنجليزية. معاني وتعريفات الكلمات مع النطق والترجمات. أكثر من الملايين يترجمون كل يوم. الشائعة: من الإسبانية إلى الإنجليزية، ومن الفرنسية إلى الإنجليزية، ومن اليابانية إلى الإنجليزية. حدد لغة المصدر. تم اختياره حاليًا وهو القاموس وقاموس المرادفات الأكثر شيوعًا لمتعلمي اللغة الإنجليزية. المعاني ولماذا تعريفات الكلمات مع النطق والترجمات. ترجمة النصوص والمستندات على الفور وبدقة. تعزيز التعاون من خلال الترجمة اللغوية الدقيقة. جرب مترجمنا اللغوي الفعال الذي يترجم ملايين الأشخاص كل يوم. الشائعة: من الإسبانية إلى الإنجليزية، ومن الفرنسية إلى الإنجليزية، ومن اليابانية إلى الإنجليزية. حدد لغة المصدر. تم اختياره حاليًا وهو القاموس وقاموس المرادفات الأكثر شيوعًا لمتعلمي اللغة الإنجليزية. معاني وتعريفات الكلمات مع النطق والترجمات. برج إله الكلب يترجم بالملايين مع ديب كل يوم. الشائعة: من الإسبانية إلى الإنجليزية، ومن الفرنسية إلى الإنجليزية، ومن اليابانية إلى الإنجليزية. حدد لغة المصدر. تم اختياره حاليًا وهو القاموس وقاموس المرادفات الأكثر شيوعًا لمتعلمي اللغة الإنجليزية. معاني وتعريفات الكلمات مع النطق والترجمات. ترجمة النصوص والمستندات على الفور وبدقة. جرب مترجم لغة الذكاء الاصطناعي الفعال لدينا';
  titleTxt.textContent = 'Ancient TicTacToe'
  let selectionDiv = document.createElement('div');
  selectionDiv.classList.add('selectiondiv');
  btnOne.classList.add('selectionBtns');
  btnTwo.classList.add('selectionBtns');
  btnOne.id = 'startBtn';
  btnOne.innerHTML = '2P';
  btnTwo.id = 'aiBtn';
  btnTwo.innerHTML = 'AI';
  btnTwo.classList.add('selectionBtns');
  screen.src = 'images/egypttheme.jpg';
  screen.id = 'egyptImg';
  selectionDiv.appendChild(btnOne);
  selectionDiv.appendChild(btnTwo);
  selectionDiv.appendChild(designTxt);
  selectionDiv.appendChild(titleTxt);
  titleScreen.appendChild(screen);
  titleScreen.appendChild(selectionDiv);

  let startBtn = document.querySelector('#startBtn');
  let aiBtn = document.querySelector('#aiBtn');

  startBtn.addEventListener('click', () => {
    board.displayBoard();
  });

  aiBtn.addEventListener('click', () => {
    let selectionBtns = document.querySelector('.selectiondiv');
    let difficultyDiv = document.createElement('div');
    let btnNormal = document.createElement('button');
    let btnHard = document.createElement('button');
    
    difficultyDiv.id = 'difficultyDiv';
    btnNormal.id = 'btnNormal';
    btnHard.id = 'btnHard';

    btnNormal.classList.add("selectionBtns");
    btnHard.classList.add("selectionBtns");
    btnNormal.innerHTML = "Normal";
    btnHard.innerHTML = "Hard";
    difficultyDiv.appendChild(btnNormal);
    difficultyDiv.appendChild(btnHard);
    
    selectionBtns.removeChild(startBtn);
    selectionBtns.removeChild(aiBtn);
    selectionBtns.appendChild(difficultyDiv);

   btnNormal.addEventListener('click', () => {
    board.displayBoardAI(btnNormal.innerHTML);
   })
  })
});





