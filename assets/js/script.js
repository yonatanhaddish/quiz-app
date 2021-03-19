function gameQuiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
gameQuiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
gameQuiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
gameQuiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        //showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions= [
    new Question("Prime Minister of Canada?",["Justin Trudeau","Doug Ford","Jonh Tori","Mother Teresa"],"Justin Trudeau"),
    new Question("President of USA?",["Donald Trump","Barak Obama","Joe Biden","George Bush"],"Joe Biden"),
    new Question("2+2?",["4","0","-4","none"],"4")
];

 
// create quiz
var quiz = new gameQuiz(questions);
 
// display quiz
populate();