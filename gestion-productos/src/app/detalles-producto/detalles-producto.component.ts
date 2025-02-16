import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CargaProductoService } from '../carga-producto.service';
import { IProducto } from '../i-producto/i-producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-producto',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Detalles del Producto</h2>
    @if (producto) {
      <div>
        <h3>{{ producto.descripcion }}</h3>
        <img [src]="producto.imagenUrl" alt="{{ producto.descripcion }}" width="200">
        <p>Precio: {{ producto.precio | currency:'EUR' }}</p>
        <p>Disponibilidad: {{ producto.disponibilidad | date }}</p>
        <p>Puntuación: {{ producto.puntuacion }}</p>
      </div>
    } @else {
      <p>Cargando detalles del producto...</p>
    }
  `,
})
export class DetallesProductoComponent implements OnInit {
  producto: IProducto | undefined;

  constructor(
    private route: ActivatedRoute,
    private cargaProductoService: CargaProductoService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id']; // El '+' convierte el string a número
      this.cargaProductoService.getProductos().subscribe({
        next: productos => {
          this.producto = productos.find(p => p.id === productId);
        },
        error: error => console.log(error)
      });
    });
  }
}
