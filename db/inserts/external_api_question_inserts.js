const db = require('../db');
const request = require('request');

//Grab questions from external API and inserts into questions column
const grabApiQuestions = () => {
  return request('https://opentdb.com/api.php?amount=50', (error, response, body) => {
    if (error) {
      console.log(error);
    }

    if (body) {
  	  body = JSON.parse(body);
      //Just one question from the array of questions within the results object
      current_question = body.results[0];

      const quiz_id = 5;
      const the_question = current_question.question;
      const answer = current_question.correct_answer;
      const type =  current_question.type;
      const category = current_question.category;

      let values = [quiz_id, the_question, answer, type, category];

      return db.query(`
        INSERT INTO questions (quiz_id, question, answer, type, category)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
        `, values)
        .then((result) => {
          if (result) {
            console.log(result.rows[0]);
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
};
module.exports = {
  grabApiQuestions
};
