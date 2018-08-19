var http = require('http');
let xp = require('express');
var fs = require('fs');

var host='localhost';

var puerto='9000';


let servidor = http.createServer(function(request,answer){

    if(request.url=='/'){
        fs.readFile('./index.html','UTF-8',function(error,contenido){
            answer.writeHead(200,{'Content-Type':'text/html'});
            answer.end(contenido);
        });

    }else{
        answer.writeHead(404,{'Content-Type':'text/html'});
        answer.end('<h1>404 no existe la pagina</h1>');

    }
});


servidor.listen(puerto,host,function(){
console.log('Server Run ...'+host+":"+puerto);

});