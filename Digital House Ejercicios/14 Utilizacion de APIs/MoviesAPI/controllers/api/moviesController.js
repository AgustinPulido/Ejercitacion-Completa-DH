let db = require('../../database/models')

let moviesController = {
        list: async function (req, res) {

            try {
                let movies = await db.Movie.findAll(
                    {include: [{
                        association: "genre"
                    }, {
                        association: "actors"
                    }]}
                )

                for(let i = 0; i < movies.length; i++){
                    movies[i].setDataValue("endopoint", "/api/movies/" + movies[i].id)
                }

                let results = {
                    meta: {
                        status: 200,
                        length: movies.length,
                        url: '/api/movies'
                    },
                    data: movies
                }

                res.json(results)

            } catch (err) {
                console.error(err)
            };
        },

        find: async (req, res) => {
            try {
                let movie = await db.Movie.findByPk(req.params.id, {
                        include: [{
                            association: "genre"
                        }, {
                            association: "actors"
                        }]
                    })

                        res.json(movie)

                } catch (err) {
                    console.error(err)
                };
        },

        store: async (req, res) => {
            try {
                // const envio = req.body
                // console.log(envio)
                let movie = await db.Movie.create(req.body);
                let result = {
                    meta: {
                        status: 200,
                        msg: 'Pelicula creada exitosamente'
                    },
                    data: movie
                }
                return res.json(result)
            } catch (error) {
                return res.status(500).json({ok: false, error})
            }
        },

        update: (req, res) => {
           db.Movie.update({
                title: req.body.titulo,
                awards: req.body.premios,
                release_date: req.body.estreno,
                genre_id: req.body.genero,
                length: req.body.duracion,
                rating: req.body.rating,
            },
            {
                where: {
                    id: req.params.id
                }
            });
    
            res.send({status: 200})
        },

        delete: (req, res) => {
            db.Movie.destroy({
                where: {
                    id_users: req.params.id
                }
            });
    
            res.send({status: 200})
    
        },
    }

        module.exports = moviesController;