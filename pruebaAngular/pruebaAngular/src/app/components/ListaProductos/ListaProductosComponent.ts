import { Component } from '@angular/core';
import { IProducto } from '../../interfaces/i-producto';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { EstrellasPipe } from '../../pipes/estrellas.pipe';

@Component({
  selector: 'ListaProductosComponent',
  imports: [CurrencyPipe, DatePipe, MatIcon, EstrellasPipe],
  templateUrl: './ListaProductosComponent.html',
  styleUrl: './ListaProductosComponent.scss',
  standalone: true
})
export class ListaProductosComponent {
  
  filtroBusqueda = "";
  botonFlag = true;
  titulo = 'Lista de productos';

  cabecera = {
    imagenUrl: 'imagen',
    descripcion: 'productos',
    precio: 'precio',
    disponibilidad: 'disponibilidad',
    puntuacion: 'puntuacion'
  }

  productos: IProducto[] = [
    
  ];

  estilosPar = {
    'background-color': 'magenta',
    'color': 'blue'
  };

  estilosImpar ={
    'background-color': 'cyan',
    'color': 'red'
  }

  mostrarPrecio(index: number) {
    alert(this.productos[index].precio)
  }

  clasesBoton = {
    'btn-primary': true,
    'btn-danger': false,
  }

  clasesBotonFalse ={
'btn-primary': false,
    'btn-danger': true,
  }

  toggleImagenes(){
    if(this.botonFlag){
      this.botonFlag=false;
    } else{
      this.botonFlag=true;
    }

  }

  onSearch(evento: any){
      this.filtroBusqueda = evento.target.value;
  }
  get productosFiltrados(): IProducto[]{
      return this.productos.filter(producto =>
        producto.descripcion.includes(this.filtroBusqueda)
      );
  }
}
