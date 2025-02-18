import { Injectable } from '@angular/core';
import { IProducto } from './i-producto/i-producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: IProducto[] = [
    { id: 1, descripcion: 'Disco Duro SSD', precio: 75, disponibilidad: new Date(), puntuacion: 3, imagenUrl: '../assets/img/disco_duro.jpg' },
    { id: 2, descripcion: 'Placa Base ASUS x470', precio: 120, disponibilidad: new Date(), puntuacion: 3, imagenUrl: '../assets/img/placa_base.jpg' },
    
  ];

  constructor() { }

  getProductos(): IProducto[] {
    return this.productos;
  }
}
