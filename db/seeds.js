const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { databaseURL } = require('../config/environment');

//Connect to database URL
mongoose.connect(databaseURL, { useMongoClient: true });

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
