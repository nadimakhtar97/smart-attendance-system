var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.send('welcome to register page');
});



router.get('/login', function(req, res, next) {
  res.send('welcome to login page');
});

module.exports = router;
