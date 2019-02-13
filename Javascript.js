function giveThemPoints(e)
{
    score.innerHTML++;
    e.target.style.display = "none";
}

function showThing()
{
    gameFacts.style.display = "block"
}

function hideThing()
{
    gameFacts.style.display = "none";
}

var score = document.getElementById("points");
var starsForGame = document.getElementsByClassName("star");
var gameProject = document.getElementById("gameProject");
var gameFacts = document.getElementById("gameFacts");

for(let i=0; i < starsForGame.length; i++)
{
    starsForGame[i].addEventListener("click", giveThemPoints)
}

gameProject.addEventListener("mouseover", showThing);

gameProject.addEventListener("mouseout",hideThing);