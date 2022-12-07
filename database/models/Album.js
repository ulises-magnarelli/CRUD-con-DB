
module.exports  = function(sequelize, dataTypes){

    let alias = 'Album';

    let columnas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.INTEGER
        }
    } 

    let config = {
        tableName:"albumes",
        timestamps: false
    }

    const Album = sequelize.define(alias,columnas,config);

    Album.associate = function(models) {
        Album.hasMany(models.Cancion, {
            as: "canciones",
            foreignKey: "album_id"
        })
    }
    return Album
}

