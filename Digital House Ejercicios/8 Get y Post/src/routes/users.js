var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllers');
var path = require('path');

// Requiero multer para la carga de los avatars
let multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Cambio el nombre de la carpeta para indicar dónde voy a guardar los avatars
      cb(null, 'public/images/avatars')
    },
        // Modifico estas líneas para agregar la extensión del archivo que se está subiendo antes tengo que requerir el paquete path
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  })

  var upload = multer({ storage: storage })

//   Hasta acá multer copiado de la documentación de npm multer

/* GET users listing. */

router.get('/list', usersControllers.index)

// ruta hacia la vista del formulario de registro
router.get('/register', usersControllers.register);

// ruta para creación de perfil y redireccionamiento a la página del perfil
router.post('/register', upload.any(), usersControllers.create)

// ruta para acceder a la vista del login
router.get('/login', usersControllers.login);

// ruta para acceder por medio del login
router.post('/login', usersControllers.access);

// Listar y buscar usuarios
router.get('/list', usersControllers.list);

router.get('/profile/:id', usersControllers.profile);

// router.put('/edit', usersControllers.edit)

module.exports = router;
