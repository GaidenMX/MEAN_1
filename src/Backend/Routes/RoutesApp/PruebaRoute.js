'use strict'

const express = require('express'),
    cursoCtrl = require('../../Controllers/PruebaController'),
    api = express.Router();

api.get('/Prueba', cursoCtrl.obtenerPrueba);

module.exports = api