const express = require('express');
const router  = express.Router();
const questionInserts = require('../db/inserts/question_inserts');
const { insertQuizAttempts } = require('../db/inserts/quiz_attempts_inserts');
const quizInserts = require('../db/inserts/quiz_inserts');
const userQueries = require('../db/queries/user_queries');
const questionQueries = require('../db/queries/question_queries');
const { calculateScore } = require('../lib/helpers');

router.post('/', async(req, res) => {
  if (!req.body) {
    res.status(400).json({ error: 'invalid request: no data in POST body'});
    return;
  }


  const questions = req.body.quiz-question
  const userAnswers = req.body.user-answers
  const username = req.session.user;

  console.log(req.body.quiz-question, req.body.user-answers, req.session.user)

  userQueries.getUserIdByUsername(username)
    .then((user_id) => {
      quizQueries.getQuizIdForQuestion(question[0])
      .then(() => {
        let ansArr = [];
        for (let i = 0; i< questions.length; i++) {
          questionQueries.getAnswerForQuestion(questions[i])
            .then((answer) => {
              ansArr.push(answer);
            })
        }
        //Insert quiz attempts into the db with call to quizInsertsAttempts if you get there
        const scoreArr = calculateScore(ansArr, userAnswers);
        res.json([{score: scoreArr}]);
      })
    })

  //run any other relevant queries
  //send a response with the score and other relevant info
});

module.exports = router;
