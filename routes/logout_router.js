//All Routes for users are defined here
const express = require('express');
const router  = express.Router();
const cookieSession = require('cookie-session');

router.post('/', (req, res) => {
  console.log('I logged out')
  res.clearCookie("session");
  res.clearCookie("session.sig");
  console.log('after clear cookies', req.body)


  res.redirect("/login")
});

module.exports = router;
