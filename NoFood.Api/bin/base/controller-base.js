exports.post = async (repository, validationContract, req, res)=>{
    try {
        let data = req.body;
        if(!validationContract.isValid()){
            res.status(400).send({
                message: 'Existem dados inválidos na sua requisição', 
                validation: validationContract.errors()}).end();
                return;
        }
        let resultado = await repository.create(data);
        res.status(201).send(resultado);
    } catch (error) {
        console.log('post com error, motivos: ', error);
        res.status(500).send({message: 'Erro no processamento', error: err});
    }

}
exports.put = async(repository, validationContract, req, res)=>{

    try {
        let data = req.body;
        if(!validationContract.isValid()){
            res.status(400).send({
                message: 'Existem dados inválidos na sua requisição', 
                validation: validationContract.errors()}).end();
                return;
        }
        let resultado = await repository.update(req.params.id, data);
        res.status(201).send(resultado);
    } catch (error) {
        console.log('put com error, motivos: ', error);
        res.status(500).send({message: 'Erro no processamento', error: err});
    }


}
exports.get = async(repository, req, res)=>{
    try {
        let data = await repository.getAll();
        res.status(200).send(data);
    } catch (error) {
        console.log('get com error, motivos: ', error);
        res.status(500).send({message: 'Erro no processamento', error: err});
        
    }

}
exports.getById =async(repository, req, res)=>{
    try {
        let id = req.params.id;
        if(id){
            let data = await repository.getById(id);
            res.status(200).send(data);
        }else{
            res.status(400).send({message:'É necessário informar o id para consulta'});
        }
       
    } catch (error) {
        console.log('findById com error, motivos: ', error);
        res.status(500).send({message: 'Erro no processamento', error: err});
        
    }

}
exports.delete = async(repository, req, res)=>{
    try {
        let id = req.params.id;
        if(id){
            let data = await repository.delete(id);
            res.status(200).send({message: 'Registro excluído com sucesso!'});
  
        }else{
            res.status(400).send({message:'É necessário informar o id para deletar'});
        }
        
    } catch (error) {
        console.log('delete com error, motivos: ', error);
        res.status(500).send({message: 'Erro no processamento', error: err});
    }

}