module.exports.isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('./login');
};

module.exports.login_get = function (req, res, next) {
    res.render('login/login', { title: 'Login', message: req.flash('loginMessage') });
};

module.exports.login_post = function (passport) {
    return passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    });
}