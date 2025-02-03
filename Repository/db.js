const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'senha',
    database: 'nome_do_banco'
});

module.exports = db.promise(); 