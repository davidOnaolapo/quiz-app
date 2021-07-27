$(document).ready(function() {
  const loadQuizzes = () => {
    $.ajax('/quiz_wiz', { method: 'GET' })
    .then(function (res) {
      for(question of res) {
        $("<div>").text(question.title).appendTo($("body"));
      }
    });
  }
  loadQuizzes();














})

