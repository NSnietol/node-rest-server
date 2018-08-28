const fs = require('fs');

let listaPorHacer = [];


const guardardb = () => {

    let data = JSON.stringify(listaPorHacer);



    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

}


const cargardb = () => {


    try {


        listaPorHacer = require("../db/data.json");

    } catch (error) {
        listaPorHacer = [];
    }
    return listaPorHacer;

}

const crear = (descripcion) => {

    cargardb();


    let porHacer = {
        descripcion,
        completado: false,
        id: listaPorHacer.length

    };

    listaPorHacer.push(porHacer);
    guardardb();
    return porHacer;
}

const getListado = () => {
    return cargardb();
}

module.exports = {
    crear,
    getListado
}