// Dividir

function dividir(numero, numero2){
    if (numero2 == 0){
        return 'No se puede dividir por 0';
    }
        return numero / numero2;
}

function resto(numero, numero2){
    if (numero2 == 0){
        return 'No se puede dividir por 0';
    }
    return numero % numero2
}

module.exports.dividir = dividir;
module.exports.resto = resto;