// REQUERIMIENTOS
const path = require('path');
const fs = require('fs');
let bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');


// Guardo la dirección del archivo json
let userpath = path.join(__dirname, '../data/users.json');


// FUNCIONES GENÉRICAS

// Genero una función genérica para leer y parsear el archivo json
function getUsers() {
  let usersJson = fs.readFileSync(userpath, 'utf-8');
  if (usersJson != '') {
    return JSON.parse(usersJson)
  } else {
    return []
  }
};

// Genero una función para generar y asignar un id a cada usuario
function userIdGenerator() {
  let users = getUsers();
  if (users.length) {
    return users.length + 1;
  } else {
    return 1;
  }
};

// Función para guardar usuario

function saveUser(user) {
  let users = getUsers();
  users.push(user);
  fs.writeFileSync(userpath, JSON.stringify(users, null, ' '))
};

// Recuperar un usuario por el email para el login

function getUserByEmail(email) {
  let users = getUsers()
  return users.find(user => user.email == email)
};

function getUserById(id) {
  let users = getUsers()
  return users.find(user => user.id == id)
};


// CONTROLLERS DE USUARIO

const controllers = {
  // index
  index: (req, res) => {
    let users = getUsers()
    res.render('list', {users: users})
  },


  // ruta get que muestra la vista de registro
  register: function (req, res, next) {
    res.render('register');

  },

  // ruta post que va a crear y guardar la info del nuevo usuario
  create: (req, res, next) => {

    // Traigo los resultados de Validator y almaceno en una variable los errores

    let errors = validationResult(req);

    if(errors.isEmpty()){

      // Pregunto si las contraseñas son iguales
      if(req.body.password != req.body.validacion){
        return res.send('Las contraseñas no coinciden')
      }
      // Si las contraseñas coinciden, elimino la validación por cuestiones de seguridad

      delete req.body.validacion;

      // capturar la info que viene por el formulario
      let user = {
        id: userIdGenerator(),
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.files[0].filename,
      }

    // Llamo a la función para guardar los usuarios
      saveUser(user)

    // Redirecciono al usuario a su perfil
      res.redirect(`profile/${user.id}`);

    } else { //Si hay errores, retorno la vista del formulario de registro e informo los errores

    return res.render("register", {errors: errors.errors})

    }

  },

  // ruta get que va a mostrar la vista del login
  login: function (req, res, next) {

    res.render('login');
  },

  // ruta post para ingresar por el login
  access: (req, res) => {
  // Nuevamente verifico los resultados de Validator y si hay erorres
    let errors = validationResult(req);
    if(errors.isEmpty()){
    
    // Si no hay errores se cargan los datos del usuario según email con la funcioón declarada anteriormente y se muestra la vista del perfil de usuario
    let user = getUserByEmail(req.body.email)

    res.redirect(`profile/${user.id}`);

  //  Si hay errores, vuelvo a redireccionar a la página del login mostrando los errores
  } else {

      return res.render("login", {errors: errors.errors});
    }
  },

// Ruta por get para mostrar la página del perfil del usuario
  profile: function (req, res, next) {

    let user = getUserById(req.params.id)

    res.render('profile', {user});

  },

  list: (req, res) => {
    // let data = fs.readFileSync('usuarios.json', 'utf-8');
    // let users = JSON.parse(data);

    // res.render('listaUsuarios', {'users':users})
  }
}

module.exports = controllers;