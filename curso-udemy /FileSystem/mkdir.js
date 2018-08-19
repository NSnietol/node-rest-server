var fs = require('fs');


fs.access('test1',function(error){

    if(error){ // Produce un error cuando no exista el archivo
        fs.mkdir('test1',function(error){

            if(error){
        
                console.log('error');
        
            }else{
                console.log('Carpeta test1 creada')
            }
        
        
        });

    }else{
        console.log('ya existe la carpeta');
    }

});
