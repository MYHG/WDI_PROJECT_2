const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { databaseURL } = require('../config/environment');

//Connect to database URL
mongoose.connect(databaseURL, { useMongoClient: true });

//Require the model
const User= require('../models/user');
const Profile = require('../models/profile');

//Drop data
User.collection.drop();
Profile.collection.drop();

//Create dummy seed data

//All requested user data in views registration new.ejs must match seeds
User
  .create([{
    firstName: 'Sandra',
    lastName: 'Okoli',
    username: 'sandra',
    email: 'sandra@sandra.co.uk',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
    return Profile
      .create([{
        name: 'Alex Chin aka Ninja',
        image: 'https://orig00.deviantart.net/4b77/f/2014/065/6/f/coding_ninja_by_kaizoro-d797me9.jpg',
        quote: 'Ninja by day, ninja by night dreams of an alternate universe where goblins invade Argos'
      },{
        name: 'The Rane man',
        image: 'https://orig00.deviantart.net/4b77/f/2014/065/6/f/coding_ninja_by_kaizoro-d797me9.jpg',
        quote: 'Likes to chuck sh**t until it sticks'
      }]);
  })
  .then((profiles) => console.log(`${profiles.length} hotels created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
