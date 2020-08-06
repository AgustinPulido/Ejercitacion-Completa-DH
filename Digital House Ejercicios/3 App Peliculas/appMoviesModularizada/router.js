const contenido = require('./src');

module.exports = {
	routes: (req, res) => {
           
            switch (req.url) {
                case '/':
                    res.end(contenido.home);
                    break;
                
                case '/en-cartelera':
                    res.end(contenido.enCartelera);
                    break;
                
                case '/mas-votadas':
                    res.end(contenido.masVotadas);
                    break;
                
                case '/sucursales':
                    res.end(contenido.sucursales);
                    break;
                
                case '/contacto':
                    res.end(contenido.contacto);
                    break;

                case '/preguntas-frecuentes':
                    res.end(contenido.preguntasFrecuentes);
                    break;
                
                default:
                    res.end('404 not found');
                    break;
            }
        }
};