/*
En el restaurante habrá un array de trabajadores que tendrán un nombre, un salario/hora, y un número de hotras semanales. La idea de este ejercicio es implementar las clases Trabajador y Restaurante:
*/

/*
Trabajador:
    Atributos:
        -nombre: Nombre del trabajador. Viene como parametro en el contructor.
        -numHorasSemanales: Horas que trabaja semanalmente. Viene como parámetro del constructor.
        -salarioPorHora:Euros que gana a la hora. Viene como parámetro del constructor.

    Metodos:
        -constructor(nombre, numHorasSemanales,salarioPorHora)
        -pintarInfo(): Muestra por pantalla las característicaqs del trabajador.
        -getSaldoSemanal(): Devuelve lo que gana el trabajador en una semana de trabajo.
*/

/*
*    Clase para el trabajador
*/

class Trabajador {
    constructor(nombre, numHorasSemanales, salarioPorHora) {
        this.nombre = nombre;
        this.numHorasSemanales = numHorasSemanales;
        this.salarioPorHora = salarioPorHora;
    }

    pintarInfo() {
        console.log(" -Nombre: " + this.nombre + ".\n -Número de horas semanales: " + this.numHorasSemanales + ".\n -Salario por hora: " + this.salarioPorHora + ".\n");
    }

    getSaldoSemana() {
        return this.numHorasSemanales * this.salarioPorHora;

    }
}

/*
Restaurante:
    Atributos:
        -nombre: nombre del restaurante. Viene como parametro del constructor.
        -trabajadores: es un array de Trabajadores. Inicialmente no tendrá ningún trabajador.
    Métodos:
        -constructor(nombre)
        -annadirTrabajador(trabajador): Añade el trabajador al array trabajadores.
        -pintarInfo(): Muestra el nombre del restaurante y para cada trabajador muestra su información.
        -getPagosSemanales(): Devuelve el dinero total semanal que tiene que pagar a todos sus trabajadores en una semana.
*/

/*
*    Clase para el restaurante
*/

class Restaurante {
    constructor(nombre) {
        this.nombre = nombre;
        this.trabajadores = [];
    }

    annadirTrabajador(trabajador) {
        this.trabajadores.push(trabajador);
    }

    pintarInfo() {
        console.log("Restaurante: " + this.nombre);


    }

    getPagosSemanales(){
        return this.trabajadores.reduce((total, trabajador) => total + trabajador.getSaldoSemana(), 0);
    }
}

let trabajador1 = new Trabajador('Juan', 40, 15);
let trabajador2 = new Trabajador('Rubén', 30, 20);
let trabajador3 = new Trabajador('Hugo', 35, 10);

let restaurante = new Restaurante('El Buen Sabor');
restaurante.annadirTrabajador(trabajador1);
restaurante.annadirTrabajador(trabajador2);
restaurante.annadirTrabajador(trabajador3);

restaurante.pintarInfo();
console.log("Mantener a los trabajadores del restaurante cuesta: " + restaurante.getPagosSemanales() + " euros.");
