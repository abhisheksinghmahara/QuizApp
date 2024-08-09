const entered_name=prompt("Enter name", "");
document.getElementById("individual_name").innerHTML=entered_name;

const questionElement = document.getElementById('questions');
const answerButtons = document.getElementById('ansbtn');
const nextButton = document.getElementById('next-btn');

function changeColor(newColor) {
    const elem = document.getElementById("body");
    elem.style.backgroundColor = newColor;
  }

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
