const User = require('../models/user');
const Profile = require('../models/profile');

//Create a function for each route

//INDEX
function indexRoute (req, res, next) {
  Profile
    .find()
    .exec()
    .then((profiles) => res.render('profiles/index', { profiles }))
    .catch(next);
}
//NEW
function newRoute(req, res) {
  return res.render('profiles/new');
}

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

//CREATE
function createRoute(req, res, next) {
  Profile
    .create(req.body)
    .then(() => res.redirect('/profiles'))
    .catch((err) => {
      if (err.name === 'ValidationError') return res.badRequest(`/profiles/${req.params.id}/edit`, err.toString());
      next(err);
    });
}
//EDIT
function editRoute(req, res, next) {
  Profile
    .findById(req.params.id)
    .exec()
    .then(profile => {
      if(!profile) return res.redirect();
      if(!profile.belongsTo(req.user)) return res.unauthorized('You do not have access rights');
      return res.render('profiles/edit', { profile });
    })
    .catch(next);
}

//UPDATE
function updateRoute(req, res, next) {
  Profile
    .findById(req.params.id)
    .exec()
    .then((profile) => {
      if(!profile) return res.notFound();
      if(!profile.belongsTo(req.user)) return res.unauthorized('You do not have access rights');

      for(const field in req.body){
        profile[field] = req.body[field];
      }

      return profile.save();
    })
    .then(() => res.redirect('/profiles'))
    .catch((err) => {
      if (err.name === 'ValidationError') return res.badRequest(`/profiles/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

//DELETE
function deleteRoute(req, res, next) {
  Profile
    .findById(req.params.id)
    .exec()
    .then(profile => {
      if(!profile) return res.notFound();
      if(!profile.belongsTo(req.user)) return res.unauthorized('You do not have access rights');
      return profile.remove();
    })
    .then(() => res.redirect('/profiles'))
    .catch(next);
}

//Export all routes
module.exports = {
  index: indexRoute,
  new: newRoute,
  show: showRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
