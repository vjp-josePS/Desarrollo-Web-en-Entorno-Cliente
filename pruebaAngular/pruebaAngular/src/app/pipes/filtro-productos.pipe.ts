import { Pipe, PipeTransform } from '@angular/core';
import { IProducto } from '../interfaces/i-producto';

@Pipe({
  name: 'filtroProductos',
  standalone: true
})
export class FiltroProductosPipe implements PipeTransform {
  transform(arrayProductos: IProducto[], filtro: string): IProducto[] {
    return arrayProductos.filter(producto => 
      producto.descripcion.toLocaleUpperCase().includes(filtro.toLocaleUpperCase())
    );
  }
}
