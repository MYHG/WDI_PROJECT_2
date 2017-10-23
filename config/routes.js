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

//Restful routes for profiles resource
//All URLS should contain /profiles

// INDEX
router.get('/profiles', (req, res) => res.send('profiles/index'));

// NEW
router.get('/profiles/new', (req, res)=> res.send('profiles/new'));

// SHOW
router.get('/profiles/:id', (req, res) => res.send('profiles/show'));

// CREATE
router.post('/profiles', (req, res) => res.send('CREATE'));

// EDIT
router.get('/profiles/:id/edit', (req, res) => res.send('profiles/edit'));

// UPDATE
router.put('/profiles/:id', (req, res) => res.send('UPDATE'));

// DELETE
router.delete('/profiles/:id', (req, res) => res.send('DELETE'));

module.exports = router;
