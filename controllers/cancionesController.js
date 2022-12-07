let db = require("../database/models");

let cancionesController = {

 
    crear: function(req,res){
        let todosGeneros = db.Genero.findAll();
        
        let todosAlbumes = db.Album.findAll();

        let todosArtistas = db.Artista.findAll();


        Promise.all([todosGeneros ,todosAlbumes ,todosArtistas])
        .then(function (resultados){
            console.log(resultados)
            let generos = resultados[0]
            let albumes = resultados[1]
            let artistas = resultados[2]

            res.render("creacionCanciones", {generos:generos ,albumes:albumes, artistas:artistas})
        })
    },
       

    guardado: function(req,res){
        db.Cancion.create({
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            created_at: req.body.created_at,
            genero_id: req.body.genero,
        });
        res.redirect("/canciones");
    },

    listado: function(req,res){
        db.Cancion.findAll()
        .then(function(canciones){
            res.render("listadoCanciones", {canciones:canciones})
        })
    },

    detalle: function(req,res){
        db.Cancion.findByPk(req.params.id, {include: [{association: "genero"}] })
        
            .then(function(cancion) {
                res.render("detalleCancion", {cancion:cancion} )
            })
    },

    editar: function(req,res){
        let pedidoCancion = db.Cancion.findByPk(req.params.id);

        let pedidoGeneros = db.Genero.findAll();

        let pedidoAlbumes = db.Album.findAll();

        let pedidoArtistas = db.Artista.findAll();


        Promise.all([pedidoCancion, pedidoGeneros, pedidoAlbumes, pedidoArtistas])
        .then(function ([canciones,generos,albumes,artistas]){
  

            res.render("editarCancion", {canciones:canciones, generos:generos, albumes:albumes, artistas:artistas })
        })
    },


    actualizar : function(req,res){
        db.Cancion.update({
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            created_at: req.body.created_at,
            genero_id: req.body.genero,
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect("/canciones/" + req.params.id)
    },

    borrar: function(req,res){
        db.Cancion.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/canciones") //NO ME TOMA LA RUTA
    }




}


module.exports = cancionesController;