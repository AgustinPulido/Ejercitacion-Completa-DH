var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.home);
router.get('/creditos', indexController.creditos);

module.exports = router;
