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
    firstName: 'George',
    lastName: 'Willman',
    username: 'george',
    email: 'george@george.co.uk',
    password: 'password',
    passwordConfirmation: 'password',
    quote: 'Ninja by day, ninja by night dreams of an alternate universe where goblins invade Argos'
  }, {
    firstName: 'Hannah',
    lastName: 'Cross',
    username: 'Pug Life',
    email: 'hannah@hannah.co.uk',
    password: 'password',
    passwordConfirmation: 'password',
    quote: 'INSERT QUOTE'
  }, {
    firstName: 'Janis',
    lastName: 'Chan',
    username: 'JC',
    email: 'janis@janis.co.uk',
    password: 'password',
    passwordConfirmation: 'password',
    quote: 'INSERT QUOTE'
  }, {
    firstName: 'Gavin',
    lastName: 'Hughes',
    username: 'JC',
    email: 'gavin@gavin.co.uk',
    password: 'password',
    passwordConfirmation: 'password',
    quote: 'INSERT QUOTE'
  }, {
    firstName: 'Julie',
    lastName: 'Bernal',
    username: 'JB',
    email: 'julie@bernal.co.uk',
    password: 'password',
    passwordConfirmation: 'password',
    quote: 'INSERT QUOTE'
  }, {
    firstName: 'James',
    lastName: 'Tang',
    username: 'The joker',
    email: 'james@james.co.uk',
    password: 'password',
    passwordConfirmation: 'password',
    quote: 'INSERT QUOTE'
  }, {
    firstName: 'Masee',
    lastName: 'Hussain',
    username: 'Masee',
    email: 'masee@masee.co.uk',
    password: 'password',
    passwordConfirmation: 'password',
    quote: 'INSERT QUOTE'
  }, {
    firstName: 'Cam',
    lastName: 'Jones',
    username: 'The Cluner',
    email: 'cam@cam.co.uk',
    password: 'password',
    passwordConfirmation: 'password',
    quote: 'INSERT QUOTE'
  }, {
    firstName: 'Wilson Espina',
    lastName: 'Hughes',
    username: 'Will Heftner',
    email: 'will@will.co.uk',
    password: 'password',
    passwordConfirmation: 'password',
    quote: 'INSERT QUOTE'
  }, {
    firstName: 'Clara',
    lastName: 'Cheung',
    username: 'The gamer',
    email: 'clara@clara.co.uk',
    password: 'password',
    passwordConfirmation: 'password',
    quote: 'INSERT QUOTE'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
    return Yearbook
      .create([{
        name: 'George Wilman',
        description: 'Dreams of a universe where goblins invade argos',
        createdBy: users[0],
        users: [users[0]],
        image: 'https://user-images.githubusercontent.com/28314323/32336553-7fcb53c6-bfe7-11e7-9439-516d73e35849.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'
      }, {
        name: 'Hannah Cross',
        description: 'I didn\'t choose the pug life, the pug life choose me ',
        createdBy: users[1],
        users: [users[1]],
        image: 'https://user-images.githubusercontent.com/28314323/32336546-7a3bb05e-bfe7-11e7-950d-0a916ee272d1.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'
      }, {
        name: 'Janis Chan',
        description: 'One of the best part of WDI was stand-ups',
        createdBy: users[2],
        users: [users[2]],
        image: 'https://user-images.githubusercontent.com/28314323/32336524-6d065f42-bfe7-11e7-846b-e85e025a4b9f.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'
      }, {
        name: 'Gavin Hughes',
        description: 'Real life Johnny bravo ',
        createdBy: users[3],
        users: [users[3]],
        image: 'https://user-images.githubusercontent.com/28314323/32336570-8c90a520-bfe7-11e7-9fe1-610fc97d469a.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'
      }, {
        name: 'Julie Bernal',
        description: 'Loves eating pretzels ',
        createdBy: users[4],
        users: [users[4]],
        image: 'https://user-images.githubusercontent.com/28314323/32336555-83186c76-bfe7-11e7-8747-5607e7817375.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'
      }, {
        name: 'James Tang',
        description: 'Insert something witty',
        createdBy: users[5],
        users: [users[5]],
        image: 'https://user-images.githubusercontent.com/28314323/32336531-725b4304-bfe7-11e7-9db0-9d4d4bc81a96.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'
      }, {
        name: 'Masee Hussain',
        description: 'Insert something witty',
        createdBy: users[6],
        users: [users[6]],
        image: 'https://user-images.githubusercontent.com/28314323/32336502-618a543e-bfe7-11e7-96ad-b196d9e67860.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'
      }, {
        name: 'Cameron Jones',
        description: 'Ultimate Martin Clunes fan',
        createdBy: users[7],
        users: [users[7]],
        image: 'https://user-images.githubusercontent.com/28314323/32336420-37401b96-bfe7-11e7-82ce-f7a9a94798c4.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'
      }, {
        name: 'Wilson Espina',
        description: 'Insert description',
        createdBy: users[8],
        users: [users[8]],
        image: 'https://user-images.githubusercontent.com/28314323/32336533-73e74cb8-bfe7-11e7-9f5b-c8839313a8d0.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'
      }, {
        name: 'Clara Cheung',
        description: 'The gamer',
        createdBy: users[8],
        users: [users[8]],
        image: 'https://user-images.githubusercontent.com/28314323/32336570-8c90a520-bfe7-11e7-9fe1-610fc97d469a.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'
      }]);
  })
  .then((yearbooks) => console.log(`${yearbooks.length} yearbooks created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
