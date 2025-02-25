import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IProducto } from '../i-producto/i-producto';
import { ProductoService } from '../producto.service';
import { Subscription, switchMap, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-detalles-producto',  // Selector del componente
  standalone: true, // Define el componente como independiente
  imports: [CommonModule, RouterModule], // Módulos importados
  templateUrl: './detalles-producto.component.html'  // Ruta a la plantilla HTML
})
export class DetallesProductoComponent implements OnInit, OnDestroy {
  producto: IProducto | undefined;  // Producto a mostrar
  private subscription: Subscription | undefined;  // Suscripción para gestionar la asincronía

  constructor(
    private route: ActivatedRoute, // Inyecta el servicio ActivatedRoute para acceder a los parámetros de la ruta
    private router: Router,  // Inyecta el servicio Router para la navegación
    private productoService: ProductoService // Inyecta el servicio ProductoService para obtener datos de productos
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');  // Obtiene el ID del producto desde la URL

    // Verificar si id es un número válido
    if (!id || isNaN(Number(id))) {
      this.router.navigate(['/productos']); // Redirige a la página de productos si el ID no es válido
      return;
    }

    const productoId = Number(id); // Convierte el ID a número

    this.subscription = this.productoService.getProductoById(productoId) // Obtiene el producto por ID
      .pipe(
        catchError(() => {
          // Redirigir si el producto no se encuentra
          this.router.navigate(['/productos']); // Redirige a la página de productos si hay un error
          return of(undefined); // Devolver un observable que emite undefined
        })
      )
      .subscribe(
        producto => {
          if (producto) {
            this.producto = producto; // Asigna el producto si se encuentra
          } else {
            // Redirigir si el producto es undefined (no encontrado)
            this.router.navigate(['/productos']); // Redirige si el producto es undefined
          }
        }
      );
  }

  ngOnDestroy(): void {
    // Desuscribirse para evitar pérdidas de memoria
    if (this.subscription) {
      this.subscription.unsubscribe(); // Cancela la suscripción al destruir el componente
    }
  }
}
