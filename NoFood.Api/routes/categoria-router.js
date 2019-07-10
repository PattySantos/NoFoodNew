'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controller/categoria-controller');

let _ctrl = new controller();

//Get para trazer todos - pegar
router.get('/', _ctrl.get);

//Get para trazer um registro específico
router.get('/:id', _ctrl.getById);

//post - criar
router.post('/', _ctrl.post);

//put - atualizar
router.put('/:id',_ctrl.put);

//delete - deletar
router.delete('/:id', _ctrl.delete);

module.exports = router;