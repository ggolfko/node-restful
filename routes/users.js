// call the packages we need
var express = require('express'); // call express

//models setup
var User = require('../models/user');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({
    message: 'hooray! welcome to our api!'
  });
});

// more routes for our API will happen here
// on routes that end in /bears
// ----------------------------------------------------
router.route('/users')

  // create a bear (accessed at POST http://localhost:8080/users)
  .post(function(req, res) {

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      },
      function(err, user) {
        if (err) return res.status(500).json({
          message: 'There was a problem adding the information to the database.'
        });
        res.status(200).json({
          data: user,
          message: 'User created!'
        });
      });

  })

  // get all the bears (accessed at GET http://localhost:8080/api/users)
  .get(function(req, res) {

    User.find({}, function(err, users) {
      if (err) return res.status(500).json({
        message: 'There was a problem finding the users.'
      });
      res.status(200).json(users);
    });

  });

// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_id')

  // get the user with that id
  .get(function(req, res) {

    User.findById(req.params.user_id, function(err, user) {
      if (err) return res.status(500).json({
        message: 'There was a problem finding the user.'
      });
      if (!user) return res.status(404).json({
        message: 'No user found.'
      });
      res.status(200).json(user);
    });

  })

  // update the user with this id
  .put(function(req, res) {

    User.findByIdAndUpdate(req.params.user_id, req.body, {
      new: true
    }, function(err, user) {
      if (err) return res.status(500).json({
        message: 'There was a problem updating the user.'
      });
      res.status(200).json({
        data: user,
        message: 'User updated!'
      });
    });

  })

  // delete the user with this id
  .delete(function(req, res) {

    User.findByIdAndRemove(req.params.user_id, function(err, user) {
      if (err) return res.status(500).json({
        message: 'There was a problem deleting the user.'
      });
      res.status(200).json({
        data: user,
        message: 'Successfully deleted'
      });
    });

  });

// Return router
module.exports = router;
