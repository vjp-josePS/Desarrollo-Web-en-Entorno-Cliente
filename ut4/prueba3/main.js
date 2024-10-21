/*
Prueba3: Utilizaremo speticiones AJAX + el método de pintar monumento para pintar la información por pantalla de cada uno de los monumentos.

1- Vamos a reciclar la función pintarInfo del ejercicio 2 para crear una función que pinte los campos: nombre del documetno, el tipo de monumento, la latitud, la longitud, y la url que viene dentro del campo "uri". Esta vez pasaremos el objeto monumento por parámetros:

2- Haremos la petición AJAX como hemos estado haciendo en las diapositivas anteriores. La diferencia es que esta vez llamaremos a una función que nos procese el objeto JSON resultante: 

3- Escribimos la función que procesa el resultado. Para cada museo llamamos a la función pintaInfoMonumento:
*/

// Petición AJAX para obtener los datos de monumentos
let peticionAjax = new XMLHttpRequest();
peticionAjax.addEventListener("readystatechange", procesarPeticion);
peticionAjax.addEventListener("error", function(){
    console.error("Hubo un problema con la petición AJAX");
});
peticionAjax.open("GET","https://raw.githubusercontent.com/fsangar/backupOpendataCCJSON/master/monumentos.json");
peticionAjax.send();

// Procesar la respuesta de la petición
function procesarPeticion(event){
    if(this.readyState == 4 && this.status == 200){
        let objetoResultado = JSON.parse(this.responseText);
        console.log(objetoResultado);  // Inspeccionar la estructura del JSON
        procesarResultado(objetoResultado);  // Procesar el JSON
    }
}

// Función que recibe cada monumento y pinta la información
function pintarInfoMonumento(objetoMonumento){
    let cadenaDeVuelta = "";
    
    // Accedemos a cada campo de forma segura verificando que exista
    cadenaDeVuelta += "Nombre: " + (objetoMonumento.rdfs_label ? objetoMonumento.rdfs_label.value : "Desconocido") + "\n";
    cadenaDeVuelta += "Tipo de monumento: " + (objetoMonumento.on_tipoMonumento ? objetoMonumento.on_tipoMonumento.value : "Desconocido") + "\n";
    cadenaDeVuelta += "Latitud: " + (objetoMonumento.geo_lat ? objetoMonumento.geo_lat.value : "No disponible") + "\n";
    cadenaDeVuelta += "Longitud: " + (objetoMonumento.geo_long ? objetoMonumento.geo_long.value : "No disponible") + "\n";
    cadenaDeVuelta += "Uri: " + (objetoMonumento.uri ? objetoMonumento.uri.value : "No disponible");

    return cadenaDeVuelta;
}

// Función que procesa el resultado del JSON
function procesarResultado(objetoResultado){
    // Recorremos los monumentos y llamamos a la función para pintar la info
    for(let monumento of objetoResultado.results.bindings){
        console.log(pintarInfoMonumento(monumento));  // Muestra la información en la consola
    }
}
