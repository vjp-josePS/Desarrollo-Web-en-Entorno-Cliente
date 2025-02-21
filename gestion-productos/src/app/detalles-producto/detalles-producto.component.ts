import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { IProducto } from '../i-producto/i-producto';
import { ProductoService } from '../producto.service';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-detalles-producto',
  standalone: true,
  imports: [CommonModule, RouterModule], // Agrega RouterModule a los imports
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.scss']
})
export class DetallesProductoComponent implements OnInit, OnDestroy {
  producto: IProducto | undefined;
  private subscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private productoService: ProductoService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID del producto:', id);
    this.subscription = this.productoService.getProductos().pipe(
      switchMap(() => this.productoService.getProductoById(id))
    ).subscribe(
      producto => {
        this.producto = producto;
        console.log('Producto obtenido:', this.producto);
      },
      error => console.error('Error al obtener el producto:', error)
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
