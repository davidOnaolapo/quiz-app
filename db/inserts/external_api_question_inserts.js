const db = require('./db_connect_inserts');
const request = require('request');

//Grab questions from external API
request('https://opentdb.com/api.php?amount=50', (error, response, body) => {
  if(error) {
    console.log(error);
  }

  if(body) {
  	body = JSON.parse(body);
    //Just one question from the array of questions within the results object
    current_question = body.results[0];

    const id = 2;
    const quiz_id = 3;
    const the_question = current_question.question;
    const answer = current_question.correct_answer;
    const type = current_question.type;
    const category = current_question.category;

    console.log(the_question);
    console.log(answer);
    console.log(type);
    console.log(category);

    const insertString = `INSERT INTO questions (id, quiz_id, question, answer, type, category)
                          VALUES(${id}, ${quiz_id}, '${the_question}' , '${answer}', '${type}', '${category}')`;
    db.query(insertString, function (err, data) {
      if (err) {
        console.log("error in insertion")
        console.log(err);
      } else {
        console.log("Inserted into DB");
      }
    });
  }

});



