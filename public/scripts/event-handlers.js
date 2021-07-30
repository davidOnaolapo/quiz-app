$(document).ready(function() {

  $("#create-button").click(function(event) {   //animation to show create quiz form

    $("section.new-quiz").slideDown("fast");
  });

  $(".create-form").submit(create_quiz);

});

function create_quiz(event) {     //event handler for new quizzes
  event.preventDefault();
  console.log("Im in submit");
  const $serializedData = $(this).serialize();
  const $formText = $(this.text);
  $.post('/create_quiz', $serializedData)

    .then(function(data) {
      console.log(data);
        addNewQuiz(data);
      $(".new-quiz").slideUp("fast");
      $($formText).val('');
    });
};

function submit_quiz(event) {     //event handler for quiz submissions
  event.preventDefault();
  console.log("in submit");
  const $serializedData = $(this).serialize();

  const $formText = $(this.text);


  $.post('/submit_quiz', $serializedData, (score, err) => {
    if (err) {
      console.log(err);
    }
    console.log(score)
    $(`#${score.quiz_id[0].quiz_id}`).html(`${score.quizScore}`);

  });
}
