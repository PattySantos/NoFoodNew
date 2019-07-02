const express = require('express');
const bodyParser = require('body-parser');

//routes
const categoriaRouter = require('../routes/categoria-router');

//Criando/invocando = Api/ server web do express 
const app = express();

//Configuração do parse do json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: false}));

//Configurando as rotas
app.use('/api/categoria', categoriaRouter);

//Exportando nossa Api
module.exports = app;