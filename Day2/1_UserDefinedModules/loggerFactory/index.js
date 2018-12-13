module.exports.DBLFactory = {
    getLogger: function () {
        let DBLogger = require("./DBLogger");
        return new DBLogger();
    }
};

module.exports.FLFactory = {
    getLogger: function () {
        let FileLogger = require("./FileLogger");
        return new FileLogger();
    }
};