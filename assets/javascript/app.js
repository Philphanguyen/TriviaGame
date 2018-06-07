var time = 100;
var intervalId;
var clockRunning = false;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

function run() {
    if (!clockRunning) {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000); 
    clockRunning = true;}
    else if (time === 0) {
        scoring();
        stop();
    }
}

function stop () {
    clearInterval(intervalId);
    clockRunning = false;
}

function decrement()  {
    time--;
    $("#countDown").html(time + " seconds");
    if (time === 0) {
        stop();
        var endGame = confirm("Time has run out, do you want to see the score?");
            if (endGame == true) {scoring();}
            else {location.reload();};
    } 
}
function scoring () {
var point1 = $('input[name=answer1]:checked').val();
        if (point1 === "true") {correct++;} else if (point1 === "false") {incorrect++;} else {unanswered++;};

        var point2 = $('input[name=answer2]:checked').val();
        if (point2 === "true") {correct++;}else if (point2 === "false") {incorrect++;}else {unanswered++;};

        var point3 = $('input[name=answer3]:checked').val();
        if (point3 === "true") {correct++;}else if (point3 === "false") {incorrect++;}else {unanswered++;};

        var point4 = $('input[name=answer4]:checked').val();
        if (point4 === "true") {correct++;}else if (point4 === "false") {incorrect++;}else {unanswered++;};

        var point5 = $('input[name=answer5]:checked').val();
        if (point5 === "true") {correct++;}else if (point5 === "false") {incorrect++;}else {unanswered++;};

        var point6 = $('input[name=answer6]:checked').val();
        if (point6 === "true") {correct++;}else if (point6 === "false") {incorrect++;}else {unanswered++;};

        var point7 = $('input[name=answer7]:checked').val();
        if (point7 === "true") {correct++;}else if (point7 === "false") {incorrect++;}else {unanswered++;};

        var point8 = $('input[name=answer8]:checked').val();
        if (point8 === "true") {correct++;}else if (point8 === "false") {incorrect++;}else {unanswered++;};

        $("#question1, #question2, #question3, #question4, #question5, #question6, #question7, #question8, #buttonFinished").hide();
        $("#scoreBoard").show();
        $("#correct").text("Correct Answers: "+ correct);
        $("#incorrect").text("Incorrect Answers: "+ incorrect);
        $("#unanswered").text("Unanswered: "+ unanswered);
}
$(document).ready(function() {
    $("#timer, #question1, #question2, #question3, #question4, #question5, #question6, #question7, #question8, #buttonFinished, #scoreBoard").hide();
    $("#buttonStart").click(function() {
        $("#buttonStart").hide();
        $("#timer, #question1, #question2, #question3, #question4, #question5, #question6, #question7, #question8, #buttonFinished").show();
        run();
    });
    $("#buttonFinished").click(function() {
        stop();
        scoring();
    });
})