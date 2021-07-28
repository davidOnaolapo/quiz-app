$(document).ready(function() {
  $("create-form").submit(function(event) {     //event handler for new quizzes
    event.preventDefault();

    const $serializedData = $(this).serialize();
    const $formText = $(this.text);

    $.post('/create_quiz', $serializedData)
    .then(function() {
      console.log($serializedData);
      loadQuizzes();
      $($formText).val('');
    })
  })

});

function submit_quiz(event) {     //event handler for quiz submissions
  event.preventDefault();

  const $serializedData = $(this).serialize();
  const $formText = $(this.text);

  $.post('/submit_quiz', $serializedData)
  .then(function() {
      console.log($serializedData)
    $($formText).val('');
  })
}




