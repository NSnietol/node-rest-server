const express = require('express');

const app = express();

const PUERTO = 3000;


app.get('/', function(req, res) {
    res.json({ "Mensaje": 'Hello World' });
})

app.listen(PUERTO, () => {

    console.log("Escuchando por el puerto : " + PUERTO);

});