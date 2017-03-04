var data = $('input');
var questions =$('h1');
var correctAnswer = 0;
var inCorrectAnswer = 0;
var unanswered = 0;
var timeLeft = 30;

function finishGame() {
    $(".data").css("display", "none");
    for (var i = 0; i < data.length; i++) {
        if (data[i].checked) {
            if ((data[i].value) === "correct") {
                correctAnswer++;

            } else {
                inCorrectAnswer++;
            }
        }
    }

    var result = correctAnswer + inCorrectAnswer;
    var totalQuestions = questions.length;

    if (result !== totalQuestions) {
        unanswered = totalQuestions - result;
 }  
    $('.correct').html("you have " + correctAnswer + " that are correct");
    $('.incorrect').html("you have " + inCorrectAnswer + " that are incorrect");
    $('.unanswered').html("you have " + unanswered + " that you did not answer");
}


$('.start').on("click", function() {

    $(".start").css("display", "none");
    $(".data").css("display", "inline");

    var startCounter = setInterval(function() {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timeLeft);
            finishGame();
        }
        $(".counter").html("You have " + timeLeft + " secounds remaining to complete the questions");
    }, 1000);

$(".data").append()
    $(".done").on("click", function() {
        clearInterval(startCounter);
        finishGame();

    });
});