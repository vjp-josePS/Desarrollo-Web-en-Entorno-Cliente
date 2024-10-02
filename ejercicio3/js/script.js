/*Crea una función a la cual se le pase un array. Esta función devolverá:
    a) Cuántos elementos hay de tipo número y los pintará por pantalla.
    b) Cuántos elementos hay de tipo cadena y los pintará por pantalla.
    c) Cuántos elementos no son ni número ni cadena y los pintará por pantallal.
Prueba la ejecución con varias entradas*/

function comprobar(array){

    let contarNum = 0;
    let contarCad = 0;
    let contarOtros = 0;

    array.forEach(elemento => {
        switch(typeof elemento){
            case 'number':
                contarNum++;
                break;
            case 'string':
                contarCad++;
                break;
            default:
                contarOtros++;
        }
    });

    console.log(`Cantidad de números: ${contarNum}`);
    console.log(`Cantidad de cadena: ${contarCad}`);
    console.log(`Cantidad de ni números ni cadenas: ${contarOtros}`);

    return{contarNum, contarCad, contarOtros};
}

console.log("\nCasco de prueba 1:");
comprobar([1, 2, 'hola', true, null]);

console.log("\nCasco de prueba 2:");
comprobar(['manzana', 'plátano', 'naranja']);

console.log("\nCasco de prueba 3:");
comprobar([]);

console.log("\nCasco de prueba 4:");
comprobar([{}, [], undefined, null]);

console.log("\nCasco de prueba 5:");
comprobar(['1', '2', '3']);