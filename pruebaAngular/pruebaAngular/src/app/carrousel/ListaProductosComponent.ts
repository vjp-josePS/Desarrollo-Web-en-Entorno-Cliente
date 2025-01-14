import { Component } from '@angular/core';
import { IProducto } from '../interface/i-producto';

@Component({
  selector: 'ListaProductosComponent',
  imports: [],
  templateUrl: './ListaProductosComponent.html',
  styleUrl: './ListaProductosComponent.scss'
})
export class ListaProductosComponent {
    botonFlag = true;
  titulo = 'Lista de productos';
  cabecera = {
    imagenUrl: 'imagen',
    descripcion: 'productos',
    precio: 'precio',
    disponibilidad: 'disponibilidad'
  }

  productos: IProducto[] = [
    {
      id: 1,
      descripcion: 'disco duro ssd',
      disponibilidad: new Date('2025-02-02'),
      precio: 75,
      imagenUrl: 'https://static.fnac-static.com/multimedia/Images/ES/NR/e0/0f/15/1380320/1540-1/tsp20170822090055/Disco-duro-D-interno-Sandisk-Plus-2-5-240-GB.jpg',
      puntuacion: 4,
      imagenWidth: '50'
    },
    {
      id: 2,
      descripcion: 'placa base asus x470',
      disponibilidad: new Date('2025-10-02'),
      precio: 75,
      imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl17qCBUPlMdhuJV2UNUQHJoJw2cvnZ_xwkw&s',
      puntuacion: 4,
      imagenWidth: '50'
    }
  ];

  estilosPar = {
    'background-color': 'magenta',
    'color': 'blue'
  };

  estilosImpar ={
    'background-color': 'cyan',
    'color': 'red'
  }

  mostrarPrecio(index:number) {
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
        
    }
  }
}
