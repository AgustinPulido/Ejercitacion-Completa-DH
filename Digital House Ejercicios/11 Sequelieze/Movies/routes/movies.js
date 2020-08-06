var express = require('express');
var router = express.Router();
var moviesController = require('../controllers/moviesController');

// creación o cargado de películas
router.get('/create', moviesController.create);
router.post('/create', moviesController.saveMovie);

// Lectura
router.get('/', moviesController.index);

// Detalle
router.get('/detail/:id', moviesController.detail);

// Actualizar
router.get('/edit/:id', moviesController.edit);
router.put('/edit/:id', moviesController.update);

// Eliminar
router.delete('/delete/:id', moviesController.delete)

router.get('/new', moviesController.new);
router.get('/recommended', moviesController.recommended);
// router.post('/search', moviesController.search);


module.exports = router;