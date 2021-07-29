const db = require('../db');
const request = require('request');

//Inserts a question into the db
const insertQuestion = (questionObj) => {
  const { quiz_id, question, answer} = questionObj;
  let values = [quiz_id, question, answer];
  db.query(`
        INSERT INTO questions (quiz_id, question, answer)
        VALUES ($1, $2, $3)
        RETURNING *;
        `, values)
    .then((result) => {
      if (result) {
        console.log(result.rows[0])
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





