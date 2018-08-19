let nombre = 'Wolverine';

if (true) {
    let nombre = 'Magneto';

}

console.log(`Su nombre es : ${nombre}`);


console.log('\nLet en el for');
let index; // Esto es un ambito diferente al for
//si fuera var entonces seria el mismo ambito 

for (let index = 0; index < 4; index++) {

    console.log(`i : ${index}`);

}

console.log(`Index : ${index}`);