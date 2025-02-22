import { Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { EditarDetallesProductoComponent } from './editar-detalles-producto/editar-detalles-producto.component';

export const routes: Routes = [
  { path: 'bienvenida', component: BienvenidaComponent }, // Ruta para el componente de bienvenida
  { path: 'productos', component: ListaProductosComponent }, // Ruta para la lista de productos
  { path: 'productos/:id', component: DetallesProductoComponent }, // Ruta para los detalles de un producto
  { path: 'productos/editar/:id', component: EditarDetallesProductoComponent }, // Ruta para editar un producto
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full' },  // Redirige la ruta raíz a la bienvenida
  { path: '**', redirectTo: '/bienvenida', pathMatch: 'full' }  // Redirige cualquier ruta no encontrada a la bienvenida
];
