const UsuarioService = require('../Service/usuario.service');

exports.cadastroUsuario = async (req, res) => {
    try {
        const { nome } = req.body;
        const usuarioId = await UsuarioService.cadastroUsuario(nome);
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!', usuarioId });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao inserir usuário.', error: error.message });
    }
};

exports.buscarUsuarioId = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await UsuarioService.buscarUsuarioId(id);
        if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado.' });

        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao procurar usuário.', error: error.message });
    }
};

exports.atualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome } = req.body;
        const usuarioAtualizado = await UsuarioService.atualizarUsuario(id, nome);
        if (!usuarioAtualizado) return res.status(404).json({ message: 'Usuário não encontrado.' });

        res.status(200).json({ message: 'Usuário atualizado com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar usuário.', error: error.message });
    }
};

exports.deletarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarioDeletado = await UsuarioService.deletarUsuario(id);
        if (!usuarioDeletado) return res.status(404).json({ message: 'Usuário não encontrado.' });

        res.status(200).json({ message: 'Usuário deletado com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar usuário.', error: error.message });
    }
};
