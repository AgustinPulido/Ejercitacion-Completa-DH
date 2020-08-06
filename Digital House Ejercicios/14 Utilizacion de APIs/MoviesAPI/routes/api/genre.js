var express = require('express');
var router = express.Router();
var apiGenreControllers = require('../../controllers/api/genreController');

router.get('/', apiGenreControllers.list);
router.get('/:id', apiGenreControllers.find);
router.post('/', apiGenreControllers.store);
router.put('/:id', apiGenreControllers.update);
router.delete('/:id', apiGenreControllers.delete);

module.exports = router