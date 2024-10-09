/* 
Partiendo del codigo expuesto y a través de javaScript genera una matriz de 10 x 10 en la que al pulsar sobre cada elemento pueda cambiar de color (rojo, azul, verde, amarillo):
- Si pulsamos el botón izquierdo del ratón el color irá cambiando en el sentido que se ha expuesto los colores.
- Si pulsamos el boton derecho del ratón el color irá cambiando en el sentido opuesto.
- Si pulsamos el botón de la ruleta se pone gris.
- El botón tendrá un tamaño de 25px para el ancho y el alto.
- Habrá una separación entre elementos de 10px.

Sugerencias:
- Crea una función que cree una matriz de button con sus propiedades de ancho, alto, margen... y lo añada a un contenedor (div).
- Crea otra función a la que asignamos los eventos de cada button.
*/

const colores = ["rojo", "azul", "verde", "amarillo"];

const matriz = Array(10).fill().map(() => Array(10).fill(0));

console.log(matriz);