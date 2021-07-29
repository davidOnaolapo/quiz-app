const db = require('../db');

const getQuizzes = () => {
  return db.query(`SELECT * FROM quizzes;`)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.log(err);
    });
};

const getQuizzesWithUsername = () => {
  return db.query(`
      SELECT  quizzes.id as quiz_id, quizzes.title as quiz_title, quizzes.no_of_questions as no_of_questions,
        quizzes.category as quiz_category, users.username as userName
      FROM users
      JOIN quizzes ON user_id = users.id;
    `)
    .then(res => {
      console.log(res.row);
      return res.rows;
    })
    .catch(err => {
      console.log(err);
    });
};

const getQuizCount = () => {
  return db.query(`SELECT count(*) FROM quizzes;`)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.log(err);
    });
};
module.exports = {
  getQuizzes,
  getQuizzesWithUsername,
  getQuizCount
};
