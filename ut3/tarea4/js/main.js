function crearCumple(){
    let nombre = document.getElementById('nombre').value;
    let dia = document.getElementById('dia').value;
    let mes = document.getElementById('mes').value;
    let anho = document.getElementById('anho').value;

    if(nombre && dia && mes && anho){
        // Creamos el li donde lo mostraremos
        let li = document.createElement('li');

        // Creamos la imagen y que salga la imagen random
        let img = document.createElement('img');

        let imagenRandom = Math.floor(Math.random() * 10) + 1;

        img.src = "./Images/avatar" + imagenRandom + ".png";
        
        // Creamos un p para el nombre
        let pNombre = document.createElement('p');
        pNombre.textContent = nombre;

        // Creamos un p para crear la fecha(dia, mes y año)
        let pFecha = document.createElement('p');
        pFecha.textContent = `${dia}-${mes}-${anho}`;
        
        // Lo metemos todo en una lista
        li.appendChild(img);
        li.appendChild(pNombre);
        li.appendChild(pFecha);

        document.getElementById('listaFechas').appendChild(li);
    }
}


