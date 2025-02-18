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
        this.productos = this.productoService.getProductos();
    }

    cambioEstrellas(producto: IProducto, nuevaPuntuacion: number): void {
        // Clonar el producto para evitar la modificación directa
        const productoActualizado = { ...producto, puntuacion: nuevaPuntuacion };
        // Encontrar el índice del producto a actualizar
        const index = this.productos.findIndex(p => p.id === producto.id);
        // Si el producto se encuentra, actualizarlo
        if (index !== -1) {
            this.productos[index] = productoActualizado;
        } else {
            console.warn(`Producto con ID ${producto.id} no encontrado`);
        }
    }

    toggleImagenes(): void {
        this.mostrarImagenes = !this.mostrarImagenes;
    }
}
