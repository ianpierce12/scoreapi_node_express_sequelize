var express = require('express');
var router = express.Router();
var models = require('./../models');

/* GET home page. */
router.get('/', function(req, res) {
  models.Tournament.findAll()
      .then(function(tournaments) {
          console.log('tourn: ', tournaments);

          res.render('index', {
              title: 'Viewing all tournaments',
              tournaments: tournaments
          });

          res.render('index', {
              title: 'There are no matches to view currently',
              matches: null
          });
  });

});

module.exports = router;
