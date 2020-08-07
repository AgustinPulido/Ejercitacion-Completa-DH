// Calculadora más sofisticada
// const operacion = process.argv[2];
// const operandoA = process.argv[3];
// const operandoB = process.argv[4];

//con detructuring se puede declarar así:

// const [node, script, operacion, operandoA, opernadoB] = process.argv

const calculadora = require('./calculadora.js');
const fs = require('fs')

const [,, operacion, ...operandos] = process.argv


let logsLeidos = fs.readFileSync('repositorio.json', 'utf-8');
let logs = JSON.parse(logsLeidos);


// function sumar(...operandos){
//    return operandos.reduce((res, operando) => {
//        return Number(res) + Number(operando);
//     });
// }

// function restar(...operandos){
//     return operandos.reduce((res, operando) => {
//         return Number(res) - Number(operando);
//      });
//  }

//  function multiplicar(...operandos){
//     return operandos.reduce((res, operando) => {
//         return Number(res) * Number(operando);
//      });
//  }

//  function dividir(...operandos){
//     return operandos.reduce((res, operando) => {
//         return Number(res) / Number(operando);
//      });
//  }


switch (operacion){

    case 'sumar':

    
        let resultado = calculadora.sumar(...operandos);
        console.log(resultado);
        logs.push(
            operandos.reduce((res, element) => {
                return res + ' + ' + element
             }) + ' = ' + resultado
        );

    break;

    case 'restar':

        let resultadoResta = calculadora.restar(...operandos);
        console.log(resultadoResta);
        logs.push(
            operandos.reduce((res, element) => {
                return res + ' - ' + element
             }) + ' = ' + resultadoResta
        );

    break;

    case 'multiplicar':

        let resultadoMultipli = calculadora.multiplicar(...operandos);
        console.log(resultadoMultipli);
        logs.push(
            operandos.reduce((res, element) => {
                return res + ' * ' + element
             }) + ' = ' + resultadoMultipli
        );

    break;

    case 'dividir':

        let resultadoDiv = calculadora.dividir(...operandos);
        console.log(resultadoDiv);
        logs.push(
            operandos.reduce((res, element) => {
                return res + ' / ' + element
             }) + ' = ' + resultadoDiv
        );

    break;

    case undefined:
        console.log('Debe asignar una operación y los operandos');

    break;

}

let logsJson = JSON.stringify(logs, null, 4);
fs.writeFileSync('repositorio.json', logsJson);