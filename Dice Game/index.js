
var randomplayer1 = Math.floor(Math.random() * 6) + 1;//No1-6

var randomImage1 ="images/dice"+ randomplayer1 + ".png"; //images/dice1.png - images/dice6.png

var player1Image = document.querySelectorAll("img")[0];
player1Image.setAttribute("src", randomImage1);


var randomPlayer2 = Math.floor(Math.random() * 6) + 1;
var imageSourceP2 = "images/dice" + randomPlayer2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", imageSourceP2);

if (randomplayer1 > randomPlayer2) {
    document.querySelector("h1").textContent = "Amaranthine Wins!";
}
else if (randomPlayer1 < randomPlayer2) {
    document.querySelector("h1").textContent ="Mandaweeye Wins!";
}

else {
    document.querySelector("h1").innerHtml = "Its A Draw!";
}
