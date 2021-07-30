$(document).ready(function() {
  loadQuizzes();
});

const escape = function(str) {            //Use escape function to prevent vulnerabilities from XSS
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const renderQuizzes = function(quizzes) {       //Render each new quiz card and append it to public container
  $("#public-quizzes-container").empty();
  quizzes.forEach(function(quiz) {
    console.log(quiz)
    $("#public-quizzes-container").prepend(createQuizCard(quiz));
  });
};

const addNewQuiz = function(quiz) {
  $("#public-quizzes-container").prepend(createQuizCard(quiz));
}

const loadQuizzes = function() {      //Load each quiz with appropriate data
  $.get("/quiz_wiz")
    .then(function(quizData) {
      console.log("Inside loadquizzes", quizData)
      renderQuizzes(quizData);
    });
};


const createQuizCard = (data) => {
  //Function to create dynamic quiz cards
  const questions = data.questions.map(question => `
  <li>
  <label for="quiz-question"> ${question} </label><br />
  <input type="text" name="user-answer">
  <input type="text" name="user-question" value="${question}" hidden>
  </li>`
  );
  const $quizCard = $(`
  <article class="quiz">
  <header class="card-title">
  <p>${data.quiz_title}</p>
  <p>${data.quiz_category}</p>
  </header>
  <div class="quiz-form">
  <form>
  <ol class="quiz-questions">

  ${questions}

  </ol>
  <br>
  <button class="button" type="submit">Submit</button>
  </form>
  </div>
  </article>
  `);

  $quizCard.find("form").submit(submit_quiz);    //call submit quiz function to handle submits

  return $quizCard;
};


const renderQuestions = function(questions) {
  for (const question of questions) {
    if (question.quiz_id = quiz.id) {
      $(".quiz-questions").append(createQuestionForm(question));
    }
  }
};

const loadQuestions = function() {
  $.get("/")
    .then(function(questionData) {
      renderQuestions(questionData);
    });
};

const createQuestionForm = function(data) {     //Function to create question form dynamically
  const $questionForm = $(`
  <li>
  <label for="quiz-question">${data.question} </label>
  <input type="text" name="user-answer">
  </li>
  `);

  return $questionForm;
};
