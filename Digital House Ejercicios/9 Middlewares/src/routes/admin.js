var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController');
var adminMidlleware = require('../middlewares/adminMiddleware');
var path = require('path');
var {check, validationResult, body} = require('express-validator');


// ruta para mostrar el login a administradores (GET)
router.get('/', adminController.adminLogin);

// ruta para mostrar el login a administradores (POST)
router.post('/', [
    body('name').custom(function(value){
        if(value != 'Ada' || value != 'Greta' || value != 'Vim' || value != 'Tim'){
            return false
        } else {
            return true
        }
    }).withMessage('No tienes los provilegios'),

    body('password').custom(function(value){
        if(value =! 'admin'){
            return false
        }else {
            return true
        }
    })
], adminController.adminAccess);

module.exports = router;

