var express = require('express');
var router = express.Router();

const accounts_controller = require('../controllers/accountsController');

module.exports = function (passport) {
    router.get('/', accounts_controller.login_get);

    router.post('/', accounts_controller.login_post(passport));

    return router;
};