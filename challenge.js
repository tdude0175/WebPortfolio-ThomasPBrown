//Note:
// Use document.onkeydown = [FUNCTION];
// when getting all keyboard strikes.
// Note2:
// [ELEMENT].style.[DIRECTION] does not return a value.
// You have to keep up with it yourself or find a different way to call it.

var codeCrew = document.querySelector(".flyingCodeCrew");
amounttomoveup = 0;
amounttomoveside = 0;
function movebox(e)
{
    if(e.key === "ArrowDown")
    {
         amounttomoveup+=10;
        codeCrew.style.marginTop = (amounttomoveup +"px");
    }
    if(e.key === "ArrowUp")
    {
        amounttomoveup+=-10;
        codeCrew.style.marginTop = (amounttomoveup + "px");
    }
    if(e.key === "ArrowLeft")
    {
        amounttomoveside+=-10;
        codeCrew.style.marginLeft = (amounttomoveside + "px");
    }
    if(e.key === "ArrowRight")
    {
        amounttomoveside+=10;
        codeCrew.style.marginLeft = (amounttomoveside + "px");
    }
}
//manipulating one margin with left or right and up or down
//add px need to set if margin === 0 stop and the opposite side

document.onkeydown = movebox;