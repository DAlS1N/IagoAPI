const express = require ('express')
const axios = require ('axios')
const app = express();
const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.use(express.json()); // Middleware para aceitar JSON



app.post('/Imagens', async(req, res) =>{

    const { referencia } = req.body;
    const { titulo } = req.body;
    const query = 'INSERT INTO imagem (referencia, data_criacao, titulo) VALUES (?, CURDATE(), ?)';

    db.query(query, [referencia, titulo], (error, result) => {
        if (error) {
            return res.status(500).json({ message: 'Erro ao inserir imagem.', error });
        }
        res.status(201).json({
            message: 'Imagem inserida com sucesso!',
            imagemId: result.imagemId
        });
    });
});



app.get('/Imagens/achar/:id', async(req, res) =>{
    const { id } = req.params;
    const query = 'SELECT * FROM imagem WHERE id = ?';


    db.query(query, [id], (error, result) => {
        if (error) {
            return res.status(500).json({ message: 'Erro ao procurar a imagem.', error });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'imagem não encontrada.' });
        }
        res.status(200).json({ usuario: result[0] });
    });
});

app.put('/Imagens/atualizar/:id', async (req, res) => {
    const { id } = req.params;
    const { referencia, titulo } = req.body;

    const query = 'UPDATE imagem SET referencia = ?, titulo = ? WHERE id = ?';

    db.query(query, [referencia, titulo, id], (error, result) => {
        if (error) {
            return res.status(500).json({ message: 'Erro ao atualizar a imagem.', error });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Imagem não encontrada.' });
        }
        res.status(200).json({ message: 'Imagem atualizada com sucesso!' });
    });
});




app.delete('/Imagens/deletar/:id', async(req, res) =>{
    const { id } = req.params;
    const query = 'Delete From imagem where id = ? ';

    db.query(query,[id], (error, result) => {
        if(error){
            return res.status(500).json({ message: 'Erro ao Deletar a imagem.', error });
       
       
        }
            if (result.length === 0) {
                return res.status(404).json({ message: 'imagem não encontrada.' });
            }
            res.status(200).json({ message: 'Imagem deletada com sucesso!' });


    });

});