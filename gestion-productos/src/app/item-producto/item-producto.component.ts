import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IProducto } from '../i-producto/i-producto';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'item-producto, [item-producto]', // Selector del componente como elemento y atributo
  standalone: true, // Define el componente como independiente
  imports: [CommonModule, RouterLink, RouterModule], // Módulos importados
  templateUrl: './item-producto.component.html', // Ruta a la plantilla HTML
  styleUrls: ['./item-producto.component.scss'] // Ruta a los estilos SCSS
})
export class ItemProductoComponent implements OnChanges {
  @Input() producto: IProducto | undefined; // Recibe la información del producto desde el componente padre
  @Input() mostrarImagenes: boolean = true; // Recibe la indicación de mostrar o no las imágenes
  @Output() estrellasCambiadas = new EventEmitter<number>(); // Emite un evento cuando cambian las estrellas
  imagenUrl: string | undefined = ''; // URL de la imagen del producto

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['producto'] && this.producto) { // Si hay cambios en la propiedad producto y el producto existe
      this.imagenUrl = this.producto.imagenUrl; // Actualiza la URL de la imagen
    }
  }

  onEstrellaClick(nuevaPuntuacion: number): void {
    this.estrellasCambiadas.emit(nuevaPuntuacion); // Emite la nueva puntuación al componente padre
  }
}
