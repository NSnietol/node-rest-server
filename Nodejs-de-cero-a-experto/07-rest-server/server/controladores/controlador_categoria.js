const express = require('express');

const app = express();

const bcrypt = require('bcrypt');

const _ = require('underscore');

const Usuario = require('../modelos/usuario');

const auth = require('../middlewares/auth');

// Todas las categorias
app.get('/categoria',(req,res)=>{


});



app.get('/categoria/:id',(req,res)=>{


});


// Nueva categoria
app.post('/categoria',auth.validarToken,(req,res)=>{


});

// Todas las categorias de un usuario

app.put('/categoria/:id',auth.validarToken,(req,res)=>{


});


// SOlo un admin lo puede hacer, no ocultar 
app.delete('/categoria/:id',auth.validarToken,(req,res)=>{


});

module.exports=app;