const db = require('../db');

const getUsers = () => {
  return db.query(`SELECT * FROM users;`)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.log(err);
    });
};

const getUserById = (id) => {
  return db.query(`SELECT * FROM users WHERE id = $1;`, [id])
    .then(res => {
      return res.rows[0];
    })
    .catch(err => {
      console.log(err.message);
    });
};

const getUserIdByUsername = (username) => {

  return db.query(`SELECT * FROM users WHERE userName = $1;`, [username])
    .then(res => {
        
      return res.rows[0].id;
    })
    .catch(err => {
      console.log(err.message);
    });
};


// getUserIdByUsername("movie_Brad");

module.exports = {
  getUsers,
  getUserById,
  getUserIdByUsername
};
