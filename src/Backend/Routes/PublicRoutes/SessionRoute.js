'use strict'

const express = require('express'),
    ctrl = require('../../Controllers/SessionController'),
    api = express.Router();

api.post('/singUp', ctrl.singUp);
api.post('/logIn', ctrl.logIn);

module.exports = api