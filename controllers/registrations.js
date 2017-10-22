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
    .catch((err) => res.status(500).end(err));
}
//Export it
module.exports = {
  new: registrationNew,
  create: registrationCreate
};
