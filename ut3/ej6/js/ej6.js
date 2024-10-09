document.addEventListener("DOMContentLoaded", main);

function main() {
    //Añadimos los listeners:
    document.getElementById("divRojo").addEventListener("click", (evento) => {
        console.log("Pulsaste el divRojo")
        },
    );

    document.getElementById("divAzul").addEventListener("click", (evento) => {
        console.log("Pulsaste el divAzul");
        },
    );

    document.getElementById("divVerde").addEventListener("click", (evento) => {
        console.log("Pulsaste el divVerde");
        
        },true
    );
}