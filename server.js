// BASE SETUP
// =============================================================================

// call the packages we need
var app = require('./app');

var port = process.env.PORT || 8080; // set our port

//Database setup
var config = require('./config/config'); // load the database config
var mongoose = require('mongoose');
mongoose.connect(config.remoteDbUrl); // connect to our database


// ROUTES FOR OUR API
// =============================================================================
var router = require('./routes/users'); // get an instance of the users Router


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port %d in %s mode', port, app.settings.env);
