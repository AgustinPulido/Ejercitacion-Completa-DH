let indexController = {
    home: (req, res) => res.render('index', {title: "Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!"}),
    creditos: (req, res) => res.render('creditos',{creditos: '¡Estás viendo una página creada por Matías Campoy!'}),
    // error: (req, res) => {res.status(404).send('404 not found. <br> ¡Houston, tenemos problemas!');}

}

module.exports = indexController;

