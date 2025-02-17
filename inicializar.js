const express = require('express');

const app = express();
const PORT = process.env.PORT || 9091; // Define a porta do servidor

// Middleware básico para logs
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Rota inicial
app.get('/', (req, res) => {
    res.send('BancoApplication rodando com sucesso!');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});