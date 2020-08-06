var express = require('express');
var router = express.Router();
let heroesController = require('../controllers/heroesController');

/* GET users listing. */
router.get('/', heroesController.listado);

router.get('/detalle/:id?', heroesController.presentacionHeroe);

router.get('/bio/:id?/:ok?', heroesController.bioHeroe);

module.exports = router;
