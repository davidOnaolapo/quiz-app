const userQueries = require('../db/queries/user_queries');


const generateRandomString = () => {
  let text = "";
  let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  const textLength = 6;

  for (let i = 0; i < textLength; i++) {
    text += charSet.charAt(Math.floor(Math.random() * textLength));    //Add new random character
  }

  return text;
};

const authenticate = (newUserObj, register) => {
  const {email, password} = newUserObj;

  if (email.length === 0 || password.length === 0) {
    return "er1";    // for errors page
  }

  return userQueries.getUsers()
    .then((users) => {
      if (register) {             // Checking if its authentication for registeration or log in
        for (user of users) {
          if (user.email === email) {
            return "er2";      //The user is already registered!
          }
        }
        //legitimate
        return "legit";
      } else {             // If the authentication isnt for registration, then its for log in
        for (user of users) {
          if (user.email === email && user.password === password) {
            return user.username;
          }
        }
        //The user needs to either resister or put in the email+password
        return "er3";
      }
    })
    .catch((e) => {
      console.log(e.message);
    });
};

// authenticate({email: 'alice_wonderland@gmail.com', password: 'alice'}, false).then((res)=> console.log(res));

module.exports = {
  authenticate,
  generateRandomString
};
