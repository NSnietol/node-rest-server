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

let getEmpleadoId = (id, callback) => {

    let empleadoResultado = empleados.find(empleado => empleado.id === id);

    if (!empleadoResultado) {
        callback(`No existe empleado con el id ${id}`);
    } else {
        // Llamar 2 veces un callback puede ocasionar errores, entonces siempre se debe preveer el uso de un solo callback
        //callback(null, empleadoResultado);

        callback(null, empleadoResultado);
    }


}

let getSalarioId = (empleado, callback) => {

    let salarioResultado = salarios.find(salario => salario.id === empleado.id);

    if (!salarioResultado) {
        callback(`No se pudo obtener el salario para el ${id}`);

    } else {
        callback({
            nombre: empleado.nombre,
            salario: salarioResultado.cantidad,
            id: empleado.id
        });
    }

}


getEmpleadoId(4, (error, callback) => {

    if (error) {
        console.log(error);
    } else {


        getSalarioId(callback, (error, answer) => {

            if (error) {
                console.log(error);
            } else {
                console.log(answer);
            }

        });
        console.log(callback);

    }

});