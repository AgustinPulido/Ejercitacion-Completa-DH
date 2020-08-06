const customFunctions = require('../customFunctions');
const archivoMovies = customFunctions.leerMovies();

let masVotadas = archivoMovies.movies.filter(movie => movie.vote_average >= 7);

let votos = masVotadas.map(movie => movie.vote_average);
let sumaVotos = votos.reduce((actual, previo) => actual += previo);
let ratingPromedio = (sumaVotos/votos.length).toFixed(2);


let infoMasVotadas = `\n\n\t Más votadas \n\n\n`;
infoMasVotadas += `\t Rating promedio: ${ratingPromedio}\n\n`;

for (let movie of masVotadas){
    infoMasVotadas += `\n\t Título: ${movie.title}\n\n\t Rating: ${movie.vote_average}\n\n\t Reseña: ${movie.overview}\n\n`;
};

module.exports = infoMasVotadas;