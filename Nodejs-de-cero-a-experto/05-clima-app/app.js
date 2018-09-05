const argv = require('./config/yargs').argv;
const lugar = require('./data/lugar');


lugar.getDescripcion(argv.direccion).
then((result) => {
    console.log(result);

}).catch((error) => {

    console.log("" + error);
});