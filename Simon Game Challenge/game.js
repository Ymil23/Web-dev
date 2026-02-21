var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var started = false;

var level = 0;

//If the Keyboard Is Pressed Start the Game And Change the H1 title;
$(document).on("keydown", function () {
    if (!started) {

        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

//Checking which Button was Clicked:
$(".btn").click(function () {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function nextSequence() {

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);

    //Choosing a color Randomly;
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour); //keeps the Sequence Going;
    console.log(gamePattern + " pushed");

    //animating the Button;
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).
    fadeIn(100);
    playSound(randomChosenColour);
}

//A function that Plays Sound
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

//Animating the Buttons by adding The Pressed class;
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    //Removing The Pressed Class
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed")
    }, 100);
}