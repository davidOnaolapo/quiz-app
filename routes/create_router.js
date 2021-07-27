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

  //query the db or somehow findout the user_id of this person thst submitted a quiz
  //Insert quiz into the db with call to quizInserts
  //Insert question into the question db with call to questionInserts

  //send a response with relevant json, so it can be rendered nicely
});

module.exports = router;
