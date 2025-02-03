//importar dependências
const express = require ('express')
const axios = require ('axios')
const app = express();
const PORT = 3000;

/*

Controller -> http.get,Post...
Models -> Entidades
Service -> Regra de Negocio
Routes - Rotas
Repository -> BD - SELECT

*/




/*
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






app.get('/pessoa/idade/:idade',async(req , res) => {
    try {
        const {idade} = req.params;

        res.status(200).json({Idade: `${idade}`});

    } catch (error) {
     
        res.status(500).json({error: 'Erro: 500'});

    }

});
*/




/*
: Criar um endpoint básico de GET que retorna uma mensagem simples.
: GET /hello
: {"message": "Olá Mundo!"}
*/

app.listen(PORT,() => console.log(`port: ${PORT}`));

app.get('/hello',async(req,res) =>{
    try{

        res.status(200).json({message: 'Olá Mundo!'})

    }catch(error){

        res.status(500).json({error: 'Erro para executar programa'})

    }


});



/*
: Criar um endpoint que aceite um parâmetro de nome e retorne uma mensagem personalizada.
: GET /greet/:name
: name (string)
: {"message": "Olá, {name}!"}
*/


app.get('/greet/:name',async(req , res) => {
    try {
        const {name} = req.params;

        res.status(200).json({message: `Olá, ${name}!`});

    } catch (error) {
     
        res.status(500).json({error: 'Erro: 500'});

    }

});


/*
: Criar um endpoint que receba dois números como parâmetros e retorne a soma deles.
: GET /sum
: a (número), b (número)
: {"result": a + b}
*/


app.get('/sum',async(req , res) => {
    try {
        const a = parseFloat(req.query.a); 
        const b = parseFloat(req.query.b);

        res.status(200).json({result: a + b});

    } catch (error) {
     
        res.status(500).json({error: '500'});

    }

});

/*
: Criar um endpoint que receba dois números e retorne a subtração do primeiro pelo segundo.
: GET /subtract
: a (número), b (número)
: {"result": a - b}
*/

app.get('/subtract',async(req , res) => {
    try {
        const a = parseFloat(req.query.a); 
        const b = parseFloat(req.query.b);

        res.status(200).json({result: a - b});

    } catch (error) {
     
        res.status(500).json({error: '500'});

    }

});

/*
: Criar um endpoint que receba dois números e retorne o produto deles.
: GET /multiply
: a (número), b (número)
: {"result": a * b}
*/

app.get('/multiply',async(req ,res) =>{

    const a = parseFloat(req.query.a)
    const b = parseFloat(req.query.b)

try{

    res.status(200).json({result: a * b})


}catch(error){

    res.status(500).json({error: '500'});


}

})

/*
: Criar um endpoint que receba dois números e retorne o quociente da divisão do primeiro pelo segundo.
: GET /divide
: a (número), b (número)
: {"result": a / b}
*/

app.get('/divide', async(req, res) =>{

    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    try{

        res.status(200).json({result: a / b})


    }catch (error){

        res.status(500).json({error: `500`})

    }

})

/*
 Criar um endpoint que receba um número e informe se ele é par ou ímpar.
: GET /check-parity/:number
: number (inteiro)
: {"parity": "par"} ou {"parity": "ímpar"}
*/


app.get('/check-parity/:number', async(req, res) => {

    const {number} = req.params;


    try{

        if(number % 2 != 0){
            
            res.status(200).json({result: `Impar`})

        }else{

            res.status(200).json({result: `Par`})
        
        }

        
    }catch (error){

        res.status(500).json({error: `500`})

    }

});

/*
: Criar um endpoint que aceite dois parâmetros (primeiro nome e sobrenome) e retorne o nome completo.
: GET /full-name
: first_name (string), last_name (string)
: {"full_name": "first_name last_name"}
*/

app.get('/full-name', async(req, res) =>{

    const first_name = req.query.first_name; 
    const last_name = req.query.last_name


try{

    res.status(200).json({full_name: `${first_name} ${last_name}`})


}catch(error){


    res.status(500).json({error: '500'})


}


});



/*
: Criar um endpoint que converta uma temperatura em Celsius para Fahrenheit.
: GET /convert-temperature
: celsius (número)
: {"fahrenheit": (celsius * 9/5) + 32}
*/

app.get('/convert-temperature',async(req,res) => {

    const celsius = parseFloat(req.query.celsius);

    try{

        res.status(200).json({fahrenheit: (celsius* 9/5) + 32})

    }catch(error){

        res.status(500).json({error: '500'});

    }

});

/*
: Criar um endpoint que calcule a idade de uma pessoa com base no ano de nascimento.
: GET /calculate-age/:birth_year
: birth_year (inteiro)
: {"age": current_year - birth_year}
*/

app.get('/calculate-age/:birth_year', async(req, res) =>{

    const {birth_year} = req.params;

    try{

        res.status(200).json({age: 2024 - birth_year})


    }catch(error){

        res.status(500).json({error: '500'})

    }

});


/*
Criar um service para conetar ao banco de dados MYSQL
Criar um CRUD ( POST, GET, DELETE, PUT ) de USUARIO (id, nome, data_criacao)
Criar um CRUD de IMAGEM ( id, referencia, data_criacao, titulo)
*/



