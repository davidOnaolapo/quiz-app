//All Routes for logins are defined here
const express = require('express');
const router  = express.Router();
const { authenticate, generateRandomString } = require("../lib/helpers.js");
const userQueries = require('../db/queries/user_queries');

// router.get('/', (req, res) => {
//   userQueries.getUsers()
//     .then((users) => {
//       res.json(users);
//     })
//     .catch((e) => {
//       console.log(e.message);
//     })
// });

router.get('/', (req, res) => {
  // if (!req.body.text) {
  //   res.status(400).json({ error: 'invalid request: no data in POST body'});
  //   return;
  // }

  authenticate({email: 'alice_wonderland@gmail.com', password: 'alice'}, false)
    .then(() => {
      console.log("FInished authentication");
      res.json('yo');
    })
    .catch((e) => {
      console.log(e.message);
    });
});



module.exports = router;