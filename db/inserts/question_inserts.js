const db = require('../db');
const request = require('request');

//Inserts a question into the db
const insertQuestion = (valuesObj) => {
  //deconstruct values obj
  const {quiz_id, the_question, answer, type, category} = valuesObj;
  let values = [quiz_id, the_question, answer, type, category];
  db.query(`
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
};

module.exports = {
  insertQuestion
};




