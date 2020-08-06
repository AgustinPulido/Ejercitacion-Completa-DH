let db = require('../database/models')
let sequelize = db.sequelize;
// const Movie = require('../database/models/Movie')


let moviesController = {
    create: (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                return res.render('moviesList', {
                    genres: genres
                })
            })
            .catch((err) => console.error(err));
    },

    saveMovie: (req, res) => {
        db.Movie.create({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating,
        });

        res.redirect(`/movies`);
    },

    index: (req, res) => {
        db.Movie.findAll()
            .then(function (movies) {

                res.render('movies', {
                    movies
                })
            })
            .catch((err) => console.error(err));
    },

    detail: (req, res) => {

        db.Movie.findByPk(req.params.id, {
                include: [{
                    association: "genre"
                }, {
                    association: "actors"
                }]
            })
            .then((movie) => {
                res.render('movieDetail', {
                    movie
                })
            })
            .catch((err) => console.error(err));
    },

    delete: (req, res) => {
        db.Movie.destroy({
            where: {
                id_users: req.params.id
            }
        });

        res.redirect('/movies')

    },

    edit: (req, res) => {
        let reqMovie = db.Movie.findByPk(req.params.id);
        let reqGenre = db.Genre.findAll();

        Promise.all([reqMovie, reqGenre])
            .then(([movie, genres]) => {
                res.render('editMovie', {
                    movie,
                    genres
                })
            })
            .catch((err) => console.error(err));
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

        res.redirect("/movies/detail/" + req.params.id)
    },

    new: (req, res) => {
        db.Movie.findAll({
                order: [
                    ['release_date', "DESC"]
                ],
                limit: 5,
            })
            .then((movies) => {
                res.render('latest', {
                    movies
                })
            })

            .catch((err) => console.error(err));
    },

    recommended: (req, res) => {
        db.Movie.findAll({
                where: {
                    rating: {
                        [db.Sequelize.Op.gte]: 8
                    }
                }
            })
            .then((movies) => {
                res.render('recommended', {
                    movies
                })
            })

            .catch((err) => console.error(err));
    }
}

module.exports = moviesController;