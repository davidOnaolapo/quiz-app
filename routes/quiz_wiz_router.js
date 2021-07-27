//All Routes for users are defined here
const express = require('express');
const router  = express.Router();
const quizQueries = require('../db/queries/quiz_queries')

router.get('/', (req, res) => {
  quizQueries.getQuizzes()
    .then((quizzes) => {
      res.json(quizzes);
    })
    .catch((e) => {
      console.log(e.message);
    })
});

module.exports = router;
