function mostrarNota(){
    let nota = document.getElementById("texto").value;

    let nuevaNota = document.createElement("p");
    nuevaNota.textContent = nota;

    nuevaNota.onclick = function(){
        if(event.altKey){
            this.classList.toggle("notaEnRojo");
        }else{
            this.remove();
        }
    }

    document.getElementById("listaDeNotas").appendChild(nuevaNota);
    document.getElementById("mostrarTexto").textContent = "nota";
}