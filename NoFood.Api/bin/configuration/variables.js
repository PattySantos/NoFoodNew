const variables ={
    Api:{
        /*No ambiente que estou trabalhando existe uma porta configurada, então use ela, ou 
        use a porta 3000*/
        port: process.env.port || 3000
    }
} 
module.exports = variables;