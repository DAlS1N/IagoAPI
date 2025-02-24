const express = require('express');
const router = express.Router();
const userController = require('../Controller/usario.controller.js');

router.post('/usuarioCriar', userController.cadastroUsuario);
router.get('/usuario/achar/:id', userController.BuscarUsuarioId);
router.put('/usuario/atualizar/:id', userController.AtualizarUsuario);
router.delete('/usuario/deletar/:id', userController.DeletarUsuario);

module.exports = router;
