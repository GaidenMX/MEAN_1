'use strict'

function obtenerPrueba2(req, res){
    return res.status(200).send({ mmesage: 'invocado correctamente Prueba 2' });
}

module.exports = {
    obtenerPrueba2
  }