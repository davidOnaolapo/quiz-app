//All Routes for users are defined here
const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/user_queries')

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then((users) => {
      res.json(users);
    })
    .catch((e) => {
      console.log(e.message);
    })
});

module.exports = router;
