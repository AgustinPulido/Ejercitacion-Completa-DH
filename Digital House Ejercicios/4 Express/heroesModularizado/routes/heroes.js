const express = require('express');
let router = express.Router();

// const fs = require('fs');
// const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));
let heroesController = require('../controllers/heroesController');

router.get('/', heroesController.listado);

router.get('/detalle/:id', heroesController.presentacionHeroe);

router.get('/bio/:id/:ok?', heroesController.bioHeroe);

module.exports = router;