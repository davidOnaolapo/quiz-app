//All Routes for users are defined here
const express = require('express');
const router  = express.Router();
const cookieSession = require('cookie-session');

router.post('/', (req, res) => {
  res.clearCookie("session");
  res.clearCookie("session.sig");

  //redirect to homepage or /login
});

module.exports = router;
