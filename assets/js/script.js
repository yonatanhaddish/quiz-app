var startButton= document.getElementById("start-btn")
var questionContainerEl= document.getElementById("question-container")

startButton.addEventListener("click",startGame);


function startGame () {
    console.log("Game started");
    startButton.classList.add("hide");
    questionContainerEl.classList.remove("hide");
};

function selectAnswer() {

};