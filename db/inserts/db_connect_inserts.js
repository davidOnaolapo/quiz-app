const { Pool } = require('pg');
require('dotenv').config({
	path: '../../.env'
});

let dbParams = {};                 //declaring variables for midterm db connection
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };
}
const db = new Pool(dbParams);

db.connect()
.then(() => {
  console.log("Connected to quiz-wiz database!")
}). catch(e => {
  console.log('--------ERROR--------');
  console.log(e.message);
});

module.exports = db;
