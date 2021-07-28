const db = require('../db');
const request = require('request');
const { calculateScore } = require('../../lib/helpers');

//Inserts a new user into the db
const insertQuizAttempts = async(user_id, quiz_id, score) => {
  const quizAttempt = db.query(`SELECT * FROM quiz_attempts where user_id = ${user_id} AND quiz_id = ${quiz_id};`);
  const attempts = quizAttempt.no_of_attempts;
  const latest_attempt = quizAttempt.score;
  if (quizAttempt) {
    db.query(`UPDATE quiz_attemps set score = ${score}, no_of_attempts=${attempts + 1}, latest_attempt=${latest_attempt}
    WHERE user_id = ${user_id} AND quiz_id=${quiz_id};`
    );
  }  else {
    db.query(`INSERT INTO quiz_attempts (user_id, quiz_id, score, latest_attempt, no_of_attempts)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;
  `, [user_id, quiz_id, score , 0, 1 ]);
  }

};

module.exports = {
  insertQuizAttempts
};




