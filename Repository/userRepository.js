function addUser(){

    db.query(query, [nome], (error, result) => {
        if (error) {
            return res.status(500).json({ message: 'Erro ao inserir usuário.', error });
        }
        res.status(201).json({
            message: 'Usuário inserido com sucesso!',
            usuarioId: result.insertId
        });
    });

}
module.exports = addUser;
