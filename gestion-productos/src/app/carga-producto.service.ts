import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducto } from './i-producto/i-producto';
import { Observable, of } from 'rxjs';
import { tap, map, catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargaProductoService {
  private URLproductos = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(this.URLproductos).pipe(
      retry(3),
      catchError((resp: HttpErrorResponse) => of([
        {
          id: 0,
          descripcion: 'Producto-Prueba',
          disponibilidad: new Date('2000-01-01T00:00:00.000Z'),
          precio: 100,
          imagenUrl: 'assets/ssd.jpg',
          puntuacion: 2
        }
      ])),
      tap(listaProductos => console.log(listaProductos)),
      map(listaProductos => listaProductos.filter(p => p.puntuacion < 5))
    );
  }

  guardarProducto(prod: IProducto): Observable<IProducto> {
    return this.http.put<IProducto>(this.URLproductos + '/' + prod.id, prod);
  }
}