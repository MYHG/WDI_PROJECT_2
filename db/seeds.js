const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//Connect to database URL
const databaseURL = process.env.MONGOB_URI || 'mongodb://localhost/all-the-birds';
mongoose.connect(databaseURL);

//Require the model
const User= require('../models/user');

//Drop data
User.collection.drop();

//Create dummy seed data

User
  .create([{
    firstName: 'Sandra',
    lastName: 'Okoli',
    username: 'sandra',
    email: 'sandra@sandra.co.uk',
    password: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
  });
