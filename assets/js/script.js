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
    else seconds-=5; // if wrong answer then deduct 5 seconds
 
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
 
 
function startGame() {
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
            
 
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        startGame();
    }
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// setting counter
var seconds = 60, $seconds = document.querySelector('#countdown');
(function countdown() {
    $seconds.textContent = seconds + ' second' + (seconds == 1 ?  '' :  's')
    if(seconds --> 0) setTimeout(countdown, 1000)
})();
 
// create questions here
var questions= [
    new Question("10x0?",["0","9","4","6"],"0"),
    new Question("4-1?",["12","4","3","7"],"3"),
    new Question("Area of Circle?",["??rg","??r2","??r2h","none"],"??r2"),
    new Question("10x10?",["34","9","84","100"],"100"),
    new Question("47-1?",["12","47","30","46"],"46"),
    new Question("23+2?",["4","0","-4","25"],"25"),
    new Question("12/3?",["0","9","4","6"],"4"),
    new Question("42/1?",["12","42","38","17"],"42"),
    new Question("2+25?",["4","0","-4","none"],"none"),
    new Question("10/0?",["0","undefined","4","6"],"undefined"),
    new Question("4+1?",["5","4","3","7"],"5"),
    new Question("???",["3.14","0","-4","none"],"3.14")
];

 
// create quiz
var quiz = new gameQuiz(questions);
 
// display quiz
startGame();