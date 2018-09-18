const express = require('express');


const app = express();



app.use(require('./login.js'));

app.use(require('./controlador_usuario'));

module.exports=app;