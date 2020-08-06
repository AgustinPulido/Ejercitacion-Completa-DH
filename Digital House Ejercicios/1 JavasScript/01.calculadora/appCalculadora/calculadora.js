 function sumar(...operandos){
    return operandos.reduce((res, operando) => {
        return Number(res) + Number(operando);
     });
 }
 
 function restar(...operandos){
     return operandos.reduce((res, operando) => {
         return Number(res) - Number(operando);
      });
  }
 
  function multiplicar(...operandos){
     return operandos.reduce((res, operando) => {
         return Number(res) * Number(operando);
      });
  }

  function dividir(...operandos){
     return operandos.reduce((res, operando) => {
         return Number(res) / Number(operando);
      });
  }



  module.exports = {
      "sumar": sumar,
      "restar": restar,
      "multiplicar": multiplicar,
      "dividir": dividir
  }