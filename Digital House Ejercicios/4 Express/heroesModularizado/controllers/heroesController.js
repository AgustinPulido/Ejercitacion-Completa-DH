const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

let heroesContoller = {
    listado: (req, res) => res.send(heroes),
    presentacionHeroe: (req, res) => {
                         let heroe = heroes.find(heroe => heroe.id == req.params.id);
                         res.send(heroe?`Hola! Mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`: `No hay héroe`)},
    bioHeroe: (req, res) => {
              let heroe = heroes.find(heroe => heroe.id == req.params.id);
                if(!heroe){
                   res.send("No encontramos un héroe para mostrarte su biografía");};
                if(req.params.ok == "ok"){
                   res.send(`${heroe.nombre}: ${heroe.resenia}`);
                }else{
                   res.send(`${heroe.nombre}: "Lamento que no desees saber más de mi :("`);}},
 }

 module.exports = heroesContoller;