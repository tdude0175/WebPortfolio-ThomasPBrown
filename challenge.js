//Note:
// Use document.onkeydown = [FUNCTION];
// when getting all keyboard strikes.
// Note2:
// [ELEMENT].style.[DIRECTION] does not return a value.
// You have to keep up with it yourself or find a different way to call it.

var codeCrew = document.querySelector(".flyingCodeCrew");
amounttomoveup = 1;
amounttomoveside = 1;
function movebox(e)
{
    if(e.key === "ArrowDown")
    {
        e.preventDefault()
         amounttomoveup+=1;
        codeCrew.style.gridRow= (`${amounttomoveup} / ${amounttomoveup + 3}`);
    }
    if(e.key === "ArrowUp")
    {
        amounttomoveup+=-1;
        codeCrew.style.gridRow = (`${amounttomoveup} / ${amounttomoveup + 3}`);
    }
    if(e.key === "ArrowLeft")
    {
        amounttomoveside+=-1;
        codeCrew.style.gridColumn = (`${amounttomoveside} / ${amounttomoveside + 2}`);
    }
    if(e.key === "ArrowRight")
    {
        amounttomoveside+=1;
        codeCrew.style.gridColumn = (`${amounttomoveside} / ${amounttomoveside + 2}`);
    }
}
//manipulating one margin with left or right and up or down
//add px need to set if margin === 0 stop and the opposite side

document.onkeydown = movebox;