var da = require('../dataaccess');

module.exports.index = function (req, res, next) {
    da.getAllUsersPromises().then(function (data) {
        res.render('users/index', { title: 'Users View', users: data });
    }, function (err) {
        console.log(err);
    })
}

module.exports.user_create_get = function (req, res, next) {
    res.render('users/create', { title: 'Create User View' });
}

module.exports.user_create_post = function (req, res, next) {
    var uname = req.body.uname;
    var email = req.body.email;

    var user = { "username": uname, "email": email };

    da.insertUser(user, function (r) {
        res.redirect("/users");
    })
}

module.exports.user_delete_get = function (req, res, next) {
    da.getUserByIdPromises(req.params.id).then(function (data) {
        res.render('users/delete', { title: 'Delete User View', user: data });
    })
}

module.exports.user_delete_post = function (req, res, next) {
    console.log("POst Id: ", req.params.id);
    da.deleteUser(req.params.id).then(function (r) {
        res.redirect("/users");
    });
}

module.exports.user_edit_get = async function (req, res, next) {
    let user = await da.getUserByIdPromises(req.params.id);
    res.render('users/edit', { title: 'Edit User View', userToEdit: user });
}

module.exports.user_edit_post = function (req, res, next) {
    var uname = req.body.uname;
    var email = req.body.email;

    var user = { "username": uname, "email": email };

    da.updateUserUsingPromise(req.params.id, user).then(function (d) {
        res.redirect("/users");
    }, function (err) {
        console.log(err);
    });
}