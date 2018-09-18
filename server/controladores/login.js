const express = require('express');

const app = express();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const _ = require('underscore');

const Usuario = require("../modelos/usuario.js");



app.post('/auth',(req,res)=>{


    let body  = req.body;

 
    
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
              }, 'D/E/V_S/E/C/R/E/T_2/0/1/8_0/9_1/8', { expiresIn: 60 * 60 });
            
        
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
