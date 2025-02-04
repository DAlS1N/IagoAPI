const express = require('express');
const router = express.Router();
const imagemController = require('../Controller/imagem.controller.js');



app.post('/Imagens', imagemController.cadastroImagens);
app.get('/Imagens/achar/:id',imagemController.encontrarImagem);
app.put('/Imagens/atualizar/:id', imagemController.atulizarImagem);
app.delete('/Imagens/deletar/:id', imagemController.deletarImagem);

module.exports = router;