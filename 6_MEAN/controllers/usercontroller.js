var da = require('../dataaccess');

module.exports.index = function (req, res, next) {
    da.getAllUsersPromises().then(function (data) {
        res.send(data);
    }, function (err) {
        console.log(err);
    })
}