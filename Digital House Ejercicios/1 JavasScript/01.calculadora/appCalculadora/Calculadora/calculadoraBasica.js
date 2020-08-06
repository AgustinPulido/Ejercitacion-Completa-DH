//sumar dos número y que el resultado retorna la suma de ambos

function sumar(numero, numero2){
    return numero + numero2
}

//Restar

function restar(numero, numero2){
    if(numero<numero2){
        return 'El resultado es negativo'
    }
    return numero - numero2;
}

// Multiplicar

function multiplicar(numero, numero2){
    if(numero == 0 || numero2 == 0){
        return 'El resultado es 0'
    }else{
    return numero * numero2
    }
}

// Dividir

function dividir(numero, numero2){
    if (numero2 !== 0){
    return numero / numero2;
    } else {
        return 'No se puede dividir por 0';
    }
}

console.log(restar(1,2));

