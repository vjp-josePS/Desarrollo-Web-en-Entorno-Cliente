import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProducto } from '../i-producto/i-producto';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'item-producto, [item-producto]',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.scss']
})
export class ItemProductoComponent {
  @Input() producto: IProducto | undefined;
  @Input() mostrarImagenes: boolean = true;
  @Output() numEstrellasCambiadas = new EventEmitter<number>();

  onEstrellaClick(nuevaPuntuacion: number): void {
    if (this.producto) {
      this.producto.puntuacion = nuevaPuntuacion;
      this.numEstrellasCambiadas.emit(nuevaPuntuacion);
    }
  }
}
