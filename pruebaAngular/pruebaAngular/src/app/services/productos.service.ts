import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from '../interfaces/i-producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productosUrl = '../../../assets/productos.json';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(this.productosUrl);
  }
}
