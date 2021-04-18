var express = require('express');
var logger = require('morgan');
var indexRouter = require('./routes/index');

var app = express();
var fizzbuzzRouter = require('./routes/fizzbuzz');



app.use(logger('dev'));
app.use('/', indexRouter);
app.use('/fizzbuzz', fizzbuzzRouter);


module.exports = app;
