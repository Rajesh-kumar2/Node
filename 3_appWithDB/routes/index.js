var express = require('express');
var router = express.Router();
var da = require('../dataaccess');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/usersview', function (req, res, next) {
//   da.getAllUsers(function (data) {
//     res.render('usersview', { title: 'Users View', users: data });
//   });
// });

router.get('/usersview', function (req, res, next) {
  da.getAllUsersPromises().then(function (data) {
    res.render('usersview', { title: 'Users View', users: data });
  }, function (err) {
    console.log(err);
  })
});

router.get('/delete/:id', function (req, res, next) {
  da.getUserByIdPromises(req.params.id).then(function (data) {
    res.render('deleteview', { title: 'Delete User View', user: data });
  })
});

router.get('/create', function (req, res, next) {
  res.render('createview', { title: 'Create User View' });
});

router.post('/create', function (req, res, next) {
  var uname = req.body.uname;
  var email = req.body.email;

  var user = { "username": uname, "email": email };

  da.insertUser(user, function (r) {
    res.redirect("usersview");
  })
});

module.exports = router;
