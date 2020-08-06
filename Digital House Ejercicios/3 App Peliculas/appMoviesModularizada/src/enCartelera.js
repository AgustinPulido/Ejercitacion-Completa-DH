const customFunctions = require('../customFunctions');

let archivoMovies = customFunctions.leerMovies();

let infoCartelera = `\n\n\t En cartelera \n\n`;

infoCartelera += `\n\n\t Total de películas ${archivoMovies.movies.length} \n\n\n\t Listado de películas:\n\n`;

for (let movie of archivoMovies.movies){
  infoCartelera += `\n\tTítulo: ${movie.title}\n\n\t Reseña: ${movie.overview}\n\n`;
};

module.exports = infoCartelera;