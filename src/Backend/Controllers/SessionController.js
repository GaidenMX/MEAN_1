'use strict'

const Modelo = require('../Models/UsuarioModel'),
    service = require('../Services/Service');

function signUp(req, res){
    var modelo = new Modelo({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password
    });

    modelo.save((err)=> {
        if(err) return res.status(500).send({message : `error al crear el usuario: ${err}`});
        return res.status(201).send({token:service.createToken(modelo)});
    });
}

function signIn(req, res){
    Modelo.findOne({email : req.body.email}, (err, modelo)=>{
        if(err) return res.status(500).send({message : err});
        if(!modelo) return res.status(404).send({Message : 'No existe el usuario'});
        //if(modelo.password != req.body.password) return res.status(404).send({Message : `Contaseña Incorrecta ${modelo} y ${req.body.password}` });
        // Comprobar si hay errores
        // Si el usuario existe o no
        // Y si la contraseña es correcta

        req.user = modelo;
        res.status(200).send({ 
            message: 'Te has logeado correctamente',
            token:service.createToken(modelo) 
        });

        //return res.status(200).send({token:service.createToken(modelo)});
    });
}

module.exports = {
  signUp,
  signIn
}