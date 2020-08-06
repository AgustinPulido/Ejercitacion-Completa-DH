let leerArchivoJSON = require('./tareas.js');

// let argumento0 = process.argv[0]; // argumento por defecto: lugar donde está instalado
// let argumento1 = process.argv[1]; // argumento por defecto: lugar donde está opernado

let accion = process.argv[2]; // primer argumento del ususario.

// console.log(argumento0);
// console.log(argumento1);
// console.log(argumento2);

switch (accion) {

    case 'listar':
        console.log();
        console.log('Estas son las tareas:');
        console.log();
        let tareas = leerArchivoJSON.leer();

        tareas.forEach((tarea, indice) => {
            console.log((indice + 1) + '- ' + tarea.titulo + ': ' + tarea.estado)
        });
        console.log();


        // leerArchivoJSON.escribirJson(tareas)


        // for (let i = 0; i < tareas.length; i++) {
        //     console.log((i + 1) + '- ' + tareas[i].título + ': ' + tareas[i].estado);
        // }

        break;
    case 'crear':
// En el archivo app.js, crear una nueva opción en el swich que nos permita
// crear tareas utilizando los métodos creados y luego mostrar un mensaje
// de confirmación por consola. Para esto deberás tener en cuenta que:
// i. El título de la tarea deberá ser un argumento que se pasará con la
// ejecución de nuestro comando ‘node app.js crear “titulo de
// nuestra tarea” ‘
// ii. Todas las tareas deben ser inicializadas con el estado en
// “pendiente”

        console.log();
console.log('Tarea creada correctamente');
        let titulo = process.argv[3];
        tarea = {
            titulo: titulo,
            estado: 'pendiente'
        }
        leerArchivoJSON.guardarTarea(tarea);

        console.log();
        console.log(tarea.titulo + ': ' + tarea.estado);
        console.log();

        break;

    case 'filtrar':
        let estado = process.argv[3];
        leerArchivoJSON.filtrarPorEstado;
        console.log();
        console.log('Tareas: ' + estado);
        console.log();

        let filtradas = leerArchivoJSON.filtrarPorEstado(estado);

        filtradas.forEach((tarea) => {console.log(tarea.titulo)});
        console.log();

        break;

    case undefined:
        console.log()
        console.log('Las acciones disponibles son: listar, crear o filtrar');
        console.log();

        break;

    default:
        console.log();
        console.log('No comprendo la acción que deseas realizar');
        console.log();
}