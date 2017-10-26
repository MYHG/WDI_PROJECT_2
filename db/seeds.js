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
  }, {
    firstName: 'Hannah',
    lastName: 'Cross',
    username: 'Pug Life',
    email: 'hannah@hannah.co.uk',
    password: 'password',
    passwordConfirmation: 'password',
    image: 'https://res.cloudinary.com/teepublic/image/private/s--4pvOYiBc--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1496364325/production/designs/1640493_1.jpg',
    quote: 'INSERT QUOTE'
  }, {
    firstName: 'Janis',
    lastName: 'Chan',
    username: 'JC',
    email: 'janis@janis.co.uk',
    password: 'password',
    passwordConfirmation: 'password',
    image: 'https://s-media-cache-ak0.pinimg.com/originals/fd/04/0f/fd040fdc329cc19bf7b7df678cc57b76.jpg',
    quote: 'INSERT QUOTE'
  }, {
    firstName: 'Janis',
    lastName: 'Chan',
    username: 'JC',
    email: 'janis@janis.co.uk',
    password: 'password',
    passwordConfirmation: 'password',
    image: 'https://s-media-cache-ak0.pinimg.com/originals/fd/04/0f/fd040fdc329cc19bf7b7df678cc57b76.jpg',
    quote: 'INSERT QUOTE'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
    return Yearbook
      .create([{
        name: 'Ninja',
        description: 'Dreams of a universe where goblins invade argos',
        createdBy: users[0],
        users: [users[0]],
        image: 'https://orig00.deviantart.net/4b77/f/2014/065/6/f/coding_ninja_by_kaizoro-d797me9.jpg'
      }, {
        name: 'Pug Life',
        description: 'I didn\'t choose the pug life the pug life choose me ',
        createdBy: users[0],
        users: [users[0]],
        image: 'https://res.cloudinary.com/teepublic/image/private/s--4pvOYiBc--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1496364325/production/designs/1640493_1.jpg'
      }, {
        name: 'Chamleon',
        description: 'insert description ',
        createdBy: users[0],
        users: [users[0]],
        image: 'https://s-media-cache-ak0.pinimg.com/originals/fd/04/0f/fd040fdc329cc19bf7b7df678cc57b76.jpg'
      }, {
        name: 'Johnny Bravo ',
        description: 'insert quote ',
        createdBy: users[0],
        users: [users[0]],
        image: 'https://i.pinimg.com/736x/16/39/c8/1639c8e34dbd74c1b25148adcb9acae3--old-cartoons-classic-cartoons.jpg'
      }, {
        name: 'The Unicorn',
        description: 'insert description ',
        createdBy: users[0],
        users: [users[0]],
        image: 'https://ih0.redbubble.net/image.413733226.6502/flat,800x800,070,f.u1.jpg'
      }, {
        name: 'Mr Bond',
        description: 'insert description ',
        createdBy: users[0],
        users: [users[0]],
        image: 'http://www.007.com/wp-content/uploads/2014/01/test_bio_image.jpg'
      }, {
        name: 'Where\'s Wally?',
        description: 'insert description ',
        createdBy: users[0],
        users: [users[0]],
        image: 'https://pbs.twimg.com/profile_images/561278946369495042/vrkX_baO.png'
      }, {
        name: 'The Cluner',
        description: 'Ultimate Martin Clunes fan ',
        createdBy: users[0],
        users: [users[0]],
        image: 'https://s3.amazonaws.com/wos-photos-production/84343.jpg'
      }, {
        name: 'Will Heftner',
        description: 'Insert description ',
        createdBy: users[0],
        users: [users[0]],
        image: 'https://smhttp-ssl-39255.nexcesscdn.net/wp-content/uploads/2015/12/Hugh-Hefner-portrayed-in-the-media-by-Esquire-in-a-smoking-jacket-675x900.jpg'
      }]);
  })
  .then((yearbooks) => console.log(`${yearbooks.length} yearbooks created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
