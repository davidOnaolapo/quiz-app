//All Routes for logins are defined here
const express = require('express');
const router  = express.Router();
const { authenticate, generateRandomString } = require("../lib/helpers.js");
const userQueries = require('../db/queries/user_queries')

router.get('/', (req, res) => {
  return res.render("/login");
});

router.get('/', (req, res) => {
  if (!req.body) {
    res.status(400).json({ error: 'invalid request: no data in POST body'});
    return;
  }
  req.session.username = "Dave";
  const user = {email: req.body.email, password: req.body.password}
  authenticate(user, false)
    .then((msg) => {
      if (msg === "er1") {
      return res.send(msg)
      } else if (msg === "er3") {
       return  res.send(msg)
      } else if (msg) {
        //name the username the cookie session variable
        req.session.username = "Dave";
        // res.json(msg);
        return res.redirect("/");
      }
    })
    .catch((e) => {
      console.log(e.message);
    })
});

module.exports = router;
