var express = require('express');
var router = express.Router();
//var User = require('../models/hike.js');
//var authHelpers = require('../helpers/auth.js')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// // localhost:3000/users/signup
// router.get('/signup', function(req, res){
//     res.render('users/signup.hbs');
// });

// router.post('/', authHelpers.createSecure, function(req, res){
//     var hashPassword = res.hashedPassword
//     res.render(login)
// });



module.exports = router;
