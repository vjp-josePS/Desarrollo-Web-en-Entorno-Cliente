import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductoService } from '../producto.service';
import { IProducto } from '../i-producto/i-producto';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-editar-detalles-producto',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './editar-detalles-producto.component.html',
  styleUrls: ['./editar-detalles-producto.component.scss']
})

export class EditarDetallesProductoComponent implements OnInit, OnDestroy {
  producto: IProducto | undefined;
  private subscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.subscription = this.productoService.getProductoById(id).subscribe(
      producto => {
        this.producto = producto;
      },
      error => console.error('Error al obtener el producto:', error)
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  guardarCambios(): void {
    if (this.producto) {
      this.productoService.updateProducto(this.producto).subscribe(
        (productoActualizado: IProducto) => {
          console.log('Producto actualizado correctamente:', productoActualizado);
          this.router.navigate(['/productos', productoActualizado.id]);
        },
        (error: any) => console.error('Error al actualizar el producto:', error)
      );
    }
  }

  cancelarEdicion(): void {
    if (this.producto) {
      this.router.navigate(['/productos', this.producto.id]);
    }
  }
}

