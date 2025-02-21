import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductoService } from '../producto.service';
import { IProducto } from '../i-producto/i-producto';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-editar-detalles-producto',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, RouterModule],
    templateUrl: './editar-detalles-producto.component.html',
    styleUrls: ['./editar-detalles-producto.component.scss']
})

export class EditarDetallesProductoComponent implements OnInit, OnDestroy {
    productoForm = new FormGroup({
        descripcion: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(500)]),
        precio: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]+(\.[0-9]{1,2})?$")]),
        disponibilidad: new FormControl(new Date(), [Validators.required]),
        puntuacion: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(5)]),
        imagen: new FormControl(null)
    });

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
                    this.productoForm.patchValue({
                        descripcion: producto.descripcion,
                        precio: producto.precio,
                        disponibilidad: producto.disponibilidad,
                        puntuacion: producto.puntuacion
                    });
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
        const file = event.target.files[0];
        if (file) {
            this.productoForm.get('imagen')?.setValue(file);
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.imagenCargada = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    }

    guardarCambios(): void {
        if (this.productoForm.valid && this.producto) {
            const updatedProducto: IProducto = {
                ...this.producto,
                descripcion: this.productoForm.value.descripcion || '',
                precio: this.productoForm.value.precio || 0,
                disponibilidad: this.productoForm.value.disponibilidad || new Date(),
                puntuacion: this.productoForm.value.puntuacion || 0,
                imagenUrl: this.imagenCargada || ''
            };
    
            this.productoService.updateProducto(updatedProducto).subscribe(
                productoActualizado => {
                    console.log('Producto actualizado correctamente:', productoActualizado);
                    // Navega a los detalles del producto actualizado
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
