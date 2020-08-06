var express = require('express');
var router = express.Router();
var apiMoviesControllers = require('../../controllers/api/moviesController');

router.get('/', apiMoviesControllers.list);
router.get('/:id', apiMoviesControllers.find);
router.post('/', apiMoviesControllers.store);
router.put('/:id', apiMoviesControllers.update);
router.delete('/:id', apiMoviesControllers.delete);


module.exports = router