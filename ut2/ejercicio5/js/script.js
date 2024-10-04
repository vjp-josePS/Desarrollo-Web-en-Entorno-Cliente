/*Crea una función que dado un array lo ordene (mira funciones predefinidad). Intenta hacer un método para ordenarlo por ti misno considerando que el array siempre incluyese números (Es decir, sin utilizar .sort())*/

function ordenar(array){

    for (let i = 0; i < array.length - 1; i++) {
        let numMinimo = i;
        

        for (let j = i + 1; j < array.length; j++) {
            const element = array[j];
            if (array[j] < array[numMinimo]) {
                numMinimo = j;
            }
        }

        if (numMinimo !== i) {
            [array[i], array[numMinimo]] = [array[numMinimo], array[i]];
        }
    }

    return array;
}

console.log(ordenar([9,8,6,5,2,2,5,1]));

console.log(ordenar([4,7,2,6,5,6,9,10]));

console.log(ordenar([200, 150, 170, 176, 125, 110, 100]));