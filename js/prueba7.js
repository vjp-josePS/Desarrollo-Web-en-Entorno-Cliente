/*Vamos a confirmar que efectivamente los elementos se eliminan en "vivo" de un HTMLCollection. Para ello realizaremos los siguientes pasos:
1- Seleccionamos todos los elementos que son de tipo "p" y los guardamos en la variable "elementosP".
2- Mostraremos cada uno de los elementos de la estructura "elementosP".
3- Seleccionamos todos los elementos que pertenezcan a la clase "parrafos" (solo hay uno) lo eliminamos.
4- Volvemos a recorrer y pintar cada uno de los elementos de la variable "elementosP".
5- Revisar qué es lo que está ocurriendo.*/

const elementosP = document.getElementsByTagName('p');

console.log("Elementos 'p' iniciales:");
for (let i = 0; i < elementosP.length; i++) {
    console.log(elementosP[i].textContent);
}

const parrafo = document.querySelector('.parrafos');
if (parrafo) {
    parrafo.remove();
}

console.log("Elementos 'p' después de eliminar uno:");
for (let i = 0; i < elementosP.length; i++) {
    console.log(elementosP[i].textContent);
}