import { Component } from '@angular/core';

@Component({
  selector: 'ListaProductosComponent',
  imports: [],
  templateUrl: './ListaProductosComponent.html',
  styleUrl: './ListaProductosComponent.scss'
})
export class ListaProductosComponent {
  titulo = 'Lista de productos';
  cabecera = {
    descripcion: 'productos',
    precio: 'precio',
    disponibilidad: 'disponibilidad'
  }
}
