const express = require('express');

const app = express();

const bcrypt = require('bcrypt');

const _ = require('underscore');

const Categoria = require('../modelos/categoria');

const auth = require('../middlewares/auth');


app.get('/as', function(req, res) {
    res.json({ "Mensaje": 'Hello World C' });
})

// Todas las categorias
app.get('/categoria', auth.validarToken, (req, res) => {

    let desde = Number(req.query.desde || 0); // Son parametros opcionales

    let limite = Number(req.query.limite || 5);

    let estado = Boolean(req.body.estado || true);

    let usuario = req.usuario._id;

    // La segunda cadena indica que campos extraer
    Categoria.find({ usuario }, 'descripcion')
        .skip(desde)
        .limit(limite)
        .exec((err, categorias) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            Categoria.countDocuments({ usuario }, (err, cantidad) => {


                if (err) {
                    return res.status(400).json({
                        ok: false,
                        err
                    });
                }
                res.json({
                    ok: true,
                    categorias,
                    number: cantidad
                });

            })

        });

});



app.get('/categoria/:id', (req, res) => {


});


// Nueva categoria
app.post('/categoria', auth.validarToken, (req, res) => {

    let body = req.body;

    let categoria = new Categoria({
        usuario: req.usuario._id,
        descripcion: body.descripcion
    });

    categoria.save((err, answer) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        console.log(`Categoria creada   : ${answer.descripcion}`);
        res.json({
            ok: true,
            categoria: answer
        });

    });


});

// Todas las categorias de un usuario

app.put('/categoria/:id', auth.validarToken, (req, res) => {


});


// SOlo un admin lo puede hacer, no ocultar 
app.delete('/categoria', auth.validarToken, auth.validarRole, (req, res) => {
    let descripcion = req.query.descripcion;

    console.log(req.query);


    if (!descripcion) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'Debe enviar una descripcion existente para este usuario'
            }
        });
    }



    Categoria.deleteOne({ descripcion: descripcion, usuario:req.usuario._id }, (err, categoria) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        if (!categoria) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Categoria no encontrado'
                }
            });
        }
        
        res.json({ ok: true, 
            message:'Categoria eliminada'
        });


     
    });


});

module.exports = app;