//point counter for project page
function giveThemPoints(e)
{
    score.innerHTML++;  // uses css.Animate to make the stars fade out
    e.target.classList.add("animated","fadeOutDown");
}

//function for Showing project details when highlighting a project idea
function showThing(e)
{           //runs through list of items and figures out which one to show
    for(let i=0; i < ideaList.length; i++) {
        if (e.target.id === ideaList[i].id)
        {
            ideaDetailList[i].style.opacity = "100%";
            ideaDetailList[i].classList.remove("fadeOut");
            ideaDetailList[i].classList.add("fadeIn")
        }
    }
}

//function for hiding project details when mouseCursor leaves the project idea text
function hideThing(e)
{
    for(let i=0; i < ideaList.length; i++) {
        if (e.target.id === ideaList[i].id)
        {       //Similar set up to {showThing} but does the opposite
            ideaDetailList[i].classList.remove("fadein");
            ideaDetailList[i].classList.add("fadeOut");
        }
    }
}


//variables for point score, stars to click, both idea and details list on projects page.
var score = document.getElementById("points");
var starsForGame = document.getElementsByClassName("star");
var ideaList= document.getElementsByClassName("ideaList");
var ideaDetailList= document.getElementsByClassName("detailsList");


//add event listeners for every star
for(let i=0; i < starsForGame.length; i++)
{
    starsForGame[i].addEventListener("click", giveThemPoints)
}

//add event listeners for every ideaList piece.
for(let i=0; i < ideaList.length; i++)
{
    ideaList[i].addEventListener("mouseover", showThing); //adds the event listeners so even if new ones are added
    ideaList[i].addEventListener("mouseout",hideThing);//new ones can also get details [REQUIRES BOTH IDEALIST AND IDEADETAILLIST
}

