const express = require('express');

const app = express();

const bcrypt = require('bcrypt');

const _ = require('underscore');

const Usuario = require('../modelos/usuario');

app.get('/', function(req, res) {
    res.json({ "Mensaje": 'Hello World' });
})


app.get('/usuario', function(req, res) {
    res.json({ "Mensaje": 'Get Usuario ' });
});


// Crear registro por convención
app.post('/usuario', function(req, res) {

    let body = req.body;


    let usuario = new Usuario({

        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role

    });


usuario.save((err, answer) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        console.log('Insertado ');
        res.json({
            ok: true,
            usuario: answer
        });

    });

});


// Actualizar
app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;
    
    let body = _.pick(req.body,['nombre','email','img','role','estado']);


    Usuario.findOneAndUpdate(id,body,{new:true,runValidators:true},(err,usuario)=>{
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        
    res.json({ok:true,usuario});
        

    });



});

// No eliminar, solo bloquear
app.delete('/usuario', function(req, res) {
    res.json({ "Mensaje": 'Delete Usuario' });
});


module.exports = app;