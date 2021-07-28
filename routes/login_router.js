//All Routes for logins are defined here
const express = require('express');
const router  = express.Router();
const { authenticate, generateRandomString } = require("../lib/helpers.js");
const userQueries = require('../db/queries/user_queries');

router.get('/', (req, res) => {
  return res.render("/login");
});

router.get('/', (req, res) => {
  if (!req.body) {
    res.status(400).json({ error: 'invalid request: no data in POST body'});
    return;
  }

  // authenticate({email: 'alice_wonderland@gmail.com', password: 'alice'}, false)
  //   .then(() => {
  //     console.log("FInished authentication");
  //     res.json('yo');
  const user = {email: req.body.email, password: req.body.password};
  authenticate(user, false)
    .then((msg) => {
      console.log("FInished authentication");
      res.json('yo');
      if (msg === "er1") {
        res.send(msg);
      } else if (msg === "er3") {
        res.send(msg);
      } else if (msg) {
        //name the username the cookie session variable
        req.session.username = "Dave";
        // res.json(msg);
        return res.redirect("/");
      }
    })
    .catch((e) => {
      console.log(e.message);
    });
});

module.exports = router;
