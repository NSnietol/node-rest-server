const fs = require('fs');




let crearInforme = async(base) => {


    if (!Number(base)) {
        throw new Error('La base introducida no es un número');
    }
    let data = "";

    for (let index = 1; index <= 10; index++) {
        data += (`${base} * ${index} : ` + index * base) + "\n";

    }


    fs.writeFile(`./archivos/tabla-${base}.txt`, data, (err) => {
            if (err) throw err;
            else {
                return 2;
                //  return `tabla-${base}.txt`;
            }

        }


    );


}

module.exports = {
    crearInforme
}