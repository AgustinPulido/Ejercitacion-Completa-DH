# Remota JS101

## Repaso
### Variables
```js
const constante1; //Constante, no podemos cambiar la referencia. Preferida a las demás cuando no necesitamos cambiar el valor
let variable1; //Variable, es una mejor definicion que 'var'. Preferida a var cuando necesitamos que el valor cambie.
var variable2; //Variable, el 'scope' de la variable es más grande que las anteriores. En general se prefieren las otras, pero puede ser necesaria en ciertos casos.
```

### Tipos de datos
```js
let str = 'esto es un string';
let bool = true;
let life_universe_everything = 42;


```

### Funciones
```js
//Declaracion de una funcion 'f' que recibe un parametro:
function f(param1){
    console.log(param1);
}

//LLamada/ejecucion de una funcion 'f':
f("pepito");

```
### Ciclos
```js
let loop = true
while(loop){loop = false}

do{
    loop = true;
}while(!loop)

for (let i = 0; i < 10; i++) {
    console.log(i)
}


```
### Objetos
```js
let obj = {
    key1 : 'Hola',
    key2 : 'mundo',
    key3 : [
        'Esto',
        'es',
        'un array'
    ]
}
```
### Arrays
```js
let array1 = ["banana","manzana"]
let array2 = ['los arrays',false,'son', 12, 'heterogeneos', {hello:"world"}];

array2.forEach((elem)=>{
    console.log(elem)
})

let concat = array2.reduce((res,elem)=>{
    return res+","+elem;
});
console.log(concat)

```

### Módulos
```js
//script1.js
const obj = {
    datos: "algo muy importante"
};
module.exports = obj;

//script2.js
const conf = require("script1");
console.log(conf.datos);

```

