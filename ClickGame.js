function gameRun()
{
    startButton.disabled = true;
    playerOnesScore.innerHTML = "0";
    playerTwoScore.innerHTML = "0";
    timer = 0;
    apparentTimer = 0;
    minutetimer = 0;
    hourtimer = 0;

    gametime = parseInt(prompt("how long do you want the game? (inSeconds) "));
    while(isNaN(gametime ))
    {
        gametime = parseInt(prompt("how long do you want the game? (inSeconds)"))
    }

    //this is used for settings testing and replacing settings such as mouse vs keyboard
    if(mouseSetting.disabled)
    {
        p1ScoreButton.disabled = false;
        p2ScoreButton.disabled = false;
    }
    else
        {
            document.addEventListener("keydown",scoring);
        }
    gameEnder = setInterval(testrun,1000);
}

function testrun()
{
    console.log(gametime);
    //timer is used to calculate game time for run time, needs to be set for an end variable
    timer++;
    apparentTimer++;
    if(apparentTimer=== 60)
    {
        apparentTimer = 0;
        minutetimer++;
        if(minutetimer === 60)
        {
            minutetimer = 0;
            hourtimer++;
        }
    }
    // added a different timer for lead so it will time in faster than gmae clock
    var scorekeeper = setInterval(keepscore,50);

    //used to determine who wins
    if(timer === gametime)
    {
        p1ScoreButton.disabled = true;
        p2ScoreButton.disabled = true;
        alert("game over");
        console.log(parseInt(playerOnesScore.innerHTML));
        if(parseInt(playerOnesScore.innerHTML) > parseInt(playerTwoScore.innerHTML))
        {
            alert("player one Wins");
        }
        else if(parseInt(playerOnesScore.innerHTML) < parseInt(playerTwoScore.innerHTML))
        {
            alert("Player two wins");
        }
        else
            {
                alert("no Contest!");
            }
        document.removeEventListener("keydown",scoring);
        startButton.disabled = false;
        clearInterval(scorekeeper);
        clearInterval(gameEnder);
    }
}
//runs every 50 microseconds to keep up with who is winning
function keepscore()
{
    if(parseInt(playerOnesScore.innerHTML) > parseInt(playerTwoScore.innerHTML))
    {
        gameTimer.innerHTML = (hourtimer + ":" + minutetimer + ":" + apparentTimer);
        playerLead.innerText = ("Player One");
    }
    else if( parseInt(playerTwoScore.innerHTML) > parseInt(playerOnesScore.innerHTML))
    {
        playerLead.innerText = ("Player Two");
        gameTimer.innerHTML = (hourtimer + ":" + minutetimer + ":" + apparentTimer);
    }else
    {
        playerLead.innerText =("Tied");
        gameTimer.innerHTML = (hourtimer + ":" + minutetimer + ":" + apparentTimer);
    }
}

//easy way to increase score with clicks
function scoreforP1(e)
{
    playerOnesScore.innerHTML++;

}
function scoreforP2(e)
{
    playerTwoScore.innerHTML++;

}
//keyboard settings
function scoring(e)
{
    console.log(e.key);
    if(e.key === "a")
    {
        playerOnesScore.innerHTML++;
    }
    if(e.key === "l")
    {
        playerTwoScore.innerHTML++;
    }


}
//changing from mouse to keyboard setting
function settingsChange(e)
{

    if(mouseSetting.disabled === true)
    {
        mouseSetting.disabled = false;
        keyboardSetting.disabled = true;
    }
    else
        {
            mouseSetting.disabled = true;
            keyboardSetting.disabled = false;
        }
}

function backgroundColor()
{
    colorindex++;
    if(colorindex >= colorArray.length)
    {
        colorindex=0
    }
    body = document.querySelector("body");
    body.style.backgroundColor = colorArray[colorindex];
    backgroundSetting.innerHTML = "background:"+colorArray[colorindex];

}
function textChange()
{
    textcolorindex++;
    if(textcolorindex >= colorArray.length)
    {
        textcolorindex =0;
    }
    body = document.querySelector("body");
    body.style.color = colorArray[textcolorindex];
    textColor.innerHTML = "text:" + colorArray[textcolorindex];

}
//all timer info and such
//could use jquery to make it need less variables
var colorArray = ["white","black","blue","red","yellow","green"];
var gameEnder = "";
var gametime = 0;
var gameTimer = document.getElementById("timer");
var apparentTimer = 0;
var timer = 0;
var minutetimer = 0;
var hourtimer = 0;
var colorindex = 0;
var textcolorindex =1;
var playerOnesScore = document.getElementById("playerOneScore");
var playerTwoScore = document.getElementById("playerTwoScore");
var playerLead = document.getElementById("playerLead");
var startButton = document.getElementById("startButton");
var p1ScoreButton = document.getElementById("pOneButton");
var p2ScoreButton = document.getElementById("pTwoButton");
var mouseSetting = document.getElementById("settingsMouse");
var keyboardSetting = document.getElementById("settingsKeyboard");
var backgroundSetting = document.getElementById("backgroundColor");
var textColor = document.getElementById("textButton");

//event listeners
startButton.addEventListener("click",gameRun);
p1ScoreButton.addEventListener("click",scoreforP1);
p2ScoreButton.addEventListener("click",scoreforP2);
mouseSetting.addEventListener("click", settingsChange);
keyboardSetting.addEventListener("click",settingsChange);
backgroundSetting.addEventListener("click",backgroundColor);
textColor.addEventListener("click",textChange);
