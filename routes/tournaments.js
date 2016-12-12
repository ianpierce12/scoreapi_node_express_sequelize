/**
 * Created by ianpierce on 12/11/16.
 */
"use strict"

var express = require('express');
var router = express.Router();
var models = require('./../models');

router.post('/create', function(req, res) {
    models.Tournament.create({
        key: req.body.key,
        name: req.body.name
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/:id', function(req, res) {
    models.Tournament.findById(req.param.id)
        .then(function(tournament){
            res.render('tournament', {
                name: tournament.name
            })
        })
})

module.exports = router;