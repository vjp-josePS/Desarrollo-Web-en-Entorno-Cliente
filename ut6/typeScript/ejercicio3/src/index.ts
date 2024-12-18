interface Dimensionar{
getDimensiones():number;
}

class Circulo implements Dimensionar{
    constructor(public radio:number){}

    getDimensiones(): number {
        let area = 2 * 3.14 * this.radio;

        return area;
    }
}

class Rectangulo implements Dimensionar{
    constructor(public lado1:number, public lado2:number){}

    getDimensiones(): number {
        let area = this.lado1 * this.lado2;

        return area;
    }
}

class Triangulo implements Dimensionar{
    constructor(public base:number, public altura:number){}

    getDimensiones(): number {
        let area = this.base * this.altura;

        return area;
    }
}

let objeto1:Dimensionar = new Circulo(3);

console.log("La figura es un círculo con radio " + objeto1['radio']);

console.log("Su área es: " + objeto1.getDimensiones());

let objeto2:Dimensionar = new Rectangulo(4, 6);

console.log("La figura es un rectángulo con el primer lado " + objeto2['lado1'] + " y con el segundo lado " + objeto2['lado2']);
console.log("Su área es: " + objeto2.getDimensiones());

let objeto3:Dimensionar = new Triangulo(3, 6);

console.log("La figura es un triángulo con base " + objeto3['base'] + " y altura " + objeto3['altura']);
console.log("Su área es: " + objeto3.getDimensiones());