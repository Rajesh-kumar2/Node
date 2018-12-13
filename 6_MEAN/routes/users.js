var express = require('express');
var router = express.Router();
const users_controller = require('../controllers/usercontroller');

router.get('/users', users_controller.index);

module.exports = router;
