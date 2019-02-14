function giveThemPoints(e)
{
    score.innerHTML++;
    e.target.classList.add("animated","fadeOutDown");
}

function showThing(e)
{
    for(let i=0; i < ideaList.length; i++) {
        if (e.target.id === ideaList[i].id)
        {
            ideaDetailList[i].style.opacity = "100%";
            ideaDetailList[i].classList.remove("fadeOut");
            ideaDetailList[i].classList.add("fadeIn")
        }
    }
}

function hideThing(e)
{
    for(let i=0; i < ideaList.length; i++) {
        if (e.target.id === ideaList[i].id)
        {
            ideaDetailList[i].classList.remove("fadein");
            ideaDetailList[i].classList.add("fadeOut");
        }
    }
}

var score = document.getElementById("points");
var starsForGame = document.getElementsByClassName("star");
var ideaList= document.getElementsByClassName("ideaList");
var ideaDetailList= document.getElementsByClassName("detailsList");

for(let i=0; i < starsForGame.length; i++)
{
    starsForGame[i].addEventListener("click", giveThemPoints)
}

for(let i=0; i < ideaList.length; i++)
{
    ideaList[i].addEventListener("mouseover", showThing);
    ideaList[i].addEventListener("mouseout",hideThing);
}

