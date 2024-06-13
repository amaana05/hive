// FOR IMAGE 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice"+ randomNumber1+".png";

var randomImageSource1 = "/heaveRoll/images/"+randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);


// FOR IMAGE 2


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice"+ randomNumber2+".png";

var randomImageSource2 = "/heaveRoll/images/"+randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);



// HEADING AND BACKGROUND COLOR CHANGE

if(randomNumber1 > randomNumber2)
    {
        document.querySelector("h1").innerHTML = 'Player 1 Wins!';
        //document.querySelector("body").style.backgroundColor = 'black';
    }
else if(randomNumber2 > randomNumber1)
    {
        document.querySelector("h1").innerHTML = 'Player 2 Wins!';
        //document.querySelector("body").style.backgroundColor = 'grey';
    }
else
    {
        document.querySelector("h1").innerHTML = 'Draw(～￣▽￣)～';
    }