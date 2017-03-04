//set varibles
var data = $('input');
var questions =$('h1');
var correctAnswer = 0;
var inCorrectAnswer = 0;
var unanswered = 0;
var timeLeft = 30;

function finishGame() {
    $(".data").css("display", "none");
    //hide the information 
    for (var i = 0; i < data.length; i++) {//loop through all 16 answers
        if (data[i].checked) {		//see what was checked
            if ((data[i].value) === "correct") { //check if the value of the checked button is "correct"
                correctAnswer++; //if it is, add 1 to correctAnswers 

            } else {
                inCorrectAnswer++; //if the checked answer does not have a value of "correct", add 1 to inCorrectAnswers
            }
        }
    }

    var result = correctAnswer + inCorrectAnswer;//add correct and incorrect together
    var totalQuestions = questions.length;//determine the total number of questions asked but targeting the number of "h1"s

    if (result !== totalQuestions) {
        unanswered = totalQuestions - result; //determines the number of questions unanswered
 }  
    $('.correct').html("you have " + correctAnswer + " that are correct"); //displays correct in DOM
    $('.incorrect').html("you have " + inCorrectAnswer + " that are incorrect");//displayes incorrect in DOM
    $('.unanswered').html("you have " + unanswered + " that you did not answer"); //displays unanswered in DOM
}

//run when user clicks the start button
$('.start').on("click", function() {  

    $(".start").css("display", "none");//hide start button
    $(".data").css("display", "inline");//display hidden content 

//start timer
    var startCounter = setInterval(function() {
        timeLeft--;// subtract 1 second
        if (timeLeft <= 0) {
            clearInterval(startCounter);//stop timer from going to negative
            finishGame();
            //run end of game function
        }
        $(".counter").html("You have " + timeLeft + " secounds remaining to complete the questions");
    }, 1000);

$(".data").append()
    $(".done").on("click", function() {
        clearInterval(startCounter);
        finishGame();
        //run end of game function

    });
});