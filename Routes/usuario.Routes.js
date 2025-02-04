
const express = require('express');
const router = express.Router();
const userController = require('../Controller/usario.controller.js');



app.post('/usuario', userController.cadastroUsuario);
app.get('/usuario/achar/:id',userController.BuscarUsuarioId);
app.put('/usuario/atualizar/:id', userController.AtualizarUsuario);
app.delete('/usuario/deletar/:id', userController.DeletarUsuario);

module.exports = router;