var randomNum1 = Math.floor(Math.random() * 6)+1;
var randomDiceimg1 = "dice"+randomNum1+".png";
var randomImagesrc = "images/"+randomDiceimg1;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImagesrc);

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomImagesrc2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImagesrc2);

if(randomNum1>randomNum2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNum2>randomNum1)
{
    document.querySelector("h1").innerHTML="🚩 Player 2 Wins!";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}