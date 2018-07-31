// Permite ver cuando cambia un archivo observado

var fs = require('fs');

var archivo = fs.readFileSync('archivo.txt','UTF-8');

console.log(archivo);

fs.watchFile('archivo.txt',function(currency,previous){

        console.log("Cambió el archivo");
        var archivo = fs.readFileSync('archivo.txt','UTF-8');

        console.log(archivo);
        console.log(previous);

})