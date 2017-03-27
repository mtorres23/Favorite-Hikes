var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Favorite-Hikes');

var User = require("./models/hike");

mongoose.promise = global.Promise;

User.remove({}, function(err) {
    console.log(err);
});

var bDover= new User({
    first_name: 'Ben',
    last_name: 'Dover',
    town: 'Austin',
    state: 'Texas',
    email: 'bdover@gmail.com',
  
});

var jJacob = new User({
    first_name: 'John',
    last_name: 'Jacob',
    town: 'Williamsburg',
    state: 'Maine',
    email: 'jjacob34@aol.com',

});

var wRathburger = new User({
    first_name: 'William',
    last_name: 'Rathberger',
    town: 'Whoville',
    state: 'Over the Rainbow', 	
    email: 'wrathburger33@hotmail.com'

});


bDover.save(function(err) {
  if (err) console.log(err);

  console.log('bDover created!');
});

jJacob.save(function(err) {
  if (err) console.log(err);

  console.log('jJacob created!');
});

wRathburger.save(function(err) {
  if (err) console.log(err);

  console.log('wRathburger created!');
});
