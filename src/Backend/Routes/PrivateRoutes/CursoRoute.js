'use strict'

const express = require('express'),
    ctrl = require('../../Controllers/CursoController'),
    api = express.Router();

api.get('/Cursos', ctrl.obtenerCursos);
api.get('/Cursos/:cursoId', ctrl.obtenerCurso);
api.post('/Cursos', ctrl.guardarCurso);
api.put('/Cursos/:cursoId', ctrl.actualizarCurso);
api.delete('/Cursos/:cursotId', ctrl.eliminarCurso);

module.exports = api