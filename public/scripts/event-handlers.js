$(document).ready(function() {

  $("#create-button").click(function(event) {   //animation to show create quiz form
    $("section.new-quiz").slideDown("fast");
  });

});



function submit_quiz(event) {     //event handler for quiz submissions
  event.preventDefault();
  console.log("in submit");
  const $serializedData = $(this).serialize();
  console.log($serializedData);
  const $formText = $(this.text);

  $.post('/submit_quiz', $serializedData, (err, data) => {
    if (err) {
      console.log(err);
    }
    $($formText).val('');
    console.log(data);

  });


}
