/*
Crea un nuevo proyecto que llevará la contabilidad de un restaurante. En el restaurante habrá un array de trabajadores que tendrá un nombre, un salario/hora y un número de horas semanales. La idea de este ejercicio es implementar las clases Trabajador y Restaurante:

Trabajador:
Atributos:
    -nombre:Nombre del trabajador. Viene como parámetro del constructor.
    -numHorasSemanales: Horas que trabaja semanalmente. Vienen como parámetro del contructor.
    -salarioPorHora: Euros que gana a la hora. Viene como parámetro del constructor.
Métodos:
    -constructor(nombre, numHorasSemanales,salarioPorHora).
    -pintarInfo(): Muestra por pantalla las características del trabajador.
    -getSaldoSemanal(): Devuelve lo que gana el trabajador en una semana de trabajo.
*/

class Trabajador{

    constructor(nombre, numHorasSemanales, salarioPorHoras){
        this.nombre = nombre;
        this.numHorasSemanales = numHorasSemanales;
        this.salarioPorHoras = salarioPorHoras;
    }

    pintarInfo(){
        console.log("");
    }
}