const variables ={
    Api:{
        /*No ambiente que estou trabalhando existe uma porta configurada, então use ela, ou 
        use a porta 3000*/
        port: process.env.port || 3000
    },
    Database:{
        connection:process.env.connection || 'mongodb+srv://nofoodadmin:<bibito123@>@cluster0-fh1ty.mongodb.net/test?retryWrites=true&w=majority'
    }
} 
module.exports = variables;