const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/usuario', userController.cadastroUsuario);
router.get('/usuario/achar/:id', userController.BuscarUsuarioId);
router.put('/usuario/atualizar/:id', userController.AtualizarUsuario);
router.delete('/usuario/deletar/:id', userController.DeletarUsuario);

module.exports = router;
