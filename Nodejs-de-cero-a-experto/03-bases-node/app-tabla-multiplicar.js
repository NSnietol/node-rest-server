const m = require("./multiplicar/multiplicar.js");




m.crearInforme(2).then((solve) => {
    console.log(solve);

}).catch((error) => {
    console.log('Error');
    console.log(error);
})