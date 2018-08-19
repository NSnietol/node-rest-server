/*
function sumar(a, b) {

    return a + b;
}*/



let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // Tener cuidado cuando se usa el this dentro de una funcion de flecha
    getNombre() {

        return `Descripción : ${this.nombre}, ${this.apellido}- poder :  ${this.poder}`


    }

}

let saludar = () => "Hola Mundo";
let saludarNombre = (nombre) => `Hola mundo ${nombre}`

let sumar = (a, b) => {
        return a + b;
    }
    // Si tiene una sola linea
let sumarAlter = (a, b) => a + b;


console.log(saludarNombre('Nilson'));
console.log(`Suma es igual ${sumarAlter(3, 4)}`);

console.log(deadpool.getNombre());