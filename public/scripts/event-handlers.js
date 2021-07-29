$(document).ready(function() {

  $("#create-button").click(function(event) {   //animation to show create quiz form
    $("section.new-quiz").slideDown("fast")
  })




});

$("form").submit(function(event) {     //event handler for new quizzes
  event.preventDefault();

  const $serializedData = $(this).serialize();
  const $formText = $(this.text);

  $.post('/create_quiz', $serializedData)
  .then(function(data) {
    loadQuizzes();
    $(".new-quiz").slideUp("fast");
    $($formText).val('');
    console.log($serializedData);

  })
})


function submit_quiz(event) {     //event handler for quiz submissions
  event.preventDefault();
  console.log("in submit")
  const $serializedData = $(this).serialize();
  const $formText = $(this.text);

  $.post('/submit_quiz', $serializedData, (err, data) => {
    $($formText).val('');
  })


}
