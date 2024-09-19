let procesaTres = function (arg1, arg2, arg3, funcionProcesadora){
    return funcionProcesadora(arg1, arg2, arg3);
}

console.log("Devuelve la suma de los 3: " + procesaTres(1, 2, 3, (n1, n2, n3) => {return n1 + n2 + n3}));

console.log("Devuelve el mayor: " + procesaTres(1, 2, 3, (n1, n2, n3) => {return Math.max(n1, n2, n3)}));

console.log("Devuelve el menor: " + procesaTres(1, 2, 3, (n1, n2, n3) => {return Math.min(n1, n2, n3)}));

console.log("Devuelve la suma del primero y el tercero y el resultado dividido entre el segundo: " + procesaTres(1, 2, 3, (n1, n2, n3) => {return (n1 + n3) / n2}));