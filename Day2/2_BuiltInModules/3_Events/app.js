const StringEmitter = require('./StringEmitter');

let obj = new StringEmitter();

obj.on('data', function (s) {
    console.log("Subscriber 1 - ", s);
});

var count = 0;

function S2(s) {
    ++count;
    console.log("Subscriber 2 - ", s.toUpperCase());
    if (count > 2) {
        obj.removeListener('data', S2);
    }
}

obj.on('data', S2);

// obj.getStringWithCB(function (s) {
//     console.log(s);
// })

// setInterval(function () {
//     var s = obj.getString();
//     console.log(s);
// }, 2000);