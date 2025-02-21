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
    minDate: string;
    selectedFile: File | null = null;
    imagenCargada: string | null = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productoService: ProductoService
    ) {
        this.minDate = new Date().toISOString().split('T')[0];
    }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.subscription = this.productoService.getProductoById(id).subscribe(
            producto => {
                this.producto = producto;
                if (producto) {
                    this.imagenCargada = producto.imagenUrl;
                }
            },
            error => console.error('Error al obtener el producto:', error)
        );
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    onFileSelected(event: any): void {
        this.selectedFile = event.target.files[0] as File;
        this.uploadImage();
    }

    uploadImage(): void {
        if (this.selectedFile) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.imagenCargada = e.target.result;
            }
            reader.readAsDataURL(this.selectedFile);
        }
    }

    guardarCambios(): void {
        if (this.producto) {
            if (this.selectedFile) {
                this.producto.imagenUrl = this.imagenCargada || '';
            }

            this.productoService.updateProducto(this.producto).subscribe(
                productoActualizado => {
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
