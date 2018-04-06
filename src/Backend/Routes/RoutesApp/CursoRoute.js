'use strict'

const express = require('express'),
    cursoCtrl = require('../../Controllers/CursoController'),
    api = express.Router();

api.get('/Cursos', cursoCtrl.obtenerCursos);
api.get('/Cursos/:cursoId', cursoCtrl.obtenerCurso);
api.post('/Cursos', cursoCtrl.guardarCurso);
api.put('/Cursos/:cursoId', cursoCtrl.actualizarCurso);
api.delete('/Cursos/:cursotId', cursoCtrl.eliminarCurso);

module.exports = api