const db = require('../db');

//inserts a new quiz into the db
const insertQuiz = (quizObj) => {
  const { user_id, no_of_questions, title, category } = quizObj;

  const values = [user_id, no_of_questions, title, category];
  db.query(`INSERT INTO quizzes (user_id, no_of_questions, title, category)
  VALUES ($1, $2, $3, $4)
  RETURNING *;`, values)
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
  insertQuiz
};




