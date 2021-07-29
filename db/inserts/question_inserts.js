const db = require('../db');
const request = require('request');

//Inserts a question into the db
const insertQuestion = (questionObj) => {
  //deconstruct values obj
  const { quiz_id, the_question, answer} = questionObj;
  let values = [quiz_id, the_question, answer];
  db.query(`
        INSERT INTO questions (quiz_id, question, answer)
        VALUES ($1, $2, $3)
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
};

module.exports = {
  insertQuestion
};




