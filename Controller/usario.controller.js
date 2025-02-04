const express = require ('express')
const axios = require ('axios')
const app = express();
const PORT = 3000;
const UserRepositor = require('../Repository/userRepository.js');

const usuarioRepositor = new UserRepositor();

app.use(express.json()); // Middleware para aceitar JSON



// Rota para inserir usuário
exports.cadastroUsuario = async (req, res) => {
    try {
        const { nome } = req.body;
        const usuarioId = await usuarioRepositor.create(nome);
        res.status(201).json({
            message: 'Usuário inserido com sucesso!',
            usuarioId: usuarioId
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao inserir usuário.', error: error.message });
    }
};



// Rota para buscar usuário por ID
exports.BuscarUsuarioId = async (req, res) => {
    try{
    const { id } = req.params; 
    const usuario = await usuarioRepositor.findById(id);

    if(!usuario){
        return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    res.status(200).json(usuario);

    }catch(error){

        res.status(500).json({message: 'Erro ao procurar usuário.'})
    }
    
};

// Rota para atualizar usuário
exports.AtualizarUsuario = async (req, res) => {

    try{
        const { id } = req.params;
        const { nome } = req.body;

        const usuario = await usuarioRepositor.update(id,nome);
    
        if(!usuario){
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        res.status(200).json({message: 'Usuário Atualizado'});
    
        }catch(error){
    
            res.status(500).json({message: 'Erro ao atualizar o usuário.'})
        }
        
};

// Rota para deletar usuário
exports.DeletarUsuario = async (req, res) => {
    try{
        const { id } = req.params; 
        const usuario = await usuarioRepositor.delete(id);
    
        if(!usuario){
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        res.status(200).json({message: 'Usuário Deletado'});
    
        }catch(error){
    
            res.status(500).json({message: 'Erro ao deletar o usuário.'})
        }
};

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});