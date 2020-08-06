module.exports = (secualize, dataTypes) => {
    const Actor = secualize.define('Actor', //nombre o alias de la tabla
    // defino las columnas de la tabla
    {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true
        },

        // created_at: {
        //     type: dataTypes.timestamp,
        //     allowNull: true
        // },

        // updated_at: {
        //     type: dataTypes.timestamp,
        //     allowNull: true,
        // },

        first_name: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        last_name: {
            type: dataTypes.STRING,
            allowNull: false
        },

        rating: {
            type: dataTypes.DECIMAL,
            allowNull: true
        },

        favorite_movie_id: {
            type: dataTypes.INTEGER,
            allowNull: true,
        }

    },
    // configuración de la tabla
    {
        tableName: 'actors',
        timestamps: false,
    });

    Actor.associate = function(models){
        Actor.belongsToMany(models.Movie, 
        {
            as: 'movies',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false
        });
    }
    return Actor;
}