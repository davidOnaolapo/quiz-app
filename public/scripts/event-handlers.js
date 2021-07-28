$(document).ready(function() {
  $("form.create-form").submit(function(event) {     //event handler for new quizzes
    event.preventDefault();

    const $serializedData = $(this).serialize();
    const $formText = $(this.text);

    $.post('/create_quiz', $serializedData)
    .then(function() {
      loadQuizzes();
      $("section.new-quiz").slideUp("fast");
      $($formText).val('');
    })
    .catch(function(err) {
      console.log(err.message)
    })
  })

  $("#create-button").click(function(event) {
    $("section.new-quiz").slideDown("fast")
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




