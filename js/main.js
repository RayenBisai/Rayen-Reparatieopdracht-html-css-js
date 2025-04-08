let questions = [
  {
    question: "hoi",
    answers: ["hoi", "hoI", "HOI", "Hoi"],
    correctAnswer: 0
  },
  // Add more questions here
];

let currentQuestion = 0;
const mainElement = document.querySelector('.main');
const answerButtons = document.querySelectorAll('.main-btn');
const questionElement = document.createElement('div');
questionElement.className = 'question';
mainElement.insertBefore(questionElement, answerButtons[0]);

function displayQuestion() {
  if (currentQuestion >= questions.length) {
    questionElement.textContent = "Quiz completed!";
    return;
  }

  let question = questions[currentQuestion];
  questionElement.textContent = question.question;
  
  answerButtons.forEach((btn, index) => {
    if (index < question.answers.length) {
      btn.textContent = question.answers[index];
      btn.style.display = 'block';
      btn.onclick = () => checkAnswer(index);
    } else {
      btn.style.display = 'none';
    }
  });
}

function checkAnswer(selectedIndex) {
  let question = questions[currentQuestion];
  if (selectedIndex === question.correctAnswer) {
    questionElement.textContent += " - Correct!";
  } else {
    questionElement.textContent += ` - Wrong! Correct answer was: ${question.answers[question.correctAnswer]}`;
  }
  
  setTimeout(() => {
    currentQuestion++;
    displayQuestion();
  }, 1500);
}

displayQuestion();
