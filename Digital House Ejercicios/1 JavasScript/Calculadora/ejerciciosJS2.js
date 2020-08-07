// let mensaje = 'Hola, Mundo!';

// // let recorte = mensaje.slice(0, 4);

// console.log(mensaje);

// console.log(mensaje.replace('Mundo', 'Matías Campoy'));

// let frase = 'Breaking Bad Rules!';

// console.log(frase.indexOf('Bad'));

// function menciona(texto, palabra){
//     console.log(texto.indexOf(palabra) == texto.indexOf(palabra));
// }

// menciona('Hola, me llamo Juan', 'me')

// let numero = 28.3;

// let cambio = Number(numero)
// console.log(typeof cambio);

// let conversion = Number(true)
// console.log(conversion)

// let laMitad = num => num/2;

// console.log(laMitad(6));

// let dividir = (num, num2) => num / num2;

// console.log(dividir(20, 5));

// let trabajar = dia => {
//     if ( dia == 'Sábado' || dia == 'Domingo'){
//         console.log('No tenés que trabajar');
//     } else {
//         console.log('Tenés que trabajar');
//     }
// }

// trabajar('Lunes');

// let saludar = () => console.log('Hola, Mundo!');
// ;

// saludar();

// let horaActual = () => {
//     let fecha = new Date();
//     return fecha.getHours() + ' : ' + fecha.getMinutes();
// }

// horaActual()

// let dameCinco = () => [1,2,3,4,5];

// console.log(dameCinco());

// let sumar = (num1, num2) => num1 + num2;
// let restar = (num1, num2) => num1 - num2;
// let multiplicar = (num1, num2) => num1 * num2;
// let dividir = (num1, num2) => num1 / num2;

// let calculadora = (num1, num2, operacion) => console.log(operacion(num1, num2));

// calculadora(134,3,multiplicar)

// let nombreCompleto = (nombre, apellido) => nombre + ' ' + apellido;

// let iniciales = (nombre, apellido) => nombre[0] + apellido[0];

// let saludar = (nombre, apellido, callback) => 'Hola, ' + callback(nombre, apellido) + '!';

// console.log(saludar('Matías', 'Campoy', nombreCompleto));

// function agregarHttp(url) {
//     return 'http://' + url;
// }

// function procesar(lista, agregarHttp){
//     let contenedor = [];
//     for (let i = 0; i <= lista.length; i++){
//     contenedor.push(agregarHttp(lista[i]));
//     }
//     return contenedor
// }

// console.log(procesar(["www.google.com","www.yahoo.com"], agregarHttp));

// function saludar(persona){
//     let mensaje = 'Bienvenido, ';
//     function nombre(){
//         return mensaje + persona + '!';
//     }
//     return nombre()
// }



// console.log(saludar('Matías Campoy'));

/* Prueba de arrow function + if ternario = OK */

// let masGrande = (num1, num2) => num1>num2? 'El primero es mayor': 'El segundo es mayor'

// console.log(masGrande(59,10));


/* Asincronismo: setTimeout */

// function despedirme(){
//     return 'chau';
// }

// function saludar(){
//     return 'hola';
// }
// setTimeout(function(){console.log(despedirme());}, 5000), console.log(saludar());

/* Uso del método map y uso del método map + arrow function */

// let lista = ["www.google.com","www.yahoo.com"];

// let nuevaLista = lista.map(function(current, index, lista){
//     console.log('current', typeof (current));
//     console.log('index', index);
//     console.log('lista', lista);
// })

// console.log(typeof(current));

// let nuevaLista = lista.map(url => 'https//:' + url)

// console.log('Vieja', lista, 'Nueva', nuevaLista);


// function procesar(lista){
//     nuevaLista = lista.map(function(url){
//         return 'http.'+url;
//     })
//     return nuevaLista;
// }
// function procesar(lista){
//     nuevaLista = lista.map(function(url){
//         return 'http://'+url;
//     })
//     return nuevaLista;
// }
// console.log(procesar(["www.google.com","www.yahoo.com"]));

