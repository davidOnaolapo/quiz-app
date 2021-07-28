const express = require('express');
const router  = express.Router();
const quizQueries = require('../db/queries/quiz_queries')

//get the home page with all relevant data
router.get('/', (req, res) => {
  quizQueries.getQuizzesWithUsername()
    .then((quizzes) => {
      res.json(quizzes);
    })
    .catch((e) => {
      console.log(e.message);
    })
});

//What happens when a user requests their page
router.post('/:user_id', (req, res) => {

});

//What happens when a user submits a private quiz
router.post('/:user_id/:quiz_id', (req, res) => {
});

module.exports = router;
