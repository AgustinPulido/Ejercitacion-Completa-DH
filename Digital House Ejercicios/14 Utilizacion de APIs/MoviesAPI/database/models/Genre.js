module.exports =  (sequelize, dataTypes) => {
    const Genre = sequelize.define('Genre', 
    {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true
        },

        createdAt: {
            type: dataTypes.DATE,
            allowNull: true
        },

        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true
        },

        name: {
            type: dataTypes.STRING,
            allowNull: false
        },

        ranking: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },

        active: {
            type: dataTypes.TINYINT,
            allowNull: false
        }
    },
    {
        tableName: 'genres',
        // timestamps: false,
        underscored: true
    });

    Genre.associate = function(models){
        Genre.hasMany(models.Movie, 
        {
            as: 'movies',
            foreignKey: 'genre_id'
        })
    }

    return Genre;
}