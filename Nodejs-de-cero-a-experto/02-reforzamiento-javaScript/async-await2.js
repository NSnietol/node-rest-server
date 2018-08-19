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

let getEmpleadoId = async(id) => {



    let empleadoResultado = empleados.find(empleado => empleado.id === id);

    if (!empleadoResultado) {
        throw new Error(`No existe empleado con el id ${id}`);

    } else {

        return empleadoResultado;
    }

}


let getSalario = async(empleado) => {



    let salarioResultado = salarios.find(salario => salario.id === empleado.id);

    if (!salarioResultado) {
        throw new Error(`No se pudo obtener el salario para el id ${empleado.id}`);
        // No es lo mismo que en return es importante saberlo
    } else {

        // Al contrario de los callback el resolve si se escribe varias veces solo se ejecuta una vez
        return ({
            nombre: empleado.nombre,
            salario: salarioResultado.cantidad,
            id: empleado.id
        });

    }
}



let salarioEmpleado = async(id) => {

    let empleado = await getEmpleadoId(id);
    return await getSalario(empleado);

}

salarioEmpleado(1).then((solve) => {
    console.log(solve);
}).catch((err) => {

    console.log("Error");
});