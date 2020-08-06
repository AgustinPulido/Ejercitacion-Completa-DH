var express = require('express');
var router = express.Router();
let indexControllers = require('../controllers/indexControllers')

/* GET home page. */
router.get('/', indexControllers.home);

// router.get('/product/detail/:id/:category', indexControllers.detail);

module.exports = router;
