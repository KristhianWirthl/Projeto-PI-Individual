var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
});

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

module.exports = router;