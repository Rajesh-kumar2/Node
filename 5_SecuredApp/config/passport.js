var LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, done) {
        if (email != "m@g.com")
            return done(null, false, req.flash('loginMessage', 'No User Found'));

        if (password != "manish")
            return done(null, false, req.flash('loginMessage', 'Wrong Password'));

        var user = { "email": email, "password": password };

        return done(null, user);
    }));
}