const express = require('express');
const router  = express.Router();
const questionInserts = require('../db/inserts/question_inserts');
const quizInserts = require('../db/inserts/quiz_inserts');
const userQueries = require('../db/queries/user_queries');
const quizQueries = require('../db/queries/quiz_queries');

router.post('/', (req, res) => {
  if (!req.body) {
    res.status(400).json({ error: 'invalid request: no data in POST body'});
    return;
  }
  //for quiz inserts
  const username = req.session.username;
  console.log(username)
  const no_of_questions = req.body.quiz_question.length;
  const category = req.body.quiz_category;
  const title = req.body.quiz_title;
  const is_private = (req.body["is-private"] === 'on');

  userQueries.getUserIdByUsername(username)
    .then((user_id) => {
      const quizObj = {user_id, no_of_questions, category, title, is_private}
      quizInserts.insertQuiz(quizObj);
    })
    .catch ((err) =>{
      console.log(err.message)
    })
  //for question insertse
  const questions = req.body.quiz_question;
  const answers = req.body.answer;
  quizQueries.getQuizCount()
    .then((quizzes) => {
      const quiz_id = quizzes[0].count; //next row on the table
      for (let i = 0; i < questions.length; i++ ) {
        const quizObj = { quiz_id, question: questions[i], answer: answers[i]}
        questionInserts.insertQuestion(quizObj)
      }
     })
  res.json({title: 'Yas', category: 'Les geddit', user: "Greatest", no_of_questions: '2'})

  //reroute to /quiz_wiz/:user_id/:id to render a private quiz
});

module.exports = router;
