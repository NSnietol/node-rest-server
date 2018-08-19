var fs = require('fs');

var archivos =fs.readdirSync('../FileSystem');

console.log(archivos);


fs.readdir('../FileSystem',function(error,files){


});