const express = require('express');
const router  = express.Router();
const questionInserts = require('../db/inserts/question_inserts');
const quizInserts = require('../db/inserts/quiz_inserts');
const userQueries = require('../db/queries/user_queries');

router.post('/', (req, res) => {
  console.log("I'm in req.body");
  console.log(req.body);

  if (!req.body) {
    res.status(400).json({ error: 'invalid request: no data in POST body'});
    return;
  }
  else {
    res.send({message: "hello"});
  }
  // grab relevant req.body variables here, including whether its a private quiz

  //query the db or somehow findout the user_id of this person that submitted a quiz
  //Insert quiz into the db with call to quizInserts
  //Insert question into the question db with call to questionInserts

  //send a response with relevant json if public
  //reroute to /quiz_wiz/:user_id/:id to render a private quiz
});

module.exports = router;
