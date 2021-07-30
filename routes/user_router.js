//All Routes for users are defined here
const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/user_queries')
const quizQueries = require('../db/queries/quiz_queries')
const questionQueries = require('../db/queries/question_queries')
const { quizWizDataUsers } = require('../lib/helpers');

router.get('/', (req, res) => {
  console.log("INSIDE END POINT")
  const username = req.session.username
  quizQueries.getQuizzesByUserName(username)
    .then((quizData) => {
      questionQueries.getQuestionsByUsernameQuizId(username)
        .then((questionsData) => {
           res.json(quizWizDataUsers(quizData, questionsData));
        })
    })
    .catch((e) => {
      console.log(e.message);
    });
});

module.exports = router;
