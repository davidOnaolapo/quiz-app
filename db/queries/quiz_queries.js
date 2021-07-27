const db = require('./db_connect_queries');

const getQuizzes = () => {
  return db.query(`SELECT * FROM quizzes;`)
      .then(res => {
        return res.rows;
      })
      .catch(err => {
        console.log(err);
      });
}

getQuizzes();
module.exports = {
	getQuizzes
}
