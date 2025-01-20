import { Pipe, PipeTransform } from '@angular/core';
import { IProducto } from '../interface/i-producto';

@Pipe({
  name: 'filtroProductos'
})
export class FiltroProductosPipe implements PipeTransform {

  transform(arrayProductos: IProducto[], filtroParametro: string): IProducto[] {
    return arrayProductos.filter(
      producto =>
        producto.descripcion.toLowerCase().includes(filtroParametro.toLowerCase())
    );
  }

}

