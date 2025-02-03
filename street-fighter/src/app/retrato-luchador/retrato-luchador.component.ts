import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ILuchador } from '../interfaces/luchador.interface';

@Component({
    selector: 'app-retrato-luchador',
    standalone: true,
    template: `
      <div class="retrato"
           [class.seleccionado]="indiceSeleccionado === numLuchador"
           [class.hover]="isHovered"
           [style.border-color]="luchador.colorAsociado"
           (click)="seleccionar()"
           (mouseenter)="isHovered = true"
           (mouseleave)="isHovered = false">
        <img [src]="luchador.retrato" [alt]="luchador.nombre">
      </div>
    `,
    styles: [`
      .retrato {
        width: 100px;
        height: 100px;
        border: 3px solid transparent;
        transition: all 0.3s ease;
        cursor: pointer;
      }
      .retrato.seleccionado, .retrato.hover {
        border-width: 6px;
        transform: scale(1.1);
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `]
})
export class RetratoLuchadorComponent {
    @Input() luchador!: ILuchador;
    @Input() numLuchador!: number;
    @Input() indiceSeleccionado!: number;
    @Output() seleccionado = new EventEmitter<number>();
    
    isHovered: boolean = false;
  
    seleccionar() {
      this.seleccionado.emit(this.numLuchador);
    }
  }
