var express = require('express');
var router = express.Router();

var Hike = require('../models/hike');

// index hikers
router.get('/', function(req, res) {
    Hike.find({})
        .exec(function(err, hikes) {
            if(err) console.log(err);

            console.log(hikes);
            res.send(hikes);
        });
});

module.exports = router;