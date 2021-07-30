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

const getQuestionsByUsernameQuizId = (username) => {
  return db.query(`
    SELECT questions.quiz_id as quiz_id, question, users.userName as username
    FROM questions JOIN quizzes ON quiz_id = quizzes.id
    JOIN users ON users.id = user_id
    WHERE username = $1
    GROUP BY quiz_id, question, username;
    `, [username])
    .then(res => {
      console.log("questions res.rows", res.rows)
      return res.rows;
    })
    .catch(err => {
      console.log(err);
    });
  }
  const getQuestionsUsernameQuizId = () => {
    return db.query(`
      SELECT questions.quiz_id as quiz_id, question, users.userName as username
      FROM questions JOIN quizzes ON quiz_id = quizzes.id
      JOIN users ON users.id = user_id
      GROUP BY quiz_id, question, username;
      `)
      .then(res => {
        return res.rows;
      })
      .catch(err => {
        console.log(err);
      });
    }

  const getQuizIdForQuestion = (question) => {
    console.log("About to queryfor ", question)
    return db.query(`
      SELECT quiz_id
      FROM questions
      WHERE question LIKE $1
      ORDER BY quiz_id;
    `, [question])
    .then(res => {
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
      WHERE question LIKE $1;
    `, [question])
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.log(err);
    });
  }

  module.exports = {
	getQuestions,
  getQuestionsUsernameQuizId,
  getQuizIdForQuestion,
  getAnswerForQuestion,
  getQuestionsByUsernameQuizId
}
