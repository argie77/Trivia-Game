const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const previousButton = document.getElementById('previous-btn')
const questionContainerElemeny = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementbyId('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('start')
    startButton.Button.classList.add('hide')
    shuffledQuestins = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classtList.removed('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestins[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct 
        }
        button.addEventListener('click',)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer() {

}

const questions = [
    {
        question: 'What is the rarest M&M color?',
        answers: [
            { text: 'Brown', correct: true },
            { text: 'green', correct: false }
        ]
    }
]

