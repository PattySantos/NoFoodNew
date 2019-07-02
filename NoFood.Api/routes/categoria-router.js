'use strict'
const express = require('express');
const router = express.Router();

//Get para trazer todos - pegar
router.get('/', (req, res)=>{
    res.status(200).send('funcionando');

});

//Get para trazer um registro específico
router.get('/:id', (req, res)=>{
    res.status(200).send(`O id passado foi ${req.params.id}`);

});

//post - criar
router.post('/', (req, res)=>{

});

//put - atualizar
router.put('/:id', (req, res)=>{

});

//delete - deletar
router.delete('/:id', (req, res)=>{

});

module.exports = router;