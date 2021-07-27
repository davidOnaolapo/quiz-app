const db = require('../db');

const getQuizzes = () => {
  return db.query(`SELECT * FROM quizzes;`)
      .then(res => {
      console.log(res.row);
        return res.rows;
      })
      .catch(err => {
        console.log(err);
      });
}

module.exports = {
	getQuizzes
}
