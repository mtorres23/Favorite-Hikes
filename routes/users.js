var express = require('express');
var router = express.Router();
var User = require('../models/hike.js');
var authHelpers = require('../helpers/auth.js')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// // localhost:3000/users/signup
router.get('/signup', function(req, res){
    res.render('users/signup.hbs');
});

router.post('/', authHelpers.createSecure, function(req, res){
    var hashPassword = res.hashedPassword;
    res.render('users/login');
});


//Auth & user create stuff
router.post('/', authHelpers.createSecure, function(req, res){
  var user = new User({
    email: req.body.email,
    password_digest: res.hashedPassword,
    username: req.body.username
  });

  user.save(function(err, user){
    if (err) console.log(err);
    console.log(user);
    console.log(req.session.currentUser);
    res.redirect('/sessions/login');
  });
});


module.exports = router;