/* ARRAYS */

// let casa = ['la sala', 'el comedor', 'el dormitorio', 'la cocina'];

// let presentacionCasa = casa.map(function(x){
//     return 'Aquí está ' + x + ' de la casa';
// })

// console.log(presentacionCasa);

// console.log(casa.length);
// casa.push('el baño');

// let presentacion = casa.map(x => 'Acá tenemos ' + x + ' de la casa.');


// // console.log(presentacion);

// console.log(casa.join(', '));

// let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"];
// let indiceJuan = alumnos.indexOf('Juan');
// let indiceFrancisco = alumnos.indexOf['Francisco'];

// console.log(indiceJuan);

// let arrayFrase = [
//     "No",
//     "he",
//     "fracasado,",
//     "simplemente",
//     "me",
//     "he",
//     "topado",
//     "con",
//     "diez",
//     "mil",
//     "soluciones",
//     "equivocadas"
//   ];

//   let fraseNueva = arrayFrase .join(' ')

//   console.log(fraseNueva);

// let edades = [23, 4, 38, 7, 9, 17, 18];
// let mayorDeEdad = edades.filter(edad => edad > 98);

// let sumaDeEdades = edades.reduce((x, y) => x + y)
// console.log(sumaDeEdades);

// let mostrarEdades = edades.forEach((edad, indice) => console.log('Su edad es ' + edad + ' años' + ' y su puesto es ' + indice))

// let notas = [9, 8, 3, 2, 8, 8, 5];

// for (let nota of notas){
//     if (nota%2==0){
//         console.log('Nota par');
//     }
// }

// let fechaActual = new Date();
// console.log(fechaActual.getDate());

// let miCumpleaños = new Date(05,10,1981)

// let dia = miCumpleaños.getDate()
// console.log(dia + 1);

// let fechaActual = new Date();
// console.log(fechaActual.getFullYear());

/*  Métodos Date */

// let fecha = new Date();
// let anio = fecha.setYear(1981) ;
// let mes = fecha.setMonth(9);
// let dia = fecha.setDate(05);

// console.log(fecha);

// let colores = ['amarillo', 'rojo', 'verde', 'celeste', 'anaranjado'];
// let [colorAmarillo, colorRojo, colorVerde] = colores;
// console.log(colores[2]);

// let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
// let [destinoMarruecos, destinoBariloche, Pocha, destinoChina, destinoGrecia] =destinosDelMundo;
// let bariloche = destinoBariloche;
// let china = destinoChina;

// console.log(Pocha);

/* Cómo se podría implementar el Rest Parameter a la calculadora? */

// function sumar(...numeros){
//     return numeros.reduce((acumulador, numero) => acumulador += numero);
// }

// console.log(sumar(4,6,7,8));



// function encontreUn5(numeros){
//     let i=0;
//     do {
//          return numeros[i];
//          i++;
//     }while(numeros[i]!=5)
//     console.log('Se encontró un 5!');
//     }

//     console.log(encontreUn5([1,4,7,8]));

// function tablaDeMultiplicar(numero) {
//     var i = 0;
//     do{
//        i++;
//       resultado = numero * i;
//       console.log(numero + ' * ' + i + ' = ' + resultado);

//     }while (i < 10)
// }

// tablaDeMultiplicar(5)

// function encontreUnCinco(array){
//   let resultado = []
//   do{
//     for (let i = 0; i < array.length; i++){
//       resultado.push([i]);
//     }
//   }while (resultado[i] !== 5)
// console.log('te encontré');
// }

// function encontreUn5(numeros){
//   let i=0;
//   do {
//        console.log(numeros[i]);
//        i++;
//   }while(numeros[i]!=5)
//   console.log('Se encontró un 5!')
//   }
// encontreUn5([1,2,3,4,5,6,7])
