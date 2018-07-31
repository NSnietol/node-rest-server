var fs = require('fs');

fs.readdir('temp',function(error,files){

    if(error){

    }else{
            files.forEach(file => {
                    if(file.substring(0,1)!="."){

                        fs.access(process.cwd()+"//"+file.substring(file.length-5,file.length-4),function(err){

                            if(err){
                              
                                fs.mkdir(process.cwd()+"//"+file.substring(file.length-5,file.length-4),function(err){

                                    if(err){
                                   
                                        console.log('No se pudo crear el directorio');
                                    }else{

                                        fs.rename(".//temp//"+file,process.cwd()+"//"+file.substring(file.length-5,file.length-4)+"//"+file,function(error){
                
                                            if( error){
                                                console.log('Error al copiar '+file);
                                            }
                    
                                        });
                                    }
                
                                });

                            }else{


                                fs.rename(".//temp//"+file,process.cwd()+"//"+file.substring(file.length-5,file.length-4)+"//"+file,function(error){

                                    if( error){
            
                                        console.log('Error al copiar '+file);
                                    }      
                                });
                    
                            }   

                        });
                
                
                    }
            
             
                
            });

            

            fs.rmdirSync("temp",function(error){
                if(error){
                    console.log('No se pudo borrar la carpeta temp',error);
                }else{
                    console.log('Operacion exitosa');
                }
            });
        }
    
        console.log(files);

});