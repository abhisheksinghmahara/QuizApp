// taking name input
const entered_name=prompt("Enter name", "");
document.getElementById("individual_name").innerHTML=entered_name;

const questionElement = document.getElementById('questions');
const answerButtons = document.getElementById('ansbtn');
const nextButton = document.getElementById('next-btn');

function changeColor(mode) {
    const elem = document.body; // Use document.body to directly target the body element
    switch (mode) {
        case 'blue':
            elem.style.backgroundColor = 'blue';
            elem.style.color = 'white'; // Adjust text color for better readability
            break;
        case 'dark':
            elem.style.backgroundColor = 'black'; // Dark background
            elem.style.color = '#fff'; // Light text color
            break;
        case 'light':
            elem.style.backgroundColor = '#FFF8DC'; // Light background
            elem.style.color = '#000'; // Dark text color
            break;
        default:
            elem.style.backgroundColor = ''; // Reset to default
            elem.style.color = ''; // Reset to default
    }
}

// set of questions 
const questions = [
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
            { text: "Gobi", correct: false }
        ]
    },
    {
        question: " What is the full form of PSLV?",
        answers: [
            { text: "Polar Satellite Launch Vehicle", correct: true },
            { text: "Prime Satellite Launch Vehicle", correct: false },
            { text: "Pre-Satellite Launch Vehicle", correct: false },
            { text: "Polar Satellite Landing Vehicle", correct: false }
        ]
    },
    {
        question: "Which one of the following also known as Conditional Expression?",
        answers: [
            { text: "Alternative to if-else", correct: false },
            { text: "Switch statement", correct: false },
            { text: "If-then-else statementa", correct: false },
            { text: "immediate if", correct: true }
        ]
    },
    {
        question: "The 'function' and 'var' are known as__",
        answers: [
            { text: "Keywords", correct: false },
            { text: "Data types", correct: false },
            { text: "Declaration statements", correct: true },
            { text: "Prototypes", correct: false }
        ]
    },
    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        answers: [
            { text: "Global variable", correct: false },
            { text: "The local element", correct: true },
            { text: "The two of the above", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
]
let currentQuestionIndex = 0;
let score = 0;
const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
const showQuestion = () => {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '.' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
    })
}

const resetState = () => {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

const selectAnswer = (e) => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button =>{
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}
const showScore=()=>{
    resetState();
    questionElement.innerHTML=`${entered_name}! You scored ${score*20} out of ${questions.length*20}`;
    nextButton.innerHTML='Play Again';
    nextButton.style.display='block';
}
const handleNextButton=()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
