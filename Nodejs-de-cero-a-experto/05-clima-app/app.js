const argv = require('./config/yargs').argv;
const lugar = require('./data/lugar');

console.log();

lugar.getDescripcion(argv.direccion).
then((result) => {
    console.log(result);

}).catch((error) => {

    console.log("" + error);
});