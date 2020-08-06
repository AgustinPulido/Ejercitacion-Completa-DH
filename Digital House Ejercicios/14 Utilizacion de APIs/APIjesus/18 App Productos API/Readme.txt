
SITUACIÓN:
Ya tenemos armado un backend (AppProductos) que extrae información de la base de datos y las muestra en un bonito frontend.
Se acerca un nuevo cliente a la mesa... un cliente externo. Este cliente está maravillado con el sitio web y quiere utilizar toda esa valiosa información e integrarla en otros sitios y aplicaciones.
Dado esto, te solicita que armes una API para poder acceder a la información de tu sistema.

OBSERVACIONES:

1- Creamos una aplicación nueva con Express para desarrollar la API.
----------------------------------------------------------------------------------------
$ npm init
$ npm install express --save


1.a) Creamos una estructura y configuraciones básicas
----------------------------------------------------------------------------------------
A) En el archivo package.json configuramos el entry-point de la aplicación:
"main": "app.js",

B) Creamos la siguiente estructura de directorios:
controllers
database
middlewares
public
routes
secrets


C) Creamos el archivo app.js con el siguiente código:
const express = require("express");
let indexRouter = require('./routes/index.js');
let userRouter = require('./routes/user.js');
let errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

app.use('/api', indexRouter);
app.use('/api/user', userRouter);

// Captura error 404
app.use(function(req, res, next) {
  let error = new Error();
  error.statusCode = 404;
  next(error);
});

// Manejador de errores
app.use(errorHandler.send);

app.listen(process.env.PORT || '3030', () =>
  console.log("Server Runnning in Port 3030")
);


D) Dentro de /middlewares creamos el archivo errorHandler.js con el siguiente contenido:
let errorHandler = {
  //---------------------------------------------------------------------------
  //Genera un nuevo error y lo envía al manejador de errores (errorHandler)
  generate: function (err, statusCode, message, req, res, next) {
    let error;
    if (err) {
      error = err;
      if(typeof err.statusCode == 'undefined'){
        error.statusCode = statusCode;
      }
      if(typeof err.message == 'undefined'){
        error.message = message;
      }
    } else {
      error = new Error()
      error.message = message;
      error.statusCode = statusCode;
    }
    next(error);
  },
  //---------------------------------------------------------------------------
  send: function(err, req, res, next) {
    //let pila = err.stack; //en producción no se muestra
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'not specified';
    let reqUrl = req.url;
    switch (err.statusCode) {
      case 400: // bad-request
        err.name = err.name || '400-Bad-Request';
        break;
      case 403: // forbidden
        err.name = err.name || '403-Forbidden';
        break;
      case 404: // not found
        err.name = err.name || '404-Not-Found';
        break;
      case 410: // resource gone
        err.name = err.name || '410-Gone';
        break;
      case 500: // internal server error
        err.name = err.name || '500-Internal-Server-Error';
        break;
      default:
        break;
    }
    let respuesta = {status: 'ERROR', reqUrl, detail: err};
    res.status(err.statusCode).json(respuesta);
  }
}
module.exports = errorHandler;


E) Dentro de /routes podemos crear nuestros archivos routers user.js e index.js

F) Dentro de /controllers podemos crear nuestros controladores 

G) Dentro de /secrets podemos crear un archivo config.js o secrets.js que tenga variables privadas de configuración, por ejemplo:
const secrets = {
  jwt_user: 'claveAleatoriaSecretaParaJsonWebToken12545842sas4s6xdp1',
}
module.exports = secrets;


2- Instalamos Sequelize.
----------------------------------------------------------------------------------------
$ npm install sequelize --save
$ npm install sequelize-cli --save
$ npm install mysql2 --save

Nota: es posible que si instalamos una versión reciente de sequelize tengamos algún error. Por ejemplo el conocido
"TypeError: sequelize.import is not a function". Si esto sucede, se recomienda desinstalar y luego instalar una versión anterior:
$ npm uninstall sequelize
$ npm uninstall sequelize-cli
$ npm install sequelize-cli@5.5.1
$ npm install sequelize@5.21.7
Nota: existen otras soluciones más sencillas como directamente cambiar el "sequelize['import']..." por "require(...)", pero no es seguro que funcionen correctamente.

3- Configuramos la base de datos.
----------------------------------------------------------------------------------------
a) Crear el archivo ".sequelizerc" en la raíz del proyecto, con el siguiente contenido:
	const path = require('path');
	module.exports = {
   	'config': path.resolve('./database/config', 'config.js'),
   	'models-path': path.resolve('./database/models'),
   	'seeders-path': path.resolve('./database/seeders'),
   	'migrations-path': path.resolve('./database/migrations'),
	}

b) Se ejecuta el comando:
$ sequelize init
Nota: El comando creó directorios y archivos, entre ellos "database" en la raíz del proyecto.

c) Se abre el archivo ./database/config/config.js  y se agrega el module.exports al principio, de la siguiente manera:

module.exports = {
  "development": {
    ......

d) En el mismo archivo, se configura la base de datos de desarrollo: 
"development": {
    "username": "root",
    "password": null,
    "database": "appProductos1",
    "host": "localhost",
    "dialect": "mysql",
    "operatorsAliases": false
  },

4- Ya estamos listos para desarrollar la API y probarla con POSTMAN
----------------------------------------------------------------------------------------

5- Las versiones serán gestionadas con GIT


ANEXO: OTRAS TECNOLOGÍAS POSIBLEMENTE UTILIZADAS
----------------------------------------------------------------------------------------
npm i jsonwebtoken   	> para Autenticación
npm i bcrypt		> para encriptar contraseñas
npm i multer		> para subir archivos
