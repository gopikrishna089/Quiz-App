const quizData = [
    {
        question: "What does the 'M' in MERN stack stand for?",
        options: ["MongoDB", "MySQL", "MariaDB", "Microsoft SQL Server"],
        correct: 0
    },
    {
        question: "Which of the following is used as the frontend framework in the MERN stack?",
        options: ["Angular", "Vue.js", "React", "jQuery"],
        correct: 2
    },
    {
        question: "In the MERN stack, what is used for backend development?",
        options: ["Django", "Express.js", "Ruby on Rails", "Spring Boot"],
        correct: 1
    },
    {
        question: "What does Node.js enable developers to do?",
        options: ["Develop client-side apps", "Run JavaScript on the server-side", "Style web pages", "Design databases"],
        correct: 1
    },
    {
        question: "Which of the following is a correct order of components in the MERN stack?",
        options: ["MySQL, Express, React, Node", "MongoDB, Express, React, Node", "MariaDB, Express, React, Node", "MongoDB, Express, Ruby, Node"],
        correct: 1
    },
    {
        question: "Which package manager is typically used with Node.js in the MERN stack?",
        options: ["Yarn", "npm", "pip", "Composer"],
        correct: 1
    },
    {
        question: "What is used to interact with the MongoDB database in the MERN stack?",
        options: ["MySQL Workbench", "Mongoose", "Sequelize", "pgAdmin"],
        correct: 1
    },
    {
        question: "Which of the following describes Express.js?",
        options: ["A CSS framework", "A backend web application framework", "A JavaScript library", "A database"],
        correct: 1
    },
    {
        question: "What is JSX in the context of React?",
        options: ["A CSS preprocessor", "A database query language", "A syntax extension for JavaScript", "A testing framework"],
        correct: 2
    },
    {
        question: "Which of the following tools can be used to deploy a MERN stack application?",
        options: ["Git", "Docker", "Heroku", "Photoshop"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    deselectOptions();
    const currentQuizData = quizData[currentQuestion];
    document.getElementById('question').innerText = currentQuizData.question;
    const optionsList = document.querySelectorAll('.option-btn');
    optionsList.forEach((optionBtn, index) => {
        optionBtn.innerText = currentQuizData.options[index];
        optionBtn.classList.remove('correct', 'incorrect'); // Remove color class on load
    });
}

function deselectOptions() {
    document.querySelectorAll('.option-btn').forEach(option => {
        option.disabled = false;
        option.classList.remove('correct', 'incorrect'); // Remove classes for next question
    });
}

function selectOption(selectedIndex) {
    const currentQuizData = quizData[currentQuestion];
    const optionButtons = document.querySelectorAll('.option-btn');

    // Disable options after one is selected
    optionButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === currentQuizData.correct) {
        optionButtons[selectedIndex].classList.add('correct');
        score++;
    } else {
        optionButtons[selectedIndex].classList.add('incorrect');
        optionButtons[currentQuizData.correct].classList.add('correct'); // Highlight correct answer
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        document.getElementById('quiz-box').classList.add('hidden');
        document.getElementById('result-box').classList.remove('hidden');
        document.getElementById('score').innerText = score;
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('result-box').classList.add('hidden');
    document.getElementById('quiz-box').classList.remove('hidden');
    loadQuiz();
}

// Load the first question
loadQuiz();
