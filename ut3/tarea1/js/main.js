function comprobarDni() {
    let dni = document.getElementById("texto").value;

    let dniCorrecto = /^\d{0,9}[A-Z]$/;
    if (dniCorrecto.test(dni)) {
        window.alert("dni correcto");
    } else {
        window.alert("dni incorrecto. Pon los 8 dígitos y la letra en mayúscula.");
    }

}

function comprobarFecha() {
    let fecha = document.getElementById("texto").value;

    let fechaCorrecta = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    if(fechaCorrecta.test(fecha)){
        window.alert("fecha correcta");
    }else{
        window.alert("fecha incorrecta. Pon la fecha en formato dd-mm-yyyy.")
    }
}

function comprobarIdentificador() {
    let identificador = document.getElementById("texto").value;

    let identificadorCorrecto = /^[a-z_][a-zA-Z0-9_]*$/;
    if(identificadorCorrecto.test(identificador)){
        window.alert("Identificador correcto.");
    }else{
        window.alert("Identificador incorrecto. Pon el identificador que empiece por minúscula o guión bajo.")
    }
}