
var data= $('value');
var correctAnswer = 0;
var inCorrectAnswer = 0;
var unanswered = 0;
var timeLeft = 30;
var numberofQuestions=3;
var question1 ={

	question:"who is the current bachelor?",
	choices: ["Nick", "Sean", "Dan", "Ben"],
};

var question2 ={

	question:"who is the next bachelorette?",
	choices: ["Raven", "Rachel", "Sarah", "none of the above"],
};
var question3 ={

	question:"who hosts the Bachelor and Bachelorette?",
	choices: ["Jim", "Sam", "Chris", "Tom"],
};
var answers =["Nick", "Rachel", "Chris"];

function startGame() {
    $(".data").css("display", "none");
    for (var i = 0; i < numberofQuestions.length; i++) {
        if (data[i].checked) {
            if (answers.indexOf(data[i]) !== -1 ) {
                correctAnswer++;

            } else {
                inCorrectAnswer++;
            }
        }
    }

    var result = correctAnswer + inCorrectAnswer;
   

    if (result !== numberofQuestions) {
        unanswered = numberofQuestions - result;

    }

    
    $('.correct').html("you have " + correctAnswer + " that are correct");
    $('.incorrect').html("you have " + inCorrectAnswer + " that are incorrect");
    $('.unanswered').html("you have " + unanswered + " that you did not select");
}


$('.start').on("click", function() {

$("#question1").append($("<h3>"+ question1.question +"</h3>"));
for(var i=0; i<question1.choices.length; i++){
	$("#question1").append($("<input type= 'radio' name='1'>",
		{value:question1.choices[i]}));
	$("#question1").append($('<label>').text(question1.choices[i]));}

$("#question2").append($("<h3>"+ question2.question +"</h3>"));
for(var i=0; i<question2.choices.length; i++){
	$("#question2").append($("<input type= 'radio' name='2'>",
		{value:question2.choices[i]}));
	$("#question2").append($('<label>').text(question2.choices[i]));}

	$("#question3").append($("<h3>"+ question3.question +"</h3>"));
for(var i=0; i<question3.choices.length; i++){
	$("#question3").append($("<input type= 'radio' name='3'>",
		{value:question3.choices[i]}));
	$("#question3").append($('<label>').text(question3.choices[i]));}


    $(".start").css("display", "none");
    $(".data").css("display", "inline");
    

    var startCounter = setInterval(function() {
        timeLeft--;
        timeLeft = timeLeft - 1;
        if (timeLeft <= 0) {
            clearInterval(timeLeft);
            startGame();
        }
        $(".counter").html("You have " + timeLeft + " seconds remaining to complete the questions");
    }, 1000);

$(".data").append()
    $(".done").on("click", function() {
        clearInterval(startCounter);
        startGame();

    });
});