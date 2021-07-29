const db = require('../db');

//inserts a new quiz into the db
const insertQuiz = (quizObj) => {
  const { user_id, no_of_questions, title, category, is_private } = quizObj;

  const values = [user_id.id, no_of_questions, title, category, is_private];

  console.log("values",values);
  db.query(`INSERT INTO quizzes (user_id, no_of_questions, title, category, is_private)
  VALUES ($1, $2, $3, $4, $5)
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
