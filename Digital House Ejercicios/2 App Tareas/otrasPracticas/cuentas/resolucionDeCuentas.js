let leer = require('./lectorDeJSONs.js');

console.log('Estos son algunos ejemplos de cuentas:' + '\n');

let ejemplosDeCuentas = leer('cuentas.json');


function hacerCuentas(array) {
    for (let i = 0; i < array.length; i++){
        console.log((i+1) + '- ' + array[i].titulo + ' : ' + array[i].cuenta + ',');
    }
    console.log('\n');
}

hacerCuentas(ejemplosDeCuentas)