var fs = require('fs');



var cade ="nobre.txt";

console.log();

fs.rmdir('EJ',function(error){

    if(error){

        console.log('error');
    }else{
        console.log('OK')
    }
});


console.log(cade.substring(cade.length-5,cade.length-4));

fs.rename("suma.js","/A/suma.js",function(error ){
if(error){
    console.log('error');
}
});
