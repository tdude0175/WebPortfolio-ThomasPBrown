function giveThemPoints(e)
{
    score.innerHTML++;
    e.target.style.display = "none";
}

var score = document.getElementById("points");
var starsForGame = document.getElementsByClassName("star");

console.log(starsForGame[0]);

for(let i=0; i < starsForGame.length; i++)
{
    starsForGame[i].addEventListener("click", giveThemPoints)
}