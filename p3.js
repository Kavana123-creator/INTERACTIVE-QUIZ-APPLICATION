const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
      answer: 0
    },
    {
      question: "Which programming language is used for web development?",
      options: ["Python", "C++", "JavaScript", "Java"],
      answer: 2
    },
    {
      question: "What symbol is used to comment a single line in JavaScript?",
      options: ["<!-- -->", "//", "/* */", "#"],
      answer: 1
    },
    {
      question: "Which company developed React.js?",
      options: ["Google", "Apple", "Facebook", "Microsoft"],
      answer: 2
    },
    {
      question: "What is the result of 3 + '3' in JavaScript?",
      options: ["6", "33", "Error", "NaN"],
      answer: 1
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: 1
      },
      {
        question: "What is CSS used for?",
        options: ["Creating web logic", "Styling web pages", "Storing data", "Adding interactivity"],
        answer: 1
      },
      {
        question: "Which method is used to print something in the browser console?",
        options: ["console.write()", "console.output()", "log.console()", "console.log()"],
        answer: 3
      },
      {
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Applied Programming Integration", "Advanced Protocol Input", "Automated Programming Interface"],
        answer: 0
      },
      {
        question: "Which of the following is a JavaScript framework?",
        options: ["Django", "Flask", "React", "Laravel"],
        answer: 2
      }
    ];
    
  
  
  let currentIndex = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsList = document.getElementById("options-list");
  const feedbackEl = document.getElementById("feedback");
  const nextBtn = document.getElementById("next-btn");
  const progressEl = document.getElementById("progress");
  const quizBox = document.getElementById("quiz-box");
  const resultBox = document.getElementById("result-box");
  const scoreText = document.getElementById("score-text");
  
  function loadQuestion() {
    const currentQ = questions[currentIndex];
    questionEl.textContent = currentQ.question;
    optionsList.innerHTML = "";
    feedbackEl.textContent = "";
    progressEl.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  
    currentQ.options.forEach((option, idx) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(idx);
      li.appendChild(btn);
      optionsList.appendChild(li);
    });
  
    nextBtn.style.display = "none";
  }
  
  function checkAnswer(selected) {
    const correct = questions[currentIndex].answer;
    const allButtons = document.querySelectorAll("#options-list button");
    allButtons.forEach(btn => btn.disabled = true);
  
    if (selected === correct) {
      feedbackEl.textContent = "Correct!";
      feedbackEl.style.color = "lightgreen";
      score++;
    } else {
      feedbackEl.textContent = `Wrong! Correct answer: ${questions[currentIndex].options[correct]}`;
      feedbackEl.style.color = "salmon";
    }
  
    nextBtn.style.display = "block";
  }
  
  nextBtn.onclick = () => {
    currentIndex++;
    if (currentIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  };
  
  function showResult() {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    scoreText.textContent = `You scored ${score} out of ${questions.length}`;
  }
  
  function restartQuiz() {
    currentIndex = 0;
    score = 0;
    quizBox.classList.remove("hide");
    resultBox.classList.add("hide");
    loadQuestion();
  }
  
  loadQuestion();
  
