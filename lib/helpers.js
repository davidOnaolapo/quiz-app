const userQueries = require('../db/queries/user_queries');


const generateRandomString = () => {
  let text = "";
  let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  const textLength = 6;

  for (let i = 0; i < textLength; i++) {
    text += charSet.charAt(Math.floor(Math.random() * textLength));    //Add new random character
  }

  return text;
};
//login/register authentication
const authenticate = (newUserObj, register) => {
  const {email, password} = newUserObj;

  if (email.length === 0 || password.length === 0) {
    return "You entered nothing!";    // for errors page
  }

  return userQueries.getUsers()
    .then((users) => {
      if (register) {             // Checking if its authentication for registeration or log in
        for (user of users) {
          if (user.email === email) {
            return "You already have an account!";      //The user is already registered!
          }
        }
        //legitimate
        return "legit";
      } else {             // If the authentication isnt for registration, then its for log in
        for (user of users) {
          if (user.email === email && user.password === password) {
            return user.username;
          }
        }
        //The user needs to either resister or put in the email+password
        return "Please Register!";
      }
    })
    .catch((e) => {
      console.log(e.message);
    });
};

function calculateScore(ansArr, userAnsArr) {
  const total = ansArr.length;
  let score = 0;
  let scoreArr = [];
  for (let i = 0; i < total; i++) {
    if (ansArr[i] === userAnsArr[i]) {
      score++;
    }
  }
  scoreArr.push(score);
  scoreArr.push(total);

  return scoreArr;
}

//Data for quizwiz router
const quizWizDataHome = (quizData, questionsData) => {
  console.log("QUIZDATA AND QUESTION DATA GIVEN TO QUIZWIZ", quizData, questionsData)

  let quizWizData = [];
  for (let quiz of quizData) {
    let objForRender = {};

    objForRender.quiz_title = quiz.quiz_title;
    objForRender.quiz_id = quiz.quiz_id;
    objForRender.quiz_category = quiz.quiz_category;
    objForRender.no_of_questions = quiz.no_of_questions;
    objForRender.username = quiz.username;
    objForRender.questions = [];
    console.log("ObjForRender B4 Quest", objForRender)
    for (let i = 0; i < questionsData.length; i++) {
      if (questionsData[i].quiz_id === quiz.quiz_id) {

        console.log(quiz.quiz_id, questionsData[i].quiz_id);
        objForRender.questions.push(questionsData[i].question);

      }
    }
    quizWizData.push(objForRender);
  }
  return quizWizData
};

const quizWizDataUsers = (quizData, questionsData) => {

  let quizWizData = [];
  for (let quiz of quizData) {
    let objForRender = {};

    objForRender.quiz_title = quiz.quiz_title;
    objForRender.quiz_id = quiz.quiz_id;
    objForRender.quiz_category = quiz.quiz_category;
    objForRender.no_of_questions = quiz.no_of_questions;
    objForRender.username = quiz.username;
    objForRender.questions = [];
    for (let i = 0; i < questionsData.length; i++) {
      if (questionsData[i].quiz_id === quiz.quiz_id) {

        console.log(quiz.quiz_id, questionsData[i].quiz_id);
        objForRender.questions.push(questionsData[i].question);

      }
    }
    quizWizData.push(objForRender);
  }
  return quizWizData
};

module.exports = {
  authenticate,
  generateRandomString,
  quizWizDataHome,
  quizWizDataUsers,
  calculateScore
};
