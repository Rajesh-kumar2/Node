const express = require('express');
const app = express();
const logger = require('morgan');

const index = require('./routes/index');
const api = require('./routes/api');

app.set("view engine", "pug");

app.use(logger('dev'));
app.use('/', index);
app.use('/api', api);

module.exports = app;