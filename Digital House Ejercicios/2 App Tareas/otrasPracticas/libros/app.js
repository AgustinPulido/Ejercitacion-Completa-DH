const repositorio = require('./acciones.js');

let acciones = process.argv[2];



switch (acciones){
    case 'listar':
        
        let alojamiento = repositorio.leerJSON('./repositorio.json');

    console.log();
    console.log('Estos son los libros de nuestro catálago actual:');
    console.log();

        alojamiento.forEach((element, indice) => {
            console.log((indice + 1) + '- ' + element.autor + '. ' + element.titulo + '. ' + element.editorial + ': ' + element.año + '.');
        });
        console.log();
        

    break;

    case 'crear':   // crear un nuevo registro de libro
   
    let autor = process.argv[3];
    let titulo = process.argv[4];
    let editorial = process.argv[5]
    let año = process.argv[6]

    let nuevoLibro = {
        autor: autor,
        titulo: titulo,
        editorial: editorial,
        año: año
    };

    repositorio.ingresarNuevoLibro(nuevoLibro);

    console.log();
    console.log('Libro ingresado correctamente');
    console.log();
    console.log('- ' + autor + '. ' + titulo + '. ' + editorial + ': ' + año + '.');
    console.log();


      break;

    case 'borrar':

    repositorio.eliminarUltimoLibro()

    console.log();
    console.log('Libro eliminado correctamente');
    console.log();

    break;

    case 'autores':

    let unAutor = process.argv[3]
    repositorio.filtrarPorAutor;

    console.log();
    console.log('Los libros de ' + unAutor + ' son:');
    console.log();

    let filtrados = repositorio.filtrarPorAutor(unAutor);

    filtrados.forEach((element) => {console.log(element.titulo)});
    console.log();
break;


case 'editoriales':

    let unaEditorial = process.argv[3]
    repositorio.filtrarPorAutor;

    console.log();
    console.log('Los libros de ' + unaEditorial + ' son:');
    console.log();

    let filtradas = repositorio.filtrarPorEditorial(unaEditorial);

    filtradas.forEach((element) => {console.log(element.titulo)});
    console.log();
break;

    case undefined:
        console.log();
        console.log('Perdón no te he comprendido');
        console.log();

        break;

        default: 

        console.log();
        console.log('Debe ingresar una acción: listar, crear o borrar');
        console.log();



    }






