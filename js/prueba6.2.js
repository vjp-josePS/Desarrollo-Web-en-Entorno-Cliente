document.body.onload = addElement;

function addElement(){
    var newP = document.createElement("p");
    var newContent = document.createTextNode("hola que tal");

    newP.appendChild(newContent); 

    var currentP = document.getElementById("p1");
    document.body.insertBefore(newP, currentP);
}