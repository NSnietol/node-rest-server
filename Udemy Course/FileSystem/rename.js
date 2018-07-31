let fs = require('fs');




// Permite cambiar los nombres y cambiar la ubicacion
fs.rename('../convertidor/index.js','../convertidor/index2.js', function(error){


    if(error){

        throw error;
    }else{
        console.log('Operacion realizada');
    }


});