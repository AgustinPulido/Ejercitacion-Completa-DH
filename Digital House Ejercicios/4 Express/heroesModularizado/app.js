const express = require('express');
const app = express();
let rutasHeroes = require('./routes/heroes')
let rutasMain = require('./routes/main')


app.listen(3030, () => console.log('Servidor escuchando en el puerto 3030'));

app.use('/', rutasMain);

app.use('/heroes', rutasHeroes);

app.use('*', (req, res) => {res.status(404).send('404 not found. <br> ¡Houston, tenemos problemas!');})