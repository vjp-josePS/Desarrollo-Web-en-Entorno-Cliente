alert("Hola mundo en TypeScript");

class Persona{
    private name: string;

    constructor(name: string){
        this.name = name;
    }

    getName(): string{
        return this.name;
    }
}

let jesus: Persona = new Persona('Jesús');

console.log(jesus.getName() + " o Gezúh que me hace gracia");