const express = require('express');

const app = express();

const bcrypt = require('bcrypt');

const _ = require('underscore');

const Usuario = require("../modelos/usuario.js");



app.post('/auth',(req,res)=>{


    let body  = req.body;

    console.log('>'+body.email);
    
    Usuario.findOne({email:body.email},(err,usuario)=>{


        if(usuario===undefined || err){

    
          return  res.status(400).json({
                ok: false,
                message: usuario==undefined? 'Email o contraseña incorrecta ':err
            });
            
        }

       
        if( bcrypt.compareSync(body.password, usuario.password) ){

            return  res.json({
                ok: true,
                usuario,
                token:'2323'
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
