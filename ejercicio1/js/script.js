/*Crea una funcion que reciba dos cadenas y pinte cual es la más corta de las dos. Si alguno de los argumentos no es una cadena devuelve un mensaje de error en su lugar. Probarlo con varias entradas directamente introducidas con código. Las salidas se harán con console.log.*/

function compararCadenas(cadena1, cadena2) {

    if (typeof cadena1 !== 'string' || typeof cadena2 !== 'string') {
        console.log('Tienen que ser las dos cadenas.');
    }else{

        if (cadena1.length > cadena2.length) {
            console.log('La cadena 1 es más larga que la cadena 2.');
        }else{
            if (cadena1.length < cadena2.length) {
                console.log('La cadena 2 es más larga que la cadena 1.');
            }else{
                console.log('Las cadenas son del mismo tamaño.');
            }
        }
    }
}

console.log(compararCadenas('hola', 'mundo'));
console.log(compararCadenas(123, 'mundo'));
console.log(compararCadenas('hola', 'jose'));
console.log(compararCadenas('juanito', 'grillo'));