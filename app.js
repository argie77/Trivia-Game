const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const previousButton = document.getElementById('previous-btn')
const questionContainerElement = document.querySelector('.question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions
let currentQuestionIndex

startButton.addEventListener('click', startGame)



function startGame() {
    console.log('start')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove()
    setNextQuestion()
    console.log("this is working")
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    console.log(question)
    questionElement.innerText = question.question
    for (let i = 0; i < question.options.length; i++) {
        const button = document.createElement('button')
        button.innerText = question.options[i]
        button.classList.add('btn')
        //if (answer.correct) {
          //  button.dataset.correct = answer.correct 
        //}
       // button.addEventListener('click',)
        answerButtonsElement.appendChild(button)
    }
}


function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

const questions = [
    {
    question: "What is the rarest M&M color?",
    options: ["green", "yellow", "brown", "orange"],
    answer: "brown",
},
{
    question: "How many ribs are in a human body?",
    options: ["24", "10", "14", "28"],
    answer: "24",
},
{
    question: "Which country is known as the Land of White Elephant?",
    options: ["Vietnam", "thailand", "Philippines", "Macao"],
    answer: "Thailand",
},
{
    question: "Which planet is the hottest in the solar system?",
    options: ["Mars", "Pluto", "Venus", "Saturn"],
    answer: "Venus",
},
{
    question: "Which country produces the most coffee in the world?",
    options: ["Brazil", "Mexico", "El Salvador", "Dominican Republic"],
    answer: "Brazil",
},
{
    question: "What is the smallest country in the world?",
    options: ["Japan", "Vatican City", "Korea", "Norway"],
    answer: "Vatican City",
},
{
    question: "How many hearts does an octopus have?",
    options: ["5", "2", "7", "3"],
    answer: "3",
},
{
    question: "How many eyes does a bee have?",
    options: ["5", "9", "7", "3"],
    answer: "5",
},
{
    question: "Water has a pH level of around??",
    options: ["11", "9", "7", "3"],
    answer: "7",
},
{
    question: "What is the rarest M&M color?",
    options: ["green", "yellow", "brown", "orange"],
    answer: "green",
}
];