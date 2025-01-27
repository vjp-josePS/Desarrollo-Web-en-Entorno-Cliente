import { Pipe, PipeTransform } from '@angular/core';
import { IProducto } from '../interface/i-producto';

@Pipe({
  name: 'filtroProductos'
})
export class FiltroProductosPipe implements PipeTransform {

  transform(arrayProductos: IProducto[], filtro: string): IProducto[] {
    return arrayProductos.filter(producto=>{
      return producto.descripcion.toLowerCase().includes(filtro.toLowerCase());
    });
  }

}
