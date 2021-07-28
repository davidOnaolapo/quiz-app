//All Routes for users are defined here
const express = require('express');
const router  = express.Router();
const apiQueries = require('../db/inserts/external_api_question_inserts')

router.get('/', (req, res) => {
  apiQueries.grabApiQuestions()
    .then((response) => {
      res.json(response);
    })
    .catch((e) => {
      console.log(e.message);
    })
});

module.exports = router;
