const express = require('express');
const bodyParser = require('body-parser');

//routes
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');
const mongoose = require('mongoose');
const variable = require('../bin/configuration/variables');
//Criando/invocando = Api/ server web do express 
const app = express();

//Configuração do parse do json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: false}));

//configurando o banco de dados 

mongoose.connect(variable.Database.connection,{useCreateIndex:true,useNewUrlParser: true });

//Configurando as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);
app.use('/api/usuario', usuarioRouter);

//Exportando nossa Api
module.exports = app;