'use.strict'
const app = require('../NoFood.Api/bin/express');
const variables = require('../NoFood.Api/bin/configuration/variables');

app.listen(variables.Api.port, () => {
    /*essa é a nova maneira de concatenação do ecmascript 6*/
    console.info(`Api inicializado com sucesso na porta ${variables.Api.port}`)
});