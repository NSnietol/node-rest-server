const fs = require('fs');


let crearInforme = (base, limite) => {



    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            throw new Error('La base introducida no es un número');
        }
        let data = "";

        for (let index = 1; index <= limite; index++) {
            data += (`${base} * ${index} : ` + index * base) + "\n";

        }


        fs.writeFile(`./archivos/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err);
            else { resolve(`tabla-${base}.txt`); }

        });


    });



}

module.exports = {
    crearInforme
}