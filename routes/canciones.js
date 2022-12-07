var express = require('express');
var router = express.Router();
var cancionesController = require("../controllers/cancionesController")


//creacion
router.get("/crear", cancionesController.crear)
router.post("/crear", cancionesController.guardado)


//lectura
router.get("/", cancionesController.listado);

//detalle
router.get("/:id", cancionesController.detalle);


//actualizacion
router.get("/editar/:id",cancionesController.editar)
router.post("/editar/:id",cancionesController.actualizar)


//borrado
router.post("/borrar/:id",cancionesController.borrar)



module.exports = router;
