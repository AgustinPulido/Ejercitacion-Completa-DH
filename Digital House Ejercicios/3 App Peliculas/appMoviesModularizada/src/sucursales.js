const customFunctions = require('../customFunctions');
const archivoSalas = customFunctions.leerTheaters();

let infoSucursales = `\n\n\t Nuestras salas \n\n`;
infoSucursales += `\n\n\t Total de salas: ${archivoSalas.total_theaters}\n\n`;

for (let sala of archivoSalas.theaters){
    infoSucursales += `\n\t ${sala.name} \n\n\t ${sala.address} \n\n\t ${sala.description} \n\n`
};

module.exports = infoSucursales;
