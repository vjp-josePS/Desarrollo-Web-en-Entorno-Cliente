class Punto2D {

    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    setX(x: number): void {
        this.x = x;
    }

    setY(y: number): void {
        this.y = y;
    }

    toString(): string {
        return `Puntos2D: (${this.x}, ${this.y})`;
    }
}

const punto1: Punto2D = new Punto2D(2, 3);
const punto2: Punto2D = new Punto2D(5, 8);

let calcularDistancia: (p1: Punto2D, p2: Punto2D) => number;

calcularDistancia = (p1: Punto2D, p2: Punto2D): number => {

    return Math.sqrt(
        Math.pow(p2.getX() - p1.getX(), 2) + 
        Math.pow(p2.getY() - p1.getY(), 2)
    );
};

console.log(punto1.toString());
console.log(punto2.toString());
console.log(`Distancia entre los puntos: ${calcularDistancia(punto1, punto2)}`);

alert(`Distancia entre los puntos: ${calcularDistancia(punto1, punto2)}`);