process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var uri = 'mongodb://localhost/my-project';
var db = mongoose();
var app = express();
app.listen(3000);
module.exports = app;
console.log("listening port 3000");
