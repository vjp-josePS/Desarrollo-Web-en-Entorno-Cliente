/*Crea una función procesarArray que realice los siguientes pasos:
a- Checkea que todos los elementos son de tipo número. Si no, termina con alert("Error").
b- En caso afirmativo modifica el valor del array multiplicando cada elemento por 2. (se debe almacenar sobre el mismo array)
c- Por último comprueba que todos los elementos son pares. Si es así muestra un mensaje por pantalla de éxito, en caso contrario, de error.*/

function procesarArray(array){
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            alert("Error. No son todos números.");
            return;
        }
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * 2;
    }

    const todosPares = array.every(num => num % 2 === 0);

    if(todosPares){
        alert("Todos son pares.")
    }else{
        alert("No son todos pares.")
    }
}

procesarArray([2,4,1]);