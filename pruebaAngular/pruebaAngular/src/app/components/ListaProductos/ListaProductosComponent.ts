import { Component, OnInit , OnChanges, SimpleChanges} from '@angular/core';
import { IProducto } from '../../interfaces/i-producto';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon'
import { FiltroProductosPipe } from '../../pipes/filtro-productos.pipe';
import { EstrellasPipe } from '../../pipes/estrellas.pipe';
import { ItemProductoComponent } from '../item-producto/item-producto.component';
@Component({
  selector: 'Listaproductos',
  imports: [FormsModule, CurrencyPipe, DatePipe, MatIcon, FiltroProductosPipe, EstrellasPipe, ItemProductoComponent],
  templateUrl: './ListaProductosComponent.html',
  styleUrl: './ListaProductosComponent.scss'
})

export class ListaProductosComponent implements OnInit, OnChanges{
  filtroBusqueda='';
  btnFlag=true;
  titulo = 'Lista de productos';
  cabeceras ={
    descripcion: "Productos",
    precio: "Precio",
    disponibilidad: "Disponibilidad",
    imagen:"Imagen",
    puntuacion:'Puntuacion'
  };
  productos: IProducto[] = [
    {
      id: 1,
      descripcion: "Disco duro SSD",
      disponibilidad: new Date('2025-02-15'),
      precio: 75,
      imagenUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRnuuAk7JXeRBN76B-1X4RQly-fwkzhCmNdg&s",
      puntuacion:2,
      imageWidth: "70",
    },
    {
      id: 2,
      descripcion: "Placa base ASUS x470",
      disponibilidad: new Date('2025-12-15'),
      precio: 135,
      imagenUrl:"https://dlcdnwebimgs.asus.com/gain/E679596F-6E65-4AEF-B2EF-260309417536/w260",
      puntuacion:3,
      imageWidth: "70",
    }
  ];

  // productosFiltrados: IProducto[] = this.productos;
  // Sustituido por PIPE
  // filtrarProductos(event: Event): void {
  //   const filtroBusqueda = (event.target as HTMLInputElement).value.toLowerCase();
  //   this.productosFiltrados = this.productos.filter(producto =>
  //     producto.descripcion.toLowerCase().includes(filtroBusqueda)
  //   );
  // }

  estilosPar= {
    'background-color': 'magenta',
    'color': 'blue',
  };
  estilosImpar= {
    'background-color': 'pink',
    'color': 'red',
  };

  mostrarPrecio(index: number) {
    alert(this.productos[index].precio)
  }

  clasesPrimary={
    "btn-primary":true,
    "btn-danger":false,
  }
  clasesDanger={
    "btn-primary":false,
    "btn-danger":true,
  }
 
  togleImagenes(){
    if(this.btnFlag){
      this.btnFlag=false;
    } else{
      this.btnFlag=true;
    }
  }
  siCambiaFiltro(event:any){
    this.filtroBusqueda = event.target.value;
  }
  ngOnInit(): void{
    console.log('Hola, me acabo de despertar 2');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('cambian cosas');
  }
}
