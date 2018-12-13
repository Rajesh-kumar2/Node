module.exports.home = function (req, res, next) {
    res.render('home', { title: 'The Big Lebowski | Home' });
}

module.exports.about = function (req, res, next) {
    res.render('about', { title: 'The Big Lebowski | About' });
};

module.exports.contact = function (req, res, next) {
    res.render('contact', { title: 'The Big Lebowski | Contact' });
}