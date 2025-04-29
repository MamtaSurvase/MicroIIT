const questions = [
    {
      question: "What is the capital of France?",
      category: "Geography",
      answers: [
        { text: "Paris", correct: true },
        { text: "Rome", correct: false },
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      category: "Science",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Venus", correct: false }
      ]
    },
    {
      question: "Who wrote 'Hamlet'?",
      category: "Literature",
      answers: [
        { text: "Charles Dickens", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Jane Austen", correct: false },
        { text: "Mark Twain", correct: false }
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 15;
  let timer;
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  const timerEl = document.getElementById("time");
  const categoryEl = document.getElementById("category");
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultEl.innerHTML = "";
    nextBtn.style.display = "none";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const current = questions[currentQuestionIndex];
    questionEl.textContent = current.question;
    categoryEl.textContent = "Category: " + current.category;
  
    current.answers.forEach((answer) => {
      const btn = document.createElement("button");
      btn.textContent = answer.text;
      btn.classList.add("btn");
      btn.addEventListener("click", () => selectAnswer(btn, answer.correct));
      answersEl.appendChild(btn);
    });
  
    startTimer();
  }
  
  function resetState() {
    clearInterval(timer);
    timeLeft = 15;
    timerEl.textContent = timeLeft;
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
  
  function startTimer() {
    timer = setInterval(() => {
      timeLeft--;
      timerEl.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        revealAnswer(null);
      }
    }, 1000);
  }
  
  function selectAnswer(button, correct) {
    clearInterval(timer);
    revealAnswer(button, correct);
  }
  
  function revealAnswer(selectedBtn, correct) {
    const buttons = answersEl.children;
    for (let btn of buttons) {
      const isCorrect = questions[currentQuestionIndex].answers.find(
        (a) => a.text === btn.textContent
      ).correct;
      btn.classList.add(isCorrect ? "correct" : "wrong");
      btn.disabled = true;
    }
  
    if (selectedBtn && correct) score++;
  
    nextBtn.style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionEl.textContent = "Quiz Completed!";
    answersEl.innerHTML = "";
    categoryEl.textContent = "";
    resultEl.innerHTML = `Your score is ${score} out of ${questions.length}`;
    nextBtn.textContent = "Restart";
    nextBtn.onclick = startQuiz;
    nextBtn.style.display = "block";
  }
  
  startQuiz();
  