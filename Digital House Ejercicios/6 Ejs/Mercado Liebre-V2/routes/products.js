var express = require('express');
var router = express.Router();
let productsControllers = require('../controllers/productsControllers')

router.get('/detail/:id/:category', productsControllers.detail);

module.exports = router;