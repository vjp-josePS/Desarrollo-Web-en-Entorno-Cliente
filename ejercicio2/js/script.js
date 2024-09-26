// Crea una función que reciba dos cadenas. Comprobará que ambos argumentos son cadenas y en caso afirmativo pintará mediante console.log si una cadena es igual a la otra del revés. Prueba con varias entradas.

function compararCadenas(cadena1, cadena2) {

    if (typeof cadena1 !== 'string' || typeof cadena2 !== 'string') {
        console.log('Los argumentos introducidos no son cadenas.');
    }else{
        let cadenaInver = cadena1.split('').reverse().join('');

        if (cadenaInver === cadena2) {
            console.log('son iguales las cadenas inversas');
        }else{
            console.log('no son iguales las cadenas inversas');
        }
    }
}

console.log(compararCadenas('123', '123'));
console.log(compararCadenas('hola', 'aloh'));
console.log(compararCadenas('123@', '@321'));
console.log(compararCadenas(123, '123'));