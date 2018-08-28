const argv = require("./config/config-yargs").argv;
const colors = require('colors');
const crearT = require("./logica/crearTarea");

let comando = argv._[0];

switch (comando) {

    case 'crear':
        {

            console.log('Crear tarea '.green);

            console.log(crearT.crear(argv.d));

            break;
        }

    case 'listar':
        {
            console.log('Listar'.green);
            console.log(crearT.getListado());
            break;
        }

    case 'actualizar':
        {
            console.log('Actualizar'.green);
            break;
        }
    default:
        {
            console.log('(x) Comando invalido'.red);
        }



}