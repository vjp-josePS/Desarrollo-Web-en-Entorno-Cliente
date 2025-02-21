import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IProducto } from '../i-producto/i-producto';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'item-producto, [item-producto]',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.scss']
})
export class ItemProductoComponent implements OnChanges {
  @Input() producto: IProducto | undefined;
  @Input() mostrarImagenes: boolean = true;
  @Output() estrellasCambiadas = new EventEmitter<number>();
  imagenUrl: string | undefined = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['producto'] && this.producto) {
      this.imagenUrl = this.producto.imagenUrl;
    }
  }

  onEstrellaClick(nuevaPuntuacion: number): void {
    this.estrellasCambiadas.emit(nuevaPuntuacion);
  }
}
