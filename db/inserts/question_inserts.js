const db = require('../db');
const request = require('request');

//Inserts a question into the db
const insertQuestion = (questionObj) => {
  const { quiz_id, question, answer} = questionObj;
  let values = [quiz_id, question, answer];
  console.log("About to insert the questions with values of", values)
  db.query(`
        INSERT INTO questions (quiz_id, question, answer)
        VALUES ($1, $2, $3)
        RETURNING *;
        `, values)
    .then((result) => {
      if (result) {
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





