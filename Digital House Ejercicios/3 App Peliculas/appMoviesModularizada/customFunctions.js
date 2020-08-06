const fs = require('fs');
const path = require('path');

const archivoParseado = (rutaArchivo) => JSON.parse(fs.readFileSync(rutaArchivo, {encoding: 'utf-8'}));

const movieRutaArchivo = path.join(__dirname, './data/movies.json');
const theatersRutaArchivo = path.join(__dirname, './data/theaters.json');
const faqsRutaArchivo = path.join(__dirname, './data/faqs.json');

module.exports = {
    leerMovies: () => archivoParseado(movieRutaArchivo),
    leerTheaters: () => archivoParseado(theatersRutaArchivo),
    leerFaqs: () => archivoParseado(faqsRutaArchivo),
};

