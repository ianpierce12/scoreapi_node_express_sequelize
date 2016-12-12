"use strict"

var express = require('express');
var router = express.Router();
var models = require('./../models');

router.post('/create', function(req, res) {
  models.Match.create({
    tournamentId: req.body.tournamentId,
    score: req.body.score
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;
