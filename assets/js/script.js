function Quiz(theQuestions) {
    this.score= 0;
    this.theQuestions= theQuestions;
    this.questionIndex= 0;
}

Quiz.prototype.getQuestionIndex= function() {
    return this.theQuestions[this.questionIndex];
}

Quiz.prototype.guess= function(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score ++;
    }
    this.questionIndex ++;
}

Quiz.prototype.isEnded= function() {
    return this.questionIndex=== this.theQuestions.length;
}

// decelaring function with three arguments
function Ques(questioning,choices,answer) {
    this.questioning= questioning;
    this.choices= choices;
    this.answer= answer;
}

Ques.prototype.isCorrectAnswer= function(choice) {
    return this.answer=== choice;
}

// start game
function startGame() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        var element= document.getElementById("question");
        element.innerHTML= quiz.getQuestionIndex().questioning;

        var choices= quiz.getQuestionIndex().choices;
        for (var i=0; i<choices.length; i++) {
            var element= document.getElementById("choice" + i);
            element.innerHTML= choices[i];
            guess("btn" + i, choices[i]);
        }
    }
};

function guess(id, guess) {
    var button= document.getElementById(id);
    button.click= function() {
        quiz.guess(guess);
        startGame();
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

var quiz= new Quiz(theQuestions);


startGame();









































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