
var EventEmitter = require("events").EventEmitter;


var ee = new EventEmitter();



// Se ejecuta solo la primera vez
ee.once("activo",function(data){


    console.log("Se inició el sensor : "+data);

});


ee.on("activo",function(data){


    console.log("Se activó el sensor : "+data);

});


ee.emit("activo",10);


ee.removeAllListeners("activo");

ee.emit("activo",10);

