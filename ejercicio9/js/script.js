/*Crea un programa en el que existan 3 objetos de tipo platoCocina, que tengan los atributos: nombrePlato(cadena), duracionMinutos(un número) y dificuldad(un número).
- Almacena en un mapa la relación de cada plato con un array que guarde los ingredientes que se utilizan como cadenas.
- Crea una función que pinte el mapa(platos->Ingredientes). Deberias definir la clase con el toString sobreescrito */

class PlatoCocina{
    constructor(nombrePlato, duracionMin, dificultad){
        this.nombrePlato = nombrePlato;
        this.duracionMin = duracionMin;
        this.dificultad = dificultad;
    }

    toString(){
        return `El plato ${this.nombrePlato} tiene una duración de ${this.duracionMin} minutos y tiene una dificultad de ${this.dificultad}`;
    }
}

const plato1 = new PlatoCocina("Ensalada", 15, 2);
const plato2 = new PlatoCocina("Macarrones",15, 1);
const plato3 = new PlatoCocina("Arroz a la cubana", 20, 3);

const mapaPlatos = new Map();

mapaPlatos.set(plato1, ["lechuga", "tomate", "atún", "maiz"]);
mapaPlatos.set(plato2, ["macarrones", "carne picada", "queso", "tomate"]);
mapaPlatos.set(plato3, ["arroz", "huevo", "atún", "tomate"]);

function pintarMapa(mapa){
    for(let [plato, ingredientes] of mapa){
        console.log(`${plato.toString()} Los ingredientes son: ${ingredientes.join(", ")}`);
    }
}

pintarMapa(mapaPlatos);