var express = require('express');
var router = express.Router();

var Hike = require('../models/hike');

// index authors
router.get('/', function(req, res) {
    // res.send('hikes will be here');
    Hike.find({})
        .exec(function(err, hikes) {
            if(err) console.log(err);

            console.log(hikes);
            // res.send(hikes);
            res.render('hikes/index', {
            	  hikes: hikes
            });
        });
});

module.exports = router;