let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',

    getNombre: function() {

        return `Descripción : ${this.nombre}, ${this.apellido}- poder :  ${this.poder}`


    }

}

console.log(deadpool.getNombre());

// Destructuracion
console.log('Destructuración :D');
let { nombre: primerNombre, apellido } = deadpool;

console.log(primerNombre + ' ' + apellido);