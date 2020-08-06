window.onload = (function(){

let seguimos = confirm("Seguimos?")

if(!seguimos){
    alert('Gracias')
    location.href='https://www.netflix.com.ar'
} else {
let miembros;

do {
    miembros = prompt('Cuantos integrantes tiene tu familia?')
}while (isNaN(miembros) || miembros < 3)

let familiaGastos = [];

for(let i = 0; i < miembros; i++){
    let nombre;
    let gasto
    do{
        nombre = prompt('Ingrese un nombre')
    } while( nombre.trim() == '')
    do{
        
        gasto = prompt('Ingrese un gasto')
        
    }while(isNaN(gasto))

    let gastosFamiliares = {
        unNombre: nombre,
        unGasto: gasto
    }

    familiaGastos.push(gastosFamiliares)

    console.log(familiaGastos)
}
}




})