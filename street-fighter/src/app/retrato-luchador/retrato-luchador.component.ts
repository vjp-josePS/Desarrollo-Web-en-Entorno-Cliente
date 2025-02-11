import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ILuchador } from '../interfaces/luchador.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-retrato-luchador', // Selector para usar este componente en otros templates
  standalone: true, // Indica que es un componente independiente
  imports: [CommonModule], // Importa los módulos que usa este componente
  templateUrl: './retrato-luchador.component.html', // Definimos la ruta al archivo HTML del template
  styleUrls: ['./retrato-luchador.component.css'] // Definimos la ruta al archivo CSS de estilos
})
export class RetratoLuchadorComponent { // Clase del componente
  @Input() luchador!: ILuchador; // Recibe el objeto luchador como entrada
  @Input() numLuchador!: number; // Recibe el número de luchador (índice) como entrada
  @Input() indiceSeleccionado!: number; // Recibe el índice del luchador seleccionado como entrada
  @Input() estaEnfocado: boolean = false; // Nueva propiedad
  @Output() seleccionado = new EventEmitter<number>(); // Emite un evento cuando se selecciona el luchador

  onSeleccionar() { // Método para manejar la selección del luchador
    this.seleccionado.emit(this.numLuchador); // Emite el evento 'seleccionado' con el número del luchador
  }

  getBorderColor(): string { // Método para obtener el color del borde
    if (this.indiceSeleccionado === this.numLuchador) { // Si el luchador está seleccionado
      switch (this.numLuchador) { // Evalúa el número del luchador
        case 0: return 'green'; // Si es el luchador 0, devuelve verde
        case 1: return 'blue'; // Si es el luchador 1, devuelve azul
        case 2: return 'red'; // Si es el luchador 2, devuelve rojo
        case 3: return 'yellow'; // Si es el luchador 3, devuelve amarillo
        default: return 'black'; // Si no es ninguno de los anteriores, devuelve negro
      }
    }
    return ''; // Si el luchador no está seleccionado, devuelve una cadena vacía
  }
}
