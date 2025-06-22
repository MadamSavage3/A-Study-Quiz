const questions = [
  {
    question: "Which of the following cable types is most commonly used for Ethernet networking?",
    options: ["HDMI", "VGA", "RJ-45", "USB"],
    correctAnswer: "RJ-45",
    explanation: "RJ-45 cables are commonly used for Ethernet networking, allowing devices to connect to a network."
    },
    {
        question: "What is the function of a power supply unit (PSU) in a computer?",
        options: ["Increases voltage to the motherboard", "Supplies AC power diirectlly to components", "Converts AC to DC power for components", "Regulates the temperature of the CPU"],
        correctAnswer: "Converts AC to DC power for components",
        explanation: "The power supply unit (PSU) converts AC power from the wall outlet into DC power that the computer components can use."
    },
    {
        question: "What is the primary purpose of a motherboard in a computer system?",
        options: ["To store data permanently", "To connect all components and allow communication", "To provide power to the CPU", "To display graphics on the monitor"],
        correctAnswer: "To connect all components and allow communication",
        explanation: "The motherboard serves as the main circuit board that connects all components of a computer, allowing them to communicate with each other."
    },
    {
        question: "Which component is responsible for executing instructions in a computer?",
        options: ["RAM", "Hard Drive", "CPU", "GPU"],
        correctAnswer: "CPU",
        explanation: "The CPU (Central Processing Unit) is the primary component responsible for executing instructions and performing calculations in a computer."
    },
    {
        question: "What is the purpose of RAM in a computer system?",
        options: ["To store data permanently", "To provide temporary storage for running applications", "To connect to the internet", "To display graphics"],
        correctAnswer: "To provide temporary storage for running applications",
        explanation: "RAM (Random Access Memory) provides temporary storage for data and instructions that the CPU needs while running applications."
    }
];

// Debug DOM elements
console.log("question element:", document.getElementById("question"));
console.log("options element:", document.getElementById("options"));
console.log("next button element:", document.getElementById("next"));

let currentQuestion = 0;
let score = 0;

const questionE1 = document.getElementById("question");
const optionsE1 = document.getElementById("options");   
const nextButton = document.getElementById("next");

function showQuestion() {
    if (!questionE1 || !optionsE1) {
        console.error("Error: 'question' or 'options' element not foung in the DOM.");
        return;
    }
    const q = questions[currentQuestion];
    questionE1.textContent = q.question;
    optionsE1.innerHTML = ""; // Clear previous options
    showOptions(q.options); // Display new options
}

function showOptions(options) {
    if (!optionsE1) {
        console.error("Error: 'options' element not found in the DOM.");
        return;
    }
    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(option));
        optionsE1.appendChild(button);
    });
}

    function checkAnswer(selectedOption) {
        const correct = questions[currentQuestion].correctAnswer; // Use correctAnswer property
        if (selectedOption === correct) {
            score++;
            alert("Correct! " + questions[currentQuestion].explanation);
        } else {
            alert("Incorrect! " + questions[currentQuestion].explanation);
        }   
    }
    
    if (nextButton) {
        nextButton.addEventListener("click", () => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            alert("Quiz completed! Your score: " + score + "/" + questions.length);
            currentQuestion = 0; // Reset for next attempt
            score = 0; // Reset score
            showQuestion(); // Redisplay the quiz
        }
    });
    } else {
        console.error("Error: 'next' button not found in the DOM.");
    }

    function showResult() {
        if (!questionE1 || !optionsE1 || !nextButton) {
            console.error("Error: Required DOM elements not found for showResults.");
            return;
        }
        questionE1.textContent = "Quiz completed! Your score: " + score + "/" + questions.length;
        optionsE1.innerHTML = ""; // Clear options  
        nextButton.style.display = "none"; // Hide next button     
    }

    showQuestion(); // Start the quiz