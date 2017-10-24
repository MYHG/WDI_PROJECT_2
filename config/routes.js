const express = require('express');
const router = express.Router();
const secureRoute = require('../lib/secureRoute');

const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const yearbooks = require('../controllers/yearbooks');

//A home route
router.get('/', (req, res) => res.render('home'));

//Restful routes for yearbooks resource
//All URLS should contain /yearbooks
// once routes are created and views ejs files have been added, create a controllers file

// INDEX
router.route('/yearbooks')
  .get(yearbooks.index)
  .post(secureRoute, yearbooks.create);

// NEW
router.route('/yearbooks/new')
  .get(secureRoute, yearbooks.new);

// SHOW
router.route('/yearbooks/:id')
  .get(yearbooks.show)
  .put(secureRoute, yearbooks.update)
  .delete(secureRoute, yearbooks.delete);

router.route('/yearbooks/:id/join')
  .post(yearbooks.join);

router.route('/yearbooks/:id/leave')
  .delete(yearbooks.leave);

// EDIT
router.route('/yearbooks/:id/edit')
  .get(secureRoute, yearbooks.edit);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);


router.all('*', (req, res) => res.notFound());

module.exports = router;
