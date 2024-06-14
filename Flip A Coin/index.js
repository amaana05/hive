// CODE FOR THE RANDOM IMAGE CHANGE

var randomCoin =  Math.round(Math.random()*1)+1;

var randomCoinImage = "./images/coin"+randomCoin+".png";

document.querySelectorAll("img")[0].setAttribute("src", randomCoinImage);



// HEADING CHANGE AND RESULT

if(randomCoin === 1)
{
    document.querySelector("h1").innerHTML = 'Its Heads !!!';
}
else
{
    document.querySelector("h1").innerHTML = 'Its Tails !!!';
}


// REFRESH BUTTON 

document.getElementById("flipButton").addEventListener("click", function()
{
    location.reload();
});