const User = require('../models/user');

// New registration
function registrationNew(req, res) {
  res.render('registrations/new');
}

//Create registration
function registrationCreate(req, res){
  User
    .create(req.body)
    .then((user) => {
      res.redirect('/');

    })
    .catch((err) => {
console.log(err);
      if (err.name === 'ValidationError') {
        return res.status(400).render('registrations/new', { message: 'Passwords do not match' });
      }
      res.status(500).end();
    });
}
//Export it
module.exports = {
  new: registrationNew,
  create: registrationCreate
};
