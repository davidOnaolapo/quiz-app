const express = require('express');
const router  = express.Router();
const questionInserts = require('../db/inserts/question_inserts');
const { insertQuizAttempts } = require('../db/inserts/quiz_attempts_inserts');
const quizInserts = require('../db/inserts/quiz_inserts');
const userQueries = require('../db/queries/user_queries');
const questionQueries = require('../db/queries/question_queries');
const { calculateScore } = require('../lib/helpers');
const { getQuizIdForQuestion, getAnswerFromDb } = require('../db/queries/quiz_queries');

router.post('/', async(req, res) => {
  if (!req.body) {
    res.status(400).json({ error: 'invalid request: no data in POST body'});
    return;
  }

  const questions = req.body["quiz_question"]
  const userAnswers = req.body["user_answer"]
  const username = req.session.username;

  const calculateScore = async(questions) => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      const answer = await getAnswerFromDb(questions[i]);
      if (answer.toLowerCase().trim() === userAnswers[i].toLowerCase().trim()) {

        score++;
      }

      //Insert quiz attempts into the db with call to quizInsertsAttempts if you get there
    }
    return score;
  };


  const user_id = await userQueries.getUserIdByUsername(username);
  const quizScore = await calculateScore(questions);

  const quiz_id = await questionQueries.getQuizIdForQuestion(questions[0]);

  res.json({quizScore, quiz_id});

  //run any other relevant queries
  //send a response with the score and other relevant info
  //run any other relevant queries
  //send a response with the score and other relevant info

});




module.exports = router;
