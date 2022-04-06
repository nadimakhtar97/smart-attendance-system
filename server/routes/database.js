var express = require('express');
var router = express.Router();
const dbContorller = require('../controllers/dbController')

/* GET users listing. */
router.get('/init',dbContorller.init);

router.get('/report',dbContorller.report);


module.exports = router;
