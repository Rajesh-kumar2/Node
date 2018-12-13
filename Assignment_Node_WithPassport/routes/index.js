var express = require('express');
var router = express.Router();

const lebowski_controller = require('../controllers/lebowskiController');
const accounts_controller = require('../controllers/accountsController');

router.get('/home', accounts_controller.isAuthenticated, lebowski_controller.home);

router.get('/about', accounts_controller.isAuthenticated, lebowski_controller.about);

router.get('/contact', accounts_controller.isAuthenticated, lebowski_controller.contact);

router.get('/', accounts_controller.isAuthenticated, function (req, res) {
  res.redirect('/home');
});

module.exports = router;
