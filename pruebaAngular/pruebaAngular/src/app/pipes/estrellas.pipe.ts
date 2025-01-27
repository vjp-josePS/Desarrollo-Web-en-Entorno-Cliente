import { Pipe, PipeTransform } from '@angular/core';

// Interfaz que define la estructura de cada estrella
// indice: posición de la estrella (1-5)
// color: color de la estrella ('gold' para activa, 'gray' para inactiva)
interface IEstrella {
  indice: number;
  color: string;
}

// Decorador que define el pipe y lo marca como standalone
@Pipe({
  name: 'estrellas',
})
export class EstrellasPipe implements PipeTransform {
  // Método transform que convierte una puntuación numérica en un array de estrellas
  // @param puntuacion - Número del 1 al 5 que representa la calificación
  // @returns Array de 5 estrellas con sus respectivos colores según la puntuación
  transform(puntuacion: number): IEstrella[] {
    return Array(5).fill(0).map((_, index) => ({
      indice: index + 1,
      color: (puntuacion >= index + 1) ? 'gold' : 'gray'
    }));
  }
}