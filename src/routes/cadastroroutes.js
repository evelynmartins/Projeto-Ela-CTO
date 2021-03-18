const express = require("express");
const router = express.Router();
const controller = require("../controller/cadastrocontroller");

router.get("/", controller.exibirCadastro);
router.get("/:Nome", controller.pesquisaNome);
router.post("/", controller.salvarCadastro);

module.exports = router;