const express = require('express');
const router  = express.Router();
const questionInserts = require('../db/inserts/question_inserts');
const quizInserts = require('../db/inserts/quiz_inserts');
const userQueries = require('../db/queries/user_queries');

router.post('/', (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ error: 'invalid request: no data in POST body'});
    return;
  }
  // grab relevant req.body variables here

  //query the db or somehow findout the user_id of this person that submitted a quiz
  //Insert quiz attempts into the db with call to quizInserts (NOT SET UP YET)


  //calculate score (with heler)
  //run any other relevant queries
  //send a response with the score and reother relevant info
});

module.exports = router;
