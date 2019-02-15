var  spaces = document.querySelectorAll("td");
var currentPlayer = 1;
var player = document.getElementById("player");
var resetButton = document.querySelector("button");

var numberOfRounds = 0;
var currentRound = 0;
var player1wins = 0;
var player2wins = 0;
//this function is used for challenges
// still needs alot of work
function roundcounter()
{
    numberOfRounds = parseInt(prompt("how many rounds do you want? 1-9"));
    if(currentRound === numberOfRounds)
    {
        if(player1wins > player2wins)
        {
            alert("player one wins");
        }
        else if(player1wins === player2wins)
        {
            alert("no winner");
        }
        else
        {
            alert("player two wins");
        }
    }
}

function reset()
{
    for(i=0; i < spaces.length;i++)
    {
        spaces[i].innerHTML = "";
        currentPlayer = 1;
        player.textContent = ("Player " + currentPlayer);

    }
}
function checkForWinner()
{
        if ((spaces[0].innerText === spaces[1].innerText && spaces[1].innerText === spaces[2].innerText && spaces[2].innerText === "X")
            || (spaces[3].innerText === spaces[4].innerText && spaces[4].innerText === spaces[5].innerText && spaces[5].innerText === "X")
            || (spaces[6].innerText === spaces[7].innerText && spaces[7].innerText === spaces[8].innerText && spaces[8].innerText === "X")
            || (spaces[0].innerText === spaces[3].innerText && spaces[3].innerText === spaces[6].innerText && spaces[6].innerText === "X")
            || (spaces[1].innerText === spaces[4].innerText && spaces[4].innerText === spaces[7].innerText && spaces[7].innerText === "X")
            || (spaces[2].innerText === spaces[5].innerText && spaces[5].innerText === spaces[8].innerText && spaces[8].innerText === "X")
            || (spaces[0].innerText === spaces[4].innerText && spaces[4].innerText === spaces[8].innerText && spaces[8].innerText === "X")
            || (spaces[2].innerText === spaces[4].innerText && spaces[4].innerText === spaces[6].innerText && spaces[6].innerText === "X")) {
            alert("X wins");
            player1wins+=1;
            currentRound++;
            player.textContent = ("Player " + (currentPlayer - 1) + " wins");
            reset();
            // roundcounter();
        } else if ((spaces[0].innerText === spaces[1].innerText && spaces[1].innerText === spaces[2].innerText && spaces[2].innerText === "O")
            || (spaces[3].innerText === spaces[4].innerText && spaces[4].innerText === spaces[5].innerText && spaces[5].innerText === "O")
            || (spaces[6].innerText === spaces[7].innerText && spaces[7].innerText === spaces[8].innerText && spaces[8].innerText === "O")
            || (spaces[0].innerText === spaces[3].innerText && spaces[3].innerText === spaces[6].innerText && spaces[6].innerText === "O")
            || (spaces[1].innerText === spaces[4].innerText && spaces[4].innerText === spaces[7].innerText && spaces[7].innerText === "O")
            || (spaces[2].innerText === spaces[5].innerText && spaces[5].innerText === spaces[8].innerText && spaces[8].innerText === "O")
            || (spaces[0].innerText === spaces[4].innerText && spaces[4].innerText === spaces[8].innerText && spaces[8].innerText === "O")
            || (spaces[2].innerText === spaces[4].innerText && spaces[4].innerText === spaces[6].innerText && spaces[6].innerText === "O")) {
            alert("O wins");
            player2wins+=1;
            currentRound++;
            player.textContent = ("Player " + (currentPlayer + 1) + " wins");
            reset();
            // roundcounter();
        }
        else if(spaces[0].innerText !== "" &&spaces[1].innerText !== "" && spaces[2].innerText !== ""
            && spaces[3].innerText !== "" && spaces[4].innerText !== "" && spaces[5].innerText !== ""   //to much typing
            && spaces[6].innerText !== "" && spaces[7].innerText !== "" &&spaces[8].innerText !== "")   //use a loop?
        {
                alert("tie");
                reset();
                // roundcounter();
        }
// if you want to do challenges, build 2 more variables [number of rounds] and [current round]
// add two more variables called [player1 wins] and [player two wins]
//set it so if x wins [player1wins++] if o wins [player2++] and then [current round++]
// when game starts get {prompt} from user for [number of rounds]
// when [number of rounds] === [current round] if [player1wins > player2wins = player1wins else player2wins]
//
}

function clickedSquare(element)
{
    if(element.target.innerHTML === "")
    {
        if (currentPlayer === 1)
        {
            currentPlayer += 1;
            player.textContent = ("Player " + currentPlayer);
            element.target.innerHTML = "X";
        } else if (currentPlayer !== 1) {
            currentPlayer -= 1;
            player.textContent = ("Player " + currentPlayer);
            element.target.innerHTML = "O";
        }
        /*
        this code is a test of using a loop for the test
        array inside an array?
*/
        // for (i = 0; i < 7; i++)
        // {
        //     if(spaces[i+1] === null)
        //     {
        //
        //     }
        //     else
        //         {
        //         if (spaces[i].innerHTML === "X" && spaces[i + 1].innerHTML === "X" && spaces[i + 2].innerHTML === "X")
        //         {
        //             alert("player one wins");
        //         }
        //         else if (spaces[i].innerHTML === "O" && spaces[i + 1].innerHTML === "O" && spaces[i + 2].innerHTML === "O")
        //         {
        //             alert("player two wins");
        //         }
        //     }
        // }

    }
    checkForWinner();
}
// Add a click event listener for each game space
for (var i = 0; i < spaces.length; i++)
{
    spaces[i].addEventListener('click', clickedSquare);
}
resetButton.onclick = reset;
//add a button to reset