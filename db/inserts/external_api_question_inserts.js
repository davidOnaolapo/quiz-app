const db = require('../db');
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

    const id = 6;
    const quiz_id = 3;
    const the_question = current_question.question;
    const answer = current_question.correct_answer;
    const type =  current_question.type;
    const category = current_question.category;

    let values = [id, quiz_id, the_question, answer, type, category];

    db.query(`
      INSERT INTO questions (id, quiz_id, question, answer, type, category)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
      `, values)
      .then((result) => {
        if (result) {
          console.log(result);
          return result.rows[0];
        } else {
          return null;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
});



