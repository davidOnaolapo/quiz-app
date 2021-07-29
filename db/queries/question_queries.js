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
      ORDER BY quiz_id;
    `)
    .then(res => {
      console.log(res.row);
      return res.rows;
    })
    .catch(err => {
      console.log(err);
    });
  }

  const getQuizIdForQuestion = (question) => {
    return db.query(`
      SELECT quiz_id
      FROM questions
      WHERE question = ${question}
      ORDER BY quiz_id;
    `)
    .then(res => {
      console.log(res.row);
      return res.rows;
    })
    .catch(err => {
      console.log(err);
    });
  }

  const getAnswerForQuestion = (question) => {
    return db.query(`
      SELECT question, answer
      FROM questions
      WHERE question = ${question};
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
  getQuestionsAndQuizId,
  getQuizIdForQuestion,
  getAnswerForQuestion
}
