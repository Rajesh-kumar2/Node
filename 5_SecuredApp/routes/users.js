var express = require('express');
var router = express.Router();
const users_controller = require('../controllers/usercontroller');

function IsLoggedIn(req, res, next) {
  if(req.isAuthenticated())
    return next();

  res.redirect("login");
}

router.get('/', IsLoggedIn, function (req, res, next) {
  res.redirect('users/index');
});

router.get('/index', IsLoggedIn, users_controller.index);

router.get('/create', IsLoggedIn, users_controller.user_create_get);

router.post('/create', IsLoggedIn, users_controller.user_create_post);

router.get('/delete/:id', IsLoggedIn, users_controller.user_delete_get);

router.post('/delete/:id', IsLoggedIn, users_controller.user_delete_post);

router.get('/edit/:id', IsLoggedIn, users_controller.user_edit_get);

router.post('/edit/:id', IsLoggedIn, users_controller.user_edit_post);

module.exports = router;
