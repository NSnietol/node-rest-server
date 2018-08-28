const argv = require('yargs')
    .command('crear', 'Registra una tarea por hacer', {
        'descripcion': {
            alias: 'd',
            describe: 'representa el nombre o contenido de la tarea',
            demandOption: true
        }

    })
    .command('actualizar', 'Actualizar tareas guardadas', {
        descripcion: {
            alias: 'd',
            describe: 'Nombre la tarea',
            demandOption: true

        },
        completado: {
            alias: 'c',
            describe: 'Indica si una tarea ha sido realizada o no',
            default: true

        }


    })
    .help()
    .argv

module.exports = {
    argv
}