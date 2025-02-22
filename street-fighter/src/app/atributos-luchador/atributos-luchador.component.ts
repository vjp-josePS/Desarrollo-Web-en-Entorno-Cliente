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
  @Input() nombreAtributo!: string;
  @Input() valorAtributo!: number;

  clipPath: string = 'inset(0 0 0 0)';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['valorAtributo']) {
      const porcentaje = this.valorAtributo * 10;
      this.clipPath = `inset(0 ${100 - porcentaje}% 0 0)`;
    }
  }
}
