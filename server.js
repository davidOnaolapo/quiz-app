// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const cookieSession = require('cookie-session');

const app        = express();
const morgan     = require('morgan');
const quizWizRouter = require('./routes/quiz_wiz_router');
const submitQuizRouter = require('./routes/submit_router');
const createQuizRouter = require('./routes/create_router');
const loginRouter = require('./routes/login_router');
const logoutRouter = require('./routes/logout_router');
const registerRouter = require('./routes/register_router');
const testRouter = require('./routes/test_router');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
// The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
}));
// Resource routes are mounted here
app.use('/quiz_wiz', quizWizRouter);
app.use('/submit_quiz', submitQuizRouter);
app.use('/create_quiz', createQuizRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/register', registerRouter);


//For testing backend code only
app.use('/test', testRouter);

// Home page
app.get("/", (req, res) => {
  let templateVars = {};
  if (req.session.username) {
    templateVars = {user: req.session.username};
    console.log(req.session.user);
  } else {
    templateVars = {user: false}
    console.log("no user")
  }
  console.log(templateVars.user);
  res.render("index", templateVars);
});

app.get("/user", (req, res) => {
  res.render("user")
})

app.get("/private", (req, res) => {
  res.render("private")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
