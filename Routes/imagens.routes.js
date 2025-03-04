const express = require('express');
const router = express.Router();
const imagemController = require('../Controller/imagem.controller.js');

router.post('/imagenCriar', imagemController.cadastroImagens);
router.get('/achar/:id', imagemController.encontrarImagem);
router.put('/atualizar/:id', imagemController.atualizarImagem);
router.delete('/deletar/:id', imagemController.deletarImagem);

module.exports = router;
