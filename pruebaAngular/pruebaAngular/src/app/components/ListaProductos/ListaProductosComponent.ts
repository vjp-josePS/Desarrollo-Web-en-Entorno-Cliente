import { Component, OnInit, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducto } from '../../interfaces/i-producto';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { EstrellasPipe } from '../../pipes/estrellas.pipe';
import { FiltroProductosPipe } from '../../pipes/filtro-productos.pipe';
import { ItemProductoComponent } from '../item-producto/item-producto.component';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    EstrellasPipe,
    FiltroProductosPipe,
    ItemProductoComponent
  ],
  templateUrl: './ListaProductosComponent.html',
  styleUrls: ['./ListaProductosComponent.scss']
})
export class ListaProductosComponent implements OnInit {
  filtroBusqueda = signal("");
  botonFlag = signal(true);
  titulo = 'Lista de productos';

  cabecera = {
    imagenUrl: 'imagen',
    descripcion: 'productos',
    precio: 'precio',
    disponibilidad: 'disponibilidad',
    puntuacion: 'puntuacion'
  };

  productos = signal<IProducto[]>([]);

  productosFiltrados = computed(() => 
    this.productos().filter(producto =>
      producto.descripcion.toLowerCase().includes(this.filtroBusqueda().toLowerCase())
    )
  );

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.productos.set(data.map(producto => ({
          ...producto,
          disponibilidad: new Date(producto.disponibilidad)
        })));
      },
      error: (error) => {
        console.error('Error al cargar los productos:', error);
      }
    });
  }

  estilosPar = {
    'background-color': 'magenta',
    'color': 'blue'
  };

  estilosImpar = {
    'background-color': 'cyan',
    'color': 'red'
  };

  mostrarPrecio(index: number) {
    alert(this.productos()[index].precio);
  }

  clasesBoton = {
    'btn-primary': true,
    'btn-danger': false,
  };

  clasesBotonFalse = {
    'btn-primary': false,
    'btn-danger': true,
  };

  toggleImagenes() {
    this.botonFlag.update(v => !v);
  }

  onSearch(evento: any) {
    this.filtroBusqueda.set(evento.target.value);
  }

  onProductoClicked(productoId: number) {
    console.log('Producto clickeado:', productoId);
  }
}