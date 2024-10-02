/*Crea un array con 4 valores y realiza los siguientes pasos:
1- Añade dos elementos al inicio.
2- Añade 3 más al final.
3- Elimina las posiciones 3, 4, 5.
4- Inserta 2 elementos antes del último elemento.
Nota: En cada cambio muestra los elementos del array separados por un #, utiliza bucles, utiliza las funciones predefinidas de arrays.*/

let array = [1,2,3,4];

console.log(array.join("#"));

array.unshift(-1, 0);
console.log("1-Añade dos elementos al inicio: ", array.join("#"));

array.push(5, 6);
console.log("2-Añade dos elementos al final: ", array.join("#"));

array.splice(3, 3);
console.log("3-Eliminar las posiciones 3, 4, 5: ", array.join("#"));

array.push(10,20);
console.log("4-Insertar 2 elementos antes del último elemento: ", array.join("#"));