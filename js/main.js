let questions = [
  {
    question: "hoi",
    answers: ["hoi", "hoI", "HOI", "Hoi"],
    correctAnswer: 0
  },
  // Add more questions here...
];

let currentQuestion = 0;

function askQuestion() {
  if (currentQuestion >= questions.length) {
    console.log("No more questions!");
    return;
  }

  let question = questions[currentQuestion];
  console.log(question.question);
  for (let i = 0; i < question.answers.length; i++) {
    console.log(`${i + 1}. ${question.answers[i]}`);
  }

  let answer = prompt("Enter the number of your answer:");
  if (answer == question.correctAnswer + 1) {
    console.log("Correct!");
  } else {
    console.log(`Sorry, the correct answer was ${question.answers[question.correctAnswer]}.`);
  }

  currentQuestion++;
  askQuestion();
}

askQuestion();