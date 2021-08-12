$(document).ready(function() {
  loadQuizzes();  //load all quizzes for homepage
  loadUserQuizzes();  //load all quizzes for specific user, for userspage
});

const escape = function(str) {            //Use escape function to prevent vulnerabilities from XSS
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const renderQuizzes = function(quizzes) {       //Render each new quiz card for all! and append it to public container
  $("#public-quizzes-container").empty();
  quizzes.forEach(function(quiz) {
    $("#public-quizzes-container").prepend(createQuizCard(quiz));
  });
};

const loadQuizzes = function() {      //Load each quiz with appropriate data
  $.get("/quiz_wiz")
    .then(function(quizData) {
      renderQuizzes(quizData);
    });
};

const addNewQuiz = function(quiz) {             //add just one new quiz in homepage
  $("#public-quizzes-container").prepend(createQuizCard(quiz));
}

const renderUserQuizzes = function(quizzes) {       //Render each new quiz card for user and append it to user container
  $("#user-quizzes-container").empty();
  quizzes.forEach(function(quiz) {
    $("#user-quizzes-container").prepend(createQuizCard(quiz));
  });
};

const loadUserQuizzes = function() {
  $.get("/wiz_user")
    .then(function(quizData) {
      renderUserQuizzes(quizData);
    });
}


const createQuizCard = (data) => {      //Function to create dynamic quiz cards
  console.log(data)
  const questions = data.questions.map(question => `
    <li autocomplete='new-password'>
      <label for="quiz-question"> ${question} </label><br />
      <input type="text" name="user_answer">
      <input type="text" name="quiz_question" value="${question}" hidden>
    </li>
    `);
    const $quizCard = $(`
    <article class="quiz">
      <header class="card-title">
      <p>${data.quiz_title}</p>
      <p>${data.quiz_category}</black>
      </header>
      <div class="quiz-form">
        <form>
          <ol class="quiz-questions">
            ${questions}
          </ol>
          <button class="button" type="submit">Submit</button>
          <br>
          <div class="username" >Made by ${data.username}</div>
        </form>
      </div>
      <div class="score"
       id = "${data.quiz_id}">
      0
      </div>
    </article>
  `);
  $quizCard.find("form").submit(submit_quiz);    //call submit quiz function to handle submits

  return $quizCard;
};



