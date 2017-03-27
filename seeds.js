var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Favorite-Hikes');

var Hike = require("./models/hike");

mongoose.Promise = require('bluebird');

Hike.remove({}, function(err) {
    console.log(err);
});

var bMountain= new Hike({
    first_name: 'Bell Mountain',
    last_name: 'Mountain',
    town: 'Haiawassee',
    state: 'Georgia',
    rate: '6',
    description: 'The trail it self is very straight forward, but steep. Best thing is the view!',   length: '4 miles'
  
});

var zPark = new Hike({
    first_name: 'Zion',
    last_name: 'National Park',
    town: 'Springdale',
    state: 'Utah',
    rate: '5',
    description: 'Angels Landing-Rugged terrain with a great view with breath taking views all around.',  length: '5 miles'

});

var gCanyon = new Hike({
    first_name: 'Grand',
    last_name: 'Canyon',
    town: 'Tuba',
    state: 'Arizona', 	
    rate: '10',
    description: 'Hermite Trail-Extremely rugged and harsh, but the view is remarkable.',   length: '7 miles'

});


bMountain.save(function(err) {
  if (err) console.log(err);

  console.log('bMountain created!');
});

zPark.save(function(err) {
  if (err) console.log(err);

  console.log('zPark created!');
});

gCanyon.save(function(err) {
  if (err) console.log(err);

  console.log('gCanyon created!');
});
