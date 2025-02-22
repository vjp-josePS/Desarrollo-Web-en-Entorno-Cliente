import { Pipe, PipeTransform } from '@angular/core';
import { IProducto } from '../i-producto/i-producto';

@Pipe({
  name: 'filtroProductos' // Nombre del pipe
})
export class FiltroProductosPipe implements PipeTransform {

  transform(arrayProductos: IProducto[], filtro: string): IProducto[] {
    // Filtra los productos según la descripción contenga el filtro
    return arrayProductos.filter(producto =>
      producto.descripcion.toLocaleUpperCase().includes(filtro.toLocaleUpperCase())
    );
  }
}
