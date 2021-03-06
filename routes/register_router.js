//All Routes for registration are defined here
const express = require('express');
const router  = express.Router();
const { authenticate, generateRandomString } = require("../lib/helpers.js");
const userQueries = require('../db/queries/user_queries')

router.get('/', (req, res) => {
  res.render("/login");
});

router.post('/', (req, res) => {
  if (!req.body) {
    res.status(400).json({ error: 'invalid request: no data in POST body'});
    return;
  }

  const user = {email: "alice_wonderland@gmail.com", password: "alice"}
  authenticate(user, true)
    .then((msg) => {
      if (msg === "er1") {
        res.send(msg)
      } else if (msg === "er2") {
        res.send(msg)
      } else if (msg === "legit") {
        // name the username the cookie session variable
        req.session.user = msg;
        res.redirect("/");
      }
    })
    .catch((e) => {
      console.log(e.message);
    });
});

module.exports = router;
