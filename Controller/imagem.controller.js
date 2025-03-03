const ImagemService = require('../Service/imagem.service');

exports.cadastroImagens = async (req, res) => {
    try {
        const { referencia, titulo, data_criacao } = req.body;
        const imagemID = await ImagemService.cadastroImagens(referencia, titulo, data_criacao);
        res.status(201).json({ message: 'Imagem cadastrada com sucesso!', imagemID });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao inserir a imagem.', error: error.message });
    }
};

exports.encontrarImagem = async (req, res) => {
    try {
        const { id } = req.params;
        const imagem = await ImagemService.encontrarImagem(id);
        if (!imagem) return res.status(404).json({ message: 'Imagem não encontrada.' });

        res.status(200).json(imagem);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao encontrar a imagem.', error: error.message });
    }
};

exports.atualizarImagem = async (req, res) => {
    try {
        const { id } = req.params;
        const { referencia, titulo } = req.body;

        const imagemAtualizada = await ImagemService.atualizarImagem(id, referencia, titulo);
        if (!imagemAtualizada) return res.status(404).json({ message: 'Imagem não encontrada.' });

        res.status(200).json({ message: 'Imagem atualizada com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar a imagem.', error: error.message });
    }
};

exports.deletarImagem = async (req, res) => {
    try {
        const { id } = req.params;
        const imagemDeletada = await ImagemService.deletarImagem(id);
        if (!imagemDeletada) return res.status(404).json({ message: 'Imagem não encontrada.' });

        res.status(200).json({ message: 'Imagem deletada com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar a imagem.', error: error.message });
    }
};
