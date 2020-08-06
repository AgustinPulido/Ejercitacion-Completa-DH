var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index);
router.post('/color', indexController.color);

router.get('/selected', indexController.colorSelected);
router.get('/deselected', indexController.colorDeselected);


module.exports = router;
