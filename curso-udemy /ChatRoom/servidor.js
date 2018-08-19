var express = require('express');
var http = require('http');
var socket = require('socket.io');


var app = express();
var usuarios= [];

var server = http.createServer(app);
server.listen(3000,function(){
    console.log("Servidor corriendo...")

});

var io = socket.listen(server);

app.get('/', function(request,answer){

    answer.sendFile(__dirname+'/cliente.html');

});


io.on('connection', function(){

    socket.on('nuevo usuario',function(usuario,callback){

        if(usuarios.indexOf(usuario)!=-1){
            callback(false);

        }else{
            callback(true);
            socket.usuario = usuario;
            usuarios.push(usuario);
            actualizarUsuario();
        }

    })

    socket.on('nuevo mensaje', function(mensaje){
        io.emit('nuevo mensaje',{mensaje:mensaje,usuario:socket.usuario})

    })

    function actualizarUsuario(){

        io.emit('actualizarUsuarios', usuarios);
    }

});
