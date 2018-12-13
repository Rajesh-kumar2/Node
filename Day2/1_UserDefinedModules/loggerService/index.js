module.exports.log = function (m) {
    const Logger = require('./Logger');
    let obj = new Logger();
    obj.log(m);
}