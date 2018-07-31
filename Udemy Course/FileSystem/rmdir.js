var fs = require('fs');

// Leer directorios
fs.readdir("../FileSystem",function(error,data){

    if(error){

    }else{
        console.log('Asincronica');
        console.log(data);


    }
    
});

console.log('Sincronica');
console.log(fs.readdirSync("../FileSystem"));