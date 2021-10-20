let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
nextPlayer = prompt("Choose X or O");
if(nextPlayer != 'X' && nextPlayer != 'O'){
    nextPlayer = 'X';
}

// use the value stored in the nextPlayer variable to indicate who the next player is
let nextPlayerlbl = document.getElementById('next-lbl');
nextPlayerlbl.textContent = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   let cell = document.querySelectorAll('td');
   let htmlAdd = '<button>[]</button>';

   for(let i =0; i < cell.length; i++){
       cell[i].innerHTML = htmlAdd;
   }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   let clicked = event.target;
   clicked.textContent = '[' + nextPlayer + ']';

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    clicked.setAttribute('disabled','disabled');
    if(nextPlayer == 'X'){
        nextPlayer = 'O';
    }else nextPlayer = 'X';

    nextPlayerlbl.textContent = nextPlayer;

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let gameOverlbl = document.querySelector('#game-over-lbl');
        gameOverlbl.innerHTML = '<h1>Game Over</h1>'
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let buttonArr = document.querySelectorAll('button');
    let disableCount = 0;
    for(let i = 0; i<buttonArr.length; i++){
        if(buttonArr[i].disabled)
            disableCount++;
    }
    if(disableCount == buttonArr.length)
        return true;
    else 
        return false;
}
