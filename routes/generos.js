var express = require('express');
var router = express.Router();
var generoController = require("../controllers/generoController")



//lectura
router.get("/", generoController.listado);


module.exports = router;
