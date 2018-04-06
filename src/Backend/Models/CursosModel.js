'use strict'

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Curso = new Schema({
        Nombre : {type: String,
            required : 'Debe introducir el nombre del curso'}
    });

module.exports = mongoose.model('Curso',Curso);