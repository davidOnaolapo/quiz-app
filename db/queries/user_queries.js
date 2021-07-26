const db = require('./db');

const getUsers = () => {
  return db.query(`SELECT * FROM users;`)
      .then(res => {
        return res.rows;
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

}

const getUserById = (id) => {
  return db.query(`SELECT * FROM users WHERE id = $1;`, [id])
      .then(res => {
        return res.rows[0];
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
}

module.exports = {
	getUsers,
	getUserById
}
