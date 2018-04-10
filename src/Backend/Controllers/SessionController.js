'use strict'

const Modelo = require('../Models/UsuarioModel'),
    service = require('../Services/Service');

function singUp(req, res){
    var modelo = new Modelo({
        email: req.body.email,
        password: req.body.password
    });

    modelo.save((err)=> {
        if(err) return res.status(400).send({message : `error al realizar la petición ${err}`});
        return res.status(200).send({token:service.createToken(modelo), contraseña: req.body.password});
    });
}

function logIn(req, res){
    Modelo.findOne({email : req.body.email}, (err, modelo)=>{
        if(err) return res.status(400).send({message : `error al realizar la petición ${err}`});
        if(!modelo) return res.status(404).send({Message : 'No existe el usuario'});
        //if(modelo.password != req.body.password) return res.status(404).send({Message : `Contaseña Incorrecta ${modelo} y ${req.body.password}` });
        // Comprobar si hay errores
        // Si el usuario existe o no
        // Y si la contraseña es correcta
        return res.status(200).send({token:service.createToken(modelo)});
    });
}

module.exports = {
  singUp,
  logIn
}