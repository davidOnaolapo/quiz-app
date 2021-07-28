$(document).ready(function() {

  const escape = function (str) {            //Use escape function to prevent vulnerabilities from XSS
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }


  const renderQuizzes = function(quizzes) {       //Render each new quiz card and append it to public container
    $("#public-quizzes-container").empty();
    quizzes.forEach(function(quiz) {
      $("#public-quizzes-container").prepend(createQuizCard(quiz));
    });
  }


  const loadQuizzes = function() {      //Load each quiz with appropriate data
    $.get("/quiz_wiz")
    .then(function(quizData) {
      // console.log(quizData);
      renderQuizzes(quizData);
    });
  }


  const createQuizCard = function(data) {    //Function to create dynamic quiz cards
    const $quizCard = $(`
    <article class="quiz">
    <header class="card-title">
    <p>${data.quiz_title}</p>
    <p>${data.quiz_category}</p>
    </header>
    <div class="quiz-form">
    <form>
    <ol class="quiz-questions">
    </ol>
    <br>
    <button class="button" type="submit">Submit</button>
    </form>
    </div>
    </article>
    `)

    $quizCard.find("form").submit(submit_quiz());

    return $quizCard;
  }




  const createQuestionForm = function(data) {     //Function to create question form dynamically
    const $questionForm = `
    <li>
    <label for="quiz-question">${data.question} </label>
    <input type="text" name="quiz-question">
    </li>
    `

    return $questionForm;
  }


  loadQuizzes();


})

