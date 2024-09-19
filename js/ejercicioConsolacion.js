//a)Que permita al usuario introducir 3 números por pantalla. Si los números suman 100 devolverá mediante un alert un mensaje de éxito. En caso contrario devolverá un mensaje de fracaso.

    /*let num1 = parseInt (prompt("Introduce el primer número: "));
    let num2 = parseInt (prompt("Introduce el segundo número: "));
    let num3 = parseInt(prompt("Introduce el tercer número: "));

    let resultado = num1 + num2 + num3;

    if(resultado == 100){
        alert("Enhorabuena la suma es igual a 100");
    }else{
        alert("¡¡FRACASADO!!");
    }*/

//b) Investiga la función setTimeOut. Fijate como en dicha funcion se le pueden pasar dos parametros, el numero de milisegundos a esperar y que funcion se va a ejecutar cuando pasen esos milisegundos. Crea un programa que espere 3 segundos y luego pinte en una alerta "Hola".

    /*setTimeout(alert, 3000, "hola");*/

//c) Investiga la función setTimeOut. Fijate como en dicha funcion se le pueden pasar dos parametros, el numero de milisegundos a esperar y que funciuon se va a ejecutar cuando pasen esos milisegundos. Crea un programa que pida por pantalla el nombre al usuario y despues de 3 segundos genere una  respuesta con el nombre que introdujo el alumno.

    let nombre = prompt("Introduce el nombre: ")

    setTimeout(alert, 3000, nombre);

//d)Genera una funcion que dada una cadena pinte: El numero de caracteres que hay. El numero de vocales. Si empieza por "A" o no.

    