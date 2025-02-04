import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProducto } from '../../interfaces/i-producto';
import { EstrellasPipe } from '../../pipes/estrellas.pipe';

@Component({
  selector: 'tr[app-item-producto]',
  standalone: true,
  imports: [CommonModule, EstrellasPipe],
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.scss']
})
export class ItemProductoComponent {
  @Input() producto!: IProducto;
  @Input() verImagenes = true;
  @Output() productoClicked = new EventEmitter<number>();

  onProductoClick() {
    this.productoClicked.emit(this.producto.id);
  }
}
