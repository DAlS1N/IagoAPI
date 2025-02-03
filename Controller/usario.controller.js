const express = require ('express')
const axios = require ('axios')
const app = express();
const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


app.use(express.json()); // Middleware para aceitar JSON



// Rota para inserir usuário
app.post('/usuario', (req, res) => {

    const { nome } = req.body;
    const query = 'INSERT INTO usuario (nome, data_criacao) VALUES (?, CURDATE())';
    
    db.query(query, [nome], (error, result) => {
        if (error) {
            return res.status(500).json({ message: 'Erro ao inserir usuário.', error });
        }
        res.status(201).json({
            message: 'Usuário inserido com sucesso!',
            usuarioId: result.insertId
        });
    });

});




// Rota para buscar usuário por ID
app.get('/usuario/achar/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM usuario WHERE id = ?';

    db.query(query, [id], (error, result) => {
        if (error) {
            return res.status(500).json({ message: 'Erro ao procurar usuário.', error });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        res.status(200).json({ usuario: result[0] });
    });
});

// Rota para atualizar usuário
app.put('/usuario/atualizar/:id', (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    const query = 'UPDATE usuario SET nome = ? WHERE id = ?';

    db.query(query, [nome, id], (error, result) => {
        if (error) {
            return res.status(500).json({ message: 'Erro ao atualizar o usuário.', error });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
    });
});

// Rota para deletar usuário
app.delete('/usuario/deletar/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM usuario WHERE id = ?';

    db.query(query, [id], (error, result) => {
        if (error) {
            return res.status(500).json({ message: 'Erro ao deletar o usuário.', error });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        res.status(200).json({ message: 'Usuário deletado com sucesso!' });
    });
});

