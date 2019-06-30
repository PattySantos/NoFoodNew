const express = require('express');
//app será nosso servidor online
const app = express();

//Pegando a rota
app.get('/', (req, res) => {
    res.status(200).send('Olá Mundo');
});
//listen significa que está escutando a porta 3000
app.listen(3000, () => {
    console.log("Servidor Api NoFood iniciado na porta 3000")
});