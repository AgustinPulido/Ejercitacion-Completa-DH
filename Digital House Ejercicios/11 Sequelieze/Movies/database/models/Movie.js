module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
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

        title: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        rating: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },

        awards: {
            type: dataTypes.INTEGER,
            allowNull: false,
            default: 0
        },

        release_date: {
            type: dataTypes.DATE,
            allowNull: false,
        },

        length: {
            type: dataTypes.INTEGER,
            allowNull: true,
        },

        genre_id: {
            type: dataTypes.INTEGER,
            allowNull: true,
        }

    };
    let config = {
        tableName: 'movies',
        timestamps: false
    };
    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = function(models){
        Movie.belongsTo(models.Genre, {
            as: 'genre',
            foreignKey: 'genre_id'
        });
        
        Movie.belongsToMany(models.Actor, 
        {
            as: 'actors',
            through: 'actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: false
        });
    }

    return Movie;
}