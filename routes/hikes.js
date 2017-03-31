var express = require('express');
var router = express.Router();

var Hike = require('../models/hike');

// index hikes
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

// new hike
router.get('/new', function(req, res) {
    res.render('hikes/new');
});

// create hike
router.post('/', function(req, res) {
    var hike = new Hike({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        town: req.body.town,
        state: req.body.state,
        rate: req.body.rate,
        description: req.body.description,
        length: req.body.length
    });
    hike.save(function(err, hike){
        if (err) { console.log(err); }

        console.log(hike);
        //res.send(hike);
         res.render('hikes/show', {
            hike: hike
        });
    });
});
  

// show hike
router.get('/:id', function(req, res) {
    Hike.findById(req.params.id)
        .exec(function(err, hike) {
            if(err) console.log(err);

            console.log(hike);
            // res.send(hike);
            res.render('hikes/show', {
                hike: hike
            });
        });
});

// edit hike
router.get('/:id/edit', function(req,res) {
    Hike.findById(req.params.id)
    .exec(function(err, hike) {
        if (err) { console.log(err); }
        res.render('hikes/edit', {
            hike: hike
        });
    });
});
// update hike
router.patch('/:id', function(req, res) {
    Hike.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        town: req.body.town,
        state: req.body.state,
        rate: req.body.rate,
        description: req.body.description,
        length: req.body.length
    }, {new: true})
        .exec(function(err, hike) {
            if (err) { console.log(err); }
            console.log(hike);
            // res.send(hike);
            res.render('hikes/show', {
                hike: hike
            });
        });
});

// delete hike
router.delete('/:id', function(req, res) {
    Hike.findByIdAndRemove(req.params.id)
        .exec(function(err, hike) {
            if (err) { console.log(err); }

            console.log('Hike deleted.');
            //res.send('Hike deleted.');  
            res.redirect('/hikes');
        });
});



module.exports = router;