// Lector de archivos JSON y transformación del mismo a Objeto literal para poder exporta a un archivo de JS
let fs = require('fs');

let readFile = function(archivoPlano){
    let archivoLeido = fs.readFileSync(archivoPlano, 'utf-8');
    return JSON.parse(archivoLeido);
}

module.exports = readFile