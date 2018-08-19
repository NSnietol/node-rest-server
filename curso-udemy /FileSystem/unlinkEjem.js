var fs = require('fs');


fs.unlink('../convertidor',function(error){
        if(error){

            throw error;
        }else{

        
            console.log('borrado');
        }

})