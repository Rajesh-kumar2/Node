// const msg = require('./message.js');
// console.log(msg);
// console.log(msg.firstname);
// console.log(msg.lastname);

// const msg = require('./message.js');
// msg.log("Hello from App");

// const msg = require('./message.js');
// const msg = require('./message');
// var e1 = new msg.Employee("Manish");
// console.log("Employee Name: ", e1.Name);
// e1.Name = "Abhijeet";
// console.log("Employee Name: ", e1.Name);

// const logger = require('./logger');
// // console.log(logger);
// logger.log("Hello");

// const logger = require('./logger/logger');
// logger.log("Hello");

// const logger = require('./logger');
// logger.log("Hello");

// const loggerService = require('./loggerService');
// loggerService.log("Hello");

const loggerFactory = require('./loggerFactory');

let dblogger = loggerFactory.DBLFactory.getLogger();
dblogger.log("Hello");

let fllogger = loggerFactory.FLFactory.getLogger();
fllogger.log("Hello");