const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({

    nombre: {
        type: String,
        require: [true, 'El nombre es necesario']
    },

    email: {
        type: String,
        require: [true, 'El email es necesario']
    },
    password: {
        type: String,
        require: [true, 'El password es obligatoria']
    },
    img: {
        type: String,
        require: false
    },
    role: {
        type: String,
        default: "Normal"
    },
    estado: {
        type: Boolean,
        require: [false, 'El estado es necesario']
    },
    google: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);