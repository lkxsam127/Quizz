const questions = [
    {
        question: "When did we first start talking?",
        answers: [
        { text: "January 10th", correct: false},
        { text: "January 11th", correct: false},
        { text: "January 12th", correct: true},
        { text: "January 13th", correct: false}
        ]
    },
    {
        question: "When did we start dating?",
        answers: [
        { text: "February 17th", correct: false},
        { text: "February 18th", correct: true},
        { text: "February 19th", correct: false},
        { text: "February 20th", correct: false},
        ]
    },
    {
        question: "What is my love language?",
        answers: [
        { text: "Gift giving", correct: true},
        { text: "Phisical touch", correct: false},
        { text: "Quality time", correct: false},
        { text: "Words of affirmation", correct: false}
        ]
    },
    {
        question: "What is my favorite color?",
        answers: [
        { text: "Black", correct: false},
        { text: "Red", correct: false},
        { text: "Any light color", correct: true},
        { text: "Any dark color", correct: false}
        ]
    },
    {
        question: "What is my favorite Sanrio character?",
            answers: [
            { text: "Cinnamoroll", correct: true},
            { text: "Kuromi", correct: false},
            { text: "My Melody", correct: false},
            { text: "Pompompurin", correct: false}
            ]
    },
    {
        question: "X7al kan lbs frjli?",
        answers: [
        { text: "39-40", correct: false},
        { text: "36-37", correct: false},
        { text: "35-36", correct: false},
        { text: "37-38", correct: true}
        ]
    },
    {
        question: "What time did i confess?",
        answers: [
        { text: "11:55pm", correct: false},
        { text: "11:56pm", correct: true},
        { text: "11:57am", correct: false},
        { text: "11:58am", correct: false},
        ]
    },
    {
        question: "What time did you say yes?",
        answers: [
        { text: "11:58pm", correct: false},
        { text: "11:59pm", correct: false},
        { text: "12:00pm", correct: true},
        { text: "12:01pm", correct: false},
        ]
    },
    {
        question: "What is my favorite dish?",
        answers: [
        { text: "Pasta", correct: false},
        { text: "Sushi", correct: false},
        { text: "Pizza", correct: false},
        { text: "Ssfa", correct: true},
        ]
    },
    {
        question: "When's my birthday?",
        answers: [
        { text: "June 9th", correct: false},
        { text: "July 10th", correct: false},
        { text: "July 9th", correct: true},
        { text: "july 8th", correct: false},
        ]
    },
    {
        question: "What's my favorite flower?",
        answers: [
        { text: "Tulips", correct: false},
        { text: "Daisies", correct: true},
        { text: "Orchids", correct: false},
        { text: "Roses", correct: false},
        ]
    },
    {
        question: "What's my favorite thing to do when sad?",
        answers: [
        { text: "Sleep", correct: true},
        { text: "Listen to music", correct: false},
        { text: "Eat", correct: false},
        { text: "Vent", correct: false},
        ]
    },
    {
        question: "Who named Sky?",
        answers: [
        { text: "My sister", correct: false},
        { text: "Me", correct: false},
        { text: "Dad", correct: true},
        { text: "Mom", correct: false},
        ]
    },
    {
        question: "What's my favorite season?",
        answers: [
        { text: "Winter", correct: false},
        { text: "Fall", correct: true},
        { text: "Summer", correct: false},
        { text: "Spring", correct: false},
        ]
    },
    {
        question: "What's my zodiac sign?",
        answers: [
        { text: "Pisces", correct: false},
        { text: "Taurus", correct: false},
        { text: "Cancer", correct: true},
        { text: "Gemini", correct: false},
        ]
    },
    {
        question: "You mention another girl, what's my reaction?",
        answers: [
        { text: "'go marry her'", correct: true},
        { text: "I dont mind, i trust you", correct: false},
        { text: "I kill you", correct: false},
        { text: "Joke about it", correct: false},
        ]
    },
    {
        question: "What's my favorite place to go when feeling low?",
        answers: [
        { text: "On a walk wherever", correct: false},
        { text: "Mdina 9dima", correct: false},
        { text: "Mall", correct: false},
        { text: "Beach", correct: true},
        ]
    },
    {
        question: "What's the capital of Turkmenistan?",
        answers: [
        { text: "Ashgabat", correct: true},
        { text: "Samarkand", correct: false},
        { text: "La Paz", correct: false},
        { text: "Dushanbe", correct: false},
        ]
    },
    {
        question: "What's my favorite dessert?",
        answers: [
        { text: "Crepes", correct: false},
        { text: "Pudding", correct: false},
        { text: "Tiramisu", correct: true},
        { text: "Ice cream", correct: false},
        ]
    },
    {
        question: "Do you love me more than i love you?",
        answers: [
        { text: "no", correct: false},
        { text: "NO", correct: false},
        { text: "ABSOLUTELY NOT- WTF?!", correct: true},
        { text: "yes", correct: false},
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    reserState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML =questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function reserState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    reserState();
    questionElement.innerHTML = 'You better have got them all right.';
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();