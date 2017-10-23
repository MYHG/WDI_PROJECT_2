Const User = require('../models/user');

//Create a function for each route

//INDEX
function indexRoute (req, res, next) {
  Profile
    .find()
    .exec()
    .then((profiles) => ress.render('profiles/index', {profiles})
    .catch(next);
}
//NEW

//SHOW
function showRoute (req, res, next) {
  Profile
   .findById(req.params.id)
   .exec()
   .then((profile) => {
     if(!profile) return res.notFound();
     return res.render('profiles/show', { profile });
   })
   .catch(next);
}
