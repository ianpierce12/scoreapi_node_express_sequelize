var express = require('express');
var router = express.Router();
var models = require('./../models');

/* GET home page. */
router.get('/', function(req, res) {
  models.Tournament.findAll()
      .then(function(tournaments) {

          res.render('index', {
              title: 'Viewing all tournaments',
              tournaments: tournaments
          });
  });

});

module.exports = router;
