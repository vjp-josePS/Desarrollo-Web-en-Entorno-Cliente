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

const colors = ['red', 'blue', 'green', 'yellow'];
let currentColorIndex = 0;

function createMatrix() {
    const contenedorGeneral = document.getElementById('contenedorGeneral');
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < 10; j++) {
            const element = document.createElement('div');
            element.className = 'matrix-element';
            element.style.backgroundColor = colors[currentColorIndex];
            element.addEventListener('click', () => changeColor(element));
            element.addEventListener('contextmenu', (event) => {
                event.preventDefault();
                changeColorOnRightClick(element);
            });
            row.appendChild(element);
        }
        contenedorGeneral.appendChild(row);
    }
}

function changeColor(element) {
    const currentIndex = colors.indexOf(element.style.backgroundColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    element.style.backgroundColor = colors[nextIndex];
}

function changeColorOnRightClick(element) {
    const currentIndex = colors.indexOf(element.style.backgroundColor);
    const previousIndex = (currentIndex - 1 + colors.length) % colors.length;
    element.style.backgroundColor = colors[previousIndex];
}

// Add this new function to handle mouse wheel event
function changeToGray() {
    currentColorIndex = 0; // Reset to red color
    updateMatrixColors();
}

function updateMatrixColors() {
    const elements = document.querySelectorAll('.matrix-element');
    elements.forEach(element => {
        element.style.backgroundColor = colors[currentColorIndex];
    });
}

// Add this new function to handle mouse wheel event
window.addEventListener('wheel', (event) => {
    if (event.deltaY !== 0) {
        // Only react to vertical wheel movement
        changeToGray();
    }
});

document.addEventListener('DOMContentLoaded', createMatrix);
