function vocalOConsonante(cadena) {
    let vocales = 'aeiou';
    let numeros = '0123456789';
    
    for (let caracter of cadena) {
        if (vocales.includes(caracter.toLowerCase())) {
            console.log(caracter," : Vocal");
        }else if (numeros.includes(caracter.toLowerCase())) {
            console.log(caracter, ": número");
        }  else {
            console.log(caracter,": Consonante");
        }
    }
}

let str = "ab1c3de4fg";
vocalOConsonante(str);
