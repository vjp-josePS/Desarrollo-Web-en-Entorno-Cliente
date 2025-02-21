import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltroProductosPipe } from '../pipes/filtro-productos.pipe';
import { ItemProductoComponent } from '../item-producto/item-producto.component';
import { IProducto } from '../i-producto/i-producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemProductoComponent, FiltroProductosPipe],
  templateUrl: './lista-productos.component.html',
})
export class ListaProductosComponent implements OnInit {
  productos: IProducto[] = [];
  mostrarImagenes: boolean = true;
  filtro: string = '';
  mensajeError: string = '';

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe({
      next: (listaProductos: IProducto[]) => {
        this.productos = listaProductos;
      },
      error: (err: any) => {
        console.log(err);
        this.mensajeError = 'Error al cargar los productos.';
      },
      complete: () => {
        console.log('Fin de observable');
      }
    });
  }

  cambioEstrellas(producto: IProducto, nuevaPuntuacion: number): void {
    this.productoService.actualizarPuntuacion(producto.id, nuevaPuntuacion).subscribe(
      (productoActualizado: IProducto) => {
        console.log('Producto actualizado:', productoActualizado);
        const index = this.productos.findIndex(p => p.id === productoActualizado.id);
        if (index !== -1) {
          this.productos[index] = productoActualizado;
        }
      },
      (error: any) => console.error('Error al actualizar la puntuación:', error)
    );
  }

  toggleImagenes(): void {
    this.mostrarImagenes = !this.mostrarImagenes;
  }
}
