// decelaring function with three arguments
function Ques(questioning,choices,answer) {
    this.questioning= questioning;
    this.choices= choices;
    this.answer= answer;
}

// start game
function startGame() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        var questionEl= document.getElementById("question");
        questionEl.innerHTML= quizQuestionIndex().questioning;

        var choices= quiz.getQuestionIndex().choices;
        for (var i=0; i<choices.length; i++) {
            var choicesEl= document.getElementById("choice" + i);
            choicesEl.innerHTML= choices[i];
            guess("btn" + i, choices[i]);
        }
    }
};

function showScores() {
    var gameOver= quiz.score;
    var element= document.getElementById("quiz");
    element.innerHTML= gameOver;
}

// create questions
var theQuestions= [
    new Ques("Prime Minister of Canada?",["Justin Trudeau","Doug Ford","Jonh Tori","Mother Teresa"],"Justin Trudeau"),
    new Ques("President of USA?",["Donald Trump","Barak Obama","Joe Biden","George Bush"],"Joe Biden"),
    new Ques("2+2?",["4","0","-4","none"],"4")
];









































// var startButton= document.getElementById("start-btn")
// var questionContainerEl= document.getElementById("question-container")
// var questionEl= document.getElementById("question")
// var answerButtonsEl= document.getElementById("answer-buttons")



// function startGame () {
//     console.log("Game started");
//     startButton.classList.add("hide");
//     questionContainerEl.classList.remove("hide");
    

//     showQuestion();
// };

// // show questions
// function showQuestion (question) {
//     for (i=0; i<3; i++) {
//          console.log(theQuestions[i].question);
//          console.log(theQuestions[i].answers);
//         questionEl.textContent= theQuestions[i].question;
//     }
// };

// function selectAnswer() {

// };

// var theQuestions= [
//     {
//         question: "President of USA?",
//         answers: {
//             a: "Barack Obama",
//             b: "Joe Biden",
//             c: "Donald Trump",
//             d: "George Bush"
//         },
//         correctAnswer: "b"
//     },
//     {
//         question: "Prime Minister of Canada?",
//         answers: {
//             a: "Justin Truedie",
//             b: "Tony",
//             c: "Doug Ford",
//             d: "Mother Teressa"
//         },
//         correctAnswer: "a"
//     },
//     {
//         question: " What is 4+4?",
//         answers: {
//             a: "8",
//             b: "4",
//             c: "0",
//             d: "-8"
//         },
//         correctAnswer: "8"
//     }
// ];


// startButton.addEventListener("click",startGame);