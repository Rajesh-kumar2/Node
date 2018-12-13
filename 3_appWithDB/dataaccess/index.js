const monk = require('monk');
const db = monk('localhost/nodetest1');
const collection = db.get("usercollection");

module.exports.getAllUsers = function (cb) {
    collection.find({}).then(function (results) {
        cb(results);
    }, function (err) {
        console.log(err);
        cb(null);
    });
}

module.exports.getAllUsersPromises = function () {
    return new Promise((resolve, reject) => {
        collection.find({}).then(function (results) {
            resolve(results);
        }, function (err) {
            console.log(err);
            reject("Some Error, Contact DAL developer");
        });
    });
}

module.exports.getUserByIdPromises = function (id) {
    return new Promise((resolve, reject) => {
        collection.findOne({ _id: monk.id(id) }).then(function (result) {
            resolve(result);
        }, function (err) {
            console.log(err);
            reject("Some Error, Contact DAL developer");
        });
    });
}

module.exports.insertUser = function (user, cb) {
    collection.insert(user).then(function (result) {
        cb(result);
    }, function (err) {
        console.log(err);
        cb(null);
    });
}