// requerimientos
var fs = require('fs');
var path = require('path');
let bcrypt = require('bcrypt');
var {check, validationResult, body} = require('express-validator');

// funciones genéricas
let userpath = path.join(__dirname, '../data/users.json');

function getUsers() {
    let usersJson = fs.readFileSync(userpath, 'utf-8');
    if (usersJson != '') {
      return JSON.parse(usersJson)
    } else {
      return []
    }
  }

//   middlewares de usuarios

let usersMiddlewares = {
    middlewareGenerico: function(req, res, next){
        next()
    },
    
    registerValidation: [
        check('nombre')
            .exists().withMessage("Error: es necesario completar el campo: Nombre")
            .isLength({min:3}).withMessage("Error: Nombre debe tener al menos tres caracteres")
            .trim(),
        check('apellido')
            .exists().withMessage("Error: Debe completar Apellido")
            .isLength({min:3}).withMessage("Error: Apellido debe tener al menos tres caracteres")
            .trim(),
        check('email')
            .exists()
            .isEmail().withMessage("Error: email no válido")
            .normalizeEmail(),
        check('password')
            .isLength({min:4}).withMessage("Contraseña inválida. Debe tener al menos 4 caracteres"),
        body('email').custom(function(value){
            let users = getUsers();
            for (let user of users) {
                if(user.email == value){
                    return false;
                };
            }
            return true
            }).withMessage('El email con el que desea registrarse pertenece a un usuario ya registrado'),
        ],

    loginValidation: [
        check('email')
            .trim()
            .isEmail().withMessage("Error: email no válido"),
            // .normalizeEmail(),
        body('email').custom(function(value){
                let users = getUsers();
                for (let user of users){
                    if(value == user.email){
                        return true;
                    }
                }
                    return false;
            }).withMessage('No se ha encontrado ningún usuario registrado con ese email'),

        body('password').custom(function(value){
                let users = getUsers()

                for (let user of users) {
                    if(bcrypt.compareSync(value, user.password)){
                        return true;
                    }
                }
                return false
            }).withMessage('Contraseña incorrecta')
    ],
};

module.exports = usersMiddlewares;