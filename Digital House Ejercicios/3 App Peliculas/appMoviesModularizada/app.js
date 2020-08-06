const http = require('http');
const router = require('./router');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset = utf-8'});
	router.routes(req, res);
}).listen(3030, 'localhost', ( ) => console.log('Se está ejecutando el servidor en el puerto 3030'));