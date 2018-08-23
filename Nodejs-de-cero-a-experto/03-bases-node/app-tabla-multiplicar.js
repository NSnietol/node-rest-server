const mult = require("./multiplicar/multiplicar.js");
const argv = require("yargs")
    .command('run', 'Generar archivo con las tablas de multiplicación', {
        base: {
            alias: 'b',
            describe: 'Es la base de la tabla',
            demand: true
        },
        limite: {
            alias: 'lim',
            describe: 'Define el limite de la tabla a generar',
            default: 10
        }
    })
    .help()
    .argv


let command = argv._[0];
switch (command) {

    case 'run':
        {
            mult.crearInforme(argv.base, argv.limite).then(solve => {
                console.log(solve);

            }).catch((error) => {
                console.log('Error');
                console.log(error);
            })
            break;
        }

    default:
        {

            console.log("Comando no reconocido");
        }

}