let fs = require('fs');


console.log(fs.readFileSync('test/archivo.txt','UTF-8'));

var conf = JSON.parse(fs.readFileSync('test/package.json','UTF-8'));

console.log(conf);