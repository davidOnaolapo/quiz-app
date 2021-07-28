$(document).ready(function() {
  // const loadQuizzes = () => {
  //   $.ajax('/quiz_wiz', { method: 'GET' })
  //   .then(function (res) {
  //     for(question of res) {
  //       $("<div>").text(question.title).appendTo($("body"));
  //     }
  //   });
  // }
  // loadQuizzes();



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
      console.log(quizData);
      renderQuizzes(quizData);
    });
  }



  const createQuizCard = (data) => {    //Function to create dynamic quiz cards
    const $quizCard = $(`
    <article class="quiz">
    <header class="card-title">
    <p>${data.quiz_title}</p>
    <p>${data.quiz_category}</p>
    </header>
    <div class="quiz-form">
    <form>
    <ol class="quiz-questions">
    <li>
    <label for="quiz-question">This is a quiz question </label>
    <input type="text" name="quiz-question">
    </li>
    <li>
    <label for="quiz-question">This is a quiz question </label>
    <input type="text" name="quiz-question">
    </li>
    </ol>
    <br>
    <button class="button" id="submit-form" type="submit">Submit</button>
    </form>
    </div>
    </article>
    `)

    return $quizCard;
  }


  loadQuizzes();


})

