var express = require('express');
var router = express.Router();

module.exports = function (passport) {
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });

  router.get('/login', function (req, res, next) {
    res.render('login', { title: 'Login', message: req.flash('loginMessage') });
  });

  router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/users',
    failureRedirect: '/login',
    failureFlash: true
  }));

  return router;
};
