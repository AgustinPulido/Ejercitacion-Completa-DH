const fs = require('fs');

let archivoJSON ={
    nombre: 'cumples.json',
    leer: function(){
       let objetoConvertido = fs.readFileSync(this.nombre, 'utf-8');
        return JSON.parse(objetoConvertido)
    },

// Crear una función llamada escribirJSON dentro de nuestro módulo
// tareas que se encargue de solamente reescribir nuestro archivo
// tareas.json.Para esto es obligatorio que utilices el método writeFileSync
// del módulo FS.Tener en cuenta que:
// i.La función debe recibir un array de tareas.
// ii.Debes convertir a JSON el array que reciba como parámetro.

    escribirJSON: function(arrayCumples){
        objetoConvertido = JSON.stringify(arrayCumples);
        fs.writeFileSync(this.nombre, objetoConvertido);
    },

    // b.Crear otra función llamada guardarTarea.Esta recibirá una tarea(objeto)
    // como parámetro y luego de su ejecución nuestra nueva tarea debe estar
    // agregada en el archivo tareas.json.Tené en cuenta que deberás utilizar la
    // función escribirJSON creada anteriormente para esto.
    // tengo la tarea necesito agregar esa tarea al último

    guardarCumple: function(nuevoCumple){
        let listaDeCumples = this.leer();
        listaDeCumples.push(nuevoCumple);
        this.escribirJSON(listaDeCumples);
    },

    //Crear una función para eliminar el último cumpleaños almacenado en JSON

    eliminarCumple: function(ultimoCumple){
        let listaDeCumples = this.leer();
        listaDeCumples.pop(ultimoCumple);
        this.escribirJSON(listaDeCumples);
    },
    

    // Crear una función llamada filtrarPorEstado que permita filtrar tareas por estado y luego mostrarlas en consola. Para esto:
    // a. Deberás utilizar el método filter.
    // b. La función debe recibir un parámetro. Éste será un string que indique el
    // estado por el cual vamos a querer filtrar todas nuestras tareas.
    // c. La función debe retornar un array con las tareas filtradas.

    filtrarPorMes: function(mes){
        let cumples = this.leer();
        let cumplesFiltrados = cumples.filter(cumple => cumple.mes === mes)
        return cumplesFiltrados;
    }
}


module.exports = archivoJSON
