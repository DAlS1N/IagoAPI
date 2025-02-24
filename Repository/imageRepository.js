const db = require('../Repository/db');

class ImageRepository {
    static async create(referencia, titulo, data_criacao) {
        const query = 'INSERT INTO imagens (referencia, titulo, data_criacao) VALUES (?, ?, ?)';
        const [result] = await db.query(query, [referencia, titulo, data_criacao]);
        return result.insertId;
    }

    static async findById(id) {
        const query = 'SELECT * FROM imagens WHERE id = ?';
        const [rows] = await db.query(query, [id]);
        return rows[0];
    }

    static async update(id, referencia, titulo) {
        const query = 'UPDATE imagens SET referencia = ?, titulo = ? WHERE id = ?';
        const [result] = await db.query(query, [referencia, titulo, id]);
        return result.affectedRows > 0;
    }

    static async delete(id) {
        const query = 'DELETE FROM imagens WHERE id = ?';
        const [result] = await db.query(query, [id]);
        return result.affectedRows > 0;
    }
}

module.exports = ImageRepository;
