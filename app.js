//Variables
var score = 0
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const previousButton = document.getElementById('previous-btn')
const questionContainerElement = document.querySelector('.question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const buttonA = document.getElementById('btn-A')
const buttonB = document.getElementById('btn-B')
const buttonC = document.getElementById('btn-C')
const buttonD = document.getElementById('btn-D')
const playerScore = document.getElementById('score')


let shuffledQuestions
let currentQuestionIndex


//These are grabbing the elements from HTML
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', setNextQuestion)
buttonA.addEventListener('click', selectAnswer)
buttonB.addEventListener('click', selectAnswer)
buttonC.addEventListener('click', selectAnswer)
buttonD.addEventListener('click', selectAnswer)

function startGame() {
    console.log('start')
    startButton.classList.add('hide')
    nextButton.classList.remove('hide')
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
    buttonA.innerText = question.options[0]
    buttonB.innerText = question.options[1]
    buttonC.innerText = question.options[2]
    buttonD.innerText = question.options[3]
    
    //for (let i = 0; i < question.options.length; i++) {
      //  const button = document.createElement('button')
     //   button.innerText = question.options[i]
      //  button.classList.add('btn')
        //if (answer.correct) {
          //  button.dataset.correct = answer.correct 
        //}
       // button.addEventListener('click',)
       // answerButtonsElement.appendChild(button)
    }
//}


function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    console.log(e.target.innerText)
    if (e.target.innerText === shuffledQuestions[currentQuestionIndex].answer){
        console.log("right")
        currentQuestionIndex++
        score++
        console.log("incrementIndex")
        playerScore.innerHTML = score;
        incrementIndex()
    }else {
        console.log("wrong")
    // console.log(e.target.innerText)
    // console.log(shuffledQuestions[currentQuestionIndex].answer)
}
   // const selectedButton = e.target
   // const correct = selectedButton.dataset.correct
   // setStatusClass(document.body, correct)
    //Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
 }

 //This function is to let us know whether the option that was clicked is right or wrong
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
// This will show the pop up window after 7 questions right
function incrementIndex() {
    console.log(score)
    if (score === 7) {
window.alert("Win Win!")}

    // else if (currentQuestionIndex < questions.length - 1){
    //     currentQuestionIndex = currentQuestionIndex +1
    // }
    // } else if (index === data.length - 1) {
    //     window.alert("Win Win!")
    // }
}

// function handleClickAnswer(value,answer){
//     console.log(value,answer)
//     if(value === answer){
//         score++
//         playerScore.innerHTML = score;
//         console.log(score)
//     } else {
//         console.log('false')
//      }
//      incrementIndex()
//     }


//array of questions
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
    answer: "thailand",
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
},
{
    question: "Which country invented ice cream?",
    options: ["Japan", "China", "South Korea", "Macao"],
    answer: "China",
},
{
    question: "What sport is dubbed the king of sports?",
    options: ["Badminton", "Basketball", "American Football", "Soccer"],
    answer: "Soccer",
},
{
    question: "How many colors are there in the rainbow?",
    options: ["12", "7", "9", "5"],
    answer: "7",
},
{
    question: "What is Earth's largest continent?",
    options: ["Europe", "Asia", "Antartica", "Africa"],
    answer: "Asia",
},
{
    question: "Area 51 is located in which U S state??",
    options: ["Nevada", "Maine", "New York", "New Jersey"],
    answer: "Nevada",
}
];