'use strict'

const express = require('express'),
    cursoCtrl = require('../../Controllers/OtraPruebaController'),
    api = express.Router();

api.get('/Prueba2', cursoCtrl.obtenerPrueba2);

module.exports = api