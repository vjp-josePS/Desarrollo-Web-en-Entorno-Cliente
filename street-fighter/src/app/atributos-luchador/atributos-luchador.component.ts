import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atributos-luchador', // Selector para usar este componente en otros templates
  standalone: true, // Indica que es un componente independiente
  template: `
    <div class="atributo">
      <div class="barra-atributo">
        <span class="nombre-atributo">{{ nombreAtributo }}</span>
        <div class="valor" [style.width.%]="valorAtributo * 10"></div>
      </div>
      
    </div>
  `,
  styleUrls: ['./atributos-luchador.component.css'], // Definimos la ruta al archivo CSS de estilos
  imports: [CommonModule] // Importa los módulos que usa este componente
})
export class AtributosLuchadorComponent { // Clase del componente
  @Input() nombreAtributo!: string; // Recibe el nombre del atributo como entrada
  @Input() valorAtributo!: number; // Recibe el valor del atributo como entrada
}
