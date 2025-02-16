import { Component, Input } from '@angular/core';
import { IProducto } from '../i-producto/i-producto';
import { CommonModule } from '@angular/common';
import { EstrellasRatingComponent } from '../estrellas-rating/estrellas-rating.component';
import { CargaProductoService } from '../carga-producto.service';

@Component({
  selector: 'app-item-producto',
  standalone: true,
  imports: [CommonModule, EstrellasRatingComponent],
  template: `
    <div class="producto">
      <h3>{{ producto.descripcion }}</h3>
      <img [src]="producto.imagenUrl" alt="{{ producto.descripcion }}" width="100">
      <p>Precio: {{ producto.precio | currency:'EUR' }}</p>
      <p>Disponibilidad: {{ producto.disponibilidad | date }}</p>
      <p>
        Puntuación:
        <app-estrellas-rating
          [numEstrellas]="producto.puntuacion"
          (numEstrellasCambiadas)="cambioEstrellas($event)"
        ></app-estrellas-rating>
      </p>
    </div>
  `,
})
export class ItemProductoComponent {
  @Input() producto!: IProducto;

  constructor(private cargaProductos: CargaProductoService) { }

  cambioEstrellas(nuevaPuntuacion: number): void {
    this.producto.puntuacion = nuevaPuntuacion;
    this.cargaProductos.guardarProducto(this.producto).subscribe({
      next: p => console.log(`Actualizado el producto ${p}`),
      error: error => console.log(error)
    });
  }
}
