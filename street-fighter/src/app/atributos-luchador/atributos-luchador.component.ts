import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atributos-luchador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atributos-luchador.component.html',
  styleUrls: ['./atributos-luchador.component.css']
})
export class AtributosLuchadorComponent implements OnChanges {
  // Inputs para recibir el nombre y valor del atributo
  @Input() nombreAtributo!: string;
  @Input() valorAtributo!: number;

  // Propiedad para el clip-path CSS
  clipPath: string = 'inset(0 0 0 0)';

  // Método que se ejecuta cuando cambian los inputs
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['valorAtributo']) {
      // Calcula el porcentaje basado en el valor del atributo
      const porcentaje = this.valorAtributo * 10;
      // Actualiza el clip-path para mostrar el porcentaje correcto
      this.clipPath = `inset(0 ${100 - porcentaje}% 0 0)`;
    }
  }
}
