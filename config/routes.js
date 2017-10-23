const express = require('express');
const router = express.Router();

const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const yearbooks = require('../controllers/yearbooks');

//A home route
router.get('/', (req, res) => res.render('home'));

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

//Restful routes for yearbooks resource
//All URLS should contain /yearbooks
// once routes are created and views ejs files have been added, create a controllers file

// INDEX
router.route('/yearbooks')
  .get(yearbooks.index)
  .post(yearbooks.create);

// NEW
router.route('/yearbooks/new')
  .get(yearbooks.new);

// SHOW
router.route('/yearbooks/:id')
  .get(yearbooks.show);
// .put(yearbooks.update)
// .delete(yearbooks.delete);

// // EDIT
// router.route('/yearbooks/:id/edit')
//   .get(yearbooks.edit);

module.exports = router;
