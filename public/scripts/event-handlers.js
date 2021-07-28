$(document).ready(function() {
  $("form").submit(function(event) {     //event handler for new quizzes
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

<<<<<<< HEAD
  // $("submit-form").submit(


    const submit_quiz = function(event) {     //event handler for quiz submissions
    event.preventDefault();

    const $serializedData = $(this).serialize();
    const $formText = $(this.text);

    $.post('/submit_quiz', $serializedData)
    .then(function() {
      //show score data (new function?)
      $($formText).val('');
    })

  }


  // $("quiz").click(function())



});
=======
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
>>>>>>> master




