// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var morgan = require('morgan'); // log requests to the console
var methodOverride = require('method-override'); // simulate DELETE and PUT

app.use(morgan('dev')); // log every request to the console

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

app.use(methodOverride());

app.use(function(req, res, next) {

  res.header('Access-Control-Allow-Origin', '*'); // Website you wish to allow to connect
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Request methods you wish to allow
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept"); // Request headers you wish to allow
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.header('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


module.exports = app;
