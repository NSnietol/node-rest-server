const express = require('express');


const app = express();



app.use(require('./login.js'));

app.use(require('./controlador_usuario'));
app.use(require('./controlador_categoria'));
module.exports = app;