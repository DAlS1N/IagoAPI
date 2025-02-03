const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Banco_Usuario_Iago'
});

module.exports = db.promise(); 