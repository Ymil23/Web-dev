
$("h1").click(function() {
    $("h1").css("color","yellow");
});


    //Styling using JS VS JQuery;
for(var i = 0; i < 5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "blue";
    })
}

    //JQuery Shortens this with just A few Lines of code;
$("button").click(function() {
    $("h1").css("color","blue");

});

    //Keydown Event Using JQuery;
$("input").keydown(function(event){
    console.log(event.key);
});

    //Using the Entire Document to listen for a click;
$(document).keydown(function(event){
    $("h1").text(event.key);
})

    //Another Way of adding Event listener is by Using 'on' keyword;
$("h1").on("mouseover", function(){
    $("h1").html("Stop Touching Me");

        //Adding SetTimeout 
    setTimeout(function(){
        $("h1").html("Kamil ina Abdirahman");
    }, 900);
})