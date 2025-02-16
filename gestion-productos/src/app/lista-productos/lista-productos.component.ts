import { Component, OnInit } from '@angular/core';
import { CargaProductoService } from '../carga-producto.service';
import { IProducto } from '../i-producto/i-producto';
import { CommonModule } from '@angular/common';
// import { ItemProductoComponent } from '../item-producto/item-producto.component';
import { RouterLink } from '@angular/router';
import { EstrellasRatingComponent } from '../estrellas-rating/estrellas-rating.component';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule, /*ItemProductoComponent,*/ RouterLink, EstrellasRatingComponent],
  template: `
    <h2>Lista de Productos</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Búsqueda">

          </div>
        </div>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>
              <div class="input-group-append">
                <button class="btn btn-danger" type="button" (click)="toggleImagenes()">
                  {{ mostrarImagenes ? 'Ocultar' : 'Mostrar' }}
                </button>
              </div>
            </th>
            <th>Productos</th>
            <th>Precio</th>
            <th>Disponibilidad</th>
            <th>Puntuación</th>
          </tr>
        </thead>
        <tbody>
          @for (producto of productos; track producto.id) {
            <tr>
              <td>
                @if (mostrarImagenes) {
                  <img [src]="producto.imagenUrl" alt="{{ producto.descripcion }}" width="50">
                }
              </td>
              <td><a [routerLink]="['/productos', producto.id]">{{ producto.descripcion }}</a></td>
              <td>{{ producto.precio | currency:'EUR' }}</td>
              <td>{{ producto.disponibilidad | date:'dd/MM/yyyy' }}</td>
              <td><app-estrellas-rating [numEstrellas]="producto.puntuacion" (numEstrellasCambiadas)="cambioEstrellas(producto, $event)"></app-estrellas-rating></td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class ListaProductosComponent implements OnInit {
  productos: IProducto[] | undefined;
  mostrarImagenes: boolean = true;

  constructor(private cargaProductoService: CargaProductoService) { }

  ngOnInit(): void {
    this.cargaProductoService.getProductos().subscribe({
      next: listaProductos => this.productos = listaProductos,
      error: error => console.log(error)
    });
  }

  cambioEstrellas(producto: IProducto, nuevaPuntuacion: number): void {
    producto.puntuacion = nuevaPuntuacion;
    this.cargaProductoService.guardarProducto(producto).subscribe({
      next: p => console.log(`Actualizado el producto ${p}`),
      error: error => console.log(error)
    });
  }

  toggleImagenes(): void {
    this.mostrarImagenes = !this.mostrarImagenes;
  }
}
