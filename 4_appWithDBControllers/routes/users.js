var express = require('express');
var router = express.Router();
const users_controller = require('../controllers/usercontroller');

router.get('/', function (req, res, next) {
  res.redirect('users/index');
});

router.get('/index', users_controller.index);

router.get('/create', users_controller.user_create_get);

router.post('/create', users_controller.user_create_post);

router.get('/delete/:id', users_controller.user_delete_get);

router.post('/delete/:id', users_controller.user_delete_post);

router.get('/edit/:id', users_controller.user_edit_get);

router.post('/edit/:id', users_controller.user_edit_post);

module.exports = router;
