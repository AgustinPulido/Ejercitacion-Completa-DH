let listaDeCumples = require('./conversorJSON.js');

let accion = process.argv[2]

switch (accion){
    case 'listar':

        console.log()
        console.log('Estos son los cumpleaños familiares:');
        let cumples = listaDeCumples.leer();
        cumples.forEach((cumple, indice) => {console.log((indice+1) + '- ' + cumple.nombre + ': ' + cumple.dia + ' de ' + cumple.mes)
        });
        console.log();

    break;

    case 'crear':
        console.log();
        console.log('¡Cumpleaños guardado correctamente!');
        console.log();
        let nombre = process.argv[3];
        let dia = process.argv[4];
        let mes = process.argv[5];

        nuevoCumple = {
            nombre: nombre,
            dia: dia,
            mes: mes,
        }
        listaDeCumples.guardarCumple(nuevoCumple);

        console.log(nuevoCumple.nombre + ': ' + nuevoCumple.dia + ' de ' + nuevoCumple.mes);
        console.log();

        break;
    case 'eliminar':
        console.log();
        console.log('¡Cumpleaños eliminado correctamente!');
        console.log();

        listaDeCumples.eliminarCumple();

        break

    case 'filtrar':
        let unMes = process.argv[3];
        listaDeCumples.filtrarPorMes;
        console.log();
        console.log('En ' + unMes + ' es el cumpleaños de:');

        let filtrar = listaDeCumples.filtrarPorMes(unMes);
        filtrar.forEach((cumple) => {console.log(cumple.nombre)}); // se podría crear un if ternario para que si el mes que le paso por parámetro no exista me devuelva "nadie"?
        console.log();

        break;

    case undefined:
        console.log('Debes ingresar una acción: listar');
        break;
    default:
        console.log('Lo siento, no comprendo lo que quieres hacer. Revisa los datos ingresados y vuelve a intentarlo!')
}
