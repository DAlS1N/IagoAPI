const db = require('../config/Db');

class UsuarioRepository {
    static async create(nome) {
        const query = 'INSERT INTO usuario (nome, data_criacao) VALUES (?, CURDATE())';
        const [result] = await db.query(query, [nome]);
        return result.insertId;
    }

    static async findById(id) {
        const query = 'SELECT * FROM usuario WHERE id = ?';
        const [rows] = await db.query(query, [id]);
        return rows[0];
    }

    static async update(id, nome) {
        const query = 'UPDATE usuario SET nome = ? WHERE id = ?';
        const [result] = await db.query(query, [nome, id]);
        return result.affectedRows > 0;
    }

    static async delete(id) {
        const query = 'DELETE FROM usuario WHERE id = ?';
        const [result] = await db.query(query, [id]);
        return result.affectedRows > 0;
    }
}

module.exports = UsuarioRepository;
