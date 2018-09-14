const express = require('express');

const app = express();

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
        password: body.password,
        role: body.role

    });

    usuario.save((err, answer) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: answer
        })

    });

});


// Actualizar
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({ "Mensaje": 'PUT Usuario', id });
});

// No eliminar, solo bloquear
app.delete('/usuario', function(req, res) {
    res.json({ "Mensaje": 'Delete Usuario' });
});


module.exports = app;