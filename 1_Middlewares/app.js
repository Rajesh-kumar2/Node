const express = require('express');
const app = express();
const da = require('./dataaccess');
const logger = require('morgan');

app.set("view engine", "pug");

app.use(logger('dev'));

// app.use(function (req, res, next) {
//     var stTime = (new Date()).getTime();
//     next();
//     var enTime = (new Date()).getTime();

//     var tTime = enTime - stTime;
//     console.log("Total Response Time: ", tTime, " ms");
// });

// app.use(function (req, res, next) {
//     console.log("Request - Middleware 1");
//     next();
//     console.log("Response - Middleware 1");
// });

// app.use(function (req, res, next) {
//     console.log("Request - Middleware 2");
//     next();
//     console.log("Response - Middleware 2");
// });

app.get('/', (req, res) => {
    res.render("index", { ptitle: "Express App" });
})

app.get('/employees', (req, res) => {
    var emps = da.getAllEmployees();
    res.render("employees", { ptitle: "Employees View", empList: emps });
})

app.listen(3000, function () {
    console.log("Express Server Started..");
})