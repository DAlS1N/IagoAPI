const express = require('express');
const router = express.Router();
const imagemController = require('../Controller/imagem.controller.js');

router.post('/imagenCriar', imagemController.cadastroImagens);
router.get('/imagens/achar/:id', imagemController.encontrarImagem);
router.put('/imagens/atualizar/:id', imagemController.atualizarImagem);
router.delete('/imagens/deletar/:id', imagemController.deletarImagem);

module.exports = router;
