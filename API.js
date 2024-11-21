//importar dependências
const express = require ('express')
const axios = require ('axios')
const app = express();
const PORT = 3005;


app.get('/pessoa',async(req , res) => {
    try {
    
        res.status(200).json({mensagem: 'OK tá tudo certo'});

    } catch (error) {
     
        res.status(500).json({error: 'Erro: 500'});

    }

});


app.get('/pessoa/id/:id',async(req , res) => {
    try {
        const {id} = req.params;

        res.status(200).json({ID: `${id}`});

    } catch (error) {
     
        res.status(500).json({error: 'Erro: 500'});

    }

});


app.get('/pessoa/nome/:nome',async(req , res) => {
    try {
        const {nome} = req.params;

        res.status(200).json({Nome: `${nome}`});

    } catch (error) {
     
        res.status(500).json({error: 'Erro: 500'});

    }

});



app.get('/pessoa/idade/:idade',async(req , res) => {
    try {
        const {idade} = req.params;

        res.status(200).json({Idade: `${idade}`});

    } catch (error) {
     
        res.status(500).json({error: 'Erro: 500'});

    }

});



app.listen(PORT,() => console.log(`port: ${PORT}`));

