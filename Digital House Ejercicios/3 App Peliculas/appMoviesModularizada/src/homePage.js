const customFunctions = require('../customFunctions');

let archivoMovies = customFunctions.leerMovies();

let homeInfo = '\n\n\t Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.\n\n\n';

let movies = archivoMovies.movies.map(movie => `${movie.title} (${movie.original_title})\n`);
movies.sort();

homeInfo += `\n\n\t Total de películas en cartelera: ${movies.length}\n`;
homeInfo += `\n\n\t Listado de películas: \n\n\n`;

for (let movie of movies){
    homeInfo += '\t\t' + movie + '\n'
};

homeInfo += `\n\n\n ------------------------------------------------------------- \n\n Recordá que podés visitar las secciones: \n\n En cartelera (/en-cartelera) \n\n Más votadas (/mas-votadas) \n\n Sucursales (/sucursales) \n\n Contacto (/contacto)\n\n Preguntas frecuentes (/preguntas-frecuentes)\n`;

module.exports = homeInfo;