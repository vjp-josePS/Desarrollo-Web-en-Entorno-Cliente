import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductoService } from '../producto.service';
import { IProducto } from '../i-producto/i-producto';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-editar-detalles-producto',  // Selector del componente
    standalone: true, // Define el componente como independiente
    imports: [ReactiveFormsModule, CommonModule, RouterModule], // Módulos importados
    templateUrl: './editar-detalles-producto.component.html'  // Ruta a la plantilla HTML
})
export class EditarDetallesProductoComponent implements OnInit, OnDestroy {
    productoForm = new FormGroup({ // Define el formulario reactivo con validaciones
        descripcion: new FormControl('', [ // Control para la descripción
            Validators.required, // Validación requerida
            Validators.minLength(3),  // Mínimo 3 caracteres
            Validators.maxLength(500) // Máximo 500 caracteres
        ]),
        precio: new FormControl(0, [  // Control para el precio
            Validators.required, // Validación requerida
            Validators.pattern("^[0-9]+(.[0-9]{1,2})?$") // Patrón para números con decimales
        ]),
        disponibilidad: new FormControl(new Date(), [Validators.required]), // Control para la disponibilidad
        puntuacion: new FormControl(1, [ // Control para la puntuación
            Validators.required,  // Validación requerida
            Validators.min(1), // Mínimo 1
            Validators.max(5)  // Máximo 5
        ]),
        imagen: new FormControl(null) // Control para la imagen
    });

    producto: IProducto | undefined; // Producto a editar
    private subscription: Subscription | undefined; // Suscripción para gestionar la asincronía
    minDate: string; // Fecha mínima para la disponibilidad
    selectedFile: File | null = null;  // Archivo de imagen seleccionado
    imagenCargada: string | null = null; // URL de la imagen cargada

    constructor(
        private route: ActivatedRoute, // Inyecta el servicio ActivatedRoute para acceder a los parámetros de la ruta
        private router: Router,  // Inyecta el servicio Router para la navegación
        private productoService: ProductoService  // Inyecta el servicio ProductoService para obtener datos de productos
    ) {
        this.minDate = new Date().toISOString().split('T')[0]; // Inicializa la fecha mínima con la fecha actual
    }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id')); // Obtiene el ID del producto desde la URL
        this.subscription = this.productoService.getProductoById(id).subscribe( // Obtiene el producto por ID
            producto => {
                this.producto = producto; // Asigna el producto
                if (producto) {
                    this.imagenCargada = producto.imagenUrl; // Carga la URL de la imagen
                    this.productoForm.patchValue({ // Asigna los valores del producto al formulario
                        descripcion: producto.descripcion, // Asigna la descripción
                        precio: producto.precio, // Asigna el precio
                        disponibilidad: producto.disponibilidad, // Asigna la disponibilidad
                        puntuacion: producto.puntuacion  // Asigna la puntuación
                    });
                }
            },
            error => console.error('Error al obtener el producto:', error)  // Muestra un error si no se puede obtener el producto
        );
    }

    ngOnDestroy(): void {
        // Desuscribirse para evitar pérdidas de memoria
        if (this.subscription) {
            this.subscription.unsubscribe(); // Cancela la suscripción al destruir el componente
        }
    }

    onFileSelected(event: any): void {
        const file = event.target.files[0]; // Obtiene el archivo seleccionado
        if (file) {
            this.productoForm.get('imagen')?.setValue(file); // Asigna el archivo al control de imagen
            const reader = new FileReader(); // Crea un FileReader para leer el archivo
            reader.onload = (e: any) => {
                this.imagenCargada = e.target.result;  // Carga la URL de la imagen
            }
            reader.readAsDataURL(file);  // Lee el archivo como una URL de datos
        }
    }

    guardarCambios(): void {
        if (this.productoForm.valid && this.producto) { // Verifica si el formulario es válido y el producto existe
            const updatedProducto: IProducto = { // Crea un objeto con los datos actualizados
                ...this.producto, // Copia las propiedades existentes del producto
                descripcion: this.productoForm.value.descripcion || '',  // Asigna la nueva descripción
                precio: this.productoForm.value.precio || 0,  // Asigna el nuevo precio
                disponibilidad: this.productoForm.value.disponibilidad || new Date(), // Asigna la nueva disponibilidad
                puntuacion: this.productoForm.value.puntuacion || 0,  // Asigna la nueva puntuación
                imagenUrl: this.imagenCargada || '' // Asigna la nueva URL de la imagen
            };
    
            this.productoService.updateProducto(updatedProducto).subscribe( // Llama al servicio para actualizar el producto
                productoActualizado => {
                    console.log('Producto actualizado correctamente:', productoActualizado); // Muestra un mensaje de éxito
                    this.router.navigate(['/productos', productoActualizado.id]); // Redirige a los detalles del producto
                },
                (error: any) => console.error('Error al actualizar el producto:', error)  // Muestra un error si no se puede actualizar el producto
            );
        }
    }

    cancelarEdicion(): void {
        if (this.producto) { // Verifica si el producto existe
            this.router.navigate(['/productos', this.producto.id]); // Redirige a los detalles del producto
        }
    }
}
