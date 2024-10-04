/*Crea una función que dada un array, elimine sus repetidos y los pinte por pantalla qué elementos estaban repetidos. */

function mostrarRepetidos(array){
    const unicos = new Set();
    const repetidos = [];

    array.forEach(elemento => {
        if(unicos.has(elemento)){
            repetidos.push(elemento);
        }else{
            unicos.add(elemento);
        }
    });

    const arraySinRepes = [...unicos];

    console.log("Elementos repetidos: ", repetidos);

    return arraySinRepes;
}

const array = [1,2,2,2,3,4,4,5,5,6,7];

const arraySinRepes = mostrarRepetidos(array);

console.log("Array sin repetidos: ", arraySinRepes);