const db = require('../db');

  const getQuestions = () => {
    return db.query(`SELECT * FROM questions;`)
      .then(res => {
        return res.rows;
      })
      .catch(err => {
        console.log(err);
      });
  }

const getQuestionsAndQuizId = () => {
  return db.query(`
      SELECT quiz_id, question
      FROM questions
      ORDER BY quiz_id;quiz_id":1,"
    `)
    .then(res => {
      console.log(res.row);
      return res.rows;
    })
    .catch(err => {
      console.log(err);
    });
  }

module.exports = {
	getQuestions,
  getQuestionsAndQuizId
}
