import { Injectable } from '@angular/core';
import { IProducto } from './i-producto/i-producto';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {
    private productosSubject = new BehaviorSubject<IProducto[]>([]);
    public productos$ = this.productosSubject.asObservable();
    private URLproductos = 'http://localhost:3000/productos';

    constructor(private http: HttpClient) {
        this.cargarProductos();
    }

    private cargarProductos() {
        this.http.get<IProducto[]>(this.URLproductos).pipe(
            map(productos => productos.map(p => ({ ...p, id: Number(p.id) }))),
            tap(productos => console.log('Productos cargados:', productos))
        ).subscribe(
            (productos) => {
                this.productosSubject.next(productos);
            },
            error => console.error('Error al cargar productos:', error)
        );
    }

    actualizarPuntuacion(id: number, nuevaPuntuacion: number): Observable<IProducto> {
        const url = `${this.URLproductos}/${id}`;
        return this.http.patch<IProducto>(url, { puntuacion: nuevaPuntuacion }).pipe(
            tap(() => {
                const productos = this.productosSubject.value;
                const productoIndex = productos.findIndex(p => p.id === id);
                if (productoIndex !== -1) {
                    productos[productoIndex].puntuacion = nuevaPuntuacion;
                    this.productosSubject.next([...productos]);
                }
            })
        );
    }

    getProductos(): Observable<IProducto[]> {
        return this.productos$;
    }

    getProductoById(id: number): Observable<IProducto | undefined> {
        return this.productos$.pipe(
            map(productos => productos.find(producto => producto.id === id))
        );
    }

    updateProducto(producto: IProducto): Observable<IProducto> {
        const url = `${this.URLproductos}/${producto.id}`;
        return this.http.put<IProducto>(url, producto).pipe(
          tap(updatedProducto => {
            const productos = this.productosSubject.value;
            const index = productos.findIndex(p => p.id === updatedProducto.id);
            if (index !== -1) {
              productos[index] = updatedProducto;
              this.productosSubject.next([...productos]);
            }
            console.log('Producto actualizado:', updatedProducto);
          })
        );
      }
      
}
