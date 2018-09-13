require('./config/config');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/', function (req, res) {
    res.json({ "Mensaje": 'Hello World' });
})


app.get('/usuario', function (req, res) {
    res.json({ "Mensaje": 'Get Usuario ' });
});


// Crear registro por convención
app.post('/usuario', function (req, res) {

    let body = req.body;


    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es requerido'
        });

    } else {

        res.json({ persona: body });

    }





});


// Actualizar
app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;
    res.json({ "Mensaje": 'PUT Usuario', id });
});

// No eliminar, solo bloquear
app.delete('/usuario', function (req, res) {
    res.json({ "Mensaje": 'Delete Usuario' });
});


app.listen(process.env.PORT, () => {

    console.log("Escuchando por el puerto : " + process.env.PORT);

});