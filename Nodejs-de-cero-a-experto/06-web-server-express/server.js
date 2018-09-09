const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

/*
Express da soporte a los siguientes métodos de direccionamiento que se corresponden con los métodos HTTP: 
get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, 
report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search y connect.

Hay un método de direccionamiento especial, {   app.all()  }, que no se deriva de ningún método HTTP. 
Este método se utiliza para cargar funciones de middleware en una vía de acceso para todos
los métodos de solicitud.



*/

app.get('/?', (req, res) => {

    //res.redirect('http://google.com');

    res.send(JSON.stringify({ nombre: 'Server Express' }));

})

app.listen(3000, (request, answer) => {

    console.log('Escuchando sobre el puerto : 3000');
});