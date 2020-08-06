// Módulo nativo que permite trabajar con archivos del filesystem

// Crear una función llamada escribirJSON dentro de nuestro módulo
// tareas que se encargue de solamente reescribir nuestro archivo
// tareas.json.Para esto es obligatorio que utilices el método writeFileSync
// del módulo FS.Tener en cuenta que:
// i.La función debe recibir un array de tareas.
// ii.Debes convertir a JSON el array que reciba como parámetro.

const fs = require('fs');

let archivoJson = {
    nombre: 'tareas.json',
    leer: function() {
        let jsonFile = fs.readFileSync(this.nombre, 'utf-8'); // leemos el archivo json
        return JSON.parse(jsonFile); // convertimos el json en objeto literal
    },

    escribirJson: function(arrayTareas) {
        let objetoConvertido = JSON.stringify(arrayTareas, null, ' '); // convierto el OL (pasado por parámetro) en json
        // console.log(objetoConvertido);
        fs.writeFileSync(this.nombre, objetoConvertido); //agrego esa cadena de texto al archivo json
    },

    // b.Crear otra función llamada guardarTarea.Esta recibirá una tarea(objeto)
    // como parámetro y luego de su ejecución nuestra nueva tarea debe estar
    // agregada en el archivo tareas.json.Tené en cuenta que deberás utilizar la
    // función escribirJSON creada anteriormente para esto.

    // tengo la tarea necesito agregar esa tarea al último

    guardarTarea: function(tarea) {
        let listaTareas = this.leer();
        listaTareas.push(tarea);
        this.escribirJson(listaTareas)
    },

    // Crear una función llamada filtrarPorEstado que permita filtrar tareas por estado y luego mostrarlas en consola. Para esto:
    // a. Deberás utilizar el método filter.
    // b. La función debe recibir un parámetro. Éste será un string que indique el
    // estado por el cual vamos a querer filtrar todas nuestras tareas.
    // c. La función debe retornar un array con las tareas filtradas.


    filtrarPorEstado(estado) {
        let tareas = this.leer();
        let tareasFiltradas = tareas.filter(tarea => tarea.estado == estado);
        return tareasFiltradas
    },

}







module.exports = archivoJson; // exportamos el módulo