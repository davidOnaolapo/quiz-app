const db = require('../db');

//inserts a new quiz into the db
const insertQuiz = (body, user_id) => {
  
  const {categeroy, type, difficulty} = body;
  const values = [categeroy, type, difficulty, user_id];
  db.query(`INSERT INTO quizzes (category, type, difficulty, user_id)
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




