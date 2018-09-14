const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({

    nombre: {
        type: String,
        uppercase:true,
        unique: true,
        required: [true, 'El nombre es necesario']
    },

    email: {
        type: String,
        unique: true,
        require: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'El password es obligatoria']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        uppercase:true,
        default: "Normal"
    },
    estado: {
        type: Boolean,  default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);