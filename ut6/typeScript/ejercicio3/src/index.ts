interface BiDimensional {
    getArea(): number;
    getInfo(): void;
}

class Circulo implements BiDimensional {
    constructor(public radio: number) {}

    getArea(): number {
        let area = 3.14 * this.radio * this.radio;

        return area;
    }

    getInfo(): void {
        console.log("La figura es un círculo de radio: " + this.radio);
    }
}

class Rectangulo implements BiDimensional {
    constructor(public lado1: number, public lado2: number) {}

    getArea(): number {
        let area = this.lado1 * this.lado2;

        return area;
    }

    getInfo(): void {
        console.log("La figura es un rectángulo de lado1 " + this.lado1 + " y de lado2 " + this.lado2);
    }
}

class Triangulo implements BiDimensional {
    constructor(public base: number, public altura: number) {}

    getArea(): number {
        let area = (this.base * this.altura) / 2;

        return area;
    }

    getInfo(): void {
        console.log("La figura es un triángulo de base " + this.base + " y de altura " + this.altura);
    }
}

let objeto1: BiDimensional = new Circulo(3);

objeto1.getInfo();
console.log("Su área es: " + objeto1.getArea());

let objeto2: BiDimensional = new Rectangulo(4, 6);

objeto2.getInfo();
console.log("Su área es: " + objeto2.getArea());

let objeto3: BiDimensional = new Triangulo(3, 6);

objeto3.getInfo();
console.log("Su área es: " + objeto3.getArea());