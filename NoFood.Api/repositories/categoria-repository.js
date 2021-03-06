require('../models/categoria-model');
const base = require('../bin/base/repository-base');


class CategoriaRepository{
    constructor(){
        this._base = new base('Categoria');

    }
    async create(data){
        return await this.base.create(data);
    }

    async update(id, data){
        return await this._base.update(id, data);
    }

    async getAll(){
        return await this._base.getAll();
    }
    async getById(id){
      return  await this._base.findById(id);
    }
    async delete(id){
        return await this._base.findByIdAndRemove(id);
    }
}
module.exports = CategoriaRepository;