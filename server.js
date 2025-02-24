const express = require('express');
const imagemRoutes = require('./Routes/imagens.routes.js');
const userRoutes = require('./Routes/usuario.Routes.js');

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use('/imagem', imagemRoutes);
app.use('/usuario', userRoutes);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});





