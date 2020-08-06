// let fs = require('fs')

// let convertir = function(archivoJson){
//     let archivoLeido = fs.readFileSync(archivoJson, 'utf-8');
//     return JSON.parse(archivoLeido);
// }

// module.exports = convertir

const fs = require('fs');
let horarios = {
    nombre: 'horarios.json',
    leer: function(){
        let convertido = fs.readFileSync(this.nombre, 'utf-8');
        return JSON.parse(convertido);
    },

    escribir: function(arrayHorario){
    let horarioConvertido = JSON.stringify(arrayHorario, null, ' ');
    fs.writeFileSync(this.nombre, horarioConvertido);
    },

    guardarNuevoHorario: function(nuevoHorario) {
        let listaDeHorarios = this.leer(); // segundo error era this.leer (no this.nombre) y me olvidé los paréntesis del método leer
        listaDeHorarios.push(nuevoHorario);
        this.escribir(listaDeHorarios);
    },

    eliminarUltimoHorario: function(nuevoHorario) {
        let listaDeHorarios = this.leer();
        listaDeHorarios.pop(nuevoHorario);
        this.escribir(listaDeHorarios);
    },

    filtrar: function(tipo){
        let listado = this.leer();
        let horariosFiltrados = listado.filter(horario => horario.tipo === tipo);
        return horariosFiltrados;
    }

}




module.exports = horarios;

console.log(horarios.leer());
