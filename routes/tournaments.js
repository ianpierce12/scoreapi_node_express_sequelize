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
    models.Tournament.find({
        where: { id: req.params.id }
    })
        .then(function(tournament){
            res.render('tournament', {
                tournament: tournament
            });
        });
});

router.get('/:id/matches', function(req, res) {
    models.Match.findAll({
        where: {tournamentId: req.params.id }
    })
        .then(function(matches){
            res.render('matches', {
                matches: matches
            })
        })
})

router.post('/:id/matches/create', function(req, res){
    models.Match.create({
        tournamentId: req.params.id,
        score: req.body.score
    }).then(function() {
        res.redirect('/tournaments/'+ req.params.id);
    });
})

module.exports = router;