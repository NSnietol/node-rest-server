var fs = require('fs');

var text = 'Node.js v 9.01';

fs.writeFile('archivo.txt',text,function(error){

    if(error){

        throw error;
    }else{
        console.log("Archivo creado");
    }


});
var nuevoTexto= "Curso de Node Udemy";

fs.appendFile('archivo.txt',nuevoTexto,function(error){

    if(error){
        console.log('No se pudo agregar el nuevo texto');
    }else{
        console.log('Se agregó el mensaje');
    }

});