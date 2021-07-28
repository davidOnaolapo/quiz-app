const express = require('express');
const router  = express.Router();
const questionInserts = require('../db/inserts/question_inserts');
const quizInserts = require('../db/inserts/quiz_inserts');
const userQueries = require('../db/queries/user_queries');

router.post('/', (req, res) => {
  if (!req.body) {
    res.status(400).json({ error: 'invalid request: no data in POST body'});
    return;
  }

  userQueries.getUsers()
    .then((users) => {
      res.json(users);
    })
    .catch((e) => {
      console.log(e.message);
    })

  // grab relevant req.body variables here

  //query the db or somehow findout the user_id of this person that submitted a quiz
  //Insert quiz attempts into the db with call to quizInserts


  //calculate score - needs a query to get correct answer (with helper)
  //run any other relevant queries
  //send a response with the score and reother relevant info
});

module.exports = router;
