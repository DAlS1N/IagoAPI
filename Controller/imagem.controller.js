const ImagemRepository = require('../Repository/imageRepository.js');

exports.cadastroImagens = async (req, res) => {
    try {
        const { referencia, titulo, data_criacao } = req.body;
        const imagemID = await ImagemRepository.create(referencia, titulo, data_criacao);
        res.status(201).json({
            message: 'Imagem inserida com sucesso!',
            imagemID: imagemID
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao inserir a Imagem.', error: error.message });
    }
};

exports.encontrarImagem = async (req, res) => {
    try {
        const { id } = req.params;
        const imagem = await ImagemRepository.findById(id);

        if (!imagem) {
            return res.status(404).json({ message: 'Imagem não encontrada.' });
        }
        res.status(200).json(imagem);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao encontrar a Imagem.', error: error.message });
    }
};

exports.atualizarImagem = async (req, res) => {
    try {
        const { id } = req.params;
        const { referencia, titulo } = req.body;

        const imagemAtualizada = await ImagemRepository.update(id, referencia, titulo);
        if (!imagemAtualizada) {
            return res.status(404).json({ message: 'Imagem não encontrada.' });
        }
        res.status(200).json({ message: 'Imagem atualizada com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar a Imagem.', error: error.message });
    }
};

exports.deletarImagem = async (req, res) => {
    try {
        const { id } = req.params;
        const imagemDeletada = await ImagemRepository.delete(id);
        
        if (!imagemDeletada) {
            return res.status(404).json({ message: 'Imagem não encontrada.' });
        }
        res.status(200).json({ message: 'Imagem deletada com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar a imagem.', error: error.message });
    }
};
const ImagemRepository = require('../Repository/imageRepository.js');

exports.cadastroImagens = async (req, res) => {
    try {
        const { referencia, titulo, data_criacao } = req.body;
        const imagemID = await ImagemRepository.create(referencia, titulo, data_criacao);
        res.status(201).json({
            message: 'Imagem inserida com sucesso!',
            imagemID: imagemID
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao inserir a Imagem.', error: error.message });
    }
};

exports.encontrarImagem = async (req, res) => {
    try {
        const { id } = req.params;
        const imagem = await ImagemRepository.findById(id);

        if (!imagem) {
            return res.status(404).json({ message: 'Imagem não encontrada.' });
        }
        res.status(200).json(imagem);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao encontrar a Imagem.', error: error.message });
    }
};

exports.atualizarImagem = async (req, res) => {
    try {
        const { id } = req.params;
        const { referencia, titulo } = req.body;

        const imagemAtualizada = await ImagemRepository.update(id, referencia, titulo);
        if (!imagemAtualizada) {
            return res.status(404).json({ message: 'Imagem não encontrada.' });
        }
        res.status(200).json({ message: 'Imagem atualizada com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar a Imagem.', error: error.message });
    }
};

exports.deletarImagem = async (req, res) => {
    try {
        const { id } = req.params;
        const imagemDeletada = await ImagemRepository.delete(id);
        
        if (!imagemDeletada) {
            return res.status(404).json({ message: 'Imagem não encontrada.' });
        }
        res.status(200).json({ message: 'Imagem deletada com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar a imagem.', error: error.message });
    }
};
