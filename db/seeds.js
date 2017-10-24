const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { databaseURL } = require('../config/environment');

//Connect to database URL
mongoose.connect(databaseURL, { useMongoClient: true });

//Require the model
const User = require('../models/user');
const Yearbook = require('../models/yearbook');

//Drop data
User.collection.drop();
Yearbook.collection.drop();

//Create dummy seed data

//All requested user data in views registration new.ejs must match seeds
User
  .create([{
    firstName: 'Sandra',
    lastName: 'Okoli',
    username: 'sandra',
    email: 'sandra@sandra.co.uk',
    password: 'password',
    passwordConfirmation: 'password',
    image: 'https://orig00.deviantart.net/4b77/f/2014/065/6/f/coding_ninja_by_kaizoro-d797me9.jpg',
    quote: 'Ninja by day, ninja by night dreams of an alternate universe where goblins invade Argos'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
    return Yearbook
      .create([{
        name: 'WDI 30',
        description: 'Ninjas',
        createdBy: users[0],
        users: [users[0]],
        image: 'http://fillmurray.com/500/500'
      }]);
  })
  .then((yearbooks) => console.log(`${yearbooks.length} yearbooks created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
