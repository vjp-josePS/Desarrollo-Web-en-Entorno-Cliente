let funcionLambda = (arg1, arg2) => {return arg1 + arg2}

console.log(funcionLambda(1, 2));


let funcionProcesadoraPar = function(arg1, arg2, funcionProcesadora){
    return funcionProcesadora(arg1, arg2);
}

console.log("Esta vez procesamos una funcion (de 3 + 2): " + funcionProcesadoraPar(3, 2, (n1, n2) => {return n1 + n2}));


console.log("Esta vez procesamos una funcion (de 3 * 2): " + funcionProcesadoraPar(3, 2, (n1, n2) => n1 * n2));