const express = require('express');
const router = express.Router();
const userController = require('../Controller/usario.controller.js');

router.post('/usuarioCriar', userController.cadastroUsuario);
router.get('/usuario/achar/:id', userController.buscarUsuarioId);
router.put('/usuario/atualizar/:id', userController.atualizarUsuario);
router.delete('/usuario/deletar/:id', userController.deletarUsuario);

module.exports = router;
