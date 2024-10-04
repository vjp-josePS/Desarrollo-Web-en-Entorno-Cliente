/*Modifica en javaScript para que:
1- El div tenga un tamaño de 200x200, el color de fondo sea gris(#9e9e9e), la letra sa azul, el borde tenga 1 pixel de grosor y de color rojo.
2- Cuando se redimensione la ventana, dentro del div se pintará el window.innerWidth y el window.innerHeight.
3- Utiliza el evento DOMContentLoaded para que todo el código se ejecute cuando se cargue el DOM. */

//1.
document.addEventListener("DOMContentLoaded", function() {
    let variable = document.getElementById("contenedorGeneral");

    variable.style.height = "200px";
    variable.style.width = "200px";
    variable.style.backgroundColor = "#9e9e9e";
    variable.style.color = "blue";
    variable.style.border = "red 1px solid";

//2.
    function redimensionar() {
        variable.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
    }
    
//3.
    redimensionar();
    window.addEventListener("resize", redimensionar);
});
