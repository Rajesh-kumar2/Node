// const repl = require('repl');
// let modules = repl._builtinLibs;
// console.log(modules);

const readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("Enter a number: ", function (input) {
//     console.log("You entered %s", input);
//     rl.close();
// });

// rl.question("Enter a number: ", function (n1) {
//     var x = parseInt(n1);
//     rl.question("Enter a number: ", function (n2) {
//         var y = parseInt(n2);
//         var sum = x + y;
//         console.log("Resul is %s", sum);
//         rl.close();
//     });
// });

rl.question("Enter a number: ", (n1) => {
    var x = parseInt(n1);
    rl.question("Enter a number: ", (n2) => {
        var y = parseInt(n2);
        var sum = x + y;
        console.log("Resul is %s", sum);
        rl.close();
    });
});

// console.log("This line is after rl.question");