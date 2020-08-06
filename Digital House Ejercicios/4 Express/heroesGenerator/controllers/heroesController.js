const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

let heroesContoller = {
    listado: (req, res) => res.render('listado',{listado: heroes}),
    presentacionHeroe: (req, res) => {
                         let heroe = heroes.find(heroe => heroe.id == req.params.id);
                         let info = heroe?`Hola! Mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`: `No hay héroe`;
                         res.render('presentacion', {presentacion: info})},
    bioHeroe: (req, res) => {
              let heroe = heroes.find(heroe  => heroe.id == req.params.id);
                if(!heroe){
                   res.render('bio', {bio: "No encontramos un héroe para mostrarte su biografía"});};
                if(req.params.ok == "ok"){
                   res.render('bio', {bio:`${heroe.nombre}: ${heroe.resenia}`});
                }else{
                   res.render('bio', {bio: `${heroe.nombre}: "Lamento que no desees saber más de mi :("`});}},
 }

 module.exports = heroesContoller;