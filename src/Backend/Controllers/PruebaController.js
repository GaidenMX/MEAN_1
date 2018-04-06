'use strict'

function obtenerPrueba(req, res){
    return res.status(200).send({ mmesage: 'invocado correctamente' });
}

module.exports = {
    obtenerPrueba
  }