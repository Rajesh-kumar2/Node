var fname = "Manish";
var lname = "Sharma";

// module.exports = fname;
// module.exports = lname;

// module.exports.fname = fname;
// module.exports.lname = lname;

module.exports.firstname = fname;
module.exports.lastname = lname;

module.exports.log = function (m) {
    console.log(m);
}

class Employee {
    constructor(name) {
        this._name = name;
    }

    set Name(name) {
        this._name = name;
    }

    get Name() {
        return this._name;
    }
}

module.exports.Employee = Employee;