/*localStorage.politica = confirm("¿Estas de acuerdo con que almacenemos tu informacion personal?");
console.log(localStorage.politica);


if(localStorage.politica == "true"){
    document.write("Bienvendido a la pagina web");
}else{
    localStorage.politica = confirm("¿Estas seguro de ello?");

    if(localStorage.politica == "true"){
        document.write("Bienvendido a la pagina web");
    }else{
        document.write("Venga hasta luego");
    }
}*/
/*
const boton = document.getElementById("boton");

boton.addEventListener("click", aceptarCookies);

function aceptarCookies(event){

    let cookies ={
        val1: document.getElementById("v1").value,
        val2: document.getElementById("v2").value,
        val3: document.getElementById("v3").value,
        val4: document.getElementById("v4").value
    };
    
    localStorage.setItem("cookies", JSON.stringify(cookies));

    console.log(localStorage.cookies);
    console.log(JSON.parse(localStorage.cookies));

}
*/