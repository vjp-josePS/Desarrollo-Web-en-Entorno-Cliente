import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IProducto } from '../i-producto/i-producto';
import { ProductoService } from '../producto.service';
import { Subscription, switchMap, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-detalles-producto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.scss']
})
export class DetallesProductoComponent implements OnInit, OnDestroy {
  producto: IProducto | undefined;
  private subscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // Verificar si id es un número válido
    if (!id || isNaN(Number(id))) {
      this.router.navigate(['/productos']);
      return;
    }

    const productoId = Number(id);

    this.subscription = this.productoService.getProductoById(productoId)
      .pipe(
        catchError(() => {
          // Redirigir si el producto no se encuentra
          this.router.navigate(['/productos']);
          return of(undefined); // Devolver un observable que emite undefined
        })
      )
      .subscribe(
        producto => {
          if (producto) {
            this.producto = producto;
          } else {
            // Redirigir si el producto es undefined (no encontrado)
            this.router.navigate(['/productos']);
          }
        }
      );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
