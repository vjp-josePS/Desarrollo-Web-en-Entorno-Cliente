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

  getBorderColor(): string {
    if (this.indiceSeleccionado === this.numLuchador) {
      return this.luchador.colorAsociado; // Devuelve el colorAsociado del luchador
    }
    return '';
  }
}
