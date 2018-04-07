import { mongo } from 'mongoose';

'use strict'

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt-nodejs'),
    crypto = require('crypto');


const UsuarioSchema = new Schema({
    email:{type : String, unique:true, lowercase: true},
    displayname:String,
    avatar:String,
    password:{type:String , select:false},
    singupDate:{type:Date, default:Date.now()},
    lastLogin : Date
});

UsuarioSchema.pre('save',(next)=>{
    let usuario = this;
    if(!usuario.isModified('password')) return next();

    bcrypt.genSalt(10,(err,salt)=>{
        if(err) return next(err);


        bcrypt.hash(usuario.password,salt,null,(err, hash)=>{
            if(err) return next();

            usuario.password = hash;
            next();
        });
    });
});

UsuarioSchema.method.gravatar = function(){
    if(!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`;


    const md5 = crypto.createHash('md5').update(this.email).digest('hex');
    return `https://gravatar.com/avatar/${md5}?s=200&d=retro`;
};

module.exports = mongoose.model('UsuarioModel',UsuarioSchema);


