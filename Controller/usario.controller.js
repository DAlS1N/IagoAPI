const UsuarioRepository = require('../repository/userRepository.js');

exports.cadastroUsuario = async (req, res) => {
    try {
        const { nome } = req.body;
        const usuarioId = await UsuarioRepository.create(nome);
        res.status(201).json({
            message: 'Usuário inserido com sucesso!',
            usuarioId: usuarioId
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao inserir usuário.', error: error.message });
    }
};

exports.BuscarUsuarioId = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await UsuarioRepository.findById(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao procurar usuário.', error: error.message });
    }
};

exports.AtualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome } = req.body;
        const usuario = await UsuarioRepository.update(id, nome);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        res.status(200).json({ message: 'Usuário atualizado com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar usuário.', error: error.message });
    }
};

exports.DeletarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await UsuarioRepository.delete(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        res.status(200).json({ message: 'Usuário deletado com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar usuário.', error: error.message });
    }
};
