
module.exports = function(sequelize,dataType){

    let alias = 'Artista';

    let columnas = {
        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataType.STRING
        },
        apellido: {
            type: dataType.STRING
        }
    } 

    let config = {
        tableName:"artistas",
        timestamps: false

    }

    const Artista =  sequelize.define(alias,columnas,config)

    Artista.associate = function(models) {
        Artista.hasMany(models.Cancion, {
            as: "canciones",
            foreignKey: "artista_id"
        })
    }

    return Artista
}

