let getNombre = () => {
    return "Nilson N."
}

/* Con solo colocar async delante de la una función se construye una promose
 Cualquier error se envia al catch y si se quiere lanzar un error controlado se utiliza throw new Error()*/

let getNombre2 = async() => {
    return "Nilson N.";
}

console.log(getNombre2());

getNombre2().then((resolve) => {
    console.log(resolve);
}).catch((error) => {
    console.log(error);

});

/*
 Es igual a 
let getNombre=()=>{
    return new Promise((resolve,reject)=>{
    });
}
*/
/* Los await convierten los metodos asincronicos
The await operator is used to wait for a Promise. It can only be used inside an async function.
*/
let saludo = async() => {

    let nombre = await getNombre2();
    return `Hola ${nombre}`

}

saludo().then((solve) => {
    console.log("Saludo : ", solve);
});