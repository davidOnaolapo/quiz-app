const db = require('./db_connect_queries');

const getUsers = () => {
  return db.query(`SELECT * FROM users;`)
      .then(res => {
        return res.rows;
      })
      .catch(err => {
        console.log(err);
      });
}

const getUserById = (id) => {
  return db.query(`SELECT * FROM users WHERE id = $1;`, [id])
      .then(res => {
        return res.rows[0];
      })
      .catch(err => {
        console.log(err.message);
      });
}

module.exports = {
	getUsers,
	getUserById
}
