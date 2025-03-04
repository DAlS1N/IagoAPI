const express = require('express');
const router = express.Router();
const userController = require('../Controller/usario.controller.js');

router.post('/usuarioCriar', userController.cadastroUsuario);
router.get('/achar/:id', userController.buscarUsuarioId);
router.put('/atualizar/:id', userController.atualizarUsuario);
router.delete('/deletar/:id', userController.deletarUsuario);

module.exports = router;
