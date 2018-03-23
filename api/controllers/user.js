const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
   const { username, password } = req.body;
   if (username && password) {
      const newUser = new User({ username, password });
      newUser
         .save()
         .then(user => {
            res.send(user);
         })
         .catch(err => {
            res.status(422).send('Error saving the user');
         });
   } else {
      res.status(422).send('Please send a valid username and password');
   }
   // create user takes in the username and password and saves a user.
   // our pre save hook should kick in here saving this user to the DB with an encrypted password.
};

module.exports = {
   createUser,
};
