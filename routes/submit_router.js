const express = require('express');
const router  = express.Router();
const questionInserts = require('../db/inserts/question_inserts');
const { insertQuizAttempts } = require('../db/inserts/quiz_attempts_inserts');
const quizInserts = require('../db/inserts/quiz_inserts');
const userQueries = require('../db/queries/user_queries');
const { calculateScore } = require('../lib/helpers');

router.post('/', async(req, res) => {
  if (!req.body.text) {
    res.status(400).json({ error: 'invalid request: no data in POST body'});
    return;
  }

  userQueries.getUsers()
    .then((users) => {
      res.json(users);
    })
    .catch((e) => {
      console.log(e.message);
    });

  // grab relevant req.body variables here
  const {attempts, quiz_id} = req.body;
  
  //query the db or somehow findout the user_id of this person that submitted a quiz
  const user_id = req.session.user_id;
  
  //calculate score - needs a query to get correct answer (with helper)
  const score = await calculateScore(attempts, quiz_id);
  //Insert quiz attempts into the db with call to quizInsertsAttempts
  insertQuizAttempts(attempts, quiz_id, user_id);

  res.json({message: `Your score is , ${score}`});
  //run any other relevant queries
  //send a response with the score and other relevant info
});

module.exports = router;
