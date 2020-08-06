console.log('Hola desde la calculadora');

let sumar = require( './suma');
let restar = require('./resta');
let multiplicar = require('./multiplica');
let dividir = require('./DivideyResto');


console.log(sumar(3, 13));
console.log(restar(89, 35));
console.log(restar(35, 89));
console.log(multiplicar(6, 56));
console.log(multiplicar(6, 0));
console.log(dividir.dividir(87, 5));
console.log(dividir.dividir(87, 0));
console.log('El resto es: ' + dividir.resto(15, 5));






