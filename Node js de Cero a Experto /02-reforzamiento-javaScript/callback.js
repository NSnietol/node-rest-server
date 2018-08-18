setTimeout(() => {

    console.log('TimeOut -> Hola Mundo');
}, 3000);



let getUsuarioId = (id, callback) => {

    let usuario = {
        nombre: 'Nilson ',
        id

    }

    if (id == 12) {

        callback(`El usuario con id ${id} no existe`);
    } else callback(null, usuario);
}

// Función Normal 
getUsuarioId(12, function(error, callback) {
    if (error) {
        console.log("Error :", error);
    } else {
        console.log('Función flecha -> Usuario solicitado es : ', usuario);

    }
});

// Función flecha
getUsuarioId(12, (error, usuario) => {

    if (error) {
        console.log("Error :", error);
    } else {
        console.log('Función flecha -> Usuario solicitado es : ', usuario);

    }

});