/*Utiliza la función every para comprobar que todos los elementos de un array son pares */

let arrayPares = [2,4,6,8];
let arrayImpares = [1,3,5,7,9];
let arrayMixto = [1,2,3,4,5,6,7,8];

function pares(array){
    let numPares = array.every(num => num % 2 === 0);

    return numPares;
}


console.log(arrayPares);
console.log(pares(arrayPares));

console.log(arrayImpares);
console.log(pares(arrayImpares));

console.log(arrayMixto);
console.log(pares(arrayMixto));