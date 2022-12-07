
module.exports = function(sequelize, dataTypes){

    let alias = 'Genero';

    let columnas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        name: {
            type: dataTypes.STRING
        }
    } 

    let config = {
        tableName:"generos",
        timestamps:false
    }

    const Genero =  sequelize.define(alias,columnas,config)

    Genero.associate = function(models) {
        Genero.hasMany(models.Cancion, {
            as: "canciones",
            foreignKey: "genero_id"
        })
    }

    return Genero;
}

