$(document).ready(function() {

  $("#create-button").click(function(event) {   //animation to show create quiz form

    $("section.new-quiz").slideDown("fast");
  });


});

function create_quiz(event) {     //event handler for new quizzes
  event.preventDefault();
  console.log("Im in submit");
  const $serializedData = $(this).serialize();
  const $formText = $(this.text);
  $.post('/create_quiz', $serializedData)

    .then(function(data) {
      loadQuizzes();
      $(".new-quiz").slideUp("fast");
      $($formText).val('');
      console.log($serializedData);


    });
};

function submit_quiz(event) {     //event handler for quiz submissions
  event.preventDefault();
  console.log("in submit");
  const $serializedData = $(this).serialize();
  console.log($(this));

  const $formText = $(this.text);


  $.post('/submit_quiz', $serializedData, (err, score) => {
    if (err) {
      console.log(err);
    }
    $($formText).val('');
    console.log(score);

  });


}
