/*Crea una función en la que puedan entrar un número indeterminado de argumentos. Comprueba que todos son cadenas(si no devuelve error) y pinta por pantalla la suma total de todas las longitudes de las cadenas. Utiliza rest y reduce. Prueba con varias entradas. */

function sumarCadenas(...cadenas){
    if (cadenas.some(arg => typeof arg !== 'string')) {
        console.log('Error. Tiene que ser todo cadenas.')
    }else{
        const longiTotal = cadenas.reduce((total, cadena) => total + cadena.length, 0);

        console.log(`La suma total es: ${longiTotal}`);
    }

    
}

sumarCadenas('hola', ' que ', 'tal');
sumarCadenas('12', '34');
sumarCadenas(12, 34);
sumarCadenas('hola', 12);