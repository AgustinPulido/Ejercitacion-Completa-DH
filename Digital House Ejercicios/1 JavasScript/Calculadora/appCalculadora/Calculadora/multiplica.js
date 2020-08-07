// Multiplicar

// function multiplicar(numero, numero2){
//     if(numero == 0 || numero2 == 0){
//         return 'El resultado es 0'
//     }else{
//     return numero * numero2
//     }
// }

let multiplicar = (numero, numero2) => numero == 0 || numero2 == 0 ? 'El resultado es 0':numero*numero2;

module.exports = multiplicar;