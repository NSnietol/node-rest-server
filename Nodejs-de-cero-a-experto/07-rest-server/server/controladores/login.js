const express = require('express');

const app = express();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const _ = require('underscore');

const Usuario = require("../modelos/usuario.js");



app.post('/auth',(req,res)=>{


    let body  = req.body;

    if(!body.email || !body.password){

        return  res.status(400).json({
            ok: false,
            message:'Email y contraseña son requeridos '
        });
    }

    Usuario.findOne({email:body.email},(err,usuario)=>{


        if(usuario===undefined || err){

    
          return  res.status(400).json({
                ok: false,
                message: usuario==undefined? 'Email o contraseña incorrecta ':err
            });
            
        }

       
        if( bcrypt.compareSync(body.password, usuario.password) ){

            let token = jwt.sign({
                usuario
              }, process.env.SEED ,{ expiresIn: process.env.CADUCIDAD_TOKEN });
            
        
            return  res.json({
                ok: true,
                usuario,
                token
            });

        }else{
            return  res.status(400).json({
                ok: false,
                message: 'Email o contraseña incorrecta '
            });
        }



    });


});



module.exports = app;
