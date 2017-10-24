const User = require('../models/user');
const Yearbook = require('../models/yearbook');

//Create a function for each route

//INDEX
function indexRoute (req, res, next) {
  Yearbook
    .find()
    .exec()
    .then((yearbooks) => res.render('yearbooks/index', { yearbooks }))
    .catch(next);
}
//NEW
function newRoute(req, res) {
  return res.render('yearbooks/new');
}

//SHOW
function showRoute(req, res, next) {
  Yearbook
    .findById(req.params.id)
    .populate('users createdBy')
    .exec()
    .then((yearbook) => {
      if(!yearbook) return res.notFound();
      return res.render('yearbooks/show', { yearbook });
    })
    .catch(next);
}

//CREATE
function createRoute(req, res, next) {
  req.body.createdBy = req.user;

  Yearbook
    .create(req.body)
    .then((yearbook) => res.redirect(`/yearbooks/${yearbook.id}`))
    .catch((err) => {
      if (err.name === 'ValidationError') return res.badRequest('/yearbooks/new', err.toString());
      next(err);
    });
}
//EDIT
function editRoute(req, res, next) {
  Yearbook
    .findById(req.params.id)
    .exec()
    .then(yearbook => {
      if(!yearbook) return res.redirect();
      // if(!yearbook.belongsTo(req.user)) return res.unauthorized('You do not have access rights');
      return res.render('yearbooks/edit', { yearbook });
    })
    .catch(next);
}

//UPDATE
function updateRoute(req, res, next) {
  Yearbook
    .findById(req.params.id)
    .exec()
    .then((yearbook) => {
      if(!yearbook) return res.notFound();
      // if(!yearbook.belongsTo(req.user)) return res.unauthorized('You do not have access rights');

      for(const field in req.body){
        yearbook[field] = req.body[field];
      }

      return yearbook.save();
    })
    .then(() => res.redirect('/yearbooks'))
    .catch((err) => {
      if (err.name === 'ValidationError') return res.badRequest(`/yearbooks/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

//DELETE
function deleteRoute(req, res, next) {
  Yearbook
    .findById(req.params.id)
    .exec()
    .then(yearbook => {
      if(!yearbook) return res.notFound();
      // if(!yearbook.belongsTo(req.user)) return res.unauthorized('You do not have access rights');
      return yearbook.remove();
    })
    .then(() => res.redirect('/yearbooks'))
    .catch(next);
}

function joinRoute(req, res, next) {
  Yearbook
    .findById(req.params.id)
    .exec()
    .then((yearbook) => {
      if(!yearbook) return res.notFound();
      // if(!yearbook.belongsTo(req.user)) return res.unauthorized('You do not have access rights');

      yearbook.users.push(req.user.id);

      return yearbook.save();
    })
    .then(() => res.redirect(`/yearbooks/${req.params.id}`))
    .catch((err) => {
      if (err.name === 'ValidationError') return res.badRequest(`/yearbooks/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function leaveRoute(req, res, next) {
  Yearbook
    .findById(req.params.id)
    .exec()
    .then((yearbook) => {
      if(!yearbook) return res.notFound();
      // if(!yearbook.belongsTo(req.user)) return res.unauthorized('You do not have access rights');


      const index = yearbook.users.indexOf(req.user.id);
      yearbook.users.splice(index, 1);

      return yearbook.save();
    })
    .then(() => res.redirect(`/yearbooks/${req.params.id}`))
    .catch((err) => {
      if (err.name === 'ValidationError') return res.badRequest(`/yearbooks/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

//Export all routes
module.exports = {
  index: indexRoute,
  new: newRoute,
  show: showRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  join: joinRoute,
  leave: leaveRoute
};
