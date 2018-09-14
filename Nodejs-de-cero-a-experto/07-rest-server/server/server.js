require('./config/config');

const express = require('express');

const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.use(require('./controladores/usuario'));


mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true }, (error, answer) => {

    if (error) {
        throw error;
    } else {
        console.log('BD connected');
    }

});



app.listen(process.env.PORT, () => {

    console.log("Escuchando por el puerto : " + process.env.PORT);

});