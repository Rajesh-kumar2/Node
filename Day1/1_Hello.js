// console.log("Hello World");
// console.log(process);
// console.log(__dirname);
// console.log(__filename);

// var a = 10;
// var b = 20;
// var sum = a + b;
// console.log("Result is: ", sum);

// var a = 10;
// var b = 20;

// function add(x = 0, y = 0) {
//     return x + y;
// }

// var sum = add(a, b);
// console.log("Result is: ", sum);

// var sum1 = add(a);
// console.log("Result is: ", sum1);

class Employee {
    constructor(id = 0, name = "NA") {
        this._id = id;
        this._name = name;
    }

    getId() {
        return this._id;
    }

    get Name() {
        return this._name;
    }

    set Name(name) {
        this._name = name;
    }
}

var e = new Employee();
console.log(e.getId());
console.log(e.Name);
e.Name = "Abhijeet";
console.log(e.Name);


// var e1 = new Employee(1, "Manish");
// console.log(e1.getId());
// console.log(e1.Name);
