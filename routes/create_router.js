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
  console.log(req.body)
  //for quiz inserts
  // const username = req.session.user;
  // const no_of_questions = req.body.quiz-question.length;
  // const category = req.body.quiz-category;
  // const title = req.body.quiz-title;

  // userQueries.getUserIdByUsername()
  //   .then((user_id) => {
  //     const quizObj = {user_id, no_of_questions, category, title}
  //     quizInserts(quizObj);
  //   })
  //   .catch ((err) =>{
  //     console.log(err.message)
  //   })
  // //for question inserts
  // const questions = req.body.quiz-question;
  // quizQueries.getQuizCount()
  //   .then((quizzes) => {
  //     const quiz_id = quizzes.count+1; //next row on the table
  //     for (let i = 0; i < questions.length; i++ ) {
  //       const quizObj = { quiz_id, question: questions[i], answer: answer[i]}
  //       questionInserts(quizObj)
  //     }
  //   })

  // res.json({title, category, username, no_of_questions})
  // //reroute to /quiz_wiz/:user_id/:id to render a private quiz
});

module.exports = router;
