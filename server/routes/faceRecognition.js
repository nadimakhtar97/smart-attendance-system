var express = require('express');
var router = express.Router();
const faceRecognitionController = require('../controllers/faceRecognitionController')

/* GET users listing. */
router.post('/identify',faceRecognitionController.identify);


module.exports = router;
