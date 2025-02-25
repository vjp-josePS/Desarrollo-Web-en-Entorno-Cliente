import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltroProductosPipe } from '../pipes/filtro-productos.pipe';
import { ItemProductoComponent } from '../item-producto/item-producto.component';
import { IProducto } from '../i-producto/i-producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-lista-productos',  // Selector del componente
  standalone: true,  // Define el componente como independiente
  imports: [CommonModule, FormsModule, ItemProductoComponent, FiltroProductosPipe], // Módulos importados
  templateUrl: './lista-productos.component.html',  // Ruta a la plantilla HTML
})
export class ListaProductosComponent implements OnInit {
  productos: IProducto[] = []; // Lista de productos
  mostrarImagenes: boolean = true;  // Indica si se deben mostrar las imágenes
  filtro: string = ''; // Término de búsqueda para filtrar productos
  mensajeError: string = '';  // Mensaje de error en caso de fallo

  constructor(private productoService: ProductoService) { } // Inyecta el servicio ProductoService

  ngOnInit(): void {
    // Cargar productos al inicializar el componente
    this.productoService.getProductos().subscribe({
      next: (listaProductos: IProducto[]) => { // Maneja la respuesta exitosa
        this.productos = listaProductos;  // Asigna la lista de productos
      },
      error: (err: any) => { // Maneja el error
        console.log(err);
        this.mensajeError = 'Error al cargar los productos.';
      },
      complete: () => {  // Maneja la finalización
        console.log('Fin de observable');
      }
    });
  }

  // Manejar cambio de puntuación
  cambioEstrellas(producto: IProducto, nuevaPuntuacion: number): void {
    this.productoService.actualizarPuntuacion(producto.id, nuevaPuntuacion).subscribe(
      (productoActualizado: IProducto) => { // Maneja la respuesta exitosa
        console.log('Producto actualizado:', productoActualizado);
        const index = this.productos.findIndex(p => p.id === productoActualizado.id);  // Encuentra el índice del producto actualizado
        if (index !== -1) {
          this.productos[index] = productoActualizado;  // Actualiza el producto en la lista
        }
      },
      (error: any) => console.error('Error al actualizar la puntuación:', error)  // Maneja el error
    );
  }

  // Alternar visualización de imágenes
  toggleImagenes(): void {
    this.mostrarImagenes = !this.mostrarImagenes; // Invierte el valor de mostrarImagenes
  }
}
