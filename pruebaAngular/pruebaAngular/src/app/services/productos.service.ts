import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProducto } from '../interfaces/i-producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private http = inject(HttpClient);

  getProductos(): Observable<IProducto[]> {
    return this.http.get<{productos: IProducto[]}>('../../assets/productos.json')
      .pipe(
        map(response => response.productos)
      );
  }
}
