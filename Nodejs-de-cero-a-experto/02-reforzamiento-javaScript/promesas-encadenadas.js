let empleados = [{
    id: 1,
    nombre: 'Nilson'
}, {
    id: 2,
    nombre: 'Danielin'
}, {
    id: 3,
    nombre: 'Diego'
}, {
    id: 4,
    nombre: 'Barbie'
}, {
    id: 5,
    nombre: 'Luis'
}, {
    id: 6,
    nombre: 'José'
}];


let salarios = [{
    id: 1,
    cantidad: 2312
}, {
    id: 2,
    cantidad: 21333
}, {
    id: 3,
    cantidad: 8343
}, {
    id: 4,
    cantidad: 93432
}, {
    id: 5,
    cantidad: 5565
}, {
    id: 6,
    cantidad: 423423
}];

let getEmpleadoId = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoResultado = empleados.find(empleado => empleado.id === id);

        if (!empleadoResultado) {
            reject(`No existe empleado con el id ${id}`);

        } else {
            // Llamar 2 veces un callback puede ocasionar errores, entonces siempre se debe preveer el uso de un solo callback
            //callback(null, empleadoResultado);

            resolve(empleadoResultado);
        }

    });



}


let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioResultado = salarios.find(salario => salario.id === empleado.id);

        if (!salarioResultado) {
            reject(`No se pudo obtener el salario para el id ${empleado.id}`);
            // No es lo mismo que en return es importante saberlo
        } else {

            // Al contrario de los callback el resolve si se escribe varias veces solo se ejecuta una vez
            resolve({
                nombre: empleado.nombre,
                salario: salarioResultado.cantidad,
                id: empleado.id
            });
        }


    });
}


// Estructura para encadenar promesas

getEmpleadoId(3).then((result1) => {
    // la idea radica en empezar a lanzar la promesa  ( ECMAscript 7)
    return getSalario(result1);

}).then((resol) => {

    console.log(resol);


}).catch((err) => {
    console.log(err);
});