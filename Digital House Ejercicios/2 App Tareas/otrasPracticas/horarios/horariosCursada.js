// let horariosJson = require('./conversor');

// console.log('Estos son tus horarios:');

// let horarios = horariosJson('horarios.json')

// for (let i = 0; i < horarios.length; i++){
//     console.log((i + 1) + '- ' + horarios[i].Día + ': ' + horarios[i].Horario);
// }

let arrayDeHorarios = require('./conversor.js');
let accion = process.argv[2];

switch (accion){
    case 'listar':

        let horarios = arrayDeHorarios.leer(); // primer error: me faltó poner esto que es el llamado al método leer del objeto. Esta función a su vez refiere con un this a la propiedad nombre que es el nombre del archivo JSON. De esta forma la variable "horarios" va a contener la información del archivo JSON convertido a OL.

        console.log();
        console.log('Estos son los días y horarios:');
        console.log();

        horarios.forEach((elemento, i) => {console.log((i+1) + '- ' + elemento.dia + ': de ' + elemento.entrada + ' a ' + elemento.salida +  ' y es ' + elemento.tipo); // Una vez que obtengo los datos del JSON puedo operar con el OL en este caso aplicando el método forEach para recorrer el array.
        });

        console.log();

        break;

    case 'crear':

        let dia = process.argv[3];
        let entrada = process.argv[4];
        let salida = process.argv[5];
        let tipo = process.argv[6];   // con estas variables configuro los argumentos que le voy a pasar por consola al método crear que a su vez se vale del método leer y escribir

        let nuevoHorario = { // tercer error: me olvidé de crear este objeto
            dia: dia,
            entrada: entrada,
            salida:  salida,
            tipo: tipo
        };

        arrayDeHorarios.guardarNuevoHorario(nuevoHorario) // cuarto error: nuevamente tengo que ejecutar el método guardar y no me tengo que olvida que le paso por parámetro un array. Esta invocación tiene que ir después de la creación del objeto

        console.log();
        console.log('¡Nuevo horario guardado exitosamente!');
        console.log();

        console.log( dia + ': ' + 'de ' + entrada + ' a ' + salida + ' y es ' + tipo);
        console.log();

        break;

    case 'eliminar':
        arrayDeHorarios.eliminarUltimoHorario() // tengo que ejecutar/invocar el método eliminar.

    console.log();
    console.log('Horario eliminado de forma exitosa');
    console.log();


    break;

    case 'filtrar':
        let tipoDeCursado = process.argv[3] // Tengo que definir el argumento que voy a utilizar para filtrar

        console.log();
        console.log('Estos son los dias de clases ' + tipoDeCursado);
        console.log();

        let horariosFiltrados = arrayDeHorarios.filtrar(tipoDeCursado); // nuevamente invoco el método correspondiente. Esta vez, para definir el array que voy a recorre.
        horariosFiltrados.forEach(element => {console.log(element.dia)}); // Recorro el array para mostrar la info que quiero ofrecer luego de filtrar.

        console.log();

        break;

    case undefined:
        console.log('Perdón, no te he entendido');

        break;

    default:
        console.log('Debe consignar una acción');

    }