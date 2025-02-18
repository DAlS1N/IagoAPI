const express = require ('express')
const axios = require ('axios')
const app = express();
const PORT = 8081;
const ImagemRepositor = require('../Repository/imageRepository.js');


const ImagemsRepositor = new ImagemRepositor();

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.use(express.json()); // Middleware para aceitar JSON



exports.cadastroImagens = async(req, res) =>{
    try{
        const { referencia } = req.body;
        const { titulo } = req.body;
        const { data_criacao } = req.body;
        const imagemID = await ImagemsRepositor.create(referencia,titulo,data_criacao);
        res.status(201).json({
            message: 'Imagem inserida com sucesso!',
            imagemID: imagemID
        });
    } catch(error){
        res.status(500).json({ message: 'Erro ao inserir a Imagem.'});
    }
};



exports.encontrarImagem = async(req, res) =>{
    try{
        const { id } = req.params;
        const imagem = await ImagemsRepositor.findById(id);

        if(!imagem){
            return res.status(404).json({ message: 'imagem não encontrada.' });
        }
        res.status(200).json(imagem);
    } 
    catch(error){
        
        res.status(500).json({ message: 'Erro ao achar a Imagem.'});
    }
};



exports.atulizarImagem = async (req, res) => {
    try{
    const { id } = req.params;
    const { referencia, titulo } = req.body;

    const ImagemUpdate = await ImagemsRepositor.update(referencia, titulo);

    if(!ImagemUpdate){
        return res.status(404).json({ message: 'Imagem não encontrado.' });
    }

    res.status(200).json({message: 'Imagem Atualizado'});

    
    }catch(error){

        res.status(500).json({message: 'Erro ao atualizar a Imagem.'})

    }
 
};




exports.deletarImagem = async(req, res) =>{
    try{
        const { id } = req.params; 
        const ImagemDelet = await ImagemsRepositor.delete(id);
    
        if(!ImagemDelet){
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        res.status(200).json({message: 'Usuário Deletado'});
    
        }catch(error){
    
            res.status(500).json({message: 'Erro ao deletar o usuário.'})
        }

};