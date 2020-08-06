let db = require('../../database/models')

let genreController = {

    list: async (req, res) => {
        try {
            let genres = await db.Genre.findAll()
            let results = {
                meta: {
                    status: 200,
                    length: genres.length,
                    url: '/api/genres'
                },
                data: genres
            }

            res.json(results)

        } catch (errors) {
            res.status(500).json({
                ok: false,
                errors
            })
        }
    },

    find: async (req, res) => {

        try {
            let genre = await db.Genre.findByPk(req.params.id);
            if (!genre) {
                return res.status(404).json({
                    ok: false,
                    msg: 'No se encontró el recurso que está buscando'
                })
            }
            let result = {
                meta: {
                    status: 200
                },
                data: genre
            }
            return res.json(result)
        } catch (error) {
            res.status(500).json({
                ok: false,
                error
            })
        }
    },

    store: async (req, res) => {
        try {
            // const envio = req.body
            // console.log(envio)
            let genre = await db.Genre.create(req.body);
            let result = {
                meta: {
                    status: 200,
                    msg: 'Gnénero creado correcatamente'
                },
                data: genre
            }
            return res.json(result)
        } catch (error) {
            return res.status(500).json({
                ok: false,
                error
            })
        }
    },

    update: async (req, res) => {
        try {
            const genreToEdit = await db.Genre.findByPk(req.paramas.id);
            if (!genreToEdit) {
                res.status(404).json({
                    msg: 'El género que intenta editar no existe'
                })
            }
            genreToEdit.update(req.body);
            return res.json(genreToEdit);
        } catch (error) {
            return res.status(500).json({of: false, error})
        }
    },

    delete: async (req, res) => {
        try {
            const genreToDelete = await db.Genre.findByPk(req.params.id)
            if (!genreToDelete) {
                res.status(404).json({
                    msg: 'El género que intenta eliminar no existe'
                })
            }

            await genreToDelete.destroy();

            let result = {
                meta: {
                    status: 200,
                    msg: 'Se eliminó correctamente el género ' + genreToDelete.name
                },
                data: genreToDelete
            }
            return res.json(result)

        } catch (error) {
            res.status(500).json({
                ok: false,
                error
            })

        }
    }


};

module.exports = genreController;