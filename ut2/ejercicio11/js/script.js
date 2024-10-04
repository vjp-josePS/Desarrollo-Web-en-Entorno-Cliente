/*Crea una función que reciba un número indeterminado de parámetros. Para aquellos que sean números agrupalos en un array y píntalos por pantalla sólo si son pares. Prueba con diferentes entradas. */

function agruparPares(...argumentos){
    const numPares = argumentos.filter(argumento => typeof argumento === 'number' && argumento % 2 === 0);

    if (numPares.length > 0) {
        console.log('Los números pares son: ', numPares);
    }else{
        console.log('No se encontraron pares.')
    }
}

agruparPares(1,2,3,4,5,6);
agruparPares(1,3,5,7,9);
agruparPares("asdf", 1, 2);