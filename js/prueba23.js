/* 
Utiliza rest y spread para crear una funcion a la que le puedas pasar un número ilimitado de parámetros.
Comprueba que todos esos parámetros sean números y devuelva el mayor de todos. Si algún parámetro no es un número devolverá undefined. Prueba tu función con varias entradas utilizando spread.
*/

let array = ["asd", 3, "a", "123d", "h, 5"];
let arrayNum = [1,2,3,4,5,6,7,8,9,10];

function funcionRest(...arg){
    if (arg.every(num => typeof num == 'number')) {
        return Math.max(...arg);
    }
}

console.log(funcionRest(...array));
console.log(funcionRest(...arrayNum));