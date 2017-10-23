const express = require('express');
const router = express.Router();

const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const profiles = require('../controllers/profiles');

//A home route
router.get('/', (req, res) => res.render('home'));

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

//Restful routes for profiles resource
//All URLS should contain /profiles
// once routes are created and views ejs files have been added, create a controllers file

// INDEX
router.route('/profiles')
  .get(profiles.index)
  .post(profiles.create);

// NEW
router.route('/profiles/new')
  .get(profiles.new);

// SHOW
router.route('/profiles/:id')
  .get(profiles.show);
// .put(profiles.update)
// .delete(profiles.delete);

// // EDIT
// router.route('/profiles/:id/edit')
//   .get(profiles.edit);

module.exports = router;
