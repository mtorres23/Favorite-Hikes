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

// new author
router.get('/new', function(req, res) {
    res.render('hikes/new');
});

// show hikes
router.get('/:id', function(req, res) {
    Hike.findById(req.params.id)
        .exec(function(err, hike) {
            if(err) console.log(err);

            console.log(hike);
            // res.send hike
            res.render('hikes/show', {
                hike: hike
            });
        });
});

module.exports = router;