const express = require('express');
const router = express.Router();

//A home route
router.get('/', (req, res) => res.render('home'));
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);


// NEW

// SHOW

// CREATE

// EDIT

// UPDATE

// DELETE

module.exports = router;
