var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { intro: {
    "title": "Listicle",
    "subtitle": "Here is a list"
  }}
);
});

module.exports = router;
