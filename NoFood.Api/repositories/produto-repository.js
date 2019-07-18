require('../models/produto-model');
const base = require('../bin/base/repository-base');

class ProdutoRepository{
    constructor(){
        this._base = new base();

    }
    async create(data){
        return await this._base.create(data);
    }
    async update(id, data){
       return await this._base.update(id, data);
    }
    async getAll(){
        return await this._base.find();
    }
    async getById(id){
      return  await this._base.findById(id);
    }
    async delete(id){
        return await this._base.findByIdAndRemove(id);
    }
}
module.exports = ProdutoRepository;