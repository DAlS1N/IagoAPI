const UsuarioRepository = require('../Repository/User.Repository.js');

exports.cadastroUsuario = async (nome) => {
    return await UsuarioRepository.create(nome);
};

exports.buscarUsuarioId = async (id) => {
    return await UsuarioRepository.findById(id);
};

exports.atualizarUsuario = async (id, nome) => {
    return await UsuarioRepository.update(id, nome);
};

exports.deletarUsuario = async (id) => {
    return await UsuarioRepository.delete(id);
};
