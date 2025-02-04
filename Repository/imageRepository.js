const db = require('../Repository/db');

class ImageRepository {
    static async create(referencia, titulo) {
        const query = 'INSERT INTO imagens (referencia, titulo, data_criacao) VALUES (?, CURDATE())';
        const [result] = await db.query(query, [referencia, titulo]);
        return result.insertId;
    }

    static async findById(id) {
        const query = 'SELECT * FROM imagens WHERE id = ?';
        const [rows] = await db.query(query, [id]);
        return rows[0];
    }

    static async update(id, nome) {
        const query = 'UPDATE imagens SET titulo = ? WHERE id = ?';
        const [result] = await db.query(query, [nome, id]);
        return result.affectedRows > 0;
    }

    static async delete(id) {
        const query = 'DELETE FROM imagens WHERE id = ?';
        const [result] = await db.query(query, [id]);
        return result.affectedRows > 0;
    }
}

module.exports = ImageRepository;
