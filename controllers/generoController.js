let db = require("../database/models");

let generoController = {


    listado: function(req,res){
        db.Genero.findAll( {
            include: [{association: "canciones"}] 
        })
            .then(function(genero) {
                res.render("listadoGeneros", {genero:genero} )
            })
    },


}



module.exports = generoController;