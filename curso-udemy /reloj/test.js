var Reloj = require('./reloj.js');

var segundos =0;

var reloj = new Reloj();


reloj.on('tick-tock',function(){

    segundos+=1;
    if(segundos==10){
        process.exit();

    }
    console.log(segundos);

});