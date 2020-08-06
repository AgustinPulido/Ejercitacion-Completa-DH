const fs = require('fs');


let json = {
    repositorio: 'repositorio.json',

leerJSON: function(){
    let archivoLeido = fs.readFileSync(this.repositorio, 'utf-8');
    return JSON.parse(archivoLeido);
},

escribirJSON: function(nuevoLibro){
    let incorporarLibro = JSON.stringify(nuevoLibro, null, 4);
    fs.writeFileSync(this.repositorio, incorporarLibro);
},

ingresarNuevoLibro: function(nuevo){
    let listaDeLibros = this.leerJSON();
    listaDeLibros.push(nuevo);
    this.escribirJSON(listaDeLibros);
},

eliminarUltimoLibro: function(ultimo){
    let listaDeLibros = this.leerJSON();
    listaDeLibros.pop(ultimo);
    this.escribirJSON(listaDeLibros);
},

filtrarPorAutor: function(autor){
    let autores = this.leerJSON();
    let autoresFiltrados = autores.filter(libros => libros.autor === autor);
    return autoresFiltrados
},

filtrarPorEditorial: function(editorial){
    let editoriales = this.leerJSON();
    let editorialesFiltradas = editoriales.filter(libros => libros.editorial === editorial);
    return editorialesFiltradas
}, 

};


module.exports = json;

