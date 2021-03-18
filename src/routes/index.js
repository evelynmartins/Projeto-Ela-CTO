const express = require("express");
const {exibirCadastro} = require("../controller/cadastrocontroller");
const router = express.Router();

router.get("/", (request, response) => {

    response.send("Está rodando!")
});

module.exports = router;
