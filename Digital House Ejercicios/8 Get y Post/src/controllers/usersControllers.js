const path = require('path');
const fs = require('fs');
let bcrypt = require('bcrypt');


// Guardo l a dirección del archivo json
let userpath = path.join(__dirname, '../data/users.json');

// Genero una función genérica para leer y parsear el archivo json
function getUsers() {
  let usersJson = fs.readFileSync(userpath, 'utf-8');
  if (usersJson != '') {
    return JSON.parse(usersJson)
  } else {
    return []
  }
}

// Genero una función para generar y asignar un id a cada usuario
function userIdGenerator() {
  let users = getUsers();
  if (users.length) {
    return users.length + 1;
  } else {
    return 1;
  }
}

// Función para guardar usuario

function saveUser(user) {
  let users = getUsers();
  users.push(user);
  fs.writeFileSync(userpath, JSON.stringify(users, null, ' '))
}

// Recuperar un usuario por el email para el login

function getUserByEmail(email) {
  let users = getUsers()
  return users.find(user => user.email == email)
}

function getUserById(id) {
  let users = getUsers()
  return users.find(user => user.id == id)
}


const controllers = {
  // index
  index: (req, res) => {
    let users = getUsers()
    res.render('list', {
      users: users
    })

  },


  // ruta get que muestra la vista de registro
  register: function (req, res, next) {
    res.render('register');

  },

  create: (req, res, next) => {
    // ruta post que va a crear y guardar la info del nuevo usuario

    // Pregunto si las contraseñas son iguales
    if(req.body.password != req.body.validacion){
      return res.send('Las contraseñas no coinciden')
  }

    // Elimino por cuestiones de seguridad la validación
  delete req.body.validacion;

    // capturar la info que viene por el formulario / Unos desestructuración para recuperar los datos que viajan por body
    let user = {
      id: userIdGenerator(),
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
      avatar: req.files[0].filename,
    }

    // comprobar si el usuario ya está registrado con ese email
    // Traer los usuarios
    let userEmail = getUserByEmail(req.body.email)

    // Esta validación está dando error
    if (userEmail != undefined) {
      if (req.body.email == userEmail.email) {

        res.send("Este usuario ya existe")

      }

    } else {
      saveUser(user)
    }

    res.redirect(`profile/${user.id}`);


    // let user = {
    //   nombre: req.body.nombre,
    //   apellido: req.body.apellido,
    //   email: req.body.email,
    //   contraseña: bcrypt.hashSync(req.body.password, 10),
    //   validacion: req.body.validacion,
    //   avatar: req.files[0].filename,
    // }

    // Guardar los nuevos usuarios
    //  1 - Leer la base de datos para saber qué había. Si no hay nada, guardar nuevo usuario

    // let data = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), {encoding: 'utf-8'});

    // let users;
    // if (data == "") {
    //   users = [];
    // } else {
    //   users = JSON.parse(data);
    // }

    // users.push(user);

    // let newUsersJson = JSON.stringify(users)

    //    fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), newUsersJson);

    // 2 - Enviar a la vista de perfil los datos del usuario creado

    // res.redirect(`profile/${user.id}`);

  },


  // ruta get que va a mostrar la vista del login
  login: function (req, res, next) {

    res.render('login');
  },


  // ruta post para ingresar por el login
  access: (req, res) => {

    // Primero debo leer la base de datos de los usuarios

    // let data = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf-8');
    // let user;

    // if (data == "") {
    //   user = [];
    // } else {
    //   user = JSON.parse(data);
    // }

    // for (let i = 0; i < user.length; i++) {
    //   if (user[i].email == req.body.email && bcrypt.compareSync(req.body.contraseña, user[i].contraseña)) {


    //     res.redirect(`profile/${usuario.nombre}`)

    //     // res.render('profile', {'user': user[i]})
    //   }
    // }

    // res.send('Error')

    // Comprobar por medio del id o email la existencia del usuario
    let user = getUserByEmail(req.body.email)

    if (user != undefined) {
      // Si existe, comprobar que la contraseña sea la correcta

      if (bcrypt.compareSync(req.body.password, user.password)) {

        // res.render('profile', {user})
        res.redirect(`profile/${user.id}`);

      } else {

        res.send('Contraseña incorrecta');

      }

    } else {

      res.send('No hemos encontrado ningún usuario registrado con ese email')
    }

  },


  profile: function (req, res, next) {
    // let users = req.query.search;

    // let data = fs.readFileSync('usuarios.json', 'utf-8');
    // let users = JSON.parse(data);

    // let usersResult = [];

    // for (let user of users){

    // }

    let user = getUserById(req.params.id)


    res.render('profile', {
      user
    });

  },

  list: (req, res) => {
    // let data = fs.readFileSync('usuarios.json', 'utf-8');
    // let users = JSON.parse(data);

    // res.render('listaUsuarios', {'users':users})
  }
}


module.exports = controllers;