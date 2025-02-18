import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IProducto } from './i-producto/i-producto';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargaProductoService {

  private URLproductos = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(this.URLproductos).pipe(
      retry(3), // Intenta la petición hasta 3 veces
      catchError(this.manejarError), // Captura errores
      tap(data => console.log('Todos: ' + JSON.stringify(data))),
    );
  }

  private manejarError(err: HttpErrorResponse): Observable<any> {
    // En una aplicación real, podemos enviar el error a alguna infraestructura de registro remota
    console.error(err); // log to console instead

    //Devolvemos un observable con mensaje de error amigable
    return of([]);
  }
}
