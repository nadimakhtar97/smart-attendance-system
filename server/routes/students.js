var express = require('express');
var router = express.Router();
const studentController =  require('../controllers/studentController')

/* GET users listing. */
router.post('/register',studentController.register);



router.get('/students', studentController.students);

module.exports = router;
