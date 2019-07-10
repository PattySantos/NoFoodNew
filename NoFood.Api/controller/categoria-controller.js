'use strict'
require('../models/categoria-model');
const mongoose = require('mongoose');
const categoria = mongoose.model('Categoria');

function categoriaController(){

}
categoriaController.prototype.post = async (req, res)=>{
    let modelo = new categoria(req.body);
    return modelo.save();

 };
 categoriaController.prototype.put = async (req, res)=>{
    await categoria.findByIdAndUpdate(req.params.id, {$set: req.body});
    return categoria.findById(req.params.id);

};
categoriaController.prototype.get = async (req, res)=>{
    return categoria.find();

};
categoriaController.prototype.getById = async (req, res)=>{
   return categoria.findById(req.params.id);

};
categoriaController.prototype.delete = async (req, res)=>{
    return categoria.findByIdAndRemove(req.params.id);

};

module.exports = categoriaController;